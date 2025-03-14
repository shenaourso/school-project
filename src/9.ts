
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get('https://api.example.com/students');
  }

  createStudent(student: Student) {
    return this.http.post('https://api.example.com/students', student);
  }

  updateStudent(id: number, student: Student) {
    return this.http.put(`https://api.example.com/students/${id}`, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(`https://api.example.com/students/${id}`);
  }
}