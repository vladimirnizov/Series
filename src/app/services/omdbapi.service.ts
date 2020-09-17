import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse }   from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

const KEY = '66fc501b';
const URL = 'http://www.omdbapi.com/?apikey=';

@Injectable({
	providedIn: 'root'
})
export class ombdapiService {
	constructor(private http: HttpClient) { }

	getSeries(name:string) {
		return this.http.get(`${URL}${KEY}&t=${name}`).pipe(
			retry(2),
			catchError(this.handleError)
		);
  }

  getSeason(name:string, season: string) {
		return this.http.get(`${URL}${KEY}&t=${name}&Season=${season}`).pipe(
			retry(2),
			catchError(this.handleError)
		);
	}

  getEpisode(name:string, season: string, episode: string) {
		return this.http.get(`${URL}${KEY}&t=${name}&Season=${season}&Episode=${episode}`).pipe(
			retry(2),
			catchError(this.handleError)
		);
  }

	private handleError(error: HttpErrorResponse) {
		if(error.error instanceof ErrorEvent) {
			console.error(`An error occurred:, ${error.error.message}`);
		}
		else {
			console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
		}

		return throwError('Something bad happened; please try again later.');
	}
}
