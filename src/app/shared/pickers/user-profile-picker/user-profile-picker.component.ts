import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {UserProfile} from '../../../crm/models/user-profile';
import {UserProfileService} from '../../../crm/services/user-profile.service';

@Component({
  selector: 'pek-user-profile-picker',
  templateUrl: './user-profile-picker.component.html',
  styleUrls: ['./user-profile-picker.component.scss']
})
export class UserProfilePickerComponent implements OnInit {
  @Output() selectUserProfile: EventEmitter<number> = new EventEmitter<number>();
  @Input() currentUserProfileId: number;
  isLoading = true;
  userProfiles: UserProfile[] = [];
  selectedUserProfileId: number;

  private destroy$ = new Subject();

  constructor(
    private readonly userProfileService: UserProfileService,
  ) {
  }

  ngOnInit(): void {
    this.userProfileService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(userProfiles => {
      this.userProfiles = userProfiles;
      console.log(this.currentUserProfileId);

      if (this.currentUserProfileId) this.selectedUserProfileId = this.currentUserProfileId;

      this.isLoading = false;
    });
  }

  onSelectCompany() {
    this.selectUserProfile.emit(this.selectedUserProfileId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
