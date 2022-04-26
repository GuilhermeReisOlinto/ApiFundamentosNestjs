import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private course: Course[] = [
    {
        id:10,
        name: 'Nestjs',
        description:'Curso de fundamentos de Nestjs',
        tags: ['Nestjs', 'javaScript', 'Nodejs']
    }]

    //busca de todos os atributos do array
    findAll(){
        return this.course;
    }

    findOne(id: string){
        return this.course.find((course: Course) => course.id === Number(id))
        //return this.course.find(function(course){course.id === Number(id)})
    }
    
}
