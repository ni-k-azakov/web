import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import {UserDto} from "./DTO/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async getUsers(): Promise<User[]> {
    // throw new NotImplementedException();
    return this.usersRepository.find()
  }

  async getUser(id: number): Promise<User> {
    // throw new NotImplementedException();
    return this.usersRepository.findOne(id)
    //return this.usersRepository.findOne(id)
  }

  async deleteUserById(id: number): Promise<DeleteResult> {
    // throw new NotImplementedException();
    return this.usersRepository.delete(id)
  }

  async addUser(user: UserDto): Promise<InsertResult> {
    let result = this.usersRepository.insert(user)
    return result
  }
}
