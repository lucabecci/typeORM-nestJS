import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Product } from 'src/entity/Product.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
