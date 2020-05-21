import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger";
// 连接数据库
// import * as mongoose from 'mongoose'
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    // mongoose.connect('mongodb://localhost/nest-blog-api', {
    //     useNewUrlParser: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true
    // });

    const app = await NestFactory.create(AppModule);

    // 请求管道
    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}

bootstrap();
