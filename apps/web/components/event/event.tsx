import {Container, Grid, KeyValueRow, Typography, ValueFormatter} from "ui";
import {TitleBoxSlice} from "../../slices/titleBox";
import {ConsoleLogTester} from "../consoleLogTester";
import Link from "next/link";
import {AvatarAddress} from "./avatarAddress";

export interface EventType {
  id: string
  module: string
  name: string
  data: {
    address?: string
    userName?: string
    senderAddress?: string
    senderUserName?: string
    recipientAddress?: string
    recipientUserName?: string
    generatorAddress?: string
    generatorUserName?: string
    validatorAddress?: string
    validatorUserName?: string
    name?: string
    module?: string
    chainID?: string
    chainName?: string
    tokenID?: string
    tokenName?: string
    amount?: string
    burntAmount?: string
    generatorAmount?: string
    initializationFee?: string
    result?: number
    success?: boolean
    generatorKey?: string
    blsKey?: string
    oldCommission?: number
    newCommission?: number
    lastCertificate?: {timestamp: number}
    ccm?: {
      module: string
      crossChainCommand: string
      nonce: string
      fee: string
      sendingChainID: string
      sendingChainName?: string
      receivingChainID: string
      receivingChainName?: string
      params: string
      status: number
    }
  }
  topics: string[]
  index: number
  block: {
    id: string
    height: number
    timestamp: number
  }
}

