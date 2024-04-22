"use client"
import {Grid, Typography, ValueFormatter} from "ui";
import {Divider} from "ui/atoms/divider/divider";
import {useService} from "../../providers/service";
import {useEffect} from "react";

export const Generators = ({generators}: {generators: {data?: any[]}}) => {
  const { cache, queries, setQueries  } = useService();
  useEffect(() => {
    if (setQueries && (!queries || queries.length === 0)) {
      setQueries &&
      setQueries([
        {
          serviceType: "lisk-service",
          params: [
            {
              key: "limit",
              value: "6",
            },
          ],
          updateOn: "lastGenerators",
          key: "generators",
          call: "get.generators",
        },
      ]);
    }
  }, []);


  return <div className={"flex-col flex gap-4 bg-surface-1 py-4 rounded shadow-xl"}>
    <Grid className={"w-app mx-auto"} flex>
      <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
        {"Next Generators"}
      </Typography>
    </Grid>
    <Divider color={"background"} width={"full"}/>
    <Grid
      className={"w-app mx-auto"}
      columns={2}
      mobileColumns={3}
      gap={8}
    >
      {
        (cache?.generators?.data || generators?.data?.slice(0, 6))?.map((generator: any) => (
          <ValueFormatter
            key={generator?.address}
            value={{address: generator?.address, name: generator?.name}}
            format={"avatarAddress"}
            link={{href: `/account/${generator?.address}`}}
          />
        ))
      }
    </Grid>
  </div>
}
