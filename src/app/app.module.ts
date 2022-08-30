import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { TextboxComponent } from './boxes/textbox/textbox.component';
import { DropboxComponent } from './boxes/dropbox/dropbox.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SelectorComponent,
    TextboxComponent,
    DropboxComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
