import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { OtherComponent } from './other/other.component'
import { UpdateFormComponent } from './updateForm/updateForm.component'
import { from } from 'rxjs';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    OtherComponent,
    UpdateFormComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
