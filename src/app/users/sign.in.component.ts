import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataRepositoryService } from '../services/data-repository'

@Component({
  styles: [`
    form {
      color: #336699;
      font-size:18px;
      padding:30px;
      width: 298px;
      margin: 0 auto;
    }
    input {
      display: block;
      font-size:18px;
      padding-left:10px;
      width: 275px;
    }
    button {
      font-size: 24px;
      color: #556b8e;
    }
    button:disabled {
      color: #999999;
    }
    .header {
      color: #336699;
      text-align:center;
      padding-top:20px;
      margin-top:0;
    }
    .form-group {
      margin: 10px;
    }
    .buttons {
      text-align: right;
      margin-right: 0px;
    }
    .save {
      background-color: #CCDDFF;
      border-color: #CCDDFF;
    }
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder  { color: #999; }
  `],
  templateUrl: './sign.in.component.html'
})
export class SignInComponent {
  credentials:any = {};

  constructor(private router:Router, private dataRepository:DataRepositoryService) { }

  signIn(credentials:any) {
    this.dataRepository.signIn(credentials)
      .subscribe(
        null,
        (err) => {console.error(err, 'Error')},
        () => this.router.navigate(['/catalog'])
      )
  }

  cancel() {
    this.router.navigate(['/'])
  }
}

