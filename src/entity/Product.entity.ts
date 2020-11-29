import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length: 20})
    name: string

    @Column("text")
    description: string

    @Column("int")
    price: number

    @Column("int")
    stock: number 

    @Column("date")
    venciment: string 
}