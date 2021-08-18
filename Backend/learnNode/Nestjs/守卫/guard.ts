
interface ArgumentMetadata {
  readonly type: 'body' | 'query' | 'param' | 'custom';
  readonly metatype: Type<any>;
  readonly data?: string;
}

interface ExecutionContext extends ArgumentHost {
  getClass<T=any>():Type<T>;
  getHandler(): Function;
}