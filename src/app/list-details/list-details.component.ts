import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../models/appointment';
import { AppointmentsService } from './../services/appointments.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  selectedAppointment: Appointment;

  constructor(private route: ActivatedRoute,
              private appointmentService: AppointmentsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedAppointment = this.appointmentService.AppointmentList.find(appointment => appointment.id === params.id);
    });
  }

}
