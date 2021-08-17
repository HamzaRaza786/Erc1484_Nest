import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { erc1484Service } from './erc1484.service';
  
  @Controller('erc1484')
  export class erc1484Controller {
    constructor(private readonly erc1484Ser: erc1484Service) { }
    @Get()
    getIdentity(@Body('id') id:number){
        return this.erc1484Ser.getIdentity(id);
    }
    @Get('associated')
    getAssociated(@Body('id') id:number,@Body('address') add:string){
      return this.erc1484Ser.getAssociatedAddress(id,add);
    }
    @Post('create')
    createIdentity(@Body('recovery') recovery:string,@Body('providers') providers:any,@Body('resolvers') resolvers:any){
      return this.erc1484Ser.createIdentity(resolvers,providers,recovery);
    }
    @Post('createDelegated')
    createIdentityDele(@Body('recovery') recovery:string,@Body('providers') providers:any,@Body('resolvers') resolvers:any){
      return this.erc1484Ser.createIdentityDelegated(resolvers,providers,recovery);
    }
    @Post('addAssociated')
    addAssociated(@Body('address') address:string){
      return this.erc1484Ser.addAssAddress(address);
    }
    @Post('triggerDestroy')
    triggerDestroy(@Body('ein') ein:number,@Body('clear') clear:boolean){
      return this.erc1484Ser.triggerDes(ein,clear);
    }
}