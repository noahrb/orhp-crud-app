import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { User } from 'src/app/models/User';
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

  loader: boolean = false;

  constructor(private userService: UserService) {}

  public clickCloseModal(): void {
    this.closeModal.emit();
  }

  public onClickSubmit(data: any) {
    this.loader = true;
  //   this.userService
  //     .saveNewPerson(data.email.value, data.name.value, data.phone.value, this.user.policies.map((policy) => policy.id.toString()))
  //     .subscribe((res) => {
  //       console.log(res);
  //       this.loader = false;
  //       this.clickCloseModal();
  //     });
  }
}
