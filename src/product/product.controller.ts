import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {

    constructor( private productService: ProductService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){

        const product = await this.productService.createProduct(createProductDTO);

        return res.status(HttpStatus.OK).json({
            msg: 'Received',
            product
        });
    }

    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();

        return res.json(products);
    }
    
    @Get('/:id')
    async getProduct(@Res() res, @Param('id') productID){

        const product = await this.productService.getProduct(productID);

        if(!product) throw new NotFoundException("Product doesn't exist");

        return res.json(product);

    }

    @Delete('delete/:id')
    async deleteProduct(@Res() res, @Param('id') productID){
        
        const deletedProduct = await this.productService.deleteProduct(productID);

        if(!deletedProduct) throw new NotFoundException("Product doesn't exist");

        return res.json({
            msg: 'Product deleted successfully',
            deletedProduct
        });

    }

    @Put('/update/:id')
    async updateProduct(@Res() res, @Param('id') productID, @Body() createProductDTO: CreateProductDTO){

        const updateProduct = await this.productService.updateProduct(productID ,createProductDTO);

        if(!updateProduct) throw new NotFoundException("Product doesn't exist");

        return res.json({
            msg: 'Product updated successfully',
            updateProduct
        });
    }



}