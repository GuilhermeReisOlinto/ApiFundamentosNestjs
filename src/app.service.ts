import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  cursos(): string{
    return `Curso de Nest.JS`
  }
}
