"use client"
import {createContext, ReactNode, SetStateAction, useContext, useEffect, useState} from "react"
import { AccountDataType, useLiskService, Envelope } from "@moosty/lisk-service-provider"
import { calculateTotalBalance } from "ui/assets/utils";

export interface favouriteDataType {
  address: string
  balance?: string
  username?: string
}

export interface FavouritesContextProps {
  favourites: Array<favouriteDataType>
  saveFavourite: (address: string, balance: string, username?: string) => void
  setFavourites: React.Dispatch<SetStateAction<favouriteDataType[]>>
  unFavourite: (address: string) => void
  updateFavourites: () => void
  isInFavourites: (address: string) => void
}

interface AccountEnvelope extends Omit<Envelope, "data"> {
  data?: AccountDataType[]
}

export const FavouritesContext = createContext<FavouritesContextProps>({} as FavouritesContextProps)

export const useSaveFavourites = () => useContext(FavouritesContext)
export const FavouritesProvider = ({ children }: {children: ReactNode}) => {
  const [favourites, setFavourites] = useState<Array<favouriteDataType>>([])
  const { serviceClient } = useLiskService()

  const isInFavourites = (address: string) => favourites.findIndex(favourite => favourite.address === address) > -1

  useEffect(() => {
    const local = typeof window !== "undefined" && localStorage.getItem("favouriteAccounts")
    setFavourites(local ? JSON.parse(local) : [])
  }, [])

  const updateFavourites = () => {
    const updateFavourite = async (address: string) => {
      const { data } = (await serviceClient?.get("get.accounts", { limit: 1, address: address })) as AccountEnvelope

      if (data) {
        setFavourites(prevFavourites => {
          if (prevFavourites) {
            const favouriteIndex = prevFavourites?.findIndex(fav => fav.address === address)
            const totalBalance = BigInt(calculateTotalBalance(data[0]))

            if (favouriteIndex > -1) {
              prevFavourites[favouriteIndex].balance = totalBalance.toString()
            }
          }
          return prevFavourites
        })
      }
    }

    if (favourites) {
      favourites.map(({ address }) => updateFavourite(address))
    }
  }

  useEffect(() => {
    updateFavourites()
  }, [serviceClient])

  //add favourite to favourites array
  const saveFavourite = (address: string, balance: string, username?: string) => {
    const favourite = { address, username, balance }
    const favouriteLimit = 10
    setFavourites((previousFavourites) => {
      if (previousFavourites) {
        if (previousFavourites.findIndex(i => i.address === favourite.address) !== -1) {
          return [favourite, ...previousFavourites.filter((s) => s.address !== favourite.address)]
        }
        if (previousFavourites.length >= favouriteLimit) {
          return [favourite, ...previousFavourites.slice(0, favouriteLimit - 1)]
        }
        return [favourite, ...previousFavourites]
      }
      return [favourite]
    })
  }

  const unFavourite = (address: string) => {
    setFavourites((previousFavourites) => previousFavourites?.filter((f) => f.address !== address))
  }

  //save favourites array to localStorage
  useEffect(() => {
    localStorage.setItem("favouriteAccounts", JSON.stringify(favourites))
  }, [favourites])

  return (
    <FavouritesContext.Provider
      value={{ favourites, saveFavourite, setFavourites, unFavourite, updateFavourites, isInFavourites }}>
      {children}
    </FavouritesContext.Provider>
  )
}
