import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AutServices } from './aut.service';
import { Request } from 'express';
import { AuthDto } from './dto';

@Controller('auth')
export class AutController {
    constructor(private autService: AutServices) {}
    @Post("login")
    login(@Body() body: AuthDto){
        console.log(body)
        return this.autService.login();
    }
    @Get("register")
    register(){
        return this.autService.register();
    }
}
