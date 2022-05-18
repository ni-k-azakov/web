import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return {};
  }

  @Get('avto_12')
  @Render('avto_12')
  avto_12() {
    return {};
  }

  @Get('avto_18')
  @Render('avto_18')
  avto_18() {
    return {};
  }
  @Get('avto_22')
  @Render('avto_22')
  avto_22() {
    return {};
  }
  @Get('avto_30')
  @Render('avto_30')
  avto_30() {
    return {};
  }
  @Get('avto_35')
  @Render('avto_35')
  avto_35() {
    return {};
  }

  @Get('mem_b')
  @Render('mem_b')
  mem_b() {
    return {};
  }

  @Get('user_inter')
  @Render('user_inter')
  user_inter() {
    return {};
  }
}
