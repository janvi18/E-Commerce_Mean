import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup

  constructor(private sessionService: SessionService, private toastr: ToastrService, private router: Router) {
    this.myForm = new FormGroup({
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      gender: new FormControl(""),

    })
  }

  ngOnInit(): void {
  }
  signup() {
    console.log("from signup");
    console.log(this.myForm.value)
    this.sessionService.saveUser(this.myForm.value).subscribe(resp => {
      this.toastr.success("Signup Done", "", { timeOut: 3000 })
      this.router.navigateByUrl("/login")
    }
    )};
}
