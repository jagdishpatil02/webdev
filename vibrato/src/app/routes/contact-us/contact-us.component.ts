import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      subject: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: [""]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  submitForm() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      let email = this.registerForm.controls.name.value;
      let subject = this.registerForm.controls.subject.value;
      let emailBody = this.registerForm.controls.message.value;

      document.location.href =
        "mailto:" +
        "sales@vibraoentertainment.com" +
        "?subject=" +
        subject +
        "&body=" +
        emailBody;
    }
  }
}
