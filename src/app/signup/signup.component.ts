import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder:FormBuilder, private httpClient:HttpClient){
  
  }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    });
  }

  submit(): void{
    console.log(this.form.getRawValue());
    // // this.httpClient.post('http://10.51.151.96:8080/authenticate',this.form.getRawValue()).subscribe(res=>{
    // //   console.log(res);  
    // });
    
  }

}
