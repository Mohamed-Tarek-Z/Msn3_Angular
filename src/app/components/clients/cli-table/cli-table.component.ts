import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Client } from '../../../models/client';
@Component({
  selector: 'app-cli-table',
  templateUrl: './cli-table.component.html',
  styleUrls: ['./cli-table.component.css']
})
export class CliTableComponent {
  @Input() clis!: Client[];
  @Output() emmiter: EventEmitter<Client> = new EventEmitter();
  displayedColumns: string[] = ['Num', 'Name', 'Img'];

  onClick(row: Client): void {
    this.emmiter.emit(this.clis[this.clis.indexOf(row)]);
  }
}
