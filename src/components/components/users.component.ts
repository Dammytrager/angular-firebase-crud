import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'caf-users',
    templateUrl: '../../templates/components/users.html'
})
export class UsersComponent implements OnInit {
    users;
    faPencilAlt = faPencilAlt;
    faTrash = faTrash;
    constructor (private _http: HttpClient) {
    }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers() {
        this._http.get("../../assets/dummy/users.json")
            .subscribe((data) => {
                    this.users = data;
                },
                (error) => {
                    console.log(error);
                });
    }
}
