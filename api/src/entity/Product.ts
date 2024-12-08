import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("decimal")
  price: number;

  @Column()
  stockAvailable: number;

  @Column()
  imgSrc: string;

  @Column({ nullable: true })
  description?: string;

  @Column("text", {array: true, nullable: true})
  otherImgSrcs: string[];
}
