import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'John', description: 'Name of the user' })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
    lastName: string;
}
