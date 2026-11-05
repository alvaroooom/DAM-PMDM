import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list-component/people-list-component';
import { Home } from './pages/home/home';

export const routes: Routes = [
    // STEP1: he creado los componentes y a continuación las rutas que navegan a esos componentes
    // la ruta '/' es la página de inicio, desde donde se accede al resto de rutas
    {path: '', pathMatch: 'full', component: Home},
    {path: 'people-list', component: PeopleListComponent, data: {breadcrumb: 'People'}},
    {path: '**', redirectTo: ''}
];
