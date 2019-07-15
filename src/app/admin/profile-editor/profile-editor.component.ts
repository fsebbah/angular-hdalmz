import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent implements OnInit {

  profileForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),  })
  
  
  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }
}