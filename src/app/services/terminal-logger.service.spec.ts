import { TestBed } from '@angular/core/testing';

import { TerminalLoggerService } from './terminal-logger.service';

describe('TerminalLoggerService', () => {
  let service: TerminalLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminalLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
