import { PipeTransfrom, Injectable, ArgumentMetadata } from '@nestjs/common';
@Injectable()
export class ValidationPipe implements PipeTransfrom {
  transfrom(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}

// interface ArgumentMetadata {
//   readonly type: 'body' | 'query' | 'param' | 'custom';
//   readonly metatype: Type<any>;
//   readonly data?: string;
// }

