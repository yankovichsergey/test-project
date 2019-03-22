import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    searchStr = '';
    users = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(users => {
            this.users = users;
        });
    }
}
