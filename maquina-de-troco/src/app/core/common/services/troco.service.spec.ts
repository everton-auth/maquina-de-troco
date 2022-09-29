/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrocoService } from './troco.service';

describe('Service: Troco', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrocoService]
    });
  });

  it('should ...', inject([TrocoService], (service: TrocoService) => {
    expect(service).toBeTruthy();
  }));
});
