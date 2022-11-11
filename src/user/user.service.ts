import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneByOrFail({ id });
  }

  async save(userDto: CreateUserDto) {
    return await this.userRepository.save(userDto);
  }

  async update (userDto: UpdateUserDto, id?: number) {
    return await this.userRepository.update(id, userDto);
  }

  async delete(id: number) {
    return await this.userRepository.delete(id);
  }
}
