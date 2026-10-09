import { Module } from "@nestjs/common";
import { TagController } from "./tag.controller";
import { TagService } from "./tag.service";
@Module({
    imports:[], //import other modules
    controllers: [TagController],
    providers: [TagService],
})
export class TagModule{}