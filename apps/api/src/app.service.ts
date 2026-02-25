import { Injectable } from '@nestjs/common';
import { multiply } from '@autospace/sample-lib';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + multiply(5, 4);
  }
}
