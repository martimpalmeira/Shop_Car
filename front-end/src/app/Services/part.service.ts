import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Part, PartClass } from '../Model/Models';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  part:PartClass = new PartClass();
  images:any;

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

  getAutomakers() {
    return this.http.get<String[]>("http://localhost:8082/api/v1/cars/automakers")
  }

  delete(id:number){
    return this.http.delete(`http://localhost:8082/api/v1/parts/${id}`)
  }

  getPartPage() {
    return this.part;
  }

  postImage(image : FormData){
    return this.http.post<number>("http://localhost:8082/api/v1/image/upload",image)
  }

  getImage() {
    return this.images
  }

  saveImage(image : any){
    this.images = image
  }

}
