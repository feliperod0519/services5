import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = [{name:'minou','status':'active'},{name:'manchitas','status':'active'}];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService:LoggingService) { }

  addAccount(name:string, status:string){
    this.accounts.push({'name':name,status:status});
  }

  updateStatus(id:number, status:string){
    this.accounts[id].status= status;
    this.loggingService.logStatusChange(status);
  }
}
