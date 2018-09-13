import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme = 'sync1-theme';
  previousTheme = 'sync1-theme';
  parent: any;

  themes: {theme: string, display: string}[] = [
    {theme: 'sync1-theme', display: 'Sync1 Theme'},
    {theme: 'sync1-mixin-theme', display: 'Sync1 Mixin Theme'},
    {theme: 'custom-light-theme', display: 'Custom Light Theme'}
  ];

  prebuiltThemes: {theme: string, display: string}[] = [
    {theme: 'deeppurple-amber', display: 'Deep Purple / Amber'},
    {theme: 'indigo-pink', display: 'Indigo / Pink'},
    {theme: 'pink-bluegrey', display: 'Pink / Blue Grey'},
    {theme: 'purple-green', display: 'Purple / Green'},
  ];

  constructor(
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.parent = this.overlayContainer.getContainerElement().parentElement;
  }

  changeTheme = () => {
    this.parent.classList.replace(this.previousTheme, this.theme);
    this.previousTheme = this.theme;
  }

}
