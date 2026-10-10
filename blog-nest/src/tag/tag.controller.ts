import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { TagService } from "./tag.service";

@Controller('tags')
export class TagController{
    constructor (private readonly tagService: TagService ){}
    @Get()
    getAll(){
        return this.tagService.getAll;
    }
}