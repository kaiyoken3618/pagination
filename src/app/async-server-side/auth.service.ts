import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 

   
@Injectable({
    providedIn: 'root'
  })

export class AuthService{  

constructor(private httpService: HttpClient) { }

getData() {
    return this.httpService.get
    ('https://jsonplaceholder.typicode.com/todos');
  } 

}