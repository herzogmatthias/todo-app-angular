import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  appointmentList: Array<Appointment> = [];

  constructor() { }

  get AppointmentList() {return this.appointmentList; }
  addAppointment(appointment: Appointment) {
    this.appointmentList.push(appointment);
  }
  deleteAppointment(id: string) {
    this.appointmentList.splice(this.appointmentList.findIndex(appointment => appointment.id === id));
    return this.appointmentList;
  }
}
