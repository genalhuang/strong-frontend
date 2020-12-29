import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MockCatsService } from './cats.mockCatsService'
import { MongooseModule } from '@nestjs/mongoose'

const mockCatsService = {
  getHello(): string {
    return 'Hello mockCats!';
  }
};

// useClass 和 useValue的区别
// @Module({
//   controllers: [CatsController],
//   providers: [{
//     provide: CatsService,
//     useClass: MockCatsService,
//   }]
// })
// export class CatsModule {}

// @Module({
//   controllers: [CatsController],
//   providers: [{
//     provide: CatsService,
//     useValue: mockCatsService,
//   }]
// })
// export class CatsModule {}


// 编写一个异步provider
async function createConnection () {
  const a = await new Promise((a,b)=>{
    setTimeout(()=>{
      a(CatsService)
    },1000)
  })
  // @ts-ignore
  return new a()
}

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/koa')],
  controllers: [CatsController],
  // providers: [
  //   CatsService
  // ]
  providers: [
    {
      provide: 'CatsService',
      useFactory: async () => {
        const CatsService = await createConnection();
        return CatsService;
      },
    }
  ]
})
export class CatsModule {}


