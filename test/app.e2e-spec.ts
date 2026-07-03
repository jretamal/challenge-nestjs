import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { HttpExceptionFilter } from './../src/common/filters/http-exception.filter';
import { Element } from './../src/elements/interfaces/element.interface';

describe('App (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.init();
  });

  it('/api/v1/elements (GET) - should return elements list', () => {
    return request(app.getHttpServer())
      .get('/api/v1/elements')
      .expect(200)
      .then((response) => {
        const body = response.body as Element[];
        expect(Array.isArray(body)).toBe(true);
        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('id', 1);
        expect(body[0]).toHaveProperty('name', 'Tony Stark');
        expect(body[0]).toHaveProperty('alias', 'Iron Man');
        expect(body[0]).toHaveProperty('description');
        expect(body[0]).toHaveProperty('category', 'hero');
      });
  });

  it('/api/v1/non-existent-route (GET) - should return 404 formatted error', () => {
    return request(app.getHttpServer())
      .get('/api/v1/non-existent-route')
      .expect(404)
      .then((response) => {
        const body = response.body as Record<string, unknown>;
        expect(body).toHaveProperty('statusCode', 404);
        expect(body).toHaveProperty(
          'message',
          'Ruta inexistente: /api/v1/non-existent-route',
        );
        expect(body).toHaveProperty('timestamp');
        expect(body).toHaveProperty('path', '/api/v1/non-existent-route');
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
