import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicauthhttpinterceptorService } from './service/basicauthhttpinterceptor.service';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
@NgModule({
 
  declarations: [
    AppComponent,
    PostComponent,
    AddPostComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
   
    CommonModule,
  ],
  providers: [
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicauthhttpinterceptorService, multi:true 
    }
    ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

