import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent implements OnInit {
/*
  profileForm = new FormGroup({
      firstName : new FormControl('Franck'),
      lastName : new FormControl('Sebbah'),  
      address: new FormGroup({
        zip : new FormControl('75009'),
        city : new FormControl('Paris'),
        state : new FormControl('Ile de France')
      })
  })
  */

  profileForm = this.fb.group({
      firstName : ['Franck'],
      lastName : ['Sebbah'],  
      address: this.fb.group({
        zip : ['75009'],
        city : ['Paris'],
        state : ['Ile de France']
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
  })


  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control('New Alias!'));
  }

  onSubmit(){
    console.log(this.profileForm.value);
  }

  updateProfile(){
    //this.profileForm.get('firstName').setValue('Nancy');    
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