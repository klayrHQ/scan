import React from "react";
import { notFound } from "next/navigation";
import { Slicer } from "../../../components/slicer";
import { sanityClient } from "../../../lib/sanity.client";
import { makeTable } from "../../../lib/sanity.table";
import { getQueries } from "../../../lib/sanity.queries";

export const revalidate = 60;

export const getSlices = async (uri: string) => {
  const page =
    await sanityClient.fetch(`*[_type=="pages" && slug.current == "${uri}"]{
    ...,
    queries[]->{
      ...,
      key, 
      call,
      params[]{key, value},
      serviceType,
      subQueries[]->{type,foreignKey,primaryKey,call,serviceType}
    },
    sections[]->{
      ...,
      columns[]->{
        ...,
        table->{   
          ...,
          columns[]->,
          title, 
          key,
        },
        columns[]->{
          ...,
          table->{
            ...,
            columns[]->,
            title, 
            key,
          },
        }
      },
      table->{
        ...,
        columns[]->,
        title, 
        key,
      }
    }
  }[0]`);
  if (!page) {
    notFound();
  }
  const queryResponses = await getQueries({ queries: page.queries });

  return {
    sections: await Promise.all(
      page?.sections?.map(async (section: any) => {
        if (section.table) {
          const rows = await getTableRows(queryResponses, section.table);
          return { ...section, data: { rows } };
        }
        if (section.columns) {
          for (const column in section.columns) {
            if (section.columns[column]._type === "tableSlice") {
              const rows = getTableRows(
                queryResponses,
                section.columns[column].table
              );
              section.columns[column].data = { rows };
            }
            if (section.columns[column].columns) {
              for (const subColumn in section.columns[column].columns) {
                if (
                  section.columns[column].columns[subColumn]._type ===
                  "tableSlice"
                ) {
                  const rows = getTableRows(
                    queryResponses,
                    section.columns[column].columns[subColumn].table
                  );
                  section.columns[column].columns[subColumn].data = { rows };
                }
              }
            }
          }
        }
        return section;
      })
    ),
    queryData: queryResponses,
    page,
  };
};

const getTableRows = (
  queryResponses: Record<string, any>,
  table: any
) => {
  const tableRows = makeTable({
    data: queryResponses,
    key: table.key,
    cols: table.columns,
  });
  return tableRows.rows;
};

export default async function Web({ params }: any) {
  const sections = await getSlices(params.uri);
  return (
      <Slicer
        slices={sections.sections}
        queryData={sections.queryData}
        queries={sections.page.queries}
      />
  );
}
