import { Controller, Get, Render } from '@nestjs/common';
// import { AppService } from './app.service';
import { Connection } from 'typeorm';
@Controller()
export class AppController {
  constructor(private readonly connection: Connection) {}

  @Get()
  getHello(): string {
    console.log(this.connection)
    return this.connection.toString();
  }
  
}
