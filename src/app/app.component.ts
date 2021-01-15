import { Component } from '@angular/core';
import { Person } from './models';
import { FormGroup, FormControl, NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
  ) {

  }
  userNames: Person[] = [
    { firstName: "Jaynard", lastName: "Senilla", nationality: "Pinoy", Age: 20, gender: "Male" },
    { firstName: "Sernel", lastName: "Asunto", nationality: "Filipino", Age: 20, gender: "Male" },
    { firstName: "Naruto", lastName: "Uzumaki", nationality: "", Age: 30, gender: "Male" },
    { firstName: "Mori", lastName: "Jin", nationality: "", Age: 19, gender: "Male" }
  ]

  fullName = 'Jaynard L. Senilla';
  firstNameA = ""
  lastNameA = ""
  ageA;
  age;
  fullname = ""

  delete(event: Person) {
    this.userNames.splice(this.userNames.findIndex(fName => fName == event), 1)
  }

  nameInput = ''
  namesA = ["Sernel", "Jaynard", "Leordan"]

  getFullName(event: Event) {
    this.fullname = String(event);
  }
  getAge(event: Event) {
    this.age = Number(event);
  }

  // firstName;
  // lastName;
  // nationality;
  // Age;
  // gender;
  // add(listNames: NgForm) {
  //   if(listNames.valid){
  //     this.userNames.push(listNames.value)
  //   }
  //   listNames.reset()
  // }

  personInfo = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    nationality: new FormControl(),
    Age: new FormControl(),
    gender: new FormControl()
  })
  addInfo(names: any){
    this.userNames.push(names);
    this.personInfo.reset();
  }
  firstName;
  lastName;
  Age;
  gender;
  nationality;
  sharedData;
  update(value: any){
    this.firstName = value.firstName
    this.lastName = value.lastName
    this.Age = value.Age
    this.gender = value.gender
    this.nationality = value.nationality
    this.sharedData = value
  }
  hideDiv = false;
  hide(event: boolean){
    this.hideDiv = Boolean(event)? true:false;
  }

  save(event:Person){
    this.userNames[(this.userNames.findIndex(data => data == this.sharedData))]=event;
    
  }
}
