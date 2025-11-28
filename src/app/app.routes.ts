import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me';
import { ExperienceComponent } from './experience/experience';
import { PortfolioComponent } from './portfolio/portfolio';

const routes: Routes = [
{
    path: '',
    component: AboutMeComponent,
    title: 'Home'
},
{
    path: 'experience',
    component: ExperienceComponent
},
{
    path: 'portfolio',
    component: PortfolioComponent
}];

export default routes;
