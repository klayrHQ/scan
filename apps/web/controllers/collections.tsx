
export const getCollectionsFromAPI = async (collectionIds: Array<number>) => {
  const response = await fetch(`/api/collections/list`)
  const data = await response.json()
  console.log(data)
  return data.filter((collection: any) => collectionIds.indexOf(collection.id) > -1)
}
