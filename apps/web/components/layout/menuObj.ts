export const menuObj = [
    {
        label: "Transactions",
        _key: "09bd480e0da6",
        _type: "item",
        link: "/transactions"
    },
    {
        _type: "item",
        link: "/validators/eligible",
        label: "Validators",
        _key: "f440e1d153a0"
    },
    {
        _type: "item",
        link: "/stakes",
        label: "Stakes",
        _key: "9516c5106c44"
    },
    {
        items: [
            {
                _key: "6f3d74579489",
                subLabel: "Browse all blocks",
                _type: "item",
                icon: "CubeIconSolid",
                link: "/blocks",
                disabled: false,
                label: "Blocks"
            },
            {
                link: "/network",
                label: "Network",
                _key: "47d10cb6ecc7",
                subLabel: "Overview of all nodes supporting the Klayr network",
                _type: "item",
                icon: "GlobeAltIconSolid"
            },
            {
                _key: "5fc424ec59aa",
                subLabel: "Overview of the events occurring on the Klayr blockchain",
                _type: "item",
                icon: "ArrowsRightLeftIconSolid",
                link: "/events",
                label: "Events"
            },
            {
                icon: "AdjustmentsVerticalIconSolid",
                link: "/chain-info",
                label: "Chain info",
                _key: "5e422d5fe17c",
                subLabel: "Raw information about the blockchain",
                _type: "item"
            },
            {
                subLabel: "Check what is going on with your account",
                _type: "item",
                icon: "BeakerIconSolid",
                link: "/analyze",
                label: "Account analyzer",
                _key: "c29e270c37f1"
            },
            {
                icon: "ChartBarIconSolid",
                link: "/tokens",
                label: "Tokens",
                _key: "7578b1be3fd8",
                subLabel: "Overview of all tokens in the Klayr network ",
                _type: "item"
            }
        ],
        _type: "item",
        link: "#",
        label: "Blockchain",
        _key: "d2f62f3bb72d"
    },
    {
        _type: "item",
        link: "/apps",
        label: "Apps",
        _key: "d9b8cbd4f527"
    }
]