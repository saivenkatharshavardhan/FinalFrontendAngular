import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {



  constructor(private http:HttpClient) { }
  private url="http://localhost:8083/getAllFarmerSellRequest"

  getAllDetails(){
    return this.http.get(`${this.url}`);
  }
}
