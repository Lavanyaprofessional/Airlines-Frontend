import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
constructor(private formBuilder:FormBuilder,
            private httpClient:HttpClient,
            private router:Router
           ){
}
ngOnInit(): void {
  this.form = this.formBuilder.group({
    username:'',
    password:''
  });
}

submit(){
  console.log(this.form.getRawValue());
  let options = {
    withCredentials : true
  }
  this.httpClient.post('http://10.51.151.96:8080/authenticate',this.form.getRawValue(),options).subscribe(res=>{
    
      this.router.navigate(['/home']);  
});
}
}