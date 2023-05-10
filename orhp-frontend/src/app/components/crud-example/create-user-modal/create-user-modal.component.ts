import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Policy } from 'src/app/models/Policy';
import { PolicyService } from 'src/app/services/policy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.css'],
})
export class CreateUserModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Input() modalOpen: any;
  @Input() policies: Array<Policy> = [];
  loader: boolean = false;
  searchValue: string = '';
  filteredPolicies$: Observable<Array<Policy>> = new Observable();
  selectedPolicies: Array<String> = [];

  constructor(
    private userService: UserService,
    private policyService: PolicyService
  ) {
    this.policyService.getAllPolicy().subscribe((res: any) => {
      this.policies = res;
      this.getFilteredPolicies$;
    });
  }

  getFilteredPolicies$: Observable<Array<Policy>> = of(
    this.policies.filter((policy) =>
      policy.id.toString().includes(this.searchValue)
    )
  );

  public clickCloseModal(): void {
    this.closeModal.emit();
  }

  public onClickSubmit(data: any) {
    this.loader = true;
    this.userService
      .saveNewUser(
        data.userid.value,
        data.email.value,
        data.name.value,
        data.phone.value,
        this.selectedPolicies
      )
      .subscribe((res) => {
        this.loader = false;
        this.clickCloseModal();
      });
  }

  public selectOption(policy: Policy) {
    if (this.selectedPolicies.includes(policy.id.toString())) {
      this.selectedPolicies.splice(
        this.selectedPolicies.indexOf(policy.id.toString()),
        1
      );
      return;
    } else {
      this.selectedPolicies.push(policy.id.toString());
    }
  }
}
