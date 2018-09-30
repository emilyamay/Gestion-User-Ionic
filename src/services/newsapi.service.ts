/*
* Un exemple d'implmentation d'un service au sein d'angular
*/

// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// Models
// Importez vos models ici
@Injectable()
export class NewsApiService {

    private baseUrl: string = 'https://newsapi.org/v2/';
    private source:string="ign";
    private apiKey: string = 'd0020472581343fba0d9d3083135e5fa';
    
    constructor(private http: Http) { }

    public getObjects(): Promise<any> {
		const url = `${this.baseUrl}objects?apiKey=${this.apiKey}`;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}