import {Component, Input, OnInit} from '@angular/core';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {FirebaseService} from '../../services/firebase.service';


@Component({
    selector: 'caf-user-form',
    templateUrl: '../../templates/components/user-form.html'
})
export class UserFormComponent implements OnInit{
    @Input('data') data;
    _dataDefaults = {
        button: '',
        delete: false
    };
    faCamera = faCamera;

    constructor (private _api: FirebaseService) {

    }

    ngOnInit(): void {
        this.data = {...this._dataDefaults, ...this.data}
        this.deleteImage();
    }

    changePicture (file) {
        if (!this.data.delete) {
            file.click()
        }
    }

    upLoadPicture($event, file) {
        this._api.uploadFile($event.target.files[0])
            .then((snapshot) => {
                this.getImageUrl();
        });
        file.value = '';
    }

    getImageUrl() {
        this._api.getFileUrl().then((data) => {
           console.log(data);
        });
    }

    deleteImage() {
        this._api.deleteFile().then((data) => {
            console.log('deleted successfully');
        });
    }
}
