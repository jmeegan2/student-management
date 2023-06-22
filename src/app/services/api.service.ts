import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3001/api/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  addStudent(student: any): Observable<any> {
    return this.http.post(this.apiUrl, student)
  }

  updateStudent(id: string, student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, student)
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
