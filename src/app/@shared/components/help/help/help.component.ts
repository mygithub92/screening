import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tt-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  @HostBinding('style.display') display = 'content';
  show = false;

  @Input() helpText: any;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }

  hide() {
    this.show = false;
  }
}
