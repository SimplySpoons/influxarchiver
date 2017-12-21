import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Bug } from '../auth/bug';
import { Profile } from '../auth/profile';

@Component({
  selector: 'app-issuetracker',
  templateUrl: './issuetracker.component.html',
  styleUrls: ['./issuetracker.component.css']
})
export class IssuetrackerComponent implements OnInit {
  bugs: Bug[] = [];
  bugType: number;
  bugsLoading = true;
  status: string = "open";

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllBugs(0).subscribe(
      bugs => {
        this.bugs = bugs,
          this.bugsLoading = false;
      });
  }

  toggleBugs(status: number) {
    if (status == 0) {
      this.status = "open";
    }
    else {
      this.status = "closed";
    }
    this.bugsLoading = true;
    this.userService.getAllBugs(status).subscribe(
      bugs => {
        this.bugs = bugs,
          this.bugsLoading = false;
      });
  }

  closeBug(bug: Bug) {
    //alert('testing ' + bug.id);
    let index: number = this.bugs.indexOf(bug);
    this.userService.markBugComplete(bug.id).subscribe(bug => {
      //alert(JSON.stringify(bug)); 
    }
    );
    if (index !== -1) {
      this.bugs.splice(index, 1);
    }
  }

  deleteBug(bug: Bug) {
    let index: number = this.bugs.indexOf(bug);
    this.userService.deleteBug(bug.id).subscribe(bug => {

    });
    if (index !== -1) {
      this.bugs.splice(index, 1);
    }
  }

  checkBugType(bug: Bug) {
    if (bug.type == 'Bug') {
      this.bugType = 1;
    } else if (bug.type == 'Feature Request') {
      this.bugType = 2;
    } else if (bug.type == 'General Question') {
      this.bugType = 3;
    }
  }
}

