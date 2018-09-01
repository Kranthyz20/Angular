import { TestBed, inject } from '@angular/core/testing';

import { ProcessHTTPmsgService } from './process-httpmsg.service';

describe('ProcessHTTPmsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHTTPmsgService]
    });
  });

  it('should be created', inject([ProcessHTTPmsgService], (service: ProcessHTTPmsgService) => {
    expect(service).toBeTruthy();
  }));
});
