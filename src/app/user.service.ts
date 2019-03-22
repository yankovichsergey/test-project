import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators/';

// import {map} from 'rxjs/operators/';

@Injectable()
export class UserService {
    size = 8;

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get<any>('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb/7)%27')
            .pipe(map(response => response.results))
            .pipe(map(users => {
                return users.map(u => {
                    return {
                        name: u.name.first + ' ' + u.name.last,
                        image: u.picture.large,
                        geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
                    };
                });
            }));
    }

    setSize(size) {
        this.size = size;
    }
}

