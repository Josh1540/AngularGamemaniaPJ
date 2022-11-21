import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

 userModel = new User();

 message = "";

  receiveData(){

    const blackList: string[] = ["select ","or ", "from ", "drop ", "having ", "group ", "by ", "insert ","exec", "\"", "'", ";","--", "#", ];
      blackList.forEach(cadaPalavra => {
        if (this.userModel.email?.toLowerCase().includes(cadaPalavra)) {
          this.message = "Dados Incorretos";

          return;
        }
      })

     console.log(this.userModel);

     this.loginService.login(this.userModel).subscribe(
      {
         next:(response) => {
          console.log(response.body.user.nome)
          localStorage.setItem("nomeUsuario", response.body.user.nome)
          //if you want to clear the Local Storage of the user, you need another method like the setItem: example
          // localStorage.removeItem("nomeUsuario")


          this.router.navigateByUrl("/")
        }, error:(msgError) => {
          console.log("Something gone wrong");
          console.log(msgError.error); //giving a message of the error on the console
          this.message = msgError.error
          //alert(msgError.error); // giving a alert on the screen, but not so pretty/personalized

          if (msgError.error == "Password is too short")
          {
            this.message = "Senha é muito curta"
          } else { 
            this.message = msgError.error
          }
          
        }


         
      }
     );
  }

}
