import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
    selector: 'app-setup-page',
    templateUrl: './setup-page.component.html',
    styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {
    public size;

    constructor(private userServise: UserService) {
    }

    ngOnInit() {
        this.size = this.userServise.size;
    }

    onChange() {
        this.userServise.setSize(+this.size);
    }
}
