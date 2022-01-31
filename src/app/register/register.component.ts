import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerationForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('',[Validators.required, Validators.minLength(3)])
    // , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
  })

  constructor( private registerService: RegisterService, private toastr: ToastrService, private router: Router ) { }

  ngOnInit(): void {
  }

    registerUser(){
    this.registerService.registerUserService(this.registerationForm.value).subscribe(
      {
        next: (res)=>{
          console.log("User Registered Successfully" ,res)
          this.toastr.success('Registered Successfully !', 'Attention !')
          this.router.navigate(['/dashboard']);
        },
        error: (err)=>{
          console.log(err)
        }
      });
  };
}