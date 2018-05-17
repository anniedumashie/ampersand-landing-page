import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-email-collector',
  templateUrl: './email-collector.component.html',
  styleUrls: ['./email-collector.component.css']
})
export class EmailCollectorComponent implements OnInit {
  email = '';
  constructor() { }

  ngOnInit() {
  }

  emailSubmit() {
    console.log('Submitting email');
    axios.post('https://test.doseyapp.com/api/early_access', {
      email: this.email
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log('Oooops there was an error: ', err);
      });
  }
}
