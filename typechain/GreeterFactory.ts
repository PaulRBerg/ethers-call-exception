/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Greeter } from "./Greeter";

export class GreeterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _greeting: string,
    overrides?: TransactionOverrides
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides) as Promise<Greeter>;
  }
  getDeployTransaction(
    _greeting: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_greeting, overrides);
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): GreeterFactory {
    return super.connect(signer) as GreeterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "greeting",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string"
      }
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256"
      }
    ],
    name: "sum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161065f38038061065f8339818101604052602081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b8382019150602082018581111561006957600080fd5b825186600182028301116401000000008211171561008657600080fd5b8083526020830192505050908051906020019080838360005b838110156100ba57808201518184015260208101905061009f565b50505050905090810190601f1680156100e75780820380516001836020036101000a031916815260200191505b50604052505050806000908051906020019061010492919061010b565b50506101b0565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014c57805160ff191683800117855561017a565b8280016001018555821561017a579182015b8281111561017957825182559160200191906001019061015e565b5b509050610187919061018b565b5090565b6101ad91905b808211156101a9576000816000905550600101610191565b5090565b90565b6104a0806101bf6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063a413686214610051578063cad0899b1461010c578063cfae321714610158578063ef690cc0146101db575b600080fd5b61010a6004803603602081101561006757600080fd5b810190808035906020019064010000000081111561008457600080fd5b82018360208201111561009657600080fd5b803590602001918460018302840111640100000000831117156100b857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061025e565b005b6101426004803603604081101561012257600080fd5b810190808035906020019092919080359060200190929190505050610278565b6040518082815260200191505060405180910390f35b610160610285565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101a0578082015181840152602081019050610185565b50505050905090810190601f1680156101cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101e3610327565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610223578082015181840152602081019050610208565b50505050905090810190601f1680156102505780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b80600090805190602001906102749291906103c5565b5050565b6000818301905092915050565b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561031d5780601f106102f25761010080835404028352916020019161031d565b820191906000526020600020905b81548152906001019060200180831161030057829003601f168201915b5050505050905090565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103bd5780601f10610392576101008083540402835291602001916103bd565b820191906000526020600020905b8154815290600101906020018083116103a057829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061040657805160ff1916838001178555610434565b82800160010185558215610434579182015b82811115610433578251825591602001919060010190610418565b5b5090506104419190610445565b5090565b61046791905b8082111561046357600081600090555060010161044b565b5090565b9056fea2646970667358221220b541b1ff87dd39e315be7d1ba57cb9905641e11820ab9a52c33406428bbbfc8264736f6c63430006090033";
