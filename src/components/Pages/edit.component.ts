import { Component } from '@angular/core';


@Component({
    selector: 'caf-edit',
    templateUrl: '../../templates/pages/edit.html'
})
export class EditPage {
    titleData = {
        title: "Edit User",
        type: 'edit'
    }
}
