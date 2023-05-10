import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserModalComponent } from './create-user-modal.component';

describe('CreateModalComponent', () => {
  let component: CreateUserModalComponent;
  let fixture: ComponentFixture<CreateUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserModalComponent);
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
