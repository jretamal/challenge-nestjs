import { Controller, Get } from '@nestjs/common';
import { ElementsService } from './elements.service';
import { Element } from './interfaces/element.interface';

@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Get()
  findAll(): Element[] {
    return this.elementsService.findAll();
  }
}
