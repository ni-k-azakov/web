import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('User')
export class User {
  @ApiProperty({ example: '1', description: 'Id of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'John', description: 'Name of the user' })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
  @Column()
  lastName: string;

  @ApiProperty({ example: 'false', description: 'Is user online' })
  @Column({ default: true })
  isActive: boolean;
}
