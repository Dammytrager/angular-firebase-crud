import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'caf-loader',
    templateUrl: '../../templates/components/loader.html'
})
export class LoaderComponent implements OnInit {
    @Input() data;
    _dataDefaults = {
        type: 1,
        color: 'primary-pink'
    };

    constructor () {
    }

    ngOnInit(): void {
        this.data = {...this._dataDefaults, ...this.data};
    }
}
