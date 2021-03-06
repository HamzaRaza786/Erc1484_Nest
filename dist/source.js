"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abi = void 0;
exports.abi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "Erc1484",
    "sourceName": "contracts/Erc1484.sol",
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "approvingAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "addedAddress",
                    "type": "address"
                }
            ],
            "name": "AssociatedAddressAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "removedAddress",
                    "type": "address"
                }
            ],
            "name": "AssociatedAddressRemoved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "recoveryAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "associatedAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "providers",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "resolvers",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "delegated",
                    "type": "bool"
                }
            ],
            "name": "IdentityCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "recoveryAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "resolversReset",
                    "type": "bool"
                }
            ],
            "name": "IdentityDestroyed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "delegated",
                    "type": "bool"
                }
            ],
            "name": "ProviderAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "delegated",
                    "type": "bool"
                }
            ],
            "name": "ProviderRemoved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "oldRecoveryAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newRecoveryAddress",
                    "type": "address"
                }
            ],
            "name": "RecoveryAddressChangeTriggered",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "oldAssociatedAddresses",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newAssociatedAddress",
                    "type": "address"
                }
            ],
            "name": "RecoveryTriggered",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "resolvers",
                    "type": "address"
                }
            ],
            "name": "ResolverAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "initiator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "resolvers",
                    "type": "address"
                }
            ],
            "name": "ResolverRemoved",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approvingAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "addressToAdd",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "addAssociatedAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approvingAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "addressToAdd",
                    "type": "address"
                },
                {
                    "internalType": "uint8[2]",
                    "name": "v",
                    "type": "uint8[2]"
                },
                {
                    "internalType": "bytes32[2]",
                    "name": "r",
                    "type": "bytes32[2]"
                },
                {
                    "internalType": "bytes32[2]",
                    "name": "s",
                    "type": "bytes32[2]"
                },
                {
                    "internalType": "uint256[2]",
                    "name": "timestamp",
                    "type": "uint256[2]"
                }
            ],
            "name": "addAssociatedAddressDelegated",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "providers",
                    "type": "address[]"
                }
            ],
            "name": "addProviders",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "providers",
                    "type": "address[]"
                }
            ],
            "name": "addProvidersFor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "resolvers",
                    "type": "address[]"
                }
            ],
            "name": "addResolvers",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "resolvers",
                    "type": "address[]"
                }
            ],
            "name": "addResolversFor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recoveryAddress",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "providers",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "resolvers",
                    "type": "address[]"
                }
            ],
            "name": "createIdentity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recoveryAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "associatedAddress",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "providers",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "resolvers",
                    "type": "address[]"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "createIdentityDelegated",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "getEIN",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                }
            ],
            "name": "getIdentity",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "recoveryAddress",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "associatedAddresses",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "providers",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "resolvers",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "hasIdentity",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                }
            ],
            "name": "identityExists",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "isAssociatedAddressFor",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                }
            ],
            "name": "isProviderFor",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "resolver",
                    "type": "address"
                }
            ],
            "name": "isResolverFor",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "messageHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "isSigned",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "removeAssociatedAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addressToRemove",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "removeAssociatedAddressDelegated",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "providers",
                    "type": "address[]"
                }
            ],
            "name": "removeProviders",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "providers",
                    "type": "address[]"
                }
            ],
            "name": "removeProvidersFor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "resolvers",
                    "type": "address[]"
                }
            ],
            "name": "removeResolvers",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "resolvers",
                    "type": "address[]"
                }
            ],
            "name": "removeResolversFor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "firstChunk",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "lastChunk",
                    "type": "address[]"
                },
                {
                    "internalType": "bool",
                    "name": "clearResolvers",
                    "type": "bool"
                }
            ],
            "name": "triggerDestruction",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "newAssociatedAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "triggerRecovery",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newRecoveryAddress",
                    "type": "address"
                }
            ],
            "name": "triggerRecoveryAddressChange",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "ein",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "newRecoveryAddress",
                    "type": "address"
                }
            ],
            "name": "triggerRecoveryAddressChangeFor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x608060405260008060006101000a81548163ffffffff021916908363ffffffff16021790555034801561003157600080fd5b50614b30806100416000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80635b5aed3a116100de578063a687662d11610097578063d4b1cdcc11610071578063d4b1cdcc146104a0578063dd9ad9ed146104d0578063e846fd91146104ec578063fa57b576146105085761018e565b8063a687662d14610438578063ab5f678114610468578063b8a5c2a6146104845761018e565b80635b5aed3a146103515780637d0799511461038157806385e3f0581461039d5780638677ebe8146103d05780638e1bb63314610400578063960b11f51461041c5761018e565b8063237f1a211161014b5780633aedf3c9116101255780633aedf3c9146102df5780633b4656a1146102fb57806353a9698a146103055780635726f660146103355761018e565b8063237f1a21146102635780632501faa514610293578063268e8970146102af5761018e565b8063010887dc1461019357806305c62c2f146101af57806306c93c36146101df57806314fb5646146101fb5780631bfe35081461022b578063232e7d8314610247575b600080fd5b6101ad60048036038101906101a89190613e30565b610524565b005b6101c960048036038101906101c49190613975565b610651565b6040516101d691906144eb565b60405180910390f35b6101f960048036038101906101f49190613e30565b61069a565b005b6102156004803603810190610210919061399e565b610831565b60405161022291906144eb565b60405180910390f35b61024560048036038101906102409190613975565b610bcc565b005b610261600480360381019061025c9190613d01565b610d6e565b005b61027d60048036038101906102789190613975565b610f1b565b60405161028a91906143eb565b60405180910390f35b6102ad60048036038101906102a89190613d6b565b610f6c565b005b6102c960048036038101906102c49190613b94565b611052565b6040516102d691906144eb565b60405180910390f35b6102f960048036038101906102f49190613b0b565b61137c565b005b6103036117bf565b005b61031f600480360381019061031a9190613d6b565b6118ff565b60405161032c91906143eb565b60405180910390f35b61034f600480360381019061034a9190613e30565b611931565b005b61036b60048036038101906103669190613d42565b611a9d565b60405161037891906143eb565b60405180910390f35b61039b60048036038101906103969190613d01565b611acd565b005b6103b760048036038101906103b29190613d42565b611c7a565b6040516103c79493929190614338565b60405180910390f35b6103ea60048036038101906103e59190613c13565b611e7a565b6040516103f791906143eb565b60405180910390f35b61041a60048036038101906104159190613da7565b611ea8565b005b61043660048036038101906104319190613e30565b6121d1565b005b610452600480360381019061044d9190613d6b565b612368565b60405161045f91906143eb565b60405180910390f35b610482600480360381019061047d9190613a80565b6123b4565b005b61049e60048036038101906104999190613d01565b612782565b005b6104ba60048036038101906104b59190613d6b565b61292c565b6040516104c791906143eb565b60405180910390f35b6104ea60048036038101906104e59190613c8a565b61295e565b005b61050660048036038101906105019190613d01565b612b0f565b005b610522600480360381019061051d9190613e84565b612cb9565b005b60005b81518163ffffffff16101561064c576105a4828263ffffffff1681518110610578577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000868152602001908152602001600020600301612fe490919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167f54e2805007919dee52f88694f4c6f06bfd679d5d9784ee95ae44f4ff9020523e848463ffffffff168151811061061c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040516106319190614293565b60405180910390a38080610644906148a8565b915050610527565b505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106c233600160008581526020019081526020016000206003016130a990919063ffffffff16565b610701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f89061448b565b60405180910390fd5b60005b81518163ffffffff16101561082c57610781828263ffffffff1681518110610755577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001600086815260200190815260200160002060030161323590919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fe41b11c1b8e658dea501b4a432bd3f7b3e6db83ef57ac16c52e5f288edeffec4848463ffffffff16815181106107f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001604051610811929190614392565b60405180910390a38080610824906148a8565b915050610704565b505050565b6000610860887f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a3878787611e7a565b61089f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108969061446b565b60405180910390fd5b60016000808282829054906101000a900463ffffffff166108c091906146e4565b92506101000a81548163ffffffff021916908363ffffffff16021790555088600160008060009054906101000a900463ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061098988600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600101612fe490919063ffffffff16565b60008054906101000a900463ffffffff1663ffffffff16600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060005b87518163ffffffff161015610a8d57610a7a888263ffffffff1681518110610a37577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600301612fe490919063ffffffff16565b8080610a85906148a8565b9150506109e6565b5060005b86518163ffffffff161015610b3857610b25878263ffffffff1681518110610ae2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600501612fe490919063ffffffff16565b8080610b30906148a8565b915050610a91565b5060008054906101000a900463ffffffff1663ffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe541733a4670852051762d3cdb7d9123bea21d01e252aa39ca403c8d0f5ab66c8b8b8b8b6001604051610b9f9594939291906142d7565b60405180910390a360008054906101000a900463ffffffff1663ffffffff16905098975050505050505050565b600060016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fec8acd470f49ff49dc25ffb0e4d48da58c5eb79f35afbec88e4abc7156889a738385604051610d629291906142ae565b60405180910390a35050565b60005b81518163ffffffff161015610f1757610e2d828263ffffffff1681518110610dc2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060030161323590919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fe41b11c1b8e658dea501b4a432bd3f7b3e6db83ef57ac16c52e5f288edeffec4848463ffffffff1681518110610ee4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000604051610efc929190614392565b60405180910390a38080610f0f906148a8565b915050610d71565b5050565b6000610f65600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a9d565b9050919050565b60006001600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816001600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550823373ffffffffffffffffffffffffffffffffffffffff167fec8acd470f49ff49dc25ffb0e4d48da58c5eb79f35afbec88e4abc7156889a7383856040516110459291906142ae565b60405180910390a3505050565b600060016000808282829054906101000a900463ffffffff1661107591906146e4565b92506101000a81548163ffffffff021916908363ffffffff16021790555083600160008060009054906101000a900463ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061113e33600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600101612fe490919063ffffffff16565b60008054906101000a900463ffffffff1663ffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060005b83518163ffffffff1610156112425761122f848263ffffffff16815181106111ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600301612fe490919063ffffffff16565b808061123a906148a8565b91505061119b565b5060005b82518163ffffffff1610156112ed576112da838263ffffffff1681518110611297577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600501612fe490919063ffffffff16565b80806112e5906148a8565b915050611246565b5060008054906101000a900463ffffffff1663ffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe541733a4670852051762d3cdb7d9123bea21d01e252aa39ca403c8d0f5ab66c8633878760006040516113549594939291906142d7565b60405180910390a360008054906101000a900463ffffffff1663ffffffff1690509392505050565b8573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561159b576113dd857f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a3868686611e7a565b61141c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114139061446b565b60405180910390fd5b6114838560016000600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600101612fe490919063ffffffff16565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c523888860405161158e9291906142ae565b60405180910390a36117b7565b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156117b6576115fc867ff68c08a26c40b009e17f91c41970e0ab9ede5e7a27371e8575f1a2fdc055ce28868686611e7a565b61163b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116329061446b565b60405180910390fd5b6116a28560016000600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600101612fe490919063ffffffff16565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c52388886040516117ad9291906142ae565b60405180910390a35b5b505050505050565b6118263360016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060010161323590919063ffffffff16565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055803373ffffffffffffffffffffffffffffffffffffffff167f4ed4e3bbe2efe2f41f7496df45bc4627eb3610c8f242638c7165ea0fb285d607336040516118f49190614293565b60405180910390a350565b600061192982600160008681526020019081526020016000206003016130a990919063ffffffff16565b905092915050565b60005b81518163ffffffff161015611a98576119b1828263ffffffff1681518110611985577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001600086815260200190815260200160002060030161323590919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fde03a0fb01946dd039d7a3ab05ede4cdb53127396add3b3fab48161425c82b48848463ffffffff1681518110611a68577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151604051611a7d9190614293565b60405180910390a38080611a90906148a8565b915050611934565b505050565b60008060009054906101000a900463ffffffff1663ffffffff168211158015611ac65750600082115b9050919050565b60005b81518163ffffffff161015611c7657611b8c828263ffffffff1681518110611b21577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600301612fe490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fd2af86288d6ec28d93c5459bdc5a21da89b340c28ad430327e40139c1178986f848463ffffffff1681518110611c43577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000604051611c5b929190614392565b60405180910390a38080611c6e906148a8565b915050611ad0565b5050565b6000606080606060006001600087815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681600101600001826003016000018360050160000182805480602002602001604051908101604052809291908181526020018280548015611d5357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611d09575b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611ddb57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611d91575b5050505050915080805480602002602001604051908101604052809291908181526020018280548015611e6357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611e19575b505050505090509450945094509450509193509193565b6000611e898686868686613583565b80611e9d5750611e9c868686868661360d565b5b905095945050505050565b611f0b6001600088815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a3868686611e7a565b611f4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f419061446b565b60405180910390fd5b600060016000888152602001908152602001600020600101600001805480602002602001604051908101604052809291908181526020018280548015611fe557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611f9b575b50505050509050426212750083611ffc919061468e565b10156121c85760005b612023600160008a8152602001908152602001600020600101613689565b8110156120fb5760026000600160008b8152602001908152602001600020600101600001838154811061207f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905580806120f39061485f565b915050612005565b506001600088815260200190815260200160002060010160008082016000612123919061369a565b5050600160008881526020019081526020016000206003016000808201600061214c919061369a565b505061217686600160008a8152602001908152602001600020600101612fe490919063ffffffff16565b863373ffffffffffffffffffffffffffffffffffffffff167f2fe95fbd211d0471c596b1f81d913d1389d5d1ddeb2bdd96143acc651aa3b02e83896040516121bf9291906143bb565b60405180910390a35b50505050505050565b6121f933600160008581526020019081526020016000206003016130a990919063ffffffff16565b612238576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161222f9061448b565b60405180910390fd5b60005b81518163ffffffff161015612363576122b8828263ffffffff168151811061228c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000868152602001908152602001600020600301612fe490919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fd2af86288d6ec28d93c5459bdc5a21da89b340c28ad430327e40139c1178986f848463ffffffff1681518110612330577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001604051612348929190614392565b60405180910390a3808061235b906148a8565b91505061223b565b505050565b600082600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414905092915050565b61249b857f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a386600160028110612413577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015186600160028110612452577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015186600160028110612491577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151611e7a565b6124da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124d1906144ab565b60405180910390fd5b6125c1867f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a386600060028110612539577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015186600060028110612578577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151866000600281106125b7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151611e7a565b612600576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125f79061444b565b60405180910390fd5b6126678560016000600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600101612fe490919063ffffffff16565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c52388886040516127729291906142ae565b60405180910390a3505050505050565b60005b81518163ffffffff16101561292857612841828263ffffffff16815181106127d6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060030161323590919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fde03a0fb01946dd039d7a3ab05ede4cdb53127396add3b3fab48161425c82b48848463ffffffff16815181106128f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160405161290d9190614293565b60405180910390a38080612920906148a8565b915050612785565b5050565b600061295682600160008681526020019081526020016000206005016130a990919063ffffffff16565b905092915050565b61298b857f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a3868686611e7a565b6129ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129c19061446b565b60405180910390fd5b612a318560016000600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060010161323590919063ffffffff16565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055803373ffffffffffffffffffffffffffffffffffffffff167f4ed4e3bbe2efe2f41f7496df45bc4627eb3610c8f242638c7165ea0fb285d60733604051612aff9190614293565b60405180910390a3505050505050565b60005b81518163ffffffff161015612cb557612bce828263ffffffff1681518110612b63577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600301612fe490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167f54e2805007919dee52f88694f4c6f06bfd679d5d9784ee95ae44f4ff9020523e848463ffffffff1681518110612c85577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151604051612c9a9190614293565b60405180910390a38080612cad906148a8565b915050612b12565b5050565b6000600160008681526020019081526020016000209050600060405180602001604052803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250905081600101600001604051602001612d269190614254565b60405160208183030381529060405280519060200120858286604051602001612d519392919061421f565b6040516020818303038152906040528051906020012014612da7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d9e906144cb565b60405180910390fd5b60005b612db683600101613689565b811015612e8e5760026000600160008a81526020019081526020016000206001016000018381548110612e12577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558080612e869061485f565b915050612daa565b506001600087815260200190815260200160002060010160008082016000612eb6919061369a565b50506001600087815260200190815260200160002060030160008082016000612edf919061369a565b50508215612f11576001600087815260200190815260200160002060050160008082016000612f0e919061369a565b50505b853373ffffffffffffffffffffffffffffffffffffffff167f1807cc67f627d55c0a797a6c603fa124978caf5bb45c1748329489fd0185b9ef8460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686604051612f7e929190614392565b60405180910390a360006001600088815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050565b612fee82826130a9565b6130a55781600001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600001805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5050565b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411801561314357508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836000018054905010155b801561322d57508173ffffffffffffffffffffffffffffffffffffffff168360000160018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546131b3919061471e565b815481106131ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b905092915050565b61323f82826130a9565b1561357f5781600001600161325384613689565b61325d919061471e565b81548110613294577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260000160018460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613311919061471e565b81548110613348577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548260010160008460000160018660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461342a919061471e565b81548110613461577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905581600001805480613549577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b5050565b60008573ffffffffffffffffffffffffffffffffffffffff16600186868686604051600081526020016040526040516135bf9493929190614406565b6020604051602081039080840390855afa1580156135e1573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1614905095945050505050565b6000806040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250905061367d87828860405160200161365f92919061426b565b60405160208183030381529060405280519060200120878787613583565b91505095945050505050565b600081600001805490509050919050565b50805460008255906000526020600020908101906136b891906136bb565b50565b5b808211156136d45760008160009055506001016136bc565b5090565b60006136eb6136e68461452b565b614506565b9050808382526020820190508285602086028201111561370a57600080fd5b60005b8581101561373a5781613720888261386d565b84526020840193506020830192505060018101905061370d565b5050509392505050565b600061375761375284614557565b614506565b9050808285602086028201111561376d57600080fd5b60005b8581101561379d57816137838882613936565b845260208401935060208301925050600181019050613770565b5050509392505050565b60006137ba6137b58461457d565b614506565b905080828560208602820111156137d057600080fd5b60005b8581101561380057816137e6888261394b565b8452602084019350602083019250506001810190506137d3565b5050509392505050565b600061381d613818846145a3565b614506565b9050808285602086028201111561383357600080fd5b60005b8581101561386357816138498882613960565b845260208401935060208301925050600181019050613836565b5050509392505050565b60008135905061387c81614a87565b92915050565b600082601f83011261389357600080fd5b81356138a38482602086016136d8565b91505092915050565b600082601f8301126138bd57600080fd5b60026138ca848285613744565b91505092915050565b600082601f8301126138e457600080fd5b60026138f18482856137a7565b91505092915050565b600082601f83011261390b57600080fd5b600261391884828561380a565b91505092915050565b60008135905061393081614a9e565b92915050565b60008135905061394581614ab5565b92915050565b60008135905061395a81614acc565b92915050565b60008135905061396f81614ae3565b92915050565b60006020828403121561398757600080fd5b60006139958482850161386d565b91505092915050565b600080600080600080600080610100898b0312156139bb57600080fd5b60006139c98b828c0161386d565b98505060206139da8b828c0161386d565b975050604089013567ffffffffffffffff8111156139f757600080fd5b613a038b828c01613882565b965050606089013567ffffffffffffffff811115613a2057600080fd5b613a2c8b828c01613882565b9550506080613a3d8b828c01613960565b94505060a0613a4e8b828c01613936565b93505060c0613a5f8b828c01613936565b92505060e0613a708b828c0161394b565b9150509295985092959890939650565b6000806000806000806101408789031215613a9a57600080fd5b6000613aa889828a0161386d565b9650506020613ab989828a0161386d565b9550506040613aca89828a016138fa565b9450506080613adb89828a016138ac565b93505060c0613aec89828a016138ac565b925050610100613afe89828a016138d3565b9150509295509295509295565b60008060008060008060c08789031215613b2457600080fd5b6000613b3289828a0161386d565b9650506020613b4389828a0161386d565b9550506040613b5489828a01613960565b9450506060613b6589828a01613936565b9350506080613b7689828a01613936565b92505060a0613b8789828a0161394b565b9150509295509295509295565b600080600060608486031215613ba957600080fd5b6000613bb78682870161386d565b935050602084013567ffffffffffffffff811115613bd457600080fd5b613be086828701613882565b925050604084013567ffffffffffffffff811115613bfd57600080fd5b613c0986828701613882565b9150509250925092565b600080600080600060a08688031215613c2b57600080fd5b6000613c398882890161386d565b9550506020613c4a88828901613936565b9450506040613c5b88828901613960565b9350506060613c6c88828901613936565b9250506080613c7d88828901613936565b9150509295509295909350565b600080600080600060a08688031215613ca257600080fd5b6000613cb08882890161386d565b9550506020613cc188828901613960565b9450506040613cd288828901613936565b9350506060613ce388828901613936565b9250506080613cf48882890161394b565b9150509295509295909350565b600060208284031215613d1357600080fd5b600082013567ffffffffffffffff811115613d2d57600080fd5b613d3984828501613882565b91505092915050565b600060208284031215613d5457600080fd5b6000613d628482850161394b565b91505092915050565b60008060408385031215613d7e57600080fd5b6000613d8c8582860161394b565b9250506020613d9d8582860161386d565b9150509250929050565b60008060008060008060c08789031215613dc057600080fd5b6000613dce89828a0161394b565b9650506020613ddf89828a0161386d565b9550506040613df089828a01613960565b9450506060613e0189828a01613936565b9350506080613e1289828a01613936565b92505060a0613e2389828a0161394b565b9150509295509295509295565b60008060408385031215613e4357600080fd5b6000613e518582860161394b565b925050602083013567ffffffffffffffff811115613e6e57600080fd5b613e7a85828601613882565b9150509250929050565b60008060008060808587031215613e9a57600080fd5b6000613ea88782880161394b565b945050602085013567ffffffffffffffff811115613ec557600080fd5b613ed187828801613882565b935050604085013567ffffffffffffffff811115613eee57600080fd5b613efa87828801613882565b9250506060613f0b87828801613921565b91505092959194509250565b6000613f238383613f47565b60208301905092915050565b6000613f3b8383613f65565b60208301905092915050565b613f5081614772565b82525050565b613f5f81614772565b82525050565b613f6e81614772565b82525050565b613f7d816145f8565b613f87818461464b565b9250613f92826145c9565b8060005b83811015613fc3578151613faa8782613f2f565b9650613fb583614624565b925050600181019050613f96565b505050505050565b6000613fd682614603565b613fe08185614656565b9350613feb836145d3565b8060005b8381101561401c5781516140038882613f17565b975061400e83614631565b925050600181019050613fef565b5085935050505092915050565b600061403482614603565b61403e8185614667565b9350614049836145d3565b8060005b8381101561407a5781516140618882613f2f565b975061406c83614631565b92505060018101905061404d565b5085935050505092915050565b60006140928261460e565b61409c8185614667565b93506140a7836145e3565b8060005b838110156140df576140bc8261493d565b6140c68882613f2f565b97506140d18361463e565b9250506001810190506140ab565b5085935050505092915050565b6140f581614784565b82525050565b61410481614790565b82525050565b61411b61411682614790565b6148d5565b82525050565b600061412c82614619565b6141368185614672565b93506141468185602086016147e1565b80840191505092915050565b600061415f60148361467d565b915061416a8261496e565b602082019050919050565b600061418260128361467d565b915061418d82614997565b602082019050919050565b60006141a560168361467d565b91506141b0826149c0565b602082019050919050565b60006141c860148361467d565b91506141d3826149e9565b602082019050919050565b60006141eb605f8361467d565b91506141f682614a12565b606082019050919050565b61420a816147ba565b82525050565b614219816147d4565b82525050565b600061422b8286614029565b91506142378285613f74565b6020820191506142478284614029565b9150819050949350505050565b60006142608284614087565b915081905092915050565b60006142778285614121565b9150614283828461410a565b6020820191508190509392505050565b60006020820190506142a86000830184613f56565b92915050565b60006040820190506142c36000830185613f56565b6142d06020830184613f56565b9392505050565b600060a0820190506142ec6000830188613f56565b6142f96020830187613f56565b818103604083015261430b8186613fcb565b9050818103606083015261431f8185613fcb565b905061432e60808301846140ec565b9695505050505050565b600060808201905061434d6000830187613f56565b818103602083015261435f8186613fcb565b905081810360408301526143738185613fcb565b905081810360608301526143878184613fcb565b905095945050505050565b60006040820190506143a76000830185613f56565b6143b460208301846140ec565b9392505050565b600060408201905081810360008301526143d58185613fcb565b90506143e46020830184613f56565b9392505050565b600060208201905061440060008301846140ec565b92915050565b600060808201905061441b60008301876140fb565b6144286020830186614210565b61443560408301856140fb565b61444260608301846140fb565b95945050505050565b6000602082019050818103600083015261446481614152565b9050919050565b6000602082019050818103600083015261448481614175565b9050919050565b600060208201905081810360008301526144a481614198565b9050919050565b600060208201905081810360008301526144c4816141bb565b9050919050565b600060208201905081810360008301526144e4816141de565b9050919050565b60006020820190506145006000830184614201565b92915050565b6000614510614521565b905061451c828261482e565b919050565b6000604051905090565b600067ffffffffffffffff8211156145465761454561490e565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156145725761457161490e565b5b602082029050919050565b600067ffffffffffffffff8211156145985761459761490e565b5b602082029050919050565b600067ffffffffffffffff8211156145be576145bd61490e565b5b602082029050919050565b6000819050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600060019050919050565b600081519050919050565b600081549050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000600182019050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b6000614699826147ba565b91506146a4836147ba565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156146d9576146d86148df565b5b828201905092915050565b60006146ef826147c4565b91506146fa836147c4565b92508263ffffffff03821115614713576147126148df565b5b828201905092915050565b6000614729826147ba565b9150614734836147ba565b925082821015614747576147466148df565b5b828203905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061477d8261479a565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600060ff82169050919050565b60005b838110156147ff5780820151818401526020810190506147e4565b8381111561480e576000848401525b50505050565b600061482761482283614961565b614752565b9050919050565b61483782614950565b810181811067ffffffffffffffff821117156148565761485561490e565b5b80604052505050565b600061486a826147ba565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561489d5761489c6148df565b5b600182019050919050565b60006148b3826147c4565b915063ffffffff8214156148ca576148c96148df565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006149498254614814565b9050919050565b6000601f19601f8301169050919050565b60008160001c9050919050565b7f5065726d697373696f6e2064656e69656420322e000000000000000000000000600082015250565b7f5065726d697373696f6e2064656e6965642e0000000000000000000000000000600082015250565b7f4d73672e73656e646572206e6f742070726573656e7400000000000000000000600082015250565b7f5065726d697373696f6e2064656e69656420312e000000000000000000000000600082015250565b7f43616e6e6f742064657374726f7920616e2045494e2066726f6d20616e20616460008201527f6472657373207468617420776173206e6f7420726563656e746c792072656d6f60208201527f7665642066726f6d20736169642045494e20766961207265636f766572792e00604082015250565b614a9081614772565b8114614a9b57600080fd5b50565b614aa781614784565b8114614ab257600080fd5b50565b614abe81614790565b8114614ac957600080fd5b50565b614ad5816147ba565b8114614ae057600080fd5b50565b614aec816147d4565b8114614af757600080fd5b5056fea264697066735822122006349aaf4e5a48c41c0c73229c3e27e8e5132237db0e2c5bd2ad8efe9eaf050064736f6c63430008040033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061018e5760003560e01c80635b5aed3a116100de578063a687662d11610097578063d4b1cdcc11610071578063d4b1cdcc146104a0578063dd9ad9ed146104d0578063e846fd91146104ec578063fa57b576146105085761018e565b8063a687662d14610438578063ab5f678114610468578063b8a5c2a6146104845761018e565b80635b5aed3a146103515780637d0799511461038157806385e3f0581461039d5780638677ebe8146103d05780638e1bb63314610400578063960b11f51461041c5761018e565b8063237f1a211161014b5780633aedf3c9116101255780633aedf3c9146102df5780633b4656a1146102fb57806353a9698a146103055780635726f660146103355761018e565b8063237f1a21146102635780632501faa514610293578063268e8970146102af5761018e565b8063010887dc1461019357806305c62c2f146101af57806306c93c36146101df57806314fb5646146101fb5780631bfe35081461022b578063232e7d8314610247575b600080fd5b6101ad60048036038101906101a89190613e30565b610524565b005b6101c960048036038101906101c49190613975565b610651565b6040516101d691906144eb565b60405180910390f35b6101f960048036038101906101f49190613e30565b61069a565b005b6102156004803603810190610210919061399e565b610831565b60405161022291906144eb565b60405180910390f35b61024560048036038101906102409190613975565b610bcc565b005b610261600480360381019061025c9190613d01565b610d6e565b005b61027d60048036038101906102789190613975565b610f1b565b60405161028a91906143eb565b60405180910390f35b6102ad60048036038101906102a89190613d6b565b610f6c565b005b6102c960048036038101906102c49190613b94565b611052565b6040516102d691906144eb565b60405180910390f35b6102f960048036038101906102f49190613b0b565b61137c565b005b6103036117bf565b005b61031f600480360381019061031a9190613d6b565b6118ff565b60405161032c91906143eb565b60405180910390f35b61034f600480360381019061034a9190613e30565b611931565b005b61036b60048036038101906103669190613d42565b611a9d565b60405161037891906143eb565b60405180910390f35b61039b60048036038101906103969190613d01565b611acd565b005b6103b760048036038101906103b29190613d42565b611c7a565b6040516103c79493929190614338565b60405180910390f35b6103ea60048036038101906103e59190613c13565b611e7a565b6040516103f791906143eb565b60405180910390f35b61041a60048036038101906104159190613da7565b611ea8565b005b61043660048036038101906104319190613e30565b6121d1565b005b610452600480360381019061044d9190613d6b565b612368565b60405161045f91906143eb565b60405180910390f35b610482600480360381019061047d9190613a80565b6123b4565b005b61049e60048036038101906104999190613d01565b612782565b005b6104ba60048036038101906104b59190613d6b565b61292c565b6040516104c791906143eb565b60405180910390f35b6104ea60048036038101906104e59190613c8a565b61295e565b005b61050660048036038101906105019190613d01565b612b0f565b005b610522600480360381019061051d9190613e84565b612cb9565b005b60005b81518163ffffffff16101561064c576105a4828263ffffffff1681518110610578577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000868152602001908152602001600020600301612fe490919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167f54e2805007919dee52f88694f4c6f06bfd679d5d9784ee95ae44f4ff9020523e848463ffffffff168151811061061c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040516106319190614293565b60405180910390a38080610644906148a8565b915050610527565b505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106c233600160008581526020019081526020016000206003016130a990919063ffffffff16565b610701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f89061448b565b60405180910390fd5b60005b81518163ffffffff16101561082c57610781828263ffffffff1681518110610755577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001600086815260200190815260200160002060030161323590919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fe41b11c1b8e658dea501b4a432bd3f7b3e6db83ef57ac16c52e5f288edeffec4848463ffffffff16815181106107f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001604051610811929190614392565b60405180910390a38080610824906148a8565b915050610704565b505050565b6000610860887f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a3878787611e7a565b61089f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108969061446b565b60405180910390fd5b60016000808282829054906101000a900463ffffffff166108c091906146e4565b92506101000a81548163ffffffff021916908363ffffffff16021790555088600160008060009054906101000a900463ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061098988600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600101612fe490919063ffffffff16565b60008054906101000a900463ffffffff1663ffffffff16600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060005b87518163ffffffff161015610a8d57610a7a888263ffffffff1681518110610a37577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600301612fe490919063ffffffff16565b8080610a85906148a8565b9150506109e6565b5060005b86518163ffffffff161015610b3857610b25878263ffffffff1681518110610ae2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600501612fe490919063ffffffff16565b8080610b30906148a8565b915050610a91565b5060008054906101000a900463ffffffff1663ffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe541733a4670852051762d3cdb7d9123bea21d01e252aa39ca403c8d0f5ab66c8b8b8b8b6001604051610b9f9594939291906142d7565b60405180910390a360008054906101000a900463ffffffff1663ffffffff16905098975050505050505050565b600060016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fec8acd470f49ff49dc25ffb0e4d48da58c5eb79f35afbec88e4abc7156889a738385604051610d629291906142ae565b60405180910390a35050565b60005b81518163ffffffff161015610f1757610e2d828263ffffffff1681518110610dc2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060030161323590919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fe41b11c1b8e658dea501b4a432bd3f7b3e6db83ef57ac16c52e5f288edeffec4848463ffffffff1681518110610ee4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000604051610efc929190614392565b60405180910390a38080610f0f906148a8565b915050610d71565b5050565b6000610f65600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a9d565b9050919050565b60006001600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816001600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550823373ffffffffffffffffffffffffffffffffffffffff167fec8acd470f49ff49dc25ffb0e4d48da58c5eb79f35afbec88e4abc7156889a7383856040516110459291906142ae565b60405180910390a3505050565b600060016000808282829054906101000a900463ffffffff1661107591906146e4565b92506101000a81548163ffffffff021916908363ffffffff16021790555083600160008060009054906101000a900463ffffffff1663ffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061113e33600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600101612fe490919063ffffffff16565b60008054906101000a900463ffffffff1663ffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060005b83518163ffffffff1610156112425761122f848263ffffffff16815181106111ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600301612fe490919063ffffffff16565b808061123a906148a8565b91505061119b565b5060005b82518163ffffffff1610156112ed576112da838263ffffffff1681518110611297577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600160008060009054906101000a900463ffffffff1663ffffffff168152602001908152602001600020600501612fe490919063ffffffff16565b80806112e5906148a8565b915050611246565b5060008054906101000a900463ffffffff1663ffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe541733a4670852051762d3cdb7d9123bea21d01e252aa39ca403c8d0f5ab66c8633878760006040516113549594939291906142d7565b60405180910390a360008054906101000a900463ffffffff1663ffffffff1690509392505050565b8573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561159b576113dd857f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a3868686611e7a565b61141c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114139061446b565b60405180910390fd5b6114838560016000600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600101612fe490919063ffffffff16565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c523888860405161158e9291906142ae565b60405180910390a36117b7565b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156117b6576115fc867ff68c08a26c40b009e17f91c41970e0ab9ede5e7a27371e8575f1a2fdc055ce28868686611e7a565b61163b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116329061446b565b60405180910390fd5b6116a28560016000600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600101612fe490919063ffffffff16565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c52388886040516117ad9291906142ae565b60405180910390a35b5b505050505050565b6118263360016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060010161323590919063ffffffff16565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055803373ffffffffffffffffffffffffffffffffffffffff167f4ed4e3bbe2efe2f41f7496df45bc4627eb3610c8f242638c7165ea0fb285d607336040516118f49190614293565b60405180910390a350565b600061192982600160008681526020019081526020016000206003016130a990919063ffffffff16565b905092915050565b60005b81518163ffffffff161015611a98576119b1828263ffffffff1681518110611985577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001600086815260200190815260200160002060030161323590919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fde03a0fb01946dd039d7a3ab05ede4cdb53127396add3b3fab48161425c82b48848463ffffffff1681518110611a68577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151604051611a7d9190614293565b60405180910390a38080611a90906148a8565b915050611934565b505050565b60008060009054906101000a900463ffffffff1663ffffffff168211158015611ac65750600082115b9050919050565b60005b81518163ffffffff161015611c7657611b8c828263ffffffff1681518110611b21577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600301612fe490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fd2af86288d6ec28d93c5459bdc5a21da89b340c28ad430327e40139c1178986f848463ffffffff1681518110611c43577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000604051611c5b929190614392565b60405180910390a38080611c6e906148a8565b915050611ad0565b5050565b6000606080606060006001600087815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681600101600001826003016000018360050160000182805480602002602001604051908101604052809291908181526020018280548015611d5357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611d09575b5050505050925081805480602002602001604051908101604052809291908181526020018280548015611ddb57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611d91575b5050505050915080805480602002602001604051908101604052809291908181526020018280548015611e6357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611e19575b505050505090509450945094509450509193509193565b6000611e898686868686613583565b80611e9d5750611e9c868686868661360d565b5b905095945050505050565b611f0b6001600088815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a3868686611e7a565b611f4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f419061446b565b60405180910390fd5b600060016000888152602001908152602001600020600101600001805480602002602001604051908101604052809291908181526020018280548015611fe557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611f9b575b50505050509050426212750083611ffc919061468e565b10156121c85760005b612023600160008a8152602001908152602001600020600101613689565b8110156120fb5760026000600160008b8152602001908152602001600020600101600001838154811061207f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905580806120f39061485f565b915050612005565b506001600088815260200190815260200160002060010160008082016000612123919061369a565b5050600160008881526020019081526020016000206003016000808201600061214c919061369a565b505061217686600160008a8152602001908152602001600020600101612fe490919063ffffffff16565b863373ffffffffffffffffffffffffffffffffffffffff167f2fe95fbd211d0471c596b1f81d913d1389d5d1ddeb2bdd96143acc651aa3b02e83896040516121bf9291906143bb565b60405180910390a35b50505050505050565b6121f933600160008581526020019081526020016000206003016130a990919063ffffffff16565b612238576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161222f9061448b565b60405180910390fd5b60005b81518163ffffffff161015612363576122b8828263ffffffff168151811061228c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000868152602001908152602001600020600301612fe490919063ffffffff16565b823373ffffffffffffffffffffffffffffffffffffffff167fd2af86288d6ec28d93c5459bdc5a21da89b340c28ad430327e40139c1178986f848463ffffffff1681518110612330577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516001604051612348929190614392565b60405180910390a3808061235b906148a8565b91505061223b565b505050565b600082600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414905092915050565b61249b857f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a386600160028110612413577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015186600160028110612452577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015186600160028110612491577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151611e7a565b6124da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124d1906144ab565b60405180910390fd5b6125c1867f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a386600060028110612539577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015186600060028110612578577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151866000600281106125b7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151611e7a565b612600576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125f79061444b565b60405180910390fd5b6126678560016000600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600101612fe490919063ffffffff16565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fa0e763710bdf81797303339803590cdfab14f495ab50975a41f3b00112c5c52388886040516127729291906142ae565b60405180910390a3505050505050565b60005b81518163ffffffff16101561292857612841828263ffffffff16815181106127d6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060030161323590919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fde03a0fb01946dd039d7a3ab05ede4cdb53127396add3b3fab48161425c82b48848463ffffffff16815181106128f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160405161290d9190614293565b60405180910390a38080612920906148a8565b915050612785565b5050565b600061295682600160008681526020019081526020016000206005016130a990919063ffffffff16565b905092915050565b61298b857f4eeefd41407064c43f79d6226c9a61646bf1161317a4dfe64464b3dffe6915a3868686611e7a565b6129ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129c19061446b565b60405180910390fd5b612a318560016000600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054815260200190815260200160002060010161323590919063ffffffff16565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055803373ffffffffffffffffffffffffffffffffffffffff167f4ed4e3bbe2efe2f41f7496df45bc4627eb3610c8f242638c7165ea0fb285d60733604051612aff9190614293565b60405180910390a3505050505050565b60005b81518163ffffffff161015612cb557612bce828263ffffffff1681518110612b63577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160016000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152602001908152602001600020600301612fe490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167f54e2805007919dee52f88694f4c6f06bfd679d5d9784ee95ae44f4ff9020523e848463ffffffff1681518110612c85577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151604051612c9a9190614293565b60405180910390a38080612cad906148a8565b915050612b12565b5050565b6000600160008681526020019081526020016000209050600060405180602001604052803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250905081600101600001604051602001612d269190614254565b60405160208183030381529060405280519060200120858286604051602001612d519392919061421f565b6040516020818303038152906040528051906020012014612da7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d9e906144cb565b60405180910390fd5b60005b612db683600101613689565b811015612e8e5760026000600160008a81526020019081526020016000206001016000018381548110612e12577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558080612e869061485f565b915050612daa565b506001600087815260200190815260200160002060010160008082016000612eb6919061369a565b50506001600087815260200190815260200160002060030160008082016000612edf919061369a565b50508215612f11576001600087815260200190815260200160002060050160008082016000612f0e919061369a565b50505b853373ffffffffffffffffffffffffffffffffffffffff167f1807cc67f627d55c0a797a6c603fa124978caf5bb45c1748329489fd0185b9ef8460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686604051612f7e929190614392565b60405180910390a360006001600088815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050565b612fee82826130a9565b6130a55781600001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600001805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5050565b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411801561314357508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836000018054905010155b801561322d57508173ffffffffffffffffffffffffffffffffffffffff168360000160018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546131b3919061471e565b815481106131ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b905092915050565b61323f82826130a9565b1561357f5781600001600161325384613689565b61325d919061471e565b81548110613294577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260000160018460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054613311919061471e565b81548110613348577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548260010160008460000160018660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461342a919061471e565b81548110613461577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905581600001805480613549577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b5050565b60008573ffffffffffffffffffffffffffffffffffffffff16600186868686604051600081526020016040526040516135bf9493929190614406565b6020604051602081039080840390855afa1580156135e1573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1614905095945050505050565b6000806040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250905061367d87828860405160200161365f92919061426b565b60405160208183030381529060405280519060200120878787613583565b91505095945050505050565b600081600001805490509050919050565b50805460008255906000526020600020908101906136b891906136bb565b50565b5b808211156136d45760008160009055506001016136bc565b5090565b60006136eb6136e68461452b565b614506565b9050808382526020820190508285602086028201111561370a57600080fd5b60005b8581101561373a5781613720888261386d565b84526020840193506020830192505060018101905061370d565b5050509392505050565b600061375761375284614557565b614506565b9050808285602086028201111561376d57600080fd5b60005b8581101561379d57816137838882613936565b845260208401935060208301925050600181019050613770565b5050509392505050565b60006137ba6137b58461457d565b614506565b905080828560208602820111156137d057600080fd5b60005b8581101561380057816137e6888261394b565b8452602084019350602083019250506001810190506137d3565b5050509392505050565b600061381d613818846145a3565b614506565b9050808285602086028201111561383357600080fd5b60005b8581101561386357816138498882613960565b845260208401935060208301925050600181019050613836565b5050509392505050565b60008135905061387c81614a87565b92915050565b600082601f83011261389357600080fd5b81356138a38482602086016136d8565b91505092915050565b600082601f8301126138bd57600080fd5b60026138ca848285613744565b91505092915050565b600082601f8301126138e457600080fd5b60026138f18482856137a7565b91505092915050565b600082601f83011261390b57600080fd5b600261391884828561380a565b91505092915050565b60008135905061393081614a9e565b92915050565b60008135905061394581614ab5565b92915050565b60008135905061395a81614acc565b92915050565b60008135905061396f81614ae3565b92915050565b60006020828403121561398757600080fd5b60006139958482850161386d565b91505092915050565b600080600080600080600080610100898b0312156139bb57600080fd5b60006139c98b828c0161386d565b98505060206139da8b828c0161386d565b975050604089013567ffffffffffffffff8111156139f757600080fd5b613a038b828c01613882565b965050606089013567ffffffffffffffff811115613a2057600080fd5b613a2c8b828c01613882565b9550506080613a3d8b828c01613960565b94505060a0613a4e8b828c01613936565b93505060c0613a5f8b828c01613936565b92505060e0613a708b828c0161394b565b9150509295985092959890939650565b6000806000806000806101408789031215613a9a57600080fd5b6000613aa889828a0161386d565b9650506020613ab989828a0161386d565b9550506040613aca89828a016138fa565b9450506080613adb89828a016138ac565b93505060c0613aec89828a016138ac565b925050610100613afe89828a016138d3565b9150509295509295509295565b60008060008060008060c08789031215613b2457600080fd5b6000613b3289828a0161386d565b9650506020613b4389828a0161386d565b9550506040613b5489828a01613960565b9450506060613b6589828a01613936565b9350506080613b7689828a01613936565b92505060a0613b8789828a0161394b565b9150509295509295509295565b600080600060608486031215613ba957600080fd5b6000613bb78682870161386d565b935050602084013567ffffffffffffffff811115613bd457600080fd5b613be086828701613882565b925050604084013567ffffffffffffffff811115613bfd57600080fd5b613c0986828701613882565b9150509250925092565b600080600080600060a08688031215613c2b57600080fd5b6000613c398882890161386d565b9550506020613c4a88828901613936565b9450506040613c5b88828901613960565b9350506060613c6c88828901613936565b9250506080613c7d88828901613936565b9150509295509295909350565b600080600080600060a08688031215613ca257600080fd5b6000613cb08882890161386d565b9550506020613cc188828901613960565b9450506040613cd288828901613936565b9350506060613ce388828901613936565b9250506080613cf48882890161394b565b9150509295509295909350565b600060208284031215613d1357600080fd5b600082013567ffffffffffffffff811115613d2d57600080fd5b613d3984828501613882565b91505092915050565b600060208284031215613d5457600080fd5b6000613d628482850161394b565b91505092915050565b60008060408385031215613d7e57600080fd5b6000613d8c8582860161394b565b9250506020613d9d8582860161386d565b9150509250929050565b60008060008060008060c08789031215613dc057600080fd5b6000613dce89828a0161394b565b9650506020613ddf89828a0161386d565b9550506040613df089828a01613960565b9450506060613e0189828a01613936565b9350506080613e1289828a01613936565b92505060a0613e2389828a0161394b565b9150509295509295509295565b60008060408385031215613e4357600080fd5b6000613e518582860161394b565b925050602083013567ffffffffffffffff811115613e6e57600080fd5b613e7a85828601613882565b9150509250929050565b60008060008060808587031215613e9a57600080fd5b6000613ea88782880161394b565b945050602085013567ffffffffffffffff811115613ec557600080fd5b613ed187828801613882565b935050604085013567ffffffffffffffff811115613eee57600080fd5b613efa87828801613882565b9250506060613f0b87828801613921565b91505092959194509250565b6000613f238383613f47565b60208301905092915050565b6000613f3b8383613f65565b60208301905092915050565b613f5081614772565b82525050565b613f5f81614772565b82525050565b613f6e81614772565b82525050565b613f7d816145f8565b613f87818461464b565b9250613f92826145c9565b8060005b83811015613fc3578151613faa8782613f2f565b9650613fb583614624565b925050600181019050613f96565b505050505050565b6000613fd682614603565b613fe08185614656565b9350613feb836145d3565b8060005b8381101561401c5781516140038882613f17565b975061400e83614631565b925050600181019050613fef565b5085935050505092915050565b600061403482614603565b61403e8185614667565b9350614049836145d3565b8060005b8381101561407a5781516140618882613f2f565b975061406c83614631565b92505060018101905061404d565b5085935050505092915050565b60006140928261460e565b61409c8185614667565b93506140a7836145e3565b8060005b838110156140df576140bc8261493d565b6140c68882613f2f565b97506140d18361463e565b9250506001810190506140ab565b5085935050505092915050565b6140f581614784565b82525050565b61410481614790565b82525050565b61411b61411682614790565b6148d5565b82525050565b600061412c82614619565b6141368185614672565b93506141468185602086016147e1565b80840191505092915050565b600061415f60148361467d565b915061416a8261496e565b602082019050919050565b600061418260128361467d565b915061418d82614997565b602082019050919050565b60006141a560168361467d565b91506141b0826149c0565b602082019050919050565b60006141c860148361467d565b91506141d3826149e9565b602082019050919050565b60006141eb605f8361467d565b91506141f682614a12565b606082019050919050565b61420a816147ba565b82525050565b614219816147d4565b82525050565b600061422b8286614029565b91506142378285613f74565b6020820191506142478284614029565b9150819050949350505050565b60006142608284614087565b915081905092915050565b60006142778285614121565b9150614283828461410a565b6020820191508190509392505050565b60006020820190506142a86000830184613f56565b92915050565b60006040820190506142c36000830185613f56565b6142d06020830184613f56565b9392505050565b600060a0820190506142ec6000830188613f56565b6142f96020830187613f56565b818103604083015261430b8186613fcb565b9050818103606083015261431f8185613fcb565b905061432e60808301846140ec565b9695505050505050565b600060808201905061434d6000830187613f56565b818103602083015261435f8186613fcb565b905081810360408301526143738185613fcb565b905081810360608301526143878184613fcb565b905095945050505050565b60006040820190506143a76000830185613f56565b6143b460208301846140ec565b9392505050565b600060408201905081810360008301526143d58185613fcb565b90506143e46020830184613f56565b9392505050565b600060208201905061440060008301846140ec565b92915050565b600060808201905061441b60008301876140fb565b6144286020830186614210565b61443560408301856140fb565b61444260608301846140fb565b95945050505050565b6000602082019050818103600083015261446481614152565b9050919050565b6000602082019050818103600083015261448481614175565b9050919050565b600060208201905081810360008301526144a481614198565b9050919050565b600060208201905081810360008301526144c4816141bb565b9050919050565b600060208201905081810360008301526144e4816141de565b9050919050565b60006020820190506145006000830184614201565b92915050565b6000614510614521565b905061451c828261482e565b919050565b6000604051905090565b600067ffffffffffffffff8211156145465761454561490e565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156145725761457161490e565b5b602082029050919050565b600067ffffffffffffffff8211156145985761459761490e565b5b602082029050919050565b600067ffffffffffffffff8211156145be576145bd61490e565b5b602082029050919050565b6000819050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600060019050919050565b600081519050919050565b600081549050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000600182019050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b6000614699826147ba565b91506146a4836147ba565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156146d9576146d86148df565b5b828201905092915050565b60006146ef826147c4565b91506146fa836147c4565b92508263ffffffff03821115614713576147126148df565b5b828201905092915050565b6000614729826147ba565b9150614734836147ba565b925082821015614747576147466148df565b5b828203905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061477d8261479a565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600060ff82169050919050565b60005b838110156147ff5780820151818401526020810190506147e4565b8381111561480e576000848401525b50505050565b600061482761482283614961565b614752565b9050919050565b61483782614950565b810181811067ffffffffffffffff821117156148565761485561490e565b5b80604052505050565b600061486a826147ba565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561489d5761489c6148df565b5b600182019050919050565b60006148b3826147c4565b915063ffffffff8214156148ca576148c96148df565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006149498254614814565b9050919050565b6000601f19601f8301169050919050565b60008160001c9050919050565b7f5065726d697373696f6e2064656e69656420322e000000000000000000000000600082015250565b7f5065726d697373696f6e2064656e6965642e0000000000000000000000000000600082015250565b7f4d73672e73656e646572206e6f742070726573656e7400000000000000000000600082015250565b7f5065726d697373696f6e2064656e69656420312e000000000000000000000000600082015250565b7f43616e6e6f742064657374726f7920616e2045494e2066726f6d20616e20616460008201527f6472657373207468617420776173206e6f7420726563656e746c792072656d6f60208201527f7665642066726f6d20736169642045494e20766961207265636f766572792e00604082015250565b614a9081614772565b8114614a9b57600080fd5b50565b614aa781614784565b8114614ab257600080fd5b50565b614abe81614790565b8114614ac957600080fd5b50565b614ad5816147ba565b8114614ae057600080fd5b50565b614aec816147d4565b8114614af757600080fd5b5056fea264697066735822122006349aaf4e5a48c41c0c73229c3e27e8e5132237db0e2c5bd2ad8efe9eaf050064736f6c63430008040033",
    "linkReferences": {},
    "deployedLinkReferences": {}
};
//# sourceMappingURL=source.js.map