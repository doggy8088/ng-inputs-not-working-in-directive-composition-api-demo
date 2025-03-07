import { MyCompComponent } from './my-comp/my-comp.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnotherDirective } from './another.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyCompComponent, AnotherDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
