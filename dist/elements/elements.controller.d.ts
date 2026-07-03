import { ElementsService } from './elements.service';
import { Element } from './interfaces/element.interface';
export declare class ElementsController {
    private readonly elementsService;
    constructor(elementsService: ElementsService);
    findAll(): Element[];
}
