import { Controller, Get } from '@nestjs/common';
import {CatsService} from './cats.service'
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
@Controller('cats')
export class CatsController {
  // constructor(private readonly catsService: CatsService) {}
  constructor(@InjectModel('koa') private readonly koaModel: Model<any>) {}

  @Get()
  getHello(): string {
    return this.koaModel.toString();
  }
  
}
