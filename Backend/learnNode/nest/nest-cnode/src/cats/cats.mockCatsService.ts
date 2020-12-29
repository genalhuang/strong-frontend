import { Injectable } from '@nestjs/common';

@Injectable()
export class MockCatsService {
  getHello(): string {
    return 'Hello mockCats!';
  }
}
