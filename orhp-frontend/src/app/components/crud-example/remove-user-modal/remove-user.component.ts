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
  selector: 'app-remove-user-modal',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css'],
})
export class RemoveUserComponent {
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
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public clickCloseModal(): void {
    this.closeModal.emit();
  }

  public deleteUser(id: string): void {
    console.log('userid from remove user ocmponent is ' + id);
    this.userService.deleteUser(id).subscribe((res) => {
      this.closeModal.emit();
    });
  }
}
