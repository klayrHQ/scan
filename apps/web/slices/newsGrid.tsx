"use client"
import {cls, Grid, Typography, ValueFormatter} from "ui";
import {ConsoleLogTester} from "../components/consoleLogTester";
import {sanityFetch} from "../components/sanity/fetch";
import {useEffect, useState} from "react";
import Link from "next/link";
import {dayjs} from "ui/utils/time";

type NewsItemType = {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  category: {
    _ref: string
  }
  imgType: "url" | "upload"
  img?: {url: string, title: string, alt: string} | any
  imgObj?: {url: string, title: string, alt: string} | any
  url: string
}

type NewsItemRefType = {
  _key: string
  _ref: string
  _type: string
}

type NewsCategoryType = {
  _createdAt: string
  _id: string
  title: string
}

//Todo img upload verwerken + condition toevoegen voor imgType: url = imgObj gebruiken, upload = img gebruiken
export const NewsGrid = ({
  newsItems,
}: {
  newsItems: NewsItemRefType[]
}) => {
  const [allItems, setAllItems] = useState<NewsItemType[]>([])
  const [categories, setCategories] = useState<NewsCategoryType[]>()

  useEffect(() => {
    const getFetchedItems = async () => {
      const fetchedItems = await sanityFetch(`*[_type == "news"]`)
      //console.log(fetchedItems)
      setAllItems(fetchedItems)
      const fetchedCategories = await sanityFetch(`*[_type == "newsCategories"]`)
      //console.log(fetchedCategories)
      setCategories(fetchedCategories)
    }

    if(newsItems) getFetchedItems()
  }, [newsItems])

  const parsedItems: Array<NewsItemType | undefined> = newsItems.map((newsItem) => {
    return allItems?.find((item: { _id: string; }) => newsItem._ref === item._id)
  })

  return (
    <div
      className={cls([
        "gap-4 md:gap-8 w-full",
        `sm:grid-cols-${newsItems?.length || 4}`,
        "flex flex-col sm:grid"
      ])}
    >
      {
        parsedItems.map((item, index) => {

          const date = dayjs(item?._createdAt);
          let dateString;

          if (dayjs().diff(date, "hour") >= 24) {
            dateString = date.format("DD MMM 'YY HH:mm");
          } else {
            if(date.fromNow() !== "undefined ago") {
              dateString = date.fromNow();
            } else {
              // Fallback: Calculate time difference manually
              const hoursDiff = dayjs().diff(date, "hour");
              dateString = `${hoursDiff} ${hoursDiff === 1 ? 'hour' : 'hours'} ago`;
            }
          }

          const category = categories?.filter(({_id,}) => _id === item?.category?._ref)[0]?.title

          return (
            <Link key={`newsItem-${index + 1}`} href={item?.url || ""} prefetch={false}>
              <div className={"gap-2 grid grid-cols-4 sm:flex sm:flex-col"}>
                <div className={"sm:w-auto aspect-video h-full w-full max-w-full sm:h-auto overflow-hidden rounded"}>
                  <img className={"object-cover max-w-full max-h-full rounded object-top"} src={item?.imgObj.url || ""}
                       alt={item?.imgObj.alt} title={item?.imgObj.title} height={200} width={800}/>
                </div>
                <Grid className={"col-span-3 sm:w-full mx-2 py-2 md:py-1"} columns={1} flex gap={0}>
                  <Typography className={""} color={"onPrimary"} tag={"span"}>{category}</Typography>
                  <Typography bold color={"primary"} tag={"span"}>{item?.title}</Typography>
                  <Typography size={"subBody"} bold color={"onSurfaceMedium"} tag={"span"}>{dateString}</Typography>
                  {/*<ConsoleLogTester data={item?.category} />*/}
                  {/*<ValueFormatter  value={item ? new Date(item?._createdAt) : ""} type={"string"} format={"fromNow"} />*/}
                </Grid>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}
