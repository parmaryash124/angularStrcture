import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// it not component on every mount.// but reintilalzing the whole compoents.
// style app.componets are effective
export class AppComponent {
  title = 'test';
  user: User = {
    username: '',
    email: '',
    mobileNumber: '',
    nationality: '',
  };

  submit() {
    console.log(this.user, 'user');
  }
}
export interface User {
  username: string;
  email: string;
  mobileNumber: string;
  nationality: string;
}
