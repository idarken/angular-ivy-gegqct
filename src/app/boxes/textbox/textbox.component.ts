import { Component, OnInit } from '@angular/core';
import { TempData } from '../shared/cart.model';
import { CertService } from '../shared/cert.service';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
})
export class TextboxComponent implements OnInit {
  selectedItem: TempData;
  dataLoaded = false;

  constructor(private certService: CertService) {}

  ngOnInit() {
    this.certService.selectedItem.subscribe((item) => {
      if (item !== null) {
        this.selectedItem = item;
        this.dataLoaded = true;
      }
    });
  }
}
