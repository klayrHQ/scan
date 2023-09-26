import {ServiceQueries} from "../../lib/sanity.service";

export const validatorQueries: ServiceQueries[] = [
  {
    serviceType: "lisk-service",
    params: [
      {
        key: "limit",
        value: "6"
      }
    ],
    updateOn: "lastGenerators",
    key: "generators",
    call: "get.generators",
  },
  {
    key: "validators-active",
    call: "get.pos.validators",
    serviceType: "lisk-service",
    subQueries: [
      {
        type: "singleMatch",
        foreignKey: "address",
        primaryKey: "address",
        call: "get.generators",
        serviceType: "lisk-service",
        params: [
          {
            value: "103",
            key: "limit",
          }
        ]
      }
    ],
    params: [
      {
        key: "status",
        value: "active"
      },
      {
        key: "limit",
        value: "10000"
      }
    ],
    updateOn: "never",
  },
  {
    call: "get.pos.validators",
    serviceType: "lisk-service",
    params: [
      {
        key: "status",
        value: "ineligible"
      },
      {
        key: "limit",
        value: "10000"
      }
    ],
    updateOn: "never",
    key: "validators-ineligible",
  },
  {
    key: "validators-banned",
    serviceType: "lisk-service",
    call: "get.pos.validators",
    params: [
      {
        key: "status",
        value: "banned"
      },
      {
        key: "limit",
        value: "10000"
      }
    ],
    updateOn: "never",
  },
  {
    call: "get.pos.validators",
    params: [
      {
        key: "status",
        value: "punished"
      },
      {
        key: "limit",
        value: "10000"
      }
    ],
    updateOn: "never",
    key: "validators-punished",
    serviceType: "lisk-service",
  },
  {
    call: "get.pos.validators",
    key: "validators-standby",
    serviceType: "lisk-service",
    params: [
      {
        key: "status",
        value: "standby"
      },
      {
        key: "limit",
        value: "10000"
      }
    ],
    updateOn: "never",
  },
  {
    params: [
      {
        key: "limit",
        value: "10000"
      },
      {
        key: "sort",
        value: "validatorWeight:desc"
      }
    ],
    key: "validators",
    call: "get.pos.validators",
    serviceType: "lisk-service",
    subQueries: [
      {
        type: "singleMatch",
        foreignKey: "address",
        primaryKey: "address",
        call: "get.generators",
        serviceType: "lisk-service",
        params: [
          {
            value: "103",
            key: "limit",
          }
        ]
      }
    ],
    updateOn: "lastGenerators"
  }
]
