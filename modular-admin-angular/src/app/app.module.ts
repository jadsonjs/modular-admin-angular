import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { InternalModule } from './internal/internal.module';

import { InternalComponent } from './internal/internal.component';


@NgModule({
  /**
   * are to make directives (including components and pipes) from the current module
   * available to other directives in the current module.
   * Selectors of directives, components or pipes are only matched against *** the HTML *** if they
   * are declared or imported.
   */
  declarations: [
    AppComponent
  ],
  /**
   * makes the exported declarations of other modules available in the current module
   *
   * The RoutingModule of the module needs to be imported also
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    InternalModule,

  ],
  /**
   * are to make services and values known to Dependence Injection.
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
