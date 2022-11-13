import { Component, Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyload]',
})
export class LazyloadDirective {
  constructor(
    private thisElement: ElementRef,
    private lazyloadComponent: LazyloadComponent
  ) { 
    console.log(thisElement);
    const targetElement = thisElement.nativeElement; 
    console.log(targetElement);
    targetElement.addEventListener('scroll', () => {
      if (
        targetElement.scrollTop + targetElement.offsetHeight >=
        targetElement.scrollHeight
      ) {
        lazyloadComponent.loadMore();
      }
    });
  }
}

@Component({
  selector: 'app-lazyload',
  templateUrl: './scroll-stack.component.html',
 // styleUrls: ['./scroll-stack.component.scss'],
})
export class LazyloadComponent implements OnInit {
  letters = [
    {
      name: 'A',
    },
    {
      name: 'B',
    },
    {
      name: 'C',
    },
    {
      name: 'D',
    },
    {
      name: 'E',
    },
    {
      name: 'F',
    },
    {
      name: 'G',
    },
    {
      name: 'H',
    },
    {
      name: 'I',
    },
    {
      name: 'J',
    },
    {
      name: 'K',
    },
    {
      name: 'L',
    },
    {
      name: 'M',
    },
    {
      name: 'N',
    },
    {
      name: 'O',
    },
    {
      name: 'P',
    },
    {
      name: 'Q',
    },
    {
      name: 'R',
    },
    {
      name: 'S',
    },
    {
      name: 'T',
    },
    {
      name: 'U',
    },
    {
      name: 'V',
    },
    {
      name: 'W',
    },
    {
      name: 'X',
    },
    {
      name: 'Y',
    },
    {
      name: 'Z',
    },
    {
      name: 'B',
    },
    {
      name: 'C',
    },
    {
      name: 'D',
    },
    {
      name: 'E',
    },
  ];

  ind = 0;

  cachedLetters = this.letters.slice(0, 10);

  constructor() {}

  ngOnInit(): void {}

  loadMore() {
    console.log('running');
    this.ind = this.ind + 10;
    var r = 10;
    if (this.ind + 10 > this.letters.length) {
      r = this.letters.length - this.ind;
    }
    // console.log('Loading');
    this.cachedLetters = this.cachedLetters.concat(
      this.letters.slice(this.ind, r + this.ind)
    );
  }
}
