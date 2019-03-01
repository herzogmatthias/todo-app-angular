import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() allAppointments: Array<Appointment> = [];
  @Output() deleteEvent = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.allAppointments = changes.allAppointments.currentValue;
  }
  redirect(id: string) {
    this.router.navigate(['/list-details', id]);
  }
  delete(id: string) {
    this.deleteEvent.emit(id);
  }

}
