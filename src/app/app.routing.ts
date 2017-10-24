import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './cv/profile/profile.component';
import { EducationComponent } from './cv/education/education.component';
import { ExperienceComponent } from './cv/experience/experience.component';
import { LanguagesComponent } from './cv/languages/languages.component';
import { InterestsComponent } from './cv/interests/interests.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'languages', component: LanguagesComponent },
    { path: 'interests', component: InterestsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
