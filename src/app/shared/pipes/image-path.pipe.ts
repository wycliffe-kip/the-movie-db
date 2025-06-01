import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {
  transform(path: string): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/default.jpg';
  }
}