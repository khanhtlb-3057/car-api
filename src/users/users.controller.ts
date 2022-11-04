import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { Serialize } from '../common/interceptors/serialize.interceptor';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';

@UseGuards(RolesGuard)
@Controller('users')

@Serialize(UserDto)
export class UserController {
  constructor(
    private userService: UsersService
  ){}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number
  ): Promise<User> {
      return await this.userService.findOne(id);
  }

  @Post()
  @Roles('admin')
  async create(@Body() createUserDto: CreateUserDto){
    return this.userService.save(createUserDto)
  }

  @Patch(':id')
  async update(@Param('id') id:number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
