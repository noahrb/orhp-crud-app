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
    addresses: 0,
    monthly_premium: 0,
    deductible: 0,
  };
  
  constructor(private userService: UserService) {}
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(this.policy);
  //   console.log(changes);
  //   this.policy = changes.policy.currentValue;
  // }

  public clickCloseModal(): void {
    this.closeModal.emit();
    console.log(this.deductible); 
  }

  public onClickSubmit(data: any) {
    this.loader = true;
    this.userService
      .saveNewPerson(data.email.value, data.name.value, data.phone.value)
      .subscribe((res) => {
        console.log(res);
        this.loader = false;
        this.clickCloseModal();
      });
  }
}
