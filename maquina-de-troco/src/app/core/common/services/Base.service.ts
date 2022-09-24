import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private _baseURL = environment.BaseURL;

  constructor(
    private http: HttpClient
  ) { }

  protected GET<T>(path: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(`${this._baseURL}/${path}`, { headers: headers });
  }

  protected POST<T>(path: string, body: Object, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this._baseURL}/${path}`, body, { headers: headers });
  }

  protected PUT<T>(path: string, body: Object, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(`${this._baseURL}/${path}`, body, { headers: headers });
  }

  protected PATCH<T>(path: string, body: Object, headers?: HttpHeaders): Observable<T> {
    return this.http.patch<T>(`${this._baseURL}/${path}`, body, { headers: headers });
  }

  protected DELETE<T>(path: string, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(`${this._baseURL}/${path}`, { headers: headers });
  }

}
