import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients!: Client[];
  client!: Client;
  errMess!: string;

  constructor(private cliService: ClientService) { }

  ngOnInit(): void {
    this.cliService.getClients().subscribe({
      next: (clis) => {
        this.clients = clis;
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
      }
    });
  }

  onCliAdd(cli: unknown) {
    if (this.clients.every((p) => { return p._id != (cli as Client)._id; })) {
      this.cliService.addNewClient(cli as Client).subscribe({
        next: () => {
          location.reload();
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
        }
      });
    } else {
      this.cliService.editClientById((cli as Client)._id as string, cli as Client).subscribe({
        next: () => {
          location.reload();
        },
        error: (errmess) => {
          this.errMess = <any>errmess;
        }
      });
    }
  }

  onTableClick(cli: Client) {
    this.client = cli;
  }

  onDelet(id: string) {
    this.cliService.deletClientById(id).subscribe({
      next: () => {
        location.reload();
      },
      error: (errmess) => {
        this.errMess = <any>errmess;
      }
    });
  }

}
