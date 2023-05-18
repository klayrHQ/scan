
export const getCollectionsFromAPI = async (collectionIds: Array<number>) => {
  const response = await fetch(`http://localhost:3000/api/collections/list`)
  const data = await response.json()
  console.log(data)
  return data.filter((collection: any) => collectionIds.indexOf(collection.id) > -1)
}
