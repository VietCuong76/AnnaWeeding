import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AutController } from './aut.controller';
import { AutServices } from './aut.service';


@Module({
    imports: [PrismaModule],
    controllers: [AutController],
    providers: [AutServices],
})
export class AutModule {}
