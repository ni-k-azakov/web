import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './login.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      host: 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'ppljclxwabrnqq',
      password:
        '576a38da95f433ec674cb75cea478db4152505ac874a7003ec5941efe9a0df27',
      database: 'd4c4cef4bjo1bf',
      entities: [User],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
