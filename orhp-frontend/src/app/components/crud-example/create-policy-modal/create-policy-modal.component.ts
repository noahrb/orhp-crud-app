import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Policy } from 'src/app/models/Policy';
import { User } from 'src/app/models/User';
import { PolicyService } from 'src/app/services/policy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-policy-modal',
  templateUrl: './create-policy-modal.component.html',
  styleUrls: ['./create-policy-modal.component.css'],
})
export class CreatePolicyModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Input() modalOpen: any;
  @Input() users: Array<User> = [];
  loader: boolean = false;
  selectedUsers: Array<String> = [];

  constructor(private userService: UserService, private policyService: PolicyService) {
    this.userService.getAllUser().subscribe((res: any) => {
      this.users = res;
    });
  }

  public clickCloseModal(): void {
    this.closeModal.emit();
  }

  public onClickSubmit(data: any) {
    this.loader = true;
    this.policyService
      .saveNewPolicy(data.policyid.value, data.premium.value, data.deductible.value, this.selectedUsers)
      .subscribe((res) => {
        this.loader = false;
        this.clickCloseModal();
      });
  }

  public selectOption(user: User) {
    if(this.selectedUsers.includes(user.id.toString())) {
      this.selectedUsers.splice(this.selectedUsers.indexOf(user.id.toString()), 1);
      return;
    } else {
      this.selectedUsers.push(user.id.toString());
    }
  }
}
