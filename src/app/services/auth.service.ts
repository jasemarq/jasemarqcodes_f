import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  constructor(private http: Http) { }


  // Query all projects
  getProjects()
  {
  	let headers = new Headers();
  	return this.http.get("http://localhost:8000/projects/all")
  	.map((res :Response) => res.json());
  }


}
