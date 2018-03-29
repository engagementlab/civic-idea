import { Component, OnInit, HostListener, Inject, 
         ViewChild,
         AfterViewInit,
         ElementRef } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
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
    let pageY: number = evt.pageY || this._document.body.scrollTop;

    if((pageY / this._document.body.offsetHeight) > .15)
      this.scrollArrow.nativeElement.className = 'hidden';
    else      
      this.scrollArrow.nativeElement.className = '';
  };
  
  getData(): void {
    this.jsonSvc.getAllData('index')
        .subscribe(response => {
          
          let modulesMap = response.get("modules");
          this.modules = Array.from(modulesMap.values());
          this.index = response.get("index");
          
        });
  }

  public triggerScrollTo(id: string) {
    
    this._scrollToService
      .scrollTo({
        target: id,
        easing: 'easeOutElastic',
        duration: 2000
      });
  }

  constructor(private jsonSvc: JsonService, private _scrollToService: ScrollToService, @Inject(DOCUMENT) private _document: any) { }

  ngOnInit() {
    this.getData();
  }

}
