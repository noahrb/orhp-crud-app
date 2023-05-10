import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Policy } from 'src/app/models/Policy';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-policy-modal',
  templateUrl: './policy-modal.component.html',
  styleUrls: ['./policy-modal.component.css'],
})
export class PolicyModalComponent {
  loader: boolean = false;

  @Output() closeModal = new EventEmitter<void>();
  @Input() modalOpen: any;
  @Input() deductible: number = 0;
  // @Input() policy: any;

  @Input() policy: Policy = {
    id: 0,
    monthly_premium: 0,
    deductible: 0,
    addresses: [],
    users: [],
  };
  
  constructor(private userService: UserService) {}

  public clickCloseModal(): void {
    this.closeModal.emit();
    console.log(this.deductible); 
  }

  public onClickSubmit(data: any) {
  //   this.loader = true;
  //   this.userService
  //     .saveNewPerson(data.email.value, data.name.value, data.phone.value, [this.policy.id.toString()])
  //     .subscribe((res) => {
  //       console.log(res);
  //       this.loader = false;
  //       this.clickCloseModal();
  //     });
  }
}