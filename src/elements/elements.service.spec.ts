import { Test, TestingModule } from '@nestjs/testing';
import { ElementsService } from './elements.service';

describe('ElementsService', () => {
  let service: ElementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElementsService],
    }).compile();

    service = module.get<ElementsService>(ElementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all elements', () => {
    const result = service.findAll();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('name');
    expect(result[0]).toHaveProperty('alias');
    expect(result[0]).toHaveProperty('description');
    expect(result[0]).toHaveProperty('category');
  });
});
