import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,FormArray,Validators,ValidatorFn,AbstractControl,ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent implements OnInit {
  /*
  profileForm = new FormGroup({
      firstName : new FormControl('',[
        Validators.required,
        Validators.minLength(5)
        ]),
      lastName : new FormControl('Sebbah'),  
      address: new FormGroup({
        zip : new FormControl('75009'),
        city : new FormControl('Paris'),
        state : new FormControl('Ile de France')
      }),
      aliases: new FormArray([])
  })
  */
  
  profileForm = this.fb.group({
      firstName : ['Franck',
      [
        Validators.required,
        Validators.minLength(5),
        this.forbiddenNameValidator()
      ]],
      lastName : ['Sebbah'],  
      address: this.fb.group({
        zip : ['75009'],
        city : ['Paris'],
        state : ['Ile de France']
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ]),
      password:[''],
      confirm:['']
  },{validators: this.passwordMatchesValidator()})
  
  passwordMatchesValidator(): ValidatorFn{
    return(control: FormGroup):ValidationErrors => {
      const password = control.get('password');
      const confirm = control.get('confirm');

    if(!password || !confirm) return null;
    if(password.value !== confirm.value) return {'nomatch':true};
    return null;
    }
  }


  forbiddenNameValidator(): ValidatorFn{
    return (control: AbstractControl):{[key: string]:any} => {
      if(!control){
        return null;
      }
      const isForbidden = control.value === 'franck';
      if(isForbidden){
        return {'isForbidden':{value:control.value}};
      }
      return null;
    }
  }

  get firstName(){
    return this.profileForm.get('firstName');
  }

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