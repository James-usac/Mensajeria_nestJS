import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';


@Controller('mensajes')
export class MensajesController {

    @Post()
    create(@Body() createMensajesDto: CreateMensajeDto){
        return 'mensaje creado';
    }

    @Get()
    getAll(){
        return 'lista de mensajes';
    }

    //actualizacion
    @Put('id')
    update(@Body() updateMensajeDto: CreateMensajeDto){
        return 'Mensaje Actualizado';
    }

    @Delete('id')
    delete (){
        return 'mensaje eliminado';
    }

}
