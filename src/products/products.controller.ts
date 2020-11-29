import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';

import {ProductsService} from './products.service'
import {CreateProductDto} from './dto/create-product-dto'
import IProduct from './interfaces/IProduct';
@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    @Get()
    getProducts(@Res() res): Promise<IProduct[]>{
        return this.productService.getProducts(res)
    }

    @Get(":id")
    getProduct(@Param("id") id:string, @Res() res): Promise<IProduct>{
        return this.productService.getProduct(id, res)
    }

    @Post()
    createProduct(@Body() product: CreateProductDto){
        return this.productService.createProduct(product)
    }

    @Delete(":id")
    deleteProduct(@Param("id") id:string){
        return `product deleted: ${id}`
    }


}
