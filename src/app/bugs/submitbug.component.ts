import { Component } from '@angular/core';
import { AppConfig } from '../app.config';
import { UserService } from '../_services/user.service';
import { ModalService } from '../_services/modal.service';
import { Bug } from '../auth/bug';
import { Profile } from '../auth/profile';

@Component({
  selector: 'app-submitbug',
  templateUrl: './submitbug.component.html',
  styleUrls: ['./submitbug.component.css']
})
export class SubmitbugComponent {
newBug: Bug = new Bug();
  types: any[] = [
    { value: 'Bug', display: 'Bug' },
    { value: 'Feature Request', display: 'Feature Request' },
    { value: 'General Question', display: 'General Question' }
  ]
  bugSubmitted = false;
  loading: boolean = false;
  profile: Profile;
  attachments: Array<string> = [];

  constructor(private user: AppConfig, private userService: UserService, private modalService: ModalService) {
    // this.profile = this.user.getCurrentUser();
    this.newBug.submittedBy = this.profile.email;
  }

  keyupHandlerFunction(data: any) {
    this.newBug.content = data;
  }

  getAttachments(data: any) {
    this.attachments = this.attachments.concat(data.id);
    this.newBug.attachments = JSON.stringify(this.attachments);
  }

  submitBug() {
    this.loading = true;
    this.userService.addBugNow(this.newBug).subscribe(data => {
      this.newBug = data;
      this.bugSubmitted = true;
      this.loading = false;
    },
      error => {
        //this.alertService.error(error);
        // this.loading = false;
      });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  addAnotherBug() {
    this.bugSubmitted = false;
    this.newBug.type = '';
    this.newBug.title = '';
    this.newBug.attachments = null;
  }
}
