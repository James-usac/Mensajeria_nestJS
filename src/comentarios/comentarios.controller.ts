import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { ComentariosService } from './comentarios.service'
import { Comentariodto } from './dto/comentariodto';

@Controller('comentarios')
export class ComentariosController {
    constructor(private comentarioService: ComentariosService){

    }
    
    @Post('')
    create(@Body() createcomentariosDto: Comentariodto, @Res() response){
        this.comentarioService.createComentario(createcomentariosDto).then(
            comentario => {
                response.status(HttpStatus.CREATED).json(comentario);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({comentario: 'error en la creacion'})
        }       
        );
    }

    @Get()
    getAll(@Res() response){
        this.comentarioService.getAll().then(
            mensajeList => {
                response.status(HttpStatus.OK).json(mensajeList)
            }
        ).catch(() =>{
                response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la obtencion'})
            }      
        )
    }


    //actualizacion
    @Put(':id')
    update(@Body() updateComentarioDto: Comentariodto, @Res() response, @Param('id') idComentario){
        this.comentarioService.updateComentario( idComentario, updateComentarioDto).then(
            comentariosx => {
                response.status(HttpStatus.OK).json(comentariosx)
            }
        ).catch(() =>{
                response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la edicion'})
            }      
        )
    }

    @Delete(':id')
    delete (@Res() response, @Param('id') idComentario){
        this.comentarioService.deleteComentario(idComentario).then(
            res => {
                response.status(HttpStatus.OK).json(res)
            }
        ).catch(() =>{
                response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la eliminacion'})
            }      
        )
    }
}
