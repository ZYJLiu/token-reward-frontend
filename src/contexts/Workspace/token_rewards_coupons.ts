export type TokenRewardsCoupons = {
    version: "0.1.0"
    name: "token_rewards_coupons"
    instructions: [
        {
            name: "createMerchant"
            accounts: [
                {
                    name: "merchant"
                    isMut: true
                    isSigner: false
                },
                {
                    name: "user"
                    isMut: true
                    isSigner: true
                },
                {
                    name: "systemProgram"
                    isMut: false
                    isSigner: false
                },
                {
                    name: "rent"
                    isMut: false
                    isSigner: false
                }
            ]
            args: [
                {
                    name: "name"
                    type: "string"
                }
            ]
        },
        {
            name: "createPromo"
            accounts: [
                {
                    name: "merchant"
                    isMut: true
                    isSigner: false
                },
                {
                    name: "promo"
                    isMut: true
                    isSigner: false
                },
                {
                    name: "promoMint"
                    isMut: true
                    isSigner: false
                },
                {
                    name: "user"
                    isMut: true
                    isSigner: true
                },
                {
                    name: "systemProgram"
                    isMut: false
                    isSigner: false
                },
                {
                    name: "rent"
                    isMut: false
                    isSigner: false
                },
                {
                    name: "tokenProgram"
                    isMut: false
                    isSigner: false
                },
                {
                    name: "metadata"
                    isMut: true
                    isSigner: false
                },
                {
                    name: "tokenMetadataProgram"
                    isMut: false
                    isSigner: false
                }
            ]
            args: [
                {
                    name: "uri"
                    type: "string"
                },
                {
                    name: "name"
                    type: "string"
                },
                {
                    name: "symbol"
                    type: "string"
                }
            ]
        },
        {
            name: "mintNft"
            accounts: [
                {
                    name: "promo"
                    isMut: false
                    isSigner: false
                },
                {
                    name: "promoMint"
                    isMut: true
                    isSigner: false
                },
                {
                    name: "tokenProgram"
                    isMut: false
                    isSigner: false
                },
                {
                    name: "customerNft"
                    isMut: true
                    isSigner: false
                },
                {
                    name: "user"
                    isMut: true
                    isSigner: true
                }
            ]
            args: []
        }
    ]
    accounts: [
        {
            name: "merchant"
            type: {
                kind: "struct"
                fields: [
                    {
                        name: "user"
                        type: "publicKey"
                    },
                    {
                        name: "name"
                        type: "string"
                    },
                    {
                        name: "promoCount"
                        type: "u64"
                    }
                ]
            }
        },
        {
            name: "promo"
            type: {
                kind: "struct"
                fields: [
                    {
                        name: "user"
                        type: "publicKey"
                    },
                    {
                        name: "mint"
                        type: "publicKey"
                    },
                    {
                        name: "bump"
                        type: "u8"
                    }
                ]
            }
        }
    ]
}

export const IDL: TokenRewardsCoupons = {
    version: "0.1.0",
    name: "token_rewards_coupons",
    instructions: [
        {
            name: "createMerchant",
            accounts: [
                {
                    name: "merchant",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "user",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "rent",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "name",
                    type: "string",
                },
            ],
        },
        {
            name: "createPromo",
            accounts: [
                {
                    name: "merchant",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "promo",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "promoMint",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "user",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "rent",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "metadata",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "uri",
                    type: "string",
                },
                {
                    name: "name",
                    type: "string",
                },
                {
                    name: "symbol",
                    type: "string",
                },
            ],
        },
        {
            name: "mintNft",
            accounts: [
                {
                    name: "promo",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "promoMint",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "customerNft",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "user",
                    isMut: true,
                    isSigner: true,
                },
            ],
            args: [],
        },
    ],
    accounts: [
        {
            name: "merchant",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "user",
                        type: "publicKey",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "promoCount",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "promo",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "user",
                        type: "publicKey",
                    },
                    {
                        name: "mint",
                        type: "publicKey",
                    },
                    {
                        name: "bump",
                        type: "u8",
                    },
                ],
            },
        },
    ],
}
