import { Module } from '@nestjs/common';

import { erc1484Controller } from './erc1484.controller';
import { erc1484Service } from './erc1484.service';

@Module({
    controllers: [erc1484Controller],
    providers: [erc1484Service],
})
export class erc1484Module {}