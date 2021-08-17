import { Body, Injectable } from '@nestjs/common';
import {ethers} from 'ethers';

import {abi} from "../source";
const deployedAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

@Injectable()
export class erc1484Service{
    Eth = new ethers.providers.JsonRpcProvider('http://localhost:8545')//new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    signer =  this.Eth.getSigner();
     instance = new ethers.Contract(deployedAddress,abi["abi"],this.signer);
     getIdentity = async(id:number) => {
        let result = await this.instance.getIdentity(id)
        return result.recoveryAddress;
    }
    getAssociatedAddress = async(id:number,address:string) =>{
        let result = await this.instance.isAssociatedAddressFor(id,address);
        return result;
    }
    createIdentity = async(resolvers:any,providers:any,recovery:string) =>{
        let result = await this.instance.createIdentity(recovery,providers,resolvers);
        result = await result.wait();
        // console.log(result.events[0].args.recoveryAddress)
        // console.log(Number(result.events[0].args.ein))
        return result.events[0].args;
    }
    createIdentityDelegated = async(resolvers:any,providers:any,recovery:string) =>{
        let msgHash = ethers.utils.arrayify(ethers.utils.id("Hello How are you?"))
        let sig =  await this.signer.signMessage(msgHash);
        let fsig = await ethers.utils.splitSignature(sig);
        console.log(fsig)
        let result = await this.instance.createIdentityDelegated(recovery,ethers.utils.verifyMessage(msgHash,sig),
            providers,resolvers,fsig.v,fsig.r,fsig.s,1);
        result = await result.wait();
        // console.log(result.events[0].args.recoveryAddress)
        // console.log(Number(result.events[0].args.ein))
        return result.events[0].args;
    }
    addAssAddress = async(address:string) =>{
        let msgHash = ethers.utils.arrayify(ethers.utils.id("Hello How are you?"))
        let sig =  await this.signer.signMessage(msgHash);
        let fsig = await ethers.utils.splitSignature(sig);
        console.log(fsig)
        let result = await this.instance.addAssociatedAddress(address,ethers.utils.verifyMessage(msgHash,sig),fsig.v,fsig.r,fsig.s,1);
        result = await result.wait();
        // console.log(result.events[0].args.recoveryAddress)
        // console.log(Number(result.events[0].args.ein))
        return result.events[0].args;
    }
    triggerDes = async(ein:number,clear:boolean) =>{
        let result = await this.instance.triggerDestruction(ein,[],[],clear);
        result = await result.wait();
        // console.log(result.events[0].args.recoveryAddress)
        // console.log(Number(result.events[0].args.ein))
        return result.events[0].args;
    }
}