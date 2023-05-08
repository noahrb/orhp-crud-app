import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-remove-user-modal',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css'],
})
export class RemoveUserComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Input() modalOpen: any;

  public clickCloseModal(): void {
    this.closeModal.emit();
  }
}
