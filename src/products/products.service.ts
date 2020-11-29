import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/Product.entity';
import {InsertResult, Repository} from 'typeorm'
import IProduct from './interfaces/IProduct';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}

    async getProducts(res): Promise<IProduct[]>{
        const products: IProduct[] = await this.productRepository.find()
        return  res.status(200).json({
            products
        })
    }

    async getProduct(productID: string,  res): Promise<IProduct>{
        const product: IProduct[] = await this.productRepository.find({id: parseInt(productID)})
        return res.status(200).json({
            product
        }) 
    }

    async createProduct(product: IProduct): Promise<InsertResult>{
        const created: InsertResult = await this.productRepository
                                        .createQueryBuilder()
                                        .insert()
                                        .into(Product)
                                        .values({
                                            name: product.name,
                                            description: product.description,
                                            price: product.price,
                                            stock: product.stock,
                                            venciment: product.venciment
                                        })
                                        .execute()
        return created

    }
}
