import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool-intro',
  templateUrl: './tool-intro.component.html',
  styleUrls: ['./tool-intro.component.scss']
})
export class ModuleIntroComponent implements OnInit {

	@Input() tool: any;

  constructor() { }

  ngOnInit() {
  }

}
