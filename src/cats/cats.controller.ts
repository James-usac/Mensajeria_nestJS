import { Controller, Get, Res, HttpStatus, Param, Header, Post, Redirect, Query, Body } from '@nestjs/common';
import { response } from 'express';
import { CreateCatDto } from './dto/create-cat-dto';
const brcypt = require('bcrypt');
const saltRouds = 10; 

@Controller('cats')
export class CatsController {
    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
    if (version && version === '5') {
        return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    @Get(":id")
    @Header('Cache-Control', 'resultado')
    findAll(@Res() response, @Param("id") idcat){
        var lista = {"l" : 1, "2": 2, "3": idcat, "4": 4, "5": [1,2,3,4]}
        response.status(HttpStatus.OK).json(lista)
    }

    @Post()
    devolver(@Res() response, @Body() CastMensaje: CreateCatDto){
        const catpost = new CreateCatDto()
        catpost.name = brcypt.hashSync(CastMensaje.name, saltRouds);
        console.log(CastMensaje.name)
        console.log(catpost.name)
        //console.log(brcypt.compareSync(catpost.name, CastMensaje.name))
        console.log(brcypt.compareSync(CastMensaje.name, catpost.name))
        response.status(HttpStatus.OK).json(CastMensaje)
    }
}
