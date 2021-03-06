import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@workshop/core-data';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  filters = [
    'ig-xpro2',
    'ig-willow',
    'ig-walden',
    'ig-valencia',
    'ig-toaster',
    'ig-sutro',
    'ig-sierra',
    'ig-rise',
    'ig-nashville',
    'ig-mayfair',
    'ig-lofi',
    'ig-kelvin',
    'ig-inkwell',
    'ig-hudson',
    'ig-hefe',
    'ig-earlybird',
    'ig-brannan',
    'ig-amaro',
    'ig-1977'
  ];

  chosenFilter = this.filters[Math.floor(Math.random() * this.filters.length)];
  userLogin = { email: '', password: ''};

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  login(email, password) {
    // Store the token
    this.authService.setToken('you_are_golden');
    // Redirect to home
    this.router.navigate(['']);
  }
}
