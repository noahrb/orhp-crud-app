import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudExampleComponent } from './crud-example.component';

describe('CrudExampleComponent', () => {
  let component: CrudExampleComponent;
  let fixture: ComponentFixture<CrudExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal when button pressed', () => {
    expect(component.modalOpen).toBe(false);
    component.openModal();
    expect(component.modalOpen).toBe(true);
    component.closeModal();
    expect(component.modalOpen).toBe(false);
  });

  it('should open edit user modal when button pressed', () => {
    expect(component.editUserModalOpen).toBe(false);
    component.openEditUserModal({id: '1', name: 'test', email: 'testemail@test.test', phone: 0, policies: [], addresses: []});
    expect(component.editUserModalOpen).toBe(true);
    component.closeEditUserModal();
    expect(component.editUserModalOpen).toBe(false);
  });

  it('should open remove user modal when button pressed', () => {
    component.openRemoveUserModal({id: '1', name: 'test', email: 'testemail@test.test', phone: 0, policies: [], addresses: []});
    expect(component.removeUserModalOpen).toBe(true);
    component.closeRemoveUserModal();
    expect(component.removeUserModalOpen).toBe(false);
  });

  it('should open create policy modal when button pressed', () => {
    expect(component.createPolicyModalOpen).toBe(false);
    component.openCreatePolicyModal();
    expect(component.createPolicyModalOpen).toBe(true);
    component.closeCreatePolicyModal();
    expect(component.createPolicyModalOpen).toBe(false);
  });

  it('should open edit policy modal when button pressed', () => {
    expect(component.policyModalOpen).toBe(false);
    component.openPolicyModal('1');
    expect(component.policyModalOpen).toBe(true);
    component.closePolicyModal();
    expect(component.policyModalOpen).toBe(false);
  });
});
