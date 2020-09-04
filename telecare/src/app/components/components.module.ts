import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { NavmenuComponent } from './navmenu/navmenu.component';



@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, NavmenuComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent, NavmenuComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
