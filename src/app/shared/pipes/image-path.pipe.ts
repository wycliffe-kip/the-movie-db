import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {
  private baseUrl = 'https://image.tmdb.org/t/p/w500';

  transform(path: string): string {
    return path ? `${this.baseUrl}${path}` : 'assets/img/placeholder.png';
  }
}
