import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolicyModalComponent } from './edit-policy-modal.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PolicyModalComponent', () => {
  let component: EditPolicyModalComponent;
  let fixture: ComponentFixture<EditPolicyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UserService ],
      declarations: [ EditPolicyModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPolicyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event when close button pressed', () => {
    spyOn(component.closeModal, 'emit');
    component.clickCloseModal();
    expect(component.closeModal.emit).toHaveBeenCalled();
  });
});
