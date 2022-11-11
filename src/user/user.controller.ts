import { Body, Controller, Delete, Get,  HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards} from '@nestjs/common';
import { Serializer } from '../common/decorators/serializer.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@UseGuards(RolesGuard)
@Serializer(UserDto)
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
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
