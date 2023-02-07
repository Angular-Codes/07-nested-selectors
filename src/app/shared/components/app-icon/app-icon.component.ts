import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.css']
})
export class AppIconComponent {

  @Input() width: string = '24';
  @Input() height: string = '24';
  @Input() name: string = '';
  @Output() clicked: EventEmitter<any> = new EventEmitter();

}
