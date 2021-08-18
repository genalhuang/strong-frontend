import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'myblog',
      entities: [],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
