import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PopupModule } from '@progress/kendo-angular-popup';


@NgModule({
	declarations: [
		AppComponent,
		SeriesComponent,
		DropdownComponent
	],
	imports: [
		BrowserModule,
		DropDownsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		GridModule,
		PopupModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
