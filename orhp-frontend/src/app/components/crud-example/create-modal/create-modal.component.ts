import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Policy } from 'src/app/models/Policy';
import { PolicyService } from 'src/app/services/policy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css'],
})
export class CreateModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Input() modalOpen: any;
  @Input() policies: Array<Policy> = [];
  loader: boolean = false;

  constructor(private userService: UserService, private policyService: PolicyService) {
    this.policyService.getAllPolicy().subscribe((res: any) => {
      this.policies = res;
    });
  }

  public clickCloseModal(): void {
    this.closeModal.emit();
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
