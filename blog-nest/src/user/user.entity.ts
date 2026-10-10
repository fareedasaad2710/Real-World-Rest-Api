import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BeforeInsert, BeforeUpdate } from "typeorm";
import * as bcrypt from 'bcrypt';
@Entity({name: 'users'})
export class UserEntity{
  @PrimaryGeneratedColumn()
  id :number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({default: ''})
  bio: string;

  @Column({default: ''})
  image: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
  }
}