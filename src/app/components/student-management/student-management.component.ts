import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  students: any[] = [];
  studentName: string = '';
  email: string = '';
  studentIdToUpdate: string = '';

  constructor(private apiService: ApiService) { }

    ngOnInit(): void{
      this.loadStudents();
    }

    loadStudents() {
      this.apiService.getStudents().subscribe((students:any) => {
        this.students = students;
      });
  }

  addStudent() {
    const student = {name: this.studentName, email: this.email};

    this.apiService.addStudent(student). subscribe((response:any) => {
        this.loadStudents();
        this.resetForm();
    })
  }

  updateStudent() {
    const student = {name: this.studentName, email: this.email};

    this.apiService.updateStudent(this.studentIdToUpdate, student). subscribe((response:any) => {
      this.loadStudents();
      this.resetForm();
  })
  }

  deleteStudent(id: string) {
    //show confirmation dialog before deleting student
    //if confirm, delete student 
    
    this.apiService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
      this.resetForm();
    })
  }

 private resetForm() {
  this.studentName = '';
  this.email = '';
  this.studentIdToUpdate = '';
 }
}
