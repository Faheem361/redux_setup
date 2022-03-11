export const contractAddress = "0xa972645F14e5F01D1aE1D05798a06B9069202623";
export const contractAbi = [{
        inputs: [{
                internalType: "contract ITRC20",
                name: "_flafeltoken",
                type: "address",
            },
            {
                internalType: "contract IPancakePair",
                name: "_FlafeltoBnbLp",
                type: "address",
            },
            {
                internalType: "contract IPancakePair",
                name: "bnbtoBusd",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "From",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "day",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "Deposite_",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [],
        name: "FlafelToken",
        outputs: [{
            internalType: "contract ITRC20",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "LpToken",
        outputs: [{
            internalType: "contract IPancakePair",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Token2",
        outputs: [{
            internalType: "contract IPancakePair",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "TokenIn1LP",
        outputs: [{
            internalType: "uint256",
            name: "TokenIn1LP",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "TotalLpstaked",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "UnstakeLp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "_add",
            type: "address",
        }, ],
        name: "UserInformation",
        outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        name: "Users",
        outputs: [{
                internalType: "uint256",
                name: "DepositeToken",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "lastUpdated",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "lockableDays",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "WithdrawReward",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "WithdrawAbleReward",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "depositeTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "WithdrawDepositeAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "WithdrawAble_LPAmount",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        name: "allocation",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "bnbtobusd",
        outputs: [{
                internalType: "uint256",
                name: "BNBperBUSD",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "BUSDperBNB",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "bnbtoflafel",
        outputs: [{
            internalType: "uint256",
            name: "PerLP",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "depositeToken",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "depositetime",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "Amount",
            type: "uint256",
        }, ],
        name: "emergencyWithdrawBNB",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "WORTHWHILEAmount",
            type: "uint256",
        }, ],
        name: "emergencyWithdrawFlafel",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "WORTHWHILEAmount",
            type: "uint256",
        }, ],
        name: "emergencyWithdrawLP",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_lockableDays",
                type: "uint256",
            },
        ],
        name: "farm",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256[]",
            name: "_index",
            type: "uint256[]",
        }, ],
        name: "harvest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "lockabledays",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "lpsAmount",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "_add",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "z",
                type: "uint256",
            },
        ],
        name: "pendindRewards",
        outputs: [{
            internalType: "uint256",
            name: "reward",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardssss",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupplyOfLpToken",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address",
        }, ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
export const tokenAddress = "0x8163032911298107A2032f4b06E3E76De74dd6d3";
export const tokenAbi = [{
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
        ],
        name: "Burn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
        ],
        name: "Mint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0In",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1In",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
        ],
        name: "Swap",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: false,
                internalType: "uint112",
                name: "reserve0",
                type: "uint112",
            },
            {
                indexed: false,
                internalType: "uint112",
                name: "reserve1",
                type: "uint112",
            },
        ],
        name: "Sync",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        constant: true,
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [{
            internalType: "bytes32",
            name: "",
            type: "bytes32"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "MINIMUM_LIQUIDITY",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "PERMIT_TYPEHASH",
        outputs: [{
            internalType: "bytes32",
            name: "",
            type: "bytes32"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "allowance",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
        ],
        name: "approve",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{
            internalType: "address",
            name: "to",
            type: "address"
        }],
        name: "burn",
        outputs: [{
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "factory",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getReserves",
        outputs: [{
                internalType: "uint112",
                name: "_reserve0",
                type: "uint112"
            },
            {
                internalType: "uint112",
                name: "_reserve1",
                type: "uint112"
            },
            {
                internalType: "uint32",
                name: "_blockTimestampLast",
                type: "uint32"
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{
                internalType: "address",
                name: "_token0",
                type: "address"
            },
            {
                internalType: "address",
                name: "_token1",
                type: "address"
            },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "kLast",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{
            internalType: "address",
            name: "to",
            type: "address"
        }],
        name: "mint",
        outputs: [{
            internalType: "uint256",
            name: "liquidity",
            type: "uint256"
        }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        name: "nonces",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            },
        ],
        name: "permit",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "price0CumulativeLast",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "price1CumulativeLast",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{
            internalType: "address",
            name: "to",
            type: "address"
        }],
        name: "skim",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [{
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            },
        ],
        name: "swap",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "sync",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "token0",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "token1",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
        ],
        name: "transfer",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
        ],
        name: "transferFrom",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
export const flafelTokenAdd = "0x6e653888eD5e756840982BBA98D82Dd5EEf5D31B";
export const flafeltokenAbi = [{
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DonationAddress",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
        ],
        name: "allowance",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "approve",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8"
        }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            },
        ],
        name: "decreaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "tAmount",
            type: "uint256"
        }],
        name: "deliver",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "excludeAccountRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "excludeFromFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "includeAccountRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "includeInFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            },
        ],
        name: "increaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "isDonation",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "isExcludedFromFee",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "isExcludedFromRewards",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "uint256",
                name: "tAmount",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "deductTransferFee",
                type: "bool"
            },
        ],
        name: "reflectionFromToken",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "setAsDonationAccount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "burnFee",
            type: "uint256"
        }],
        name: "setBurnFeePercent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "DonationFee",
            type: "uint256"
        }],
        name: "setDonationFeePercent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "maxTxPercent",
            type: "uint256"
        }, ],
        name: "setMaxTxPercent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "taxFee",
            type: "uint256"
        }],
        name: "setTaxFeePercent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "rAmount",
            type: "uint256"
        }],
        name: "tokenFromReflection",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalBurn",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalDonation",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalFees",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "transfer",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "transferFrom",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];