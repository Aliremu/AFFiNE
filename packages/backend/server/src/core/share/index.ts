/**
 * Author: Aliremu <williamzhang106@gmail.com>
 * Created: 7/22/2024
 */

import { Module } from '@nestjs/common';

import { ShareLinkResolver } from './resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [ShareLinkResolver],
  exports: [],
})
export class ShareModule {}
