import { Body, Controller, Delete, Get,Param, Patch, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { CreateItemDto } from './dto/creata-item.dto';

@Controller('items')
export class ItemsController {

  constructor(private readonly ItemsService: ItemsService){}
  @Get()
  findAll():Item[] {
    return this.ItemsService.findAll();
  }

  @Get(':id') // items/:id
  findById(@Param('id') id: string): Item {
    return this.ItemsService.findById(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto ): Item {
    return this.ItemsService.create(createItemDto);
  }

  @Patch(':id')
  updateStatus(@Param('id') id: string): Item {
    return this.ItemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.ItemsService.delete(id);
  }
}
