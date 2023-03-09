import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable({})

export class AutServices {
    constructor(private prismaService: PrismaService) {}
    register() {
        return {
            message: 'Register successfully'
        }
    }
    login() {
        return{
            message: 'Login successfully'
        }
    }
}