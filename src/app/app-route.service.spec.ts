import { TestBed } from '@angular/core/testing';

import { AppRouteService } from './app-route.service';

describe('AppRouteService', () => {
  let service: AppRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
