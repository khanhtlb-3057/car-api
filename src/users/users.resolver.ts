import { Inject } from '@nestjs/common';
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { CreateUserDto } from './dtos/create-user.dto';
import { userDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    @Inject(UsersService) private usersService: UsersService,
  ){}

  @Query(() => userDto)
  async user(@Args('id') id : number) {
    return await this.usersService.findOne(id);
  }

  @Query(()=> [userDto])
  async users() {
    return await this.usersService.findAll();
  }

  @Mutation(() => userDto)
  async createUser(@Args('data') user: CreateUserDto) {
    return await this.usersService.save(user);
  }
}
