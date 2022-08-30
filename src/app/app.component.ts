import { Component, VERSION } from '@angular/core';
import { CertService } from './shared/cert.service';
import { ModeService } from './shared/mode.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mode: 'drop' | 'select' = 'select';

  constructor(
    private certService: CertService,
    private modeService: ModeService
  ) {
    this.modeService.mode.subscribe((mode) => {
      this.mode = mode;
    });
  }
}
