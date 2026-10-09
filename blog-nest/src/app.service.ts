// purpose of services:define methods here 
// we call methods here inside app.module inside providers
import { Injectable } from '@nestjs/common';
// injectable decorator: we can inject and reuse this class 
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from services!';
  }
}
