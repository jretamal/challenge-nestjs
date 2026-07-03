import { Injectable } from '@nestjs/common';
import { Element } from './interfaces/element.interface';
import * as mockElements from './data/elements.json';

@Injectable()
export class ElementsService {
  // Cast JSON import to Element[] interface
  private readonly elements: Element[] = Array.from(mockElements);

  findAll(): Element[] {
    return this.elements;
  }
}
