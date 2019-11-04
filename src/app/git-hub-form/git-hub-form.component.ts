import { Component, OnInit } from '@angular/core';
import { GitHub} from '../git-hub';
// import { from } from 'rxjs';

@Component({
  selector: 'app-git-hub-form',
  templateUrl: './git-hub-form.component.html',
  styleUrls: ['./git-hub-form.component.css']
})
export class GitHubFormComponent implements OnInit {

  username:string;
  
  searchuser(username){
    this.username = new username ('','','','',0,0,0,'','',new Date);
  }

  // constructor(private github:GitHub) {

  //  }

  ngOnInit() {
  }

}
