import { ToastrService } from './../service/toastr/toastr.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
    // this.toastrService.success('app started')
  }

}
