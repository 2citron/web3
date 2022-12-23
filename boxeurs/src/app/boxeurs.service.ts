import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boxeurs } from './boxeurs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BoxeursService {

  boxeursUrl = 'http://localhost:3000/'; 

  constructor(private http: HttpClient) { }

  getBoxeurs(): Observable<Boxeurs[]> { 
    return this.http.get<Boxeurs[]>(this.boxeursUrl + 'boxeurs');  
  }
  getBoxeursAnnee(anneeDebut:string, anneeFin:string): Observable<Boxeurs> { 
    return this.http.get<Boxeurs>(this.boxeursUrl + 'boxeurs/debut/'+anneeDebut+'/'+anneeFin);  
  }
  getBoxeursPoids(poids: string): Observable<Boxeurs> { 
    return this.http.get<Boxeurs>(this.boxeursUrl + 'boxeurs/categorie-de-poids'+poids);  
  }
  getBoxeursId(_id: string): Observable<Boxeurs> { 
    return this.http.get<Boxeurs>(this.boxeursUrl + 'boxeurs/'+_id);  
  }
  addBoxeurs(boxeurs: Boxeurs): Observable<Boxeurs> {
    return this.http.post<Boxeurs>(this.boxeursUrl + 'boxeurs', boxeurs, httpOptions);
  }
  updateBoxeur(boxeurs: Boxeurs): Observable<any> {
    const id = boxeurs._id;
    return this.http.put<Boxeurs>(this.boxeursUrl + 'boxeurs/' + id, boxeurs, httpOptions);
  }
  deleteBoxeur(_id: string): Observable<Boxeurs> {
    return this.http.delete<Boxeurs>(this.boxeursUrl + 'boxeurs/' + _id, httpOptions);
  }
}

  