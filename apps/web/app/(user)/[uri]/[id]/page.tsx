import React from "react";
import { notFound } from "next/navigation";
import { Slicer } from "../../../../components/slicer";
import { draftsClient } from "../../../../lib/sanity.client";
import { makeTable } from "../../../../lib/sanity.table";
import { getQueries } from "../../../../lib/sanity.queries";
import { draftMode } from "next/headers";
import { sanitySsrQuery } from "../../../../lib/sanity.groq";
import { client } from "../../../../lib/sanity.service";

export const revalidate = 10;

const getSlices = async (uri: string, id: string, fetch: any) => {
  const page = await fetch(`*[_type=="pages" && slug.current == "${uri}-id"]{
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
        dynamicTabs{
          ...,
          content->{
            ...,
            table->{   
              ...,
              columns[]->,
              title, 
              key,
            },
          },
        },
        staticTabs[]{
          ..., 
          content->{
            ...,
            staticTabs[]{
              ..., 
              content->{
                ...,
                columns[]->{
                  ...,
                  dynamicTabs{
                    ...,
                    content->{
                    ...,
                      table->{   
                        ...,
                        columns[]->,
                        title, 
                        key,
                      },
                    },
                  },
                  staticTabs[]{
                    ..., 
                    content->{
                      ...,
                      table->{   
                        ...,
                        columns[]->,
                        title, 
                        key,
                      },
                    },
                  },
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
                },
              },
            },
            columns[]->{
              ...,
              dynamicTabs{
                ...,
                content->{
                  ...,
                  table->{   
                    ...,
                    columns[]->,
                    title, 
                    key,
                  },
                },
              },
              staticTabs[]{
                ..., 
                content->{
                  ...,
                  table->{   
                    ...,
                    columns[]->,
                    title, 
                    key,
                  },
                },
              },
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
            },
          },
        },
        columns[]->{
          ...,
          dynamicTabs{
            ...,
            content->{
            ...,
              table->{   
                ...,
                columns[]->,
                title, 
                key,
              },
            },
          },
          staticTabs[]{
            ..., 
            content->{
              ...,
              table->{   
                ...,
                columns[]->,
                title, 
                key,
              },
            },
          },
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
  const queryResponses = await getQueries({ queries: page.queries, id });
  return {
    sections: await Promise.all(
      page.sections.map(async (section: any) => {
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

const getTableRows = (queryResponses: Record<string, any>, table: any) => {
  const tableRows = makeTable({
    data: queryResponses,
    key: table.key,
    cols: table.columns,
  });
  return tableRows.rows;
};

export async function generateStaticParams() {
  const transactionTypes = await client.rpc("get.network.status");
  const validators = await client.rpc("get.pos.validators", { limit: 1000 });
  const list: { id: string; uri: string }[] = [];
  if (transactionTypes.status === "success") {
    transactionTypes.data.moduleCommands.map((moduleCommand) =>
      list.push({ uri: "transactions", id: moduleCommand })
    );
  }
  if (validators.status === "success") {
    validators.data.forEach((validator) =>
      list.push({ uri: "account", id: validator.address })
    );
  }
  return list;
}

export default async function Web({ params }: any) {
  const isDraftMode = draftMode().isEnabled;
  const client = isDraftMode ? draftsClient.fetch : sanitySsrQuery;
  const sections = await getSlices(
    params.uri,
    decodeURIComponent(params.id),
    client
  );
  return (
    <Slicer
      slices={sections.sections}
      queryData={sections.queryData}
      queries={sections.page.queries}
    />
  );
}
