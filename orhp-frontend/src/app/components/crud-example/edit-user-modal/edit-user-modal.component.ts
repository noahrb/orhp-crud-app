import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Policy } from 'src/app/models/Policy';
import { User } from 'src/app/models/User';
import { PolicyService } from 'src/app/services/policy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css'],
})
export class EditUserModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Input() modalOpen: any;
  @Input() user: User = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    policies: [],
    addresses: [],
  };
  selectedPolicies: Array<String> = [];
  loader: boolean = false;
  policies: Array<any> = [];


  constructor(private userService: UserService, private policyService: PolicyService) {
    this.policyService.getAllPolicy().subscribe((res: any) => {
      this.policies = res;
      this.selectedPolicies = this.user.policies.map((policy) => policy);
    });
  }

  public clickCloseModal(): void {
    this.closeModal.emit();
  }

  public onClickSubmit(data: any) {
    this.loader = true;
    console.log('submit', data.name.value, data.email.value, data.phone.value, this.selectedPolicies);
    this.userService
      .updateUser(this.user.id, data.email.value, data.name.value, data.phone.value, this.selectedPolicies)
      .subscribe((res) => {
        this.loader = false;
        this.clickCloseModal();
      });
  }

  public selectOption(policy: Policy) {
    if(this.selectedPolicies.includes(policy.id.toString())) {
      this.selectedPolicies.splice(this.selectedPolicies.indexOf(policy.id.toString()), 1);
      return;
    } else {
      this.selectedPolicies.push(policy.id.toString());
    }
  }
}
