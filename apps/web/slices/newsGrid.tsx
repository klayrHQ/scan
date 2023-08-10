"use client"
import {Grid, Typography, ValueFormatter} from "ui";
import {ConsoleLogTester} from "../components/consoleLogTester";
import {sanityFetch} from "../components/sanity/fetch";
import {useEffect, useState} from "react";
import Link from "next/link";

type NewsItemType = {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  category: {
    title: string
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

//Todo categories fetchen en aan items toevoegen
//Todo img upload verwerken + condition toevoegen voor imgType: url = imgObj gebruiken, upload = img gebruiken
//Todo date verwerken naar "x uur/dagen/maanden geleden"
//Todo tablet responsive fixen
export const NewsGrid = ({
  newsItems,
}: {
  newsItems: NewsItemRefType[]
}) => {
  const [allItems, setAllItems] = useState<NewsItemType[]>([])

  useEffect(() => {
    const getFetchedItems = async () => {
      const fetchedItems = await sanityFetch(`*[_type == "news"]`)
      console.log(fetchedItems)
      setAllItems(fetchedItems)
    }

    if(newsItems) getFetchedItems()
  }, [newsItems])


  const parsedItems: Array<NewsItemType | undefined> = newsItems.map((newsItem) => {
    return allItems?.find((item: { _id: string; }) => newsItem._ref === item._id)
  })

  return (
    <Grid
      className={"gap-4 lg:gap-8"}
      columns={newsItems?.length || 4}
    >
      {
        parsedItems.map((item, index) => {
          const date = ""

          return (
            <Link key={`newsItem-${index + 1}`} href={item?.url || ""}>
              <Grid className={"gap-2"} columns={1} flex gap={2} mobileColumns={2}>
                <div className={"w-1/4 lg:w-full aspect-video"}>
                  <img className={"max-w-full max-h-full aspect-video rounded"} src={item?.imgObj.url || ""}
                       alt={item?.imgObj.alt} title={item?.imgObj.title} height={400} width={800}/>
                </div>
                <Grid className={"mx-2 py-2 lg:py-1"} columns={1} flex gap={0}>
                  {/* Category moet nog apart gefetcht worden vvv */}
                  <Typography color={"primary"} tag={"span"}>{item?.category.title}</Typography>
                  <Typography color={"onPrimary"} tag={"span"}>{item?.title}</Typography>
                  <ValueFormatter value={item ? new Date(item?._createdAt) : ""} type={"string"} format={"fromNow"} />
                </Grid>
              </Grid>
            </Link>
          )
        })
      }
    </Grid>
  )
}