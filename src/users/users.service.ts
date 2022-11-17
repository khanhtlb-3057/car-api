import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authError } from '../errors/constants/auth.constant';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './user.entity';
import { hash } from '../common/utils/bcrypt.ultil';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.reports', 'report')
      .where('user.id= :id', {id})
      .getOne();

    return user;
  }

  async save(userDto: CreateUserDto) {
    const user = await this.userRepository.findOneBy({ email: userDto.email });

    if (user !== null) {
      throw new BadRequestException(authError.isExistEmail);
    }

    userDto.password = await hash(userDto.password);

    return await this.userRepository.save(userDto);
  }

  async update (userDto: UpdateUserDto, id?: number) {
    return await this.userRepository.update(id, userDto);
  }

  async delete(id: number) {
    return await this.userRepository.delete(id);
  }
}
