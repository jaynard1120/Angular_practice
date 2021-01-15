import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';
import { UserAccount } from './../data.module'
import { Router } from '@angular/router'
import { Person } from '../models';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  
  @Input() person: Person = { firstName: "", lastName: "",nationality:"", Age: 0, gender:"" }
  @Output() data = new EventEmitter();
  show = false;
  showInfo(){
    this.show = (this.show)? false:true;
  }

  delete(){
    this.data.emit(this.person.firstName)
  }

  userName;
  password;
  @Input() names = '';


  name = ''
  defaultName = "Jaynard Senilla"
  listNames = []
  submit() {
    if (this.name == this.defaultName) {
      alert("The same!")
      this.name = ''
    }
  }
  reset() {
    this.name = ''
  }
  add($name) {
    if (!this.listNames.includes($name)) {
      this.listNames.push($name)
    }
    this.name = ''
  }
  constructor(

  ) { }

  ngOnInit(): void {}

}
