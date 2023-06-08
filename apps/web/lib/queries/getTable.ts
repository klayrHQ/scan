import { sanityClient } from "../sanity.client";
import { ColumnComponents, ColumnTypes } from "../../components/data";
import { ShowOnCell } from "../../components/data/table/cell";

export const processTable = (result: any) => {
  // const queries = [];
  // for (const query of result.queries) {
  //   let params: Record<string, any> = {};
  //   query.params.map(({ key, value }: { key: string; value: string }) => {
  //     params[key] = value;
  //   });
  //   queries.push({ ...query, params });
  // }
  const keys: { keys: string[] }[] = [];
  const columns = result.columns.map(
    (column: {
      component: ColumnTypes;
      valueComponent: ColumnTypes;
      headValues: string[];
      valueKeys: string[];
      showOn: ShowOnCell;
      className: string;
    }) => {
      keys.push({ keys: column.valueKeys });
      return {
        Component: ColumnComponents[column.component],
        ValueComponent: ColumnComponents[column.valueComponent],
        values: column.headValues,
        showOn: column.showOn,
        className: column.className,
      };
    }
  );
  return { ...result, columns, keys };
};

export const getTable = async ({ slug }: { slug: string }): Promise<any> => {
  const result =
    await sanityClient.fetch(`*[_type == "tables" && slug.current == "${slug}"]{
  queries[]->{
    key, 
    call,
    params[]{key, value},
    serviceType,
    subQueries[]->{type,foreignKey,primaryKey,call,serviceType}
  },
  columns[]->,
  title,
  key,
}[0]`);
  return processTable(result);
  // const queries = [];
  // for (const query of result.queries) {
  //   let params: Record<string, any> = {};
  //   query.params.map(({ key, value }: { key: string; value: string }) => {
  //     params[key] = value;
  //   });
  //   queries.push({ ...query, params });
  // }
  // const keys: {keys: string[]}[] = [];
  // const columns = result.columns.map(
  //   (column: {
  //     component: ColumnTypes;
  //     valueComponent: ColumnTypes;
  //     headValues: string[];
  //     valueKeys: string[];
  //     showOn: ShowOnCell;
  //   }) => {
  //     keys.push({ keys: column.valueKeys });
  //     return {
  //       Component: ColumnComponents[column.component],
  //       ValueComponent: ColumnComponents[column.valueComponent],
  //       values: column.headValues,
  //       showOn: column.showOn,
  //     };
  //   }
  // );
  // return { ...result, queries, columns, keys };
};
