import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { AppComponent } from './app.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    // Adds theme to the body
    overlayContainer.getContainerElement().parentElement.classList.add('sync1-theme');
  }
}
