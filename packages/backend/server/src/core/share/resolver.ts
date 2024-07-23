/**
 * Author: Aliremu <williamzhang106@gmail.com>
 * Created: 7/22/2024
 */

import { Args, Field, ObjectType, Query, Resolver } from '@nestjs/graphql';
import type { ShareLink as PrismaShareLink } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

import { Public } from '../auth';

@ObjectType('ShareLink')
export class ShareLink implements Partial<PrismaShareLink> {
  @Field()
  pageId!: string;

  @Field()
  workspaceId!: string;

  @Field()
  alias!: string;
}

@Resolver(() => ShareLink)
export class ShareLinkResolver {
  constructor(private readonly prisma: PrismaClient) {}

  @Public()
  @Query(() => ShareLink, {
    description: 'Get share link from alias',
  })
  async shareLink(@Args('alias') alias: string) {
    const data = await this.prisma.shareLink.findUnique({ where: { alias } });

    return data;
  }
}
