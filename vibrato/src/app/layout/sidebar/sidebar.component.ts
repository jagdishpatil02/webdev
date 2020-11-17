import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../shared/shared.data.service';
import { Router } from '@angular/router';
import { Common } from '../../common';
declare var $: any;
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    number: any;
    constructor(private router: Router) { }

    ngOnInit() {

    }

}
