import { ImagePathPipe } from "../pipes/image-path.pipe";


describe('ImagePathPipe', () => {
  it('create an instance', () => {
    const pipe = new ImagePathPipe();
    expect(pipe).toBeTruthy();
  });
});
