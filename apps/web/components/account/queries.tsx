import {ServiceQueries} from "../../lib/sanity.service";

export const getAccountQueries = (id: string) => {
  const accountQueries: ServiceQueries[] = [
    {
      key: "network-status",
      updateOn: "never",
      call: "get.network.status",
      serviceType: "lisk-service",
      params: null,
    },
    {
      updateOn: "never",
      key: "account-id-balances",
      params: [
        {
          key: "address",
          value: id
        }
      ],
      call: "get.token.balances",
      serviceType: "lisk-service",
      subQueries: []
    },
    {
      call: "get.transactions",
      calculations: [
        {
          name: "txType",
          _key: "19b4fb2c7f86",
          calculation: `"%s".split(":").join(" ")`,
          keys: [
            "moduleCommand"
          ],
        },
        {
          _key: "5c9a08198b7d",
          calculation: "%d - %d",
          keys: [
            "network-status.data.height",
            "block.height"
          ],
          name: "confirmations"
        }
      ],
      updateOn: "lastTransactions",
      key: "account-id-transactions",
      serviceType: "lisk-service",
      params: [
        {
          key: "limit",
          value: "25"
        },
        {
          key: "address",
          value: id
        }
      ],
      subQueries: []
    },
    {
      key: "account-auth",
      call: "get.auth",
      serviceType: "lisk-service",
      params: [
        {
          key: "address",
          value: id
        }
      ],
      updateOn: "lastTransactions",
    },
    {
      updateOn: "lastEvents",
      key: "account-events",
      call: "get.events",
      serviceType: "lisk-service",
      calculations: [
        {
          _key: "95a2197a7342",
          calculation: `"%s".split(/(?=[A-Z])/).join(" ")`,
          keys: [
            "name"
          ],
          name: "event"
        },
        {
          calculation: `"%s".split(/(?=[A-Z])/).join(" ")`,
          keys: [
            "module"
          ],
          name: "moduleParsed",
          _key: "fe9bf558f1f3"
        },
      ],
      params: [
        {
          key: "senderAddress",
          value: id
        },
        {
          key: "limit",
          value: "95"
        }
      ],
    },
    {
      call: "get.pos.validators",
      params: [
        {
          key: "address",
          value: id
        }
      ],
      updateOn: "lastBlock",
      serviceType: "lisk-service",
      key: "account-validator-id",
    },
    {
      key: "account-id-blocks",
      call: "get.blocks",
      serviceType: "lisk-service",
      params: [
        {
          key: "generatorAddress",
          value: id
        }
      ],
      updateOn: "lastBlock",
    },
    {
      params: [
        {
          key: "address",
          value: id
        }
      ],
      updateOn: "lastBlock",
      key: "account-rewards-claimable",
      call: "get.pos.rewards.claimable",
      serviceType: "lisk-service",
    },
    {
      params: [
        {
          key: "address",
          value: id
        }
      ],
      call: "get.pos.stakes",
      serviceType: "lisk-service",
      subQueries: [
        {
          type: "forEach",
          foreignKey: "address",
          primaryKey: "address",
          call: "get.pos.validators",
          serviceType: "lisk-service"
        }
      ],
      key: "account-stakes-sent"
    },
    {
      key: "account-unlocks",
      call: "get.pos.unlocks",
      updateOn: "never",
      serviceType: "lisk-service",
      params: [
        {
          key: "address",
          value: id
        }
      ],
    },
    {
      call: "get.pos.stakers",
      serviceType: "lisk-service",
      key: "account-received-stakes",
      params: [
        {
          key: "address",
          value: id
        },
        {
          key: "limit",
          value: "100"
        }
      ],
    }
  ]

  return accountQueries
}
