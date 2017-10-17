import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatExpansionModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
    ],
    exports: [
        MatButtonModule,
        MatExpansionModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
    ],
})
export class MaterialModule { }
