import { Component, OnInit } from "@angular/core";
import { formControlBinding } from "@angular/forms/src/directives/reactive_directives/form_control_directive";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html"
})
export class UserProfileComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    phoneNumber: new FormControl("")
  });

  updateProfile() {
    this.profileForm.patchValue({});
  }

  constructor() {}
  ngOnInit() {}
}