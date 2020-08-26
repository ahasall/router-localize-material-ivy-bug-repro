import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identity',
})
export class IdentityPipe implements PipeTransform {
  constructor(private ref: ChangeDetectorRef) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    this.ref.detectChanges();
    return value;
  }
}
