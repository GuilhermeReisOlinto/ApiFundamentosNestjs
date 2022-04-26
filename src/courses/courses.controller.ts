import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { CoursesService } from './courses.service';

//endPointer 
@Controller('courses')
export class CoursesController {
//Injeção de dependencias
    constructor(private readonly coursesService: CoursesService){}

    @Get()
    findAll(){
        return 'Estou aprendendo NEST.JS'
    }
  
    @Get(':id')
    find(@Param() params ){
        return `curso de Nest ${params.id}`
    }

    @Get(':id')
    findOne(@Param('id')id: string ){
        return `curso de Nest ${id}`
    }
 
//passando dados atraves do post para ser salvo, posso retornar somente o que esta dentro do body
  // @Post()
  //  create (@Body('name') body){
  //      return body;
  //  }
    
// status code 204,  
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create (@Body() body){
        return body;
    }
    
//    @Post()
//    findAll(@Res() response){
//        return response.status.send('passando com status code')
//    }

//atualizaçao 
    @Patch()
    update(@Param()id:string, @Body() body ){
        return 'curso atualizado'
    }     
    
// delete 
    @Delete(':id')
    remove(@Param('id')id:string){
        return `curso deletado ${id}`
    }    
}
