import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';


@Component({
    selector: 'caf-users',
    templateUrl: '../../templates/components/users.html'
})
export class UsersComponent implements OnInit {
    users;
    faPencilAlt = faPencilAlt;
    faTrash = faTrash;
    constructor (private _http: HttpClient, private _router: Router) {
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

    navigate(destination) {
        this._router.navigate([destination]);
    }
}
