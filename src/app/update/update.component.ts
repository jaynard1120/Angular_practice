import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() firstName = '';
  @Input() lastName = '';
  @Input() nationality = '';
  @Input() Age = '';
  @Input() gender = '';
  @Output() saveData = new EventEmitter();
  @Output() saveChanges = new EventEmitter();
  @Output() hide = new EventEmitter();
  // personInfo = new FormGroup({
  //     firstName: new FormControl("Jaynard"),
  //     lastName: new FormControl(),
  //     nationality: new FormControl(),
  //     Age: new FormControl(),
  //     gender: new FormControl()
  //   })
  //   saveInfo(names: any){

  //     this.personInfo.reset();
  //   }

  save(listNames: any) {
    this.saveChanges.emit(listNames)
    this.hide.emit(false)
    }
  cancel(){
    this.hide.emit(false)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
