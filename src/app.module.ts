import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensajes/mensajes.service';
import { Mensaje } from './mensajes/entities/mensaje.entity';
import { CatsController } from './cats/cats.controller';
import { GoogleStrategy } from './google.strategy'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ComentariosController } from './comentarios/comentarios.controller';
import { ComentariosService } from './comentarios/comentarios.service';
import { Comentarios } from './mensajes/entities/comentarios.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sendmeapp_db',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje]),
    AuthModule,
    TypeOrmModule.forFeature([Comentarios]),
    UsersModule//inyectado la clase mensaje
  ],
  controllers: [AppController, MensajesController, CatsController, ComentariosController],
  providers: [AppService, MensajesService, GoogleStrategy, ComentariosService],
})
export class AppModule {}
