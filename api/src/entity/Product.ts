import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stockAvailable: number;

  @Column()
  imgSrc: string;

  @Column({ nullable: true })
  description?: string;

  @Column("simple-array", { nullable: true })
  otherImageSrcs: string[];
}
