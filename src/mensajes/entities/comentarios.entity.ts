import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Comentarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  creador: string;

  @Column()
  texto: string;

  @Column()
  fecha: Date;

}