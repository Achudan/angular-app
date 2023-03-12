import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss']
})
export class ContentImageComponent {
  @Input()
  image_src!:string;

  ngOnInit(){
    console.log('source image is '+this.image_src)
  }

}
