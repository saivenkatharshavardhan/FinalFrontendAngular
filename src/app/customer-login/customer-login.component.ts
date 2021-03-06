import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { Login } from '../login';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent implements OnInit {
  login: Login = new Login();
  constructor(private loginService: LoginServiceService,private router:Router) {}

  ngOnInit(): void {}

  userLogin() {
    this.loginService.loginUser(this.login).subscribe((res) => {
      alert(JSON.stringify(res))
      console.log(res)
      if (res.status == true) {
        sessionStorage.setItem('customerId', String(res.customerId));
        sessionStorage.setItem('customerName', res.customerName);
        sessionStorage.setItem('userTye',res.userType)

        if(res.userType=="farmer"){

          this.router.navigate(['/farmer-welcome']);

        }else if(res.userType=="bidder"){
          this.router.navigate(['/bidder-welcome']);
        }
      }
    });
  }
}
