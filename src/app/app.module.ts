import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './cv/profile/profile.component';
import { EducationComponent } from './cv/education/education.component';
import { ExperienceComponent } from './cv/experience/experience.component';
import { LanguagesComponent } from './cv/languages/languages.component';
import { InterestsComponent } from './cv/interests/interests.component';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './app.material';

// Routes
import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent, EducationComponent, ExperienceComponent, LanguagesComponent, InterestsComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

