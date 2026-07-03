import { Test, TestingModule } from '@nestjs/testing';
import { ElementsController } from './elements.controller';
import { ElementsService } from './elements.service';

describe('ElementsController', () => {
  let controller: ElementsController;
  let service: ElementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElementsController],
      providers: [ElementsService],
    }).compile();

    controller = module.get<ElementsController>(ElementsController);
    service = module.get<ElementsService>(ElementsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all elements from service', () => {
    const mockResult = [
      {
        id: 1,
        name: 'Tony Stark',
        alias: 'Iron Man',
        description: 'Genius billionaire',
        category: 'hero',
      },
    ];
    const findAllSpy = jest
      .spyOn(service, 'findAll')
      .mockReturnValue(mockResult);

    const result = controller.findAll();
    expect(result).toBe(mockResult);
    expect(findAllSpy).toHaveBeenCalled();
  });
});
