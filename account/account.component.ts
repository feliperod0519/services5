import { Component, Input } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
    private accountService: AccountService){}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status); 
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.statusUpdated.emit(status);
    console.log('A server status changed, new status: ' + status);  
  }
}
