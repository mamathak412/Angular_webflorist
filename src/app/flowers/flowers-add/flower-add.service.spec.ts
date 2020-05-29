import { TestBed } from '@angular/core/testing';

import { FlowerAddService } from './flower-add.service';

describe('FlowerAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowerAddService = TestBed.get(FlowerAddService);
    expect(service).toBeTruthy();
  });
});
