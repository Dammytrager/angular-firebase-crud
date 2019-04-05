import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()

export class ToastService {
    constructor(private toastr: ToastrService) {}

    showToast(message, title?, options?) {
        this.toastr.success(message, title, options);
    }
}
