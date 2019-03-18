import {Component, Input, OnInit} from '@angular/core';
import {faPencilAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';

interface Title {
    title: string;
    type: string;
}

@Component({
    selector: 'caf-title',
    templateUrl: '../../templates/components/title.html'
})

export class TitleComponent implements OnInit {
    @Input('data') data;
    _dataDefault: Title = {
        title: '',
        type: ''
    };
    faPlus = faPlus;
    faPencilAlt = faPencilAlt;
    faTrash = faTrash;

    constructor() {
    }

    ngOnInit(): void {
        this.data = {...this._dataDefault, ...this.data};
    }
}
