import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserComponent } from './remove-user.component';

describe('RemoveUserComponent', () => {
  let component: RemoveUserComponent;
  let fixture: ComponentFixture<RemoveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveUserComponent);
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
