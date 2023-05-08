import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Policy } from 'src/app/models/Policy';
import { User } from 'src/app/models/User';
import { PolicyService } from 'src/app/services/policy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-crud-example',
  templateUrl: './crud-example.component.html',
  styleUrls: ['./crud-example.component.css']
})
export class CrudExampleComponent {
  data: User[] = [];
  modalOpen: boolean = false;
  removeUserModalOpen: boolean = false;
  policyModalOpen: boolean = false;
  editUserModalOpen: boolean = false;

  activePolicy: Policy = {
    id: 0, addresses: 0, monthly_premium: 0, deductible: 0 };

  activeUser: User = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
    policies: [],
    addresses: [],
  };
  policyService: any;

  constructor(private userService: UserService, policyService: PolicyService) {
    userService.getAllUser().subscribe(data => {
      this.data = data;
    });
    this.policyService = policyService;
   }

  ngOnInit(): void {
  }

  public openModal(): void {
    this.modalOpen = true;
  }

  public closeModal(): void {
    this.modalOpen = false;
  }

  public openRemoveUserModal(name: string) {
    this.removeUserModalOpen = true;
  }

  public closeRemoveUserModal(): void {
    this.removeUserModalOpen = false;
  }

  public openPolicyModal(policy: number) {
    this.policyService.getPolicy(policy).subscribe((res: any) => {
      this.activePolicy = res[0];
      console.log(this.activePolicy);
      this.policyModalOpen = true;
    });
    
    // this.deductible = policy.deductible;
    // this.activePolicy = policy;
    // this.policyModalOpen = true;
    // console.log(this.deductible);
  }

  public closePolicyModal(): void {
    this.policyModalOpen = false;
  }

  public openEditUserModal(user: User) {
    this.editUserModalOpen = true;
    this.activeUser = user;
  }

  public closeEditUserModal(): void {
    this.editUserModalOpen = false;
  }

}
