import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppointmentsService } from '../services/appointments.service';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addForm: FormGroup;
  allAppointments: Array<Appointment> = [];

  constructor(private fb: FormBuilder,
              private appointmentService: AppointmentsService) {
    this.addForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      description: ['', [Validators.required]],
      title : ['', [Validators.required]],
      date: [new Date(), [Validators.required]]
    });
  }
  getEmailErrorMessage() {
    return this.addForm.get('email').hasError('required') ? 'You must enter a value' :
        this.addForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }
  ngOnInit() {
    this.allAppointments = this.appointmentService.AppointmentList;
  }

  submit() {
    const appointmentToAdd = new Appointment(
      this.ID(),
      this.addForm.get('title').value,
      this.addForm.get('description').value,
      this.addForm.get('firstname').value,
      this.addForm.get('lastname').value,
      this.addForm.get('email').value,
      this.addForm.get('date').value
    );
    this.allAppointments = [...this.allAppointments, appointmentToAdd];
    this.appointmentService.addAppointment(appointmentToAdd);
  }
  delete(event: string) {
    this.allAppointments = this.appointmentService.deleteAppointment(event);
  }
  ID =  () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

}
