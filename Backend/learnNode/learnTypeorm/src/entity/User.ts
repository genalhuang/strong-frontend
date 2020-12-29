import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}

@Entity()
export class blogs {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column()
  createtime: number;
}


@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 100
  })
  name: string;
  @Column("text")
  description: string;
  @Column()
  filename: string;
  @Column("double")
  views: number;
  @Column()
  isPublished: boolean;
}