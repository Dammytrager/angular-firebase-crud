import { Component } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';


@Component({
    selector: 'caf-filter',
    templateUrl: '../../templates/components/filter.html'
})
export class FilterComponent {
    faSearch = faSearch
}
