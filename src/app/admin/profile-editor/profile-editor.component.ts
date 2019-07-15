import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent implements OnInit {

  profileForm = new FormGroup({
      firstName : new FormControl('Franck'),
      lastName : new FormControl('Sebbah'),  
      address: new FormGroup({
        zip : new FormControl('75009'),
        city : new FormControl('Paris'),
        state : new FormControl('Ile de France')
      })
  })
  
  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profileForm.value);
  this.profileForm.patchValue({
    firstName:'Nancy',
    address:{
      zip:'77000',
      city:'Melun',
      state:'Seine & Marne'
    }
  })

  }
}