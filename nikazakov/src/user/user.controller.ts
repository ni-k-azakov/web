import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { DeleteResult, InsertResult } from 'typeorm';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {UserDto} from "./DTO/user.dto";

@ApiBearerAuth()
@ApiTags('users')
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Get list of users',
  })
  @ApiResponse({
    status: 201,
    description: 'The list has been successfully returned.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.',
  })
  @Get('all')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @ApiOperation({
    summary: 'Delete user',
  })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully deleted.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.',
  })
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<DeleteResult> {
    return await this.userService.deleteUserById(id);
  }

  @ApiOperation({
    summary: 'Get user',
  })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully found.',
    type: User,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.',
  })
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    // return await this.userService.getUser(id);
    const result = this.userService.getUser(id);
    console.log(result)
    return result
  }

  @ApiOperation({
    summary: 'Add user',
  })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: UserDto,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.',
  })
  @Post('add_user')
  async addUser(@Body() user: UserDto): Promise<InsertResult> {
    return await this.userService.addUser(user);
  }
}
