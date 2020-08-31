import { Injectable } from '@nestjs/common';
import { Mensaje } from './entities/mensaje.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
        private mensajerepository: Repository<Mensaje>,
      ) {}

      async getAll(): Promise<Mensaje[]>{
          return await this.mensajerepository.find();
      }

      async createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>{
          const nuevo = new Mensaje
          nuevo.mensaje = mensajeNuevo.mensaje;
          nuevo.nick = mensajeNuevo.nick;
          //guardando en la base de datos
          return this.mensajerepository.save(nuevo);
      }

      async updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto): Promise<Mensaje>{
            const mensajeUpdate = await this.mensajerepository.findOne(idMensaje)
            mensajeUpdate.nick = mensajeActualizar.nick;
            mensajeUpdate.mensaje = mensajeActualizar.mensaje;

            return await this.mensajerepository.save(mensajeUpdate)
      }

      async deleteMensaje(idMensaje: number): Promise<any>{
            return await this.mensajerepository.delete(idMensaje);
      }
}
