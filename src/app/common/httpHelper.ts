import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Request, RequestOptions, RequestOptionsArgs, Response, RequestMethod, URLSearchParams } from '@angular/http';

export function get(http: Http, url, params: RequestOptionsArgs = {}): Promise<Response> {
  if(!params.headers) {
    params.headers = new Headers();
  }
  let headers = params.headers;
  if(!headers.get('Content-Type')) {
    headers.append('Content-Type', 'application/json; charset=UTF-8');
  }
  return http
    .get(url, params)
    .toPromise();
}

export function post(http: Http, url, body: any, params: RequestOptionsArgs = {}): Promise<Response> {
  if(!params.headers) {
    params.headers = new Headers();
  }
  let headers = params.headers;
  if(!headers.get('Content-Type')) {
    headers.append('Content-Type', 'application/json; charset=UTF-8');
  }
  return http
    .post(url, body, params)
    .toPromise();
}

export function upload(http: Http, url, body: any): Promise<Response> {

  let headers = new Headers();
  headers.append("x-access-token", "6503E6DD-740E-48B4-B793-FD67D204F4F1");
  
  let params: RequestOptionsArgs = {
    headers: headers
  }

  return http
    .post(url, body, params)
    .toPromise();
}