"use client"
import {createContext, useContext, useEffect, useState} from "react"

export interface recentSearchesDataType {
  address:string
  username?:string
}

export interface RecentSearchesContextProps {
  recentSearches: Array<recentSearchesDataType> | undefined
  saveSearch: Function
  setRecentSearches: (recentSearches: recentSearchesDataType[] | undefined) => void
}

export const RecentSearchesContext = createContext<RecentSearchesContextProps>({} as RecentSearchesContextProps)

export const useSaveSearch = () => useContext(RecentSearchesContext)
export const RecentSearchesProvider = ({children}: {children: any}) => {
  const [recentSearches, setRecentSearches] = useState<Array<recentSearchesDataType> | undefined>()

  const getRecentSearches = () => {
    // @ts-ignore
    let recentSearchesStorage:[recentSearchesDataType] | undefined = typeof window !== "undefined" ?  JSON.parse(localStorage.getItem("lastSearches")) : undefined

    setRecentSearches(recentSearchesStorage)
  }

  useEffect(getRecentSearches, [])

  //add last search to recentSearches
  const saveSearch = (address:string, username?:string) => {
    const lastSearch = username ? {address: address, username: username} : {address: address}
    const recentSearchLimit = 3

    if(recentSearches) {
      if (recentSearches.findIndex(i => i.address === lastSearch.address) !== -1) {
        const newRecentSearches = recentSearches.filter((s) => s.address !== lastSearch.address)
        setRecentSearches([lastSearch, ...newRecentSearches])
      } else if (recentSearches.length >= recentSearchLimit) {
        const newRecentSearches = recentSearches.filter((s, index) => index < recentSearchLimit - 1)
        setRecentSearches([lastSearch, ...newRecentSearches])
      } else {
        setRecentSearches([lastSearch, ...recentSearches])
      }
    } else {
      setRecentSearches([lastSearch])
    }
  }

  //save recent searches to localStorage
  useEffect(() => {
    recentSearches && localStorage.setItem('lastSearches', JSON.stringify(recentSearches))
  }, [recentSearches])

  return (
    <RecentSearchesContext.Provider value={{recentSearches, saveSearch, setRecentSearches}}>
      {children}
    </RecentSearchesContext.Provider>
  )
}