export const Event = ({event,}: {event: EventType}) => {

  return (
    <Container section>
      <TitleBoxSlice
        description={{
          type: "literal",
          value: event?.id
        }}
        title={{
          format: {
            // @ts-ignore
            typography: [
              {
                value: "Heading3",
                key: "size"
              }
            ],
            tag: "h2"
          },
          type: "literal",
          value: `${event?.module}:${event?.name}`
        }}
      />
      {
        event ?
        <Grid className={"max-w-app w-app mx-auto gap-4"} flex gap={4} columns={1}>
          <KeyValueRow
            col
            color={"onSurfaceHigh"}
            label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Block ID"}</Typography>}
            value={
              <ValueFormatter
                copy
                format={"plain"}
                link={{href: `/block/${event.block.id}`}}
                type={"string"}
                typography={[{key: "color", value: "primary"}, {key: "link", value: "true"}]}
                value={event.block.id}
              />
            }
            valueSize={"body"}
          />
          <KeyValueRow
            col
            color={"onSurfaceHigh"}
            label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Block height"}</Typography>}
            value={
              <ValueFormatter
                format={"plain"}
                type={"number"}
                value={event.block.height}
              />
            }
            valueSize={"body"}
          />
          {
            event?.topics[0].length >= 64 &&
              <KeyValueRow
                col
                color={"onSurfaceHigh"}
                label={
                  <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                    {"Transaction ID"}
                  </Typography>}
                value={
                  <ValueFormatter
                    copy
                    link={{href: `/transaction/${event?.topics[0]}`}}
                    format={"plain"}
                    type={"string"}
                    typography={[{key: "color", value: "primary"}, {key: "link", value: "true"}]}
                    value={event?.topics[0]}
                  />
                }
                valueSize={"body"}
              />
          }
          <KeyValueRow
            col
            color={"onSurfaceHigh"}
            label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Type"}</Typography>}
            value={`${event?.module}:${event?.name}`}
            valueSize={"body"}
          />
          <KeyValueRow
            col
            color={"onSurfaceHigh"}
            label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Date"}</Typography>}
            value={<ValueFormatter value={event.block.timestamp} format={"date"} type={"timestamp"} />}
            valueSize={"body"}
          />
          {event?.data?.address &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Validator"}</Typography>}
              value={
                <AvatarAddress value={{address: event.data.address, name: event?.data?.userName}} />
              }
              valueSize={"body"}
            />
          }
          {event?.data?.senderAddress &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Sender"}</Typography>}
              value={
                <AvatarAddress value={{address: event.data.senderAddress, name: event?.data?.senderUserName}} />
              }
              valueSize={"body"}
            />
          }
          {event?.data?.recipientAddress &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Recipient"}</Typography>}
              value={
                <AvatarAddress value={{address: event.data.recipientAddress, name: event?.data?.recipientUserName}} />
              }
              valueSize={"body"}
            />
          }
          {event?.data?.generatorAddress &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Generator"}</Typography>}
              value={
                <AvatarAddress value={{address: event.data.generatorAddress, name: event?.data?.generatorUserName}} />
              }
              valueSize={"body"}
            />
          }
          {event?.data?.validatorAddress &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Validator"}</Typography>}
              value={
                <AvatarAddress value={{address: event.data.validatorAddress, name: event?.data?.generatorUserName}} />
              }
              valueSize={"body"}
            />
          }
          {event?.data?.name &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Username"}</Typography>}
              value={event.data.name}
              valueSize={"body"}
            />
          }
          {event?.data?.chainID &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Chain"}</Typography>}
              value={event.data.chainName || event.data.chainID}
              valueSize={"body"}
            />
          }
          {event?.data?.tokenID &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Token"}</Typography>}
              value={event.data.tokenName || event.data.tokenID}
              valueSize={"body"}
            />
          }
          {event?.data?.amount &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
              <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                {`Amount ${
                  event?.name === "mint" ? "minted" :
                  event?.name === "transfer" ? "transfered" :
                  event?.name === "lock" ? "locked" :
                  event?.name === "unlock" ? "unlocked" :
                  event?.name === "rewardMinted" ? "minted" : 
                  event?.name === "burn" ? "burnt" : 
                  event?.name === "validatorStaked" ? "staked" : 
                  ""
                }`}
              </Typography>}
              value={<ValueFormatter value={event.data.amount} format={"currency"} type={"beddows"} />}
              valueSize={"body"}
            />
          }
          {event?.data?.burntAmount &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
                <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                  {"Burnt amount"}
                </Typography>}
              value={<ValueFormatter value={event.data.burntAmount} format={"currency"} type={"beddows"} />}
              valueSize={"body"}
            />
          }
          {event?.data?.generatorAmount &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
                <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                  {"Generator amount"}
                </Typography>}
              value={<ValueFormatter value={event.data.generatorAmount} format={"currency"} type={"beddows"} />}
              valueSize={"body"}
            />
          }
          {event?.data?.initializationFee &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
                <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                  {"Initialization fee"}
                </Typography>}
              value={<ValueFormatter value={event.data.initializationFee} format={"currency"} type={"beddows"} />}
              valueSize={"body"}
            />
          }
          {event?.data?.oldCommission &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
                <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                  {"Old commission"}
                </Typography>}
              value={<ValueFormatter value={event.data.oldCommission} format={"percentage"} type={"number"} />}
              valueSize={"body"}
            />
          }
          {event?.data?.newCommission &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
                <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                  {"New commission"}
                </Typography>}
              value={<ValueFormatter value={event.data.newCommission} format={"percentage"} type={"number"} />}
              valueSize={"body"}
            />
          }
          {event?.data?.success &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
                <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                  {"Status"}
                </Typography>}
              value={event?.data?.success ? "Success" : "Failed"}
              valueSize={"body"}
            />
          }
          {event?.data?.lastCertificate &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
                <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                  {"Last certificate"}
                </Typography>}
              value={<ValueFormatter value={event.data.lastCertificate.timestamp.toString()} format={"date"} type={"timestamp"} />}
              valueSize={"body"}
            />
          }
          {event?.data?.generatorKey &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
                <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                  {"Generator Key"}
                </Typography>}
              value={event.data.generatorKey}
              valueSize={"body"}
            />
          }
          {event?.data?.blsKey &&
            <KeyValueRow
              col
              color={"onSurfaceHigh"}
              label={
                <Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>
                  {"BLS Key"}
                </Typography>}
              value={event.data.blsKey}
              valueSize={"body"}
            />
          }
          {
            event?.data?.ccm &&
              <Grid className={"gap-4 w-full mx-auto"} flex columns={1}>
                <KeyValueRow
                  col
                  color={"onSurfaceHigh"}
                  label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"CCM Type"}</Typography>}
                  value={`${event.data.ccm.module}:${event.data.ccm.crossChainCommand}`}
                  valueSize={"body"}
                />
                <KeyValueRow
                  col
                  color={"onSurfaceHigh"}
                  label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Sending chain"}</Typography>}
                  value={event.data.ccm.sendingChainName || event.data.ccm.sendingChainID}
                  valueSize={"body"}
                />
                <KeyValueRow
                  col
                  color={"onSurfaceHigh"}
                  label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Receiving chain"}</Typography>}
                  value={event.data.ccm.receivingChainName || event.data.ccm.receivingChainID}
                  valueSize={"body"}
                />
                <KeyValueRow
                  col
                  color={"onSurfaceHigh"}
                  label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Status"}</Typography>}
                  value={event.data.ccm.status === 0 ? "Success" : "Failed"}
                  valueSize={"body"}
                />
                  <KeyValueRow
                    col
                    color={"onSurfaceHigh"}
                    label={<Typography className={"font-semibold"} color={"onSurfaceHigh"} tag={"span"}>{"Fee"}</Typography>}
                    value={<ValueFormatter value={event.data.ccm.fee} format={"currency"} type={"beddows"} />}
                    valueSize={"body"}
                  />
              </Grid>
          }
        </Grid>
        :
        <Grid className={"justify-center items-center"} flex columns={1}>
          {"Event data not found"}
        </Grid>
      }
    </Container>
  )
}