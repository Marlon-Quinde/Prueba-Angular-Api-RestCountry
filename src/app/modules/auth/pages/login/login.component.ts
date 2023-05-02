import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../services/validator.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  hide: boolean = true;

  public myForm: FormGroup = this.fb.group({
    usuario: ['',[ Validators.required] ],
    password: ['',[ Validators.required]  ],
  })


  constructor(private fb:FormBuilder,
              private validatorService: ValidatorService,
              private authService: AuthService,
              private messaggeService: MessageService,
              private router: Router){}

  //Validar Campos
  isValidField(field: string): boolean | null {
    return this.validatorService.isValidField( field, this.myForm)
  }

  login(){
    const usuario: string = this.myForm.value.usuario
    const password: string = this.myForm.value.password
    console.log(usuario, password)
    this.authService.login(usuario, password).subscribe({
      next: (resp) => {
        if(!resp){
          this.messaggeService.add({ severity: 'error', summary: 'Error', detail: 'Las credenciales son incorrectas' })
          return
        }
        this.messaggeService.add({ severity: 'success', summary: 'Validacion correcta', detail: 'Las credenciales son validas' })
        this.authService.loggedIn.next(true);
        setTimeout ( () => { this.router.navigate(['../../paises']) }, 2000)
      },
      error: (err) => {
        this.messaggeService.add({ severity: 'error', summary: 'Error', detail: 'Error' })
      }
    })

  }





}
