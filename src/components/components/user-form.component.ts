import {Component, Input, OnInit} from '@angular/core';
import {faCamera} from '@fortawesome/free-solid-svg-icons';


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

    ngOnInit(): void {
        this.data = {...this._dataDefaults, ...this.data}
    }

    changePicture (file) {
        if (!this.data.delete) {
            file.click()
        }
    }
}
