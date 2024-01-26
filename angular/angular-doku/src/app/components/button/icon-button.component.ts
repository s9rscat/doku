import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() icon!: string;
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter();

  handleOnClickEvent() {
    this.onClickEvent.emit();
  }
}
