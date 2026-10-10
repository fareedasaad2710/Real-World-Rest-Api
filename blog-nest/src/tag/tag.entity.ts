import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

//typeorm create table(entity) and will have two columns name,id
@Entity({name:'tags'})
export class TagEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

}