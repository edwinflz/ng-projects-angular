import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-container',
  templateUrl: './forms-container.container.html',
  styleUrls: ['./forms-container.container.scss']
})
export class FormsContainerComponent implements OnInit {

  public controlField = new FormControl('Form Control');

  constructor() { }

  ngOnInit(): void {
  }

}
