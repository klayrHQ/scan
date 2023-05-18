import { defineType } from "sanity";

export const LastBlockKPIS = [
  { title: "lastBlock.height", value: "lastBlock.height" },
  { title: "lastBlock.id", value: "lastBlock.id" },
  { title: "lastBlock.isFinal", value: "lastBlock.isFinal" },
  {
    title: "lastBlock.maxHeightGenerated",
    value: "lastBlock.maxHeightGenerated",
  },
  {
    title: "lastBlock.maxHeightPrevoted",
    value: "lastBlock.maxHeightPrevoted",
  },
  { title: "lastBlock.networkFee", value: "lastBlock.networkFee" },
  { title: "lastBlock.numberOfAssets", value: "lastBlock.numberOfAssets" },
  { title: "lastBlock.numberOfEvents", value: "lastBlock.numberOfEvents" },
  {
    title: "lastBlock.numberOfTransactions",
    value: "lastBlock.numberOfTransactions",
  },
  { title: "lastBlock.previousBlockID", value: "lastBlock.previousBlockID" },
  { title: "lastBlock.reward", value: "lastBlock.reward" },
  { title: "lastBlock.timestamp", value: "lastBlock.timestamp" },
  { title: "lastBlock.totalBurnt", value: "lastBlock.totalBurnt" },
  { title: "lastBlock.totalForged", value: "lastBlock.totalForged" },
  { title: "lastBlock.transactionRoot", value: "lastBlock.transactionRoot" },
  { title: "lastBlock.validatorsHash", value: "lastBlock.validatorsHash" },
  { title: "lastBlock.version", value: "lastBlock.version" },
  { title: "lastBlock.stateRoot", value: "lastBlock.stateRoot" },
  { title: "lastBlock.signature", value: "lastBlock.signature" },
  {
    title: "lastBlock.generator.address",
    value: "lastBlock.generator.address",
  },
  { title: "lastBlock.generator.name", value: "lastBlock.generator.name" },
  {
    title: "lastBlock.generator.publicKey",
    value: "lastBlock.generator.publicKey",
  },
  {
    title: "lastBlock.aggregateCommit.height",
    value: "lastBlock.aggregateCommit.height",
  },
  {
    title: "lastBlock.aggregateCommit.aggregationBits",
    value: "lastBlock.aggregateCommit.aggregationBits",
  },
  {
    title: "lastBlock.aggregateCommit.certificateSignature",
    value: "lastBlock.aggregateCommit.certificateSignature",
  },
];
export const AppKPIS = [
  { title: "app.chainID", value: "app.chainID" },
  { title: "app.chainName", value: "app.chainName" },
  { title: "app.description", value: "app.description" },
  { title: "app.genesisURL", value: "app.genesisURL" },
  { title: "app.isDefault", value: "app.isDefault" },
  { title: "app.logo.png", value: "app.logo.png" },
  { title: "app.logo.svg", value: "app.logo.svg" },
  { title: "app.networkType", value: "app.networkType" },
  { title: "app.projectPage", value: "app.projectPage" },
  { title: "app.serviceURLs", value: "app.serviceURLs" },
  { title: "app.status", value: "app.status" },
  { title: "app.title", value: "app.title" },
];
export const StatusKPIS = [
  { title: "status.data.chainID", value: "status.data.chainID" },
  { title: "status.data.finalizedHeight", value: "status.data.finalizedHeight" },
  { title: "status.data.genesis.bftBatchSize", value: "status.data.genesis.bftBatchSize" },
  { title: "status.data.genesis.blockTime", value: "status.data.genesis.blockTime" },
  { title: "status.data.genesis.chainID", value: "status.data.genesis.chainID" },
  { title: "status.data.genesis.maxTransactionsSize", value: "status.data.genesis.maxTransactionsSize" },
  { title: "status.data.height", value: "status.data.height" },
  { title: "status.data.lastBlockID", value: "status.data.lastBlockID" },
  { title: "status.data.network.port", value: "status.data.network.port" },
  { title: "status.data.network.version", value: "status.data.network.version" },
  { title: "status.data.syncing", value: "status.data.syncing" },
  { title: "status.data.unconfirmedTransactions", value: "status.data.unconfirmedTransactions" },
  { title: "status.data.version", value: "status.data.version" },
  { title: "status.meta.lastBlockHeight", value: "status.meta.lastBlockHeight" },
  { title: "status.meta.lastBlockID", value: "status.meta.lastBlockID" },
  { title: "status.meta.lastUpdate", value: "status.meta.lastUpdate" },
]
export const DefaultKPIS = [...AppKPIS, ...StatusKPIS, ...LastBlockKPIS];
export default defineType({
  name: "infobar",
  type: "object",
  title: "Infobar",
  fields: [
    {
      name: "kpis",
      type: "array",
      title: "Info bar KPIs",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "label", title: "Label" },
            {
              type: "string",
              name: "key",
              title: "Data key",
              options: {
                list: DefaultKPIS,
              },
            },
            {
              type: "string",
              name: "backup",
              title: "Backup data key",
              options: {
                list: [...AppKPIS, ...StatusKPIS],
              },
            },
          ],
        },
      ],
    },
  ],
});
