import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { FormationComponent } from './cv/formation/formation.component';
import { ExperienceComponent } from './cv/experience/experience.component';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatGridListModule, MatIconModule } from '@angular/material';

// Routes
import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule, MatToolbarModule, MatSidenavModule, MatGridListModule, MatIconModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        CvComponent, FormationComponent, ExperienceComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

