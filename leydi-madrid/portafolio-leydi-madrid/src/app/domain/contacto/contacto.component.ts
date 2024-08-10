import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent implements OnInit {
  camposVaciosSubmit!: string;
  formularioEnviado!: string;
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.initForm();
  }

  onSubmit() {
    if (this.contactForm.invalid || this.contactForm.untouched) {
      this.camposVaciosSubmit =
        'Por favor, complete todos los campos del formulario';
      return;
    }
    this.formularioEnviado =
      'Mensaje enviado con éxito, muy pronto me pondré en contacto 😊';
    console.log('Formulario enviado', this.contactForm.value);
    this.contactForm.reset();
  }

  onFieldBlur(event: any) {
    this.camposVaciosSubmit = '';
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.minLength(3)]],
      text: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }
}
