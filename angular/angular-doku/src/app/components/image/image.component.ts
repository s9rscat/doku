import { Component, Input, OnInit } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { NamespaceService } from 'src/app/services/namespace.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() imgName!: string;
  imgRoot: string = '/assets/images/';

  imgPath: Observable<string> = this.namespaceService
    .getNamespace()
    .pipe(map((namespace) => this.imgRoot + namespace + '/' + this.imgName));

  constructor(private namespaceService: NamespaceService) {}
}
