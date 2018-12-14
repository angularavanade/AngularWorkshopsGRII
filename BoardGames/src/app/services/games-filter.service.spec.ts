import { TestBed, inject } from '@angular/core/testing';

import { GameFilterService } from './games-filter.service';

describe('GameFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameFilterService]
    });
  });

  it('should be created', inject([GameFilterService], (service: GameFilterService) => {
    expect(service).toBeTruthy();
  }));
});
