import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { MouseComponent } from './mouse.component'
import { HomeComponent } from './routes/home.component';
import { FadeBlockComponent } from './fadeblock.component';
import { BasicComponent } from './routes/basic.component';

import { ContainedComponent } from './routes/contained.component';

import { AdvancedComponent } from './routes/advanced.component';

import { AppComponent } from './app.component';

import { NotFoundComponent } from './routes/notfound.component';

import { AnimboxComponent } from './animbox.component';

const animationRoutes:Routes = [

  {

    path: 'animation-home',

    component: HomeComponent,

    data: {

      animation: {

        value: 'home',

      }

    }

  },

  {

    path: 'animation-basics',

    component: BasicComponent,

    data: {

      animation: {

        value: 'basic',

      }

    }

  },

  {

    path: 'animation-contained',

    component: ContainedComponent,

    data: {

      animation: {

        value: 'contained',

      }

    }

  },

  {

    path: 'animation-advanced',

    component: AdvancedComponent,

    data: {

      animation: {

        value: 'advanced',

      }

    }

  },

  {

    path: '',

    redirectTo: '/animation-home',

    pathMatch: 'full',

    data: {

      animation: {

        value: 'home',

      }

    }

  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    BasicComponent,

    ContainedComponent,
    FadeBlockComponent,
    AdvancedComponent,
    NotFoundComponent,
    AnimboxComponent,
    MouseComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
