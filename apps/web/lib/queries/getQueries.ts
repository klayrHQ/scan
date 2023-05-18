import { sanityClient } from "../sanity.client";

export const getQueries = async (): Promise<any> => {
  const result = await sanityClient.fetch(`*[_type == "query"]{
  key, call,
    params[]{key, value},
  serviceType,
    subQueries[]->{type,foreignKey,primaryKey,call,serviceType}
}`);
  const parsedQueries = [];
  for (const query of result) {
    let params: Record<string, any> = {};
    query.params.map(({ key, value }: { key: string; value: string }) => {
      params[key] = value;
    });
    parsedQueries.push({ ...query, params });
  }
  return parsedQueries;
};
