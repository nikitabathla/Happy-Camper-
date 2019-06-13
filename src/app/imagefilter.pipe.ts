import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagefilter'
})
export class ImagefilterPipe implements PipeTransform {

  transform(images: any, id: any): any {
   if(id === "") return images;

    return images.filter(function(image) {
      return (image.id === id);
    })

  }

}

