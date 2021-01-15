import { Component,Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Person } from '../models';


@Component({
    selector: 'app-updateForm',
    templateUrl: './updateForm.component.html',
    styleUrls: ['./updateForm.component.css']
  })
export class UpdateFormComponent{
    @Input() person: Person = { firstName: "", lastName: "",nationality:"", Age: 0, gender:"" }
    @Output() saveData = new EventEmitter();

    personInfo = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        nationality: new FormControl(),
        Age: new FormControl(),
        gender: new FormControl()
      })
      saveInfo(names: any){

        this.personInfo.reset();
      }
}