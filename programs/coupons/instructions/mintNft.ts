/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category MintNft
 * @category generated
 */
export const mintNftStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'MintNftInstructionArgs'
)
/**
 * Accounts required by the _mintNft_ instruction
 *
 * @property [] promo
 * @property [_writable_] promoMint
 * @property [_writable_] customerNft
 * @property [_writable_, **signer**] user
 * @category Instructions
 * @category MintNft
 * @category generated
 */
export type MintNftInstructionAccounts = {
  promo: web3.PublicKey
  promoMint: web3.PublicKey
  tokenProgram?: web3.PublicKey
  customerNft: web3.PublicKey
  user: web3.PublicKey
}

export const mintNftInstructionDiscriminator = [
  211, 57, 6, 167, 15, 219, 35, 251,
]

/**
 * Creates a _MintNft_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category MintNft
 * @category generated
 */
export function createMintNftInstruction(
  accounts: MintNftInstructionAccounts,
  programId = new web3.PublicKey('37kdkULv7NwBh9QSgv5SYSU3MQSZQwj5BXCUeMys16tF')
) {
  const [data] = mintNftStruct.serialize({
    instructionDiscriminator: mintNftInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.promo,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.promoMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.customerNft,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.user,
      isWritable: true,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
