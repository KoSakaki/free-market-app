import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';

@Controller('items')
export class ItemsController {

  constructor(private readonly ItemsService: ItemsService){}
  @Get()
  findAll() {
    return this.ItemsService.findAll();
  }

  @Post()
  create(
    @Body('id') id:string,
    @Body('name') name:string,
    @Body('price') price:number,
    @Body('description') description:string,    
    ): Item {
      const item: Item = {
        id,
        name,
        price,
        description,
        status: ItemStatus.ON_SALE
      }
    return this.ItemsService.create(item);
  }
}
