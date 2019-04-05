import {Component, Input, OnInit} from '@angular/core';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {FirebaseService} from '../../services/firebase.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux, select} from '@angular-redux/store';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AppState} from '../../state/interface';
import {CHANGE_ACTIVE_USER} from '../../state/actions';


@Component({
    selector: 'caf-user-form',
    templateUrl: '../../templates/components/user-form.html'
})
export class UserFormComponent implements OnInit {
   @select('route') $route: Observable<string>;
   @select('activeUser') $activeUser: Observable<any>;
   $route$: Subscription;
   $activeUser$: Subscription;
   activeUser;
   route;
   imageUrl = './assets/images/avatar.svg';

    @Input('data') data;
    _dataDefaults = {
        button: '',
        delete: false,
        type: ''
    };
    faCamera = faCamera;
    userForm: FormGroup;
    isSubmit = false;
    showLoader = false;
    showImageLoader = false;

    constructor(
        private _api: FirebaseService,
        private _fb: FormBuilder,
        private _router: Router,
        private toastr: ToastrService,
        private ngRedux: NgRedux<AppState>
    ) {}

    get surname() {
        return this.userForm.get('surname');
    }
    get firstname() {
        return this.userForm.get('firstname');
    }
    get age() {
        return this.userForm.get('age');
    }

    ngOnInit(): void {
        this.$route$ = this.$route.subscribe((data) => {
           this.route = data;
        });
        this.$activeUser$ = this.$activeUser.subscribe((data) => {
            this.activeUser = data;
        });
        this.data = {...this._dataDefaults, ...this.data};
        this.userForm = this._fb.group({
            surname: [this.activeUser.surname || '', Validators.required],
            firstname: [this.activeUser.firstname || '', Validators.required],
            age: [this.activeUser.age || '', Validators.required]
        });
    }

    changePicture(file) {
        if (!this.data.delete) {
            file.click();
        }
    }

    upLoadPicture($event, file, id) {
        this.showImageLoader = true;
        this._api.uploadFile($event.target.files[0], this.activeUser.id)
            .then(async (snapshot) => {
                await this.getImageUrl(id);
                this.showImageLoader = false;
                this.toastr.success('image uploaded successfully');
        }).catch((error) => {
            this.toastr.error('image not uploaded');
            this.showImageLoader = false;
        });
        file.value = '';
    }

    updateAvatar(url) {
       return this._api.updateAvatar(url, this.activeUser.id);
    }

    getImageUrl(id) {
        this._api.getFileUrl(id).then((url) => {
           this.updateAvatar(url).then((data) => {
               this.imageUrl = url;
               const activeUser = {...this.activeUser, ...{avatar: url}};
               this.ngRedux.dispatch({type: CHANGE_ACTIVE_USER, activeUser: activeUser});
               // this._api.getUsers();
           });
        });
    }

    deleteImage(id) {
        return this._api.deleteFile(id);
    }

    async updateUser() {
        this.isSubmit = true;
        this.showLoader = true;
        if (this.userForm.valid) {
           await this._api.updateUser(this.userForm.value, this.activeUser.id).then((data) => {
               this.toastr.success('user updated successfully');
           }).catch((error) => {
               this.toastr.error('operation not successful');
           }).finally(() => {
               this._router.navigate(['/users']);
           });
           // this._api.getUsers();
        }
    }

    async createUser() {
        this.isSubmit = true;
        if (this.userForm.valid) {
            this.showLoader = true;
            const data = Object.assign({avatar: ''}, this.userForm.value);
            await this._api.CreateUser(data).then((data) => {
                this.toastr.success('user created successfully');
            }).catch((error) => {
                this.toastr.error('user not created');
            }).finally(() => {
                this._router.navigate(['/users']);
            });
            // this._api.getUsers();
        }
    }

    deleteUser(id) {
        this.showLoader = true;
        this._api.deleteUser(id).then(() => {
            this.deleteImage(id).then(() => {
                // this._api.getUsers();
                this.toastr.success('user deleted successfully');
                this._router.navigate(['/users']);
            }).catch((error) => {
                this.toastr.error('operation not successful');
            }).finally(() => {
                this._router.navigate(['/users']);
            });
        });
    }
}
