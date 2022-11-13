import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuditsService } from './audit.service';

@Component({
  selector: 'scroll-root',
  templateUrl: './scroll-load.component.html',
  //styleUrls: ['./app.component.scss']
})
export class ScrollLoadComponent implements OnInit{
  
  public audits:any[]= [];
  public totalCount=0;
  public pageIndex=0;
  public pageSize=10; 
  

  @ViewChild('uiElement', { static: false }) 
  public uiElement: ElementRef = {} as ElementRef;
  constructor(private auditService: AuditsService) { }


  public async ngOnInit(): Promise<void> {
    await this.getAudits(this.pageIndex,this.pageSize);
    this.pageIndex +=1;
  }


  public async getAudits(pageIndex: number,pageSize: number){
    try {
      const response:any= await this.auditService.getAudits(pageIndex,pageSize).toPromise();
      this.audits = [...this.audits,...response.audits]
      this.totalCount = response.totalCount;
    } catch (error) {
      console.log(error)
    }
  }

  public async onScrollLoadData(){
    const nativeElement= this.uiElement.nativeElement
    console.log(this.uiElement)
    if(nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight  &&  this.audits.length !== this.totalCount){
      await this.getAudits(this.pageIndex, this.pageSize);
      this.pageIndex +=1;
      nativeElement.scrollTop=0;
    }
  }

}
