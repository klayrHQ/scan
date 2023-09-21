import {Avatar} from "ui/atoms/avatar/avatar";
import {Grid, ValueFormatter} from "ui";
import React from "react";

export const AvatarAddress = ({value} : {value: {address: string, name?: string}}) => {
  return (
    <Grid
      columns={2}
      flex
      mobileColumns={2}
      className={"space-x-2 items-center"}
    >
      {value?.address && <Avatar size={20} address={value.address} />}
      <Grid columns={1} mobileColumns={1}>
        {
          value?.name ?
            <ValueFormatter
              copy
              link={{href: `/account/${value.address}`}}
              format={"plain"}
              type={"string"}
              typography={[{key: "color", value: "primary"}, {key: "link", value: "true"}]}
              value={value.name}
            />
            :
            <ValueFormatter
              copy
              link={{href: `/account/${value.address}`}}
              format={"plain"}
              type={"string"}
              typography={[{key: "color", value: "primary"}, {key: "link", value: "true"}]}
              value={value.address}
            />
        }
      </Grid>
    </Grid>
  )
}