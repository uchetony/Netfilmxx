import { TestBed } from '@angular/core/testing';

import { MovieCartService } from './movie-cart.service';

describe('MovieCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieCartService = TestBed.get(MovieCartService);
    expect(service).toBeTruthy();
  });
});
