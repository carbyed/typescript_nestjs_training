import { Body, Controller, ForbiddenException, Get, Post, UseFilters } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get('find')
    @UseFilters(HttpExceptionFilter)
    find(): string {
        throw new ForbiddenException();
    }

    // @Get('check')
    // check(): string {
    //     return 'cat checked';
    // }
}
