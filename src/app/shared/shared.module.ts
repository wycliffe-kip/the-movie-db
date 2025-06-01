import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePathPipe } from './pipes/image-path.pipe';

@NgModule({
  declarations: [ImagePathPipe],
  imports: [CommonModule],
  exports: [ImagePathPipe] 
})
export class SharedModule {}
