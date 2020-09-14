import { Injectable } from '@nestjs/common';
import { Comentarios } from '../mensajes/entities/comentarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentariodto } from './dto/comentariodto';

@Injectable()
export class ComentariosService {
    constructor(
        @InjectRepository(Comentarios)
        private comentariorepository: Repository<Comentarios>,
      ) {}

    async getAll(): Promise<Comentarios[]>{
        console.log("listo");
        return await this.comentariorepository.find();
    }

    async createComentario(comentarioNuevo: Comentariodto): Promise<Comentarios>{
        var today = new Date();
        var dd = today.getDate()+1;
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        const nuevo = new Comentarios;
        nuevo.titulo = comentarioNuevo.titulo;
        nuevo.creador = comentarioNuevo.creador;
        nuevo.texto = comentarioNuevo.texto;
        nuevo.fecha = today;
        //guardando en la base de datos
        return this.comentariorepository.save(nuevo);
    }

    async updateComentario(idComentario: number, comentarioActualizar: Comentariodto): Promise<Comentarios>{
        const comentarioUpdate = await this.comentariorepository.findOne(idComentario)
        comentarioUpdate.titulo = comentarioActualizar.titulo;
        comentarioUpdate.creador = comentarioActualizar.creador;
        comentarioUpdate.texto = comentarioActualizar.texto;
        return await this.comentariorepository.save(comentarioUpdate)
  }

  async deleteComentario(idComentario: number): Promise<any>{
        return await this.comentariorepository.delete(idComentario);
  }
}
