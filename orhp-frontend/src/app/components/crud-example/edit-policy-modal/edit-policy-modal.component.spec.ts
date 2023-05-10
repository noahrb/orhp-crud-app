import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolicyModalComponent } from './edit-policy-modal.component';

describe('PolicyModalComponent', () => {
  let component: EditPolicyModalComponent;
  let fixture: ComponentFixture<EditPolicyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
