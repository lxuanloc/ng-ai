import { inject, Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {IProduct} from "./model";
import { environment } from 'src/app/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ProductService {
    private api = environment.apiUrl;
    private http = inject(HttpClient);
  
  getPosts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.api}/posts`);
  }

  getPost(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.api}/posts/${id}`);
  }

}
