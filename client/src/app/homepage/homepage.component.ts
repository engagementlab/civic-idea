import { Component, OnInit, HostListener, Inject, 
         ViewChild,
         AfterViewInit,
         ElementRef } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { JsonService } from '../json.service';
import { fadeInAnimation } from '../_animations/fade';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomepageComponent implements OnInit {

  @ViewChild('scroll') scrollArrow: ElementRef;

  index: any;
  modules: any[];
  
  @HostListener('window:scroll', ['$event']) onWindowScroll(evt){
    // Cross-browser horsegarbage
    let pageY: number = evt.pageY || evt.target.documentElement.scrollTop || this._document.body.scrollTop;

    if((pageY / this._document.body.offsetHeight) > .15)
      this.scrollArrow.nativeElement.className = 'hidden';
    else      
      this.scrollArrow.nativeElement.className = '';
  };
  
  async getData() {
    const response = await this.jsonSvc.getAllData('index');
    console.log('home',response)
    let modulesMap = response[1];
    this.modules = Array.from(modulesMap.values());
    this.index = response[0];

  }

  public triggerScrollTo(name: string) {
    
    this._scrollToService
      .scrollTo({
        target: name.replace(/\s/g, "").toLowerCase(),
        easing: 'easeOutElastic',
        duration: 2000
      });
  }

  constructor(private jsonSvc: JsonService, private _scrollToService: ScrollToService, @Inject(DOCUMENT) private _document: any) { }

  async ngOnInit() {
    this.getData();
  }

}
