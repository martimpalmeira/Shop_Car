import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Part } from '../Model/Models';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[Part]>("http://localhost:8082/api/v1/parts")
  }

  getOne(id:number):Observable<Part>{
    return this.http.get<Part>(`http://localhost:8082/api/v1/parts/${id}`)
  }

  post(data: Part){
    return this.http.post<Part>("http://localhost:8082/api/v1/parts",data)
  }

  put(id:number, data:Part){
    return this.http.put<[Part]>(`http://localhost:8082/api/v1/parts/${id}`, data)
  }

  delete(id:number){
    return this.http.delete(`http://localhost:8082/api/v1/parts/${id}`)
  }
}
