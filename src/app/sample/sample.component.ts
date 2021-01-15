import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from '../data.module';
import { FormControl,FormGroup, Validators, MinLengthValidator } from '@angular/forms'
import { OtherComponent } from '../other/other.component'

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.css']
})

export class SampleComponent {
    userName: string;
    password: string;
    constructor(
        private router: Router
    ){}
    
    horay = ''
    name = new FormControl('');
    updateName(){
        this.name.setValue('Jaynard')
    }

    register = new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        email: new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required])
    })

    // userModel = new OtherComponent("","")

    userEmails = new FormGroup({
        primaryEmail: new FormControl('',[
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        secondaryEmail: new FormControl('',[
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
      }); 
      get primEmail(){
        return this.userEmails.get('primaryEmail')
      }
    
      get secondEmail(){
        return this.userEmails.get('secondaryEmail')
      }







    @Input() firstNameS = '';
    @Input() lastNameS = '';
    @Input() ageS;
    @Output() fullname = new EventEmitter();
    @Output() age = new EventEmitter()

    getFullName() {
        this.fullname.emit(this.firstNameS + " " + this.lastNameS)
    }

    getAge(){
        this.age.emit(this.ageS)
    }

    currentUser: UserAccount = {
        userName: "jaynard",
        password: "jay1120"
      }
    
      login(userAccount: UserAccount) {
        console.log(userAccount);
        if (this.currentUser.userName === userAccount.userName && this.currentUser.password === userAccount.password) {
          this.router.navigate([''])
          console.log("Authorized!")
        } else {
          console.log("Not authorized!");
        }
        this.userName = "";
        this.password = "";
      }
    

    image = [{ text: "Click to see your future!", img: '../../assets/images/marian.jfif' },
    { text: "Welcome to Zombie Apologies!", img: '../../assets/images/smeagol.jfif' }]
    chosen = this.image[0];
    count = 0;
    change($event) {
        console.log($event)
        this.count += 1
        this.chosen = (this.count % 2 == 0) ? this.image[0] : this.image[1]
    }

    textInput = '';
}
