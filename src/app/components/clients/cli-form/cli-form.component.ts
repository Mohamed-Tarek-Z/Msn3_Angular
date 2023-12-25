import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
@Component({
  selector: 'app-cli-form',
  templateUrl: './cli-form.component.html',
  styleUrls: ['./cli-form.component.css']
})
export class CliFormComponent implements OnInit {
  @Input() cli!: Client;
  @Output() emmiter: EventEmitter<Client> = new EventEmitter();
  @Output() IdEmmiter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    if (!this.cli) {
      this.cli = new Client();
    }
  }

  onSubmit(): void {
    this.emmiter.emit(this.cli as Client);
  }

  onDelet(): void {
    this.IdEmmiter.emit((this.cli as Client)._id);
  }

  onReset(): void {
    this.cli = new Client();
  }
}
