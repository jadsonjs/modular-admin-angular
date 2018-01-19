import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { InternalComponent } from './internal/internal.component';

/*
 *  Using lazyload to load by demand the modules
 *
 * The loadChildren properly tells the router to fetch the ‘contacts.bundle.js’ when and
 * only when the user navigates to ‘contacts’, then merge the two
 * router configurations, and, finally, activate the needed components
 *
 *  loadChildren works, the module have to have a routing.module define
 * with a route to a component
 */
const routes: Routes = [
    //  { path: '', component: InternalComponent }  // without lazyload
    { path: '',               loadChildren:    './internal/internal.module#InternalModule' },
    { path: 'login',          loadChildren:    './login/login.module#LoginModule' },
    { path: 'signup',         loadChildren:    './singup/singup.module#SingupModule' },
    { path: 'resetpasswd',    loadChildren:    './resetpasswd/resetpasswd.module#ResetpasswdModule' },
    { path: 'error404',       loadChildren:    './error404/error404.module#Error404Module' },
    { path: 'error500',       loadChildren:    './error500/error500.module#Error500Module' },
    { path: 'backDashBoard',  redirectTo: '',          pathMatch: 'full' },
    { path: '**',             redirectTo: 'error404',  pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
