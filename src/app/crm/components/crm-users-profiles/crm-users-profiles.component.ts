import {Component, OnInit} from '@angular/core';
import {UserProfile} from '../../models/user-profile';
import {ModalService} from '@shared/services/modal.service';
import {UserProfileService} from '../../services/user-profile.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'pek-crm-users-profiles',
  templateUrl: './crm-users-profiles.component.html',
  styleUrls: ['./crm-users-profiles.component.scss']
})
export class CrmUsersProfilesComponent implements OnInit {
  isLoading = true;

  menuItems: MenuItem[] = [{
    label: 'Selected User Profile',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditUserProfile()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveUserProfile()
      }
    ]
  }];

  usersProfiles: UserProfile[] = [];
  selectedUserProfile: UserProfile;

  constructor(
    private modalService: ModalService,
    private userProfileService: UserProfileService
  ) {
  }

  ngOnInit(): void {
    this.getUserProfiles();
  }

  getUserProfiles() {
    this.userProfileService.get().subscribe(usersProfiles => {
      this.usersProfiles = usersProfiles;
      this.isLoading = false;
    })
  }

  onAddUserProfile() {
    this.userProfileService.createEditUserProfileModel('create').subscribe(userProfile => {
      if (userProfile) {
        this.usersProfiles.unshift(userProfile);
        this.renderTable();
      }
    });
  }

  onEditUserProfile() {
    this.userProfileService.createEditUserProfileModel('edit', this.selectedUserProfile).subscribe(userProfile => {
      if (userProfile) {
        const index = this.usersProfiles.findIndex(t => t.id === this.selectedUserProfile.id);
        this.usersProfiles[index] = userProfile;
        this.selectedUserProfile = this.usersProfiles[index];
        this.renderTable();
      }
    })
  }

  onRemoveUserProfile() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.userProfileService.delete(this.selectedUserProfile).subscribe(() => {
          const index = this.usersProfiles.findIndex(w => w.id === this.selectedUserProfile.id);
          this.usersProfiles.splice(index, 1);
          this.selectedUserProfile = null;
          this.renderTable();
        });
      }
    });
  }

  renderTable() {
    this.usersProfiles = this.usersProfiles.map(el => el);
  }
}
