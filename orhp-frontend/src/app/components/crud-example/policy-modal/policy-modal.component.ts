import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Policy } from 'src/app/models/Policy';
import { User } from 'src/app/models/User';
import { PolicyService } from 'src/app/services/policy.service';
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

  @Input() policy: Policy = {
    id: '',
    monthly_premium: '',
    deductible: '',
    addresses: [],
    users: [],
  };
  selectedUsers: Array<string> = [];
  users: Array<any> = [];

  constructor(
    private userService: UserService,
    private policyService: PolicyService
  ) {
    this.userService.getAllUser().subscribe((res: any) => {
      this.users = res;
      this.selectedUsers = this.policy.users.map((user) => user);
    });
  }

  public clickCloseModal(): void {
    this.closeModal.emit();
    console.log(this.deductible);
  }

  public onClickSubmit(data: any) {
    console.log(
      'submit',
      this.policy.id,
      data.monthlyPremium.value,
      data.deductible.value,
      this.selectedUsers
    );
    this.policyService
      .updatePolicy(
        this.policy.id,
        data.monthlyPremium.value,
        data.deductible.value,
        this.selectedUsers
      )
      .subscribe((res) => {
        console.log(res);
        this.loader = false;
        this.clickCloseModal();
      });
  }

  public selectOption(user: User) {
    if (this.selectedUsers.includes(user.id.toString())) {
      this.selectedUsers.splice(
        this.selectedUsers.indexOf(user.id.toString()),
        1
      );
      return;
    } else {
      this.selectedUsers.push(user.id.toString());
    }
  }
}
