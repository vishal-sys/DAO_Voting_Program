// Migrations are an early feature. Currently, they're nothing more than this
// single deploy script that's invoked from the CLI, injecting a provider
// configured from the workspace's Anchor.toml.

const anchor = require("@coral-xyz/anchor");

module.exports = async function (provider) {
  // Configure client to use the provider.
  anchor.setProvider(provider);

  // Add your deploy script here.
};
/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/onchain_voting.json`.
 */
export type OnchainVoting = {
  "address": "5bcdWoM23sc4CjEFRVhNefuAihapVqSo6FavRaYRjawx";
  "metadata": {
    "name": "onchainVoting";
    "version": "0.1.0";
    "spec": "0.1.0";
    "description": "Created with Anchor";
  };
  "instructions": [
    {
      "name": "gibVote";
      "discriminator": [
        123,
        118,
        129,
        88,
        142,
        252,
        195,
        85
      ];
      "accounts": [
        {
          "name": "voteAccount";
          "writable": true;
        },
        {
          "name": "signer";
          "signer": true;
        }
      ];
      "args": [
        {
          "name": "voteType";
          "type": {
            "defined": {
              "name": "voteType";
            };
          };
        }
      ];
    },
    {
      "name": "initVoteBank";
      "discriminator": [
        188,
        23,
        119,
        203,
        213,
        60,
        75,
        218
      ];
      "accounts": [
        {
          "name": "voteAccount";
          "writable": true;
          "signer": true;
        },
        {
          "name": "signer";
          "writable": true;
          "signer": true;
        },
        {
          "name": "systemProgram";
          "address": "11111111111111111111111111111111";
        }
      ];
      "args": [];
    }
  ];
  "accounts": [
    {
      "name": "voteBank";
      "discriminator": [
        83,
        109,
        30,
        62,
        146,
        35,
        200,
        133
      ];
    }
  ];
  "types": [
    {
      "name": "voteBank";
      "type": {
        "kind": "struct";
        "fields": [
          {
            "name": "isOpenToVote";
            "type": "bool";
          },
          {
            "name": "gm";
            "type": "u64";
          },
          {
            "name": "gn";
            "type": "u64";
          }
        ];
      };
    },
    {
      "name": "voteType";
      "type": {
        "kind": "enum";
        "variants": [
          {
            "name": "gm";
          },
          {
            "name": "gn";
          }
        ];
      };
    }
  ];
};
