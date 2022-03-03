import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/model/client.model';
import { clientService } from 'src/app/services/client.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLogin = false
  form!: FormGroup;
  user!:SocialUser;
  verify = "";
  client: Client={
    id: 0,
    f_name: '',
    l_name: '',
    mail: '',
    city: '',
    adress: '',
    passowrd: ''
  };
  constructor(private service:clientService, private authService: SocialAuthService, private router:Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
    this.verify = this.router.url.substring(13)
    if(this.verify.length > 20){
      this.service.verification(this.verify).subscribe();
      this.verify = "";
      location.replace("")
    }
  }

  submit(){
    this.client.mail = this.form.value['email'];
    this.client.passowrd = this.form.value['password'];
    this.service.login(this.client).subscribe((_response: any) => {
      this.service.saveToken(_response.headers.get('Authorization'));
      this.loadClient();
      this.isLogin = true;
    },err=>{
      console.log(err);
    }
      );
  }
  get f(){
    return this.form.controls;
  }
  loadClient(){    
     this.service.loadUserDetails().subscribe(data =>{
        this.client = data
        this.service.client = this.client;
        
        this.isLogin = true;
        this.service.sendDataDetails();
      },err=>{
          console.log(err);
        }
      );
  }

  signInWithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data =>{
      this.user = data;
    console.log(data);
    }
      );
  }
}
