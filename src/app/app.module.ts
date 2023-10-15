import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonFileService } from './services/save-json.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]),
    NgbModule,
    HttpClientModule,
    AutocompleteLibModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [JsonFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
