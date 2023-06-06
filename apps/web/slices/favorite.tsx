import {StarIcon} from "@heroicons/react/24/solid";
import {StarIcon as StarIconOutline} from "@heroicons/react/24/outline";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
import {useSaveFavourites} from "../providers/favourites";
import {SlicerProps} from "../components/slicer";

export const FavoriteSlice = ({queryData}: SlicerProps) => {
  const {isInFavourites, saveFavourite, unFavourite} = useSaveFavourites()
  const path = usePathname();
  const [uri, id] = path?.split("/").slice(1) || [undefined, undefined];
  const handleClick = async () => {
    if (isInFavourites(id!)) {
      unFavourite(id!)
    }
    else {
      saveFavourite(id!, queryData["account-id-balances"].data[0].availableBalance, queryData["account-auth"].meta?.name)
    }
  }
  useEffect(() => console.log(uri, id, "props"), [uri, id])
  if (isInFavourites(id!)) {
    return (
      <StarIcon className={"w-6 h-6"} onClick={() => handleClick()}/>
    )
  }
  return <StarIconOutline className={"w-6 h-6"} onClick={() => handleClick()}/>
};
