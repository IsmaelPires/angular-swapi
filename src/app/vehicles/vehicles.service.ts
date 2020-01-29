import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Vehicles } from './vehicles';
import { Observable } from 'rxjs';
import { IGenericOperations } from '../generic/igeneric-operations';
import { IGenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService implements IGenericOperations<Vehicles, number>{
  endpoint = environment.URL_API + "vehicles";
  constructor(private http: HttpClient) { }

  post(data: Vehicles) {
    console.log("Entrou dentro do serviço VehiclesService - método POST");
    this.http.post(this.endpoint, data);
  }
  put(id?: number, data?: Vehicles) {
    console.log("Entrou dentro do serviço VehiclesService - método Put");
    this.http.put(this.endpoint + "/" + id, data);
  }
  patch(id?: number, data?: Vehicles) {
    console.log("Entrou dentro do serviço VehiclesService - método Patch");
    this.http.patch(this.endpoint + "/" + id, data);
  }
  get(): Observable<IGenericResource<Vehicles>> {
    console.log("Entrou dentro do serviço FilmeService - método Get");
    return this.http.get<IGenericResource<Vehicles>>(this.endpoint);
  }
  getById(id?: number): Observable<Vehicles> {
    console.log("Entrou dentro do serviço VehiclesService - método GetById");
    return this.http.get<Vehicles>(this.endpoint + "/" + id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço VehiclesService - método DELETE");
    this.http.delete(this.endpoint + "/" + id);
  }

}
