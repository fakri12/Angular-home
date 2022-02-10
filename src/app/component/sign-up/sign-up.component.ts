import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Client } from 'src/app/model/client.model';
import { clientService } from 'src/app/services/client.service';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  client: Client={
    id: 0,
    f_name: '',
    l_name: '',
    mail: '',
    city: '',
    adress: '',
    passowrd: ''
  };
  user!:SocialUser;
  isLogIn = false;
  constructor(private service:clientService, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      city : new FormControl('', Validators.required),
      adress: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      passVer: new FormControl('', Validators.required)
    })
    this.authService.authState.subscribe(
      data =>{
        this.isLogIn = (data != null)
      }
    )
  }
  submit(){
    console.log("HHHHHHHH");
    
    this.client.adress = this.form.value['adress'];
    this.client.f_name = this.form.value['name'];
    this.client.l_name = this.form.value['name'];
    this.client.mail = this.form.value['email'];
    this.client.city = this.form.value['city'];
    this.client.passowrd = this.form.value['pass'];
    
    this.service.save(this.client).subscribe();
  }

  get f(){
    return this.form.controls;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data =>{
      this.user = data;
    console.log(data);
    }
      );
      
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(data =>{
      this.user = data;}
      );
  }

  signOut(): void {
    this.authService.signOut();
  }

}
