import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  added: any;

  constructor( private loginService: LoginService, private toastr: ToastrService, private router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

    loginUser() {    
    if (this.loginForm.value.email && this.loginForm.value.password) {
      this.loginService.loginUserService(this.loginForm.value).subscribe(
      {
        next: (res)=>{
          console.log("Login Successfull" ,res)
          this.dialog.open(DialogComponent)
          this.toastr.success('Login Successfull !', 'Attention !')
          this.router.navigate(['/dashboard']);
        },
        error: (err)=>{
          console.log(err)
          this.toastr.warning('No Such User Found !', 'Attention !')
        }
      });
    }
  }
}