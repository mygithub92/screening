import { Component, ElementRef, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tt-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]
})
export class MultiSelectComponent implements ControlValueAccessor {
  @Input() selections: any[];
  @Input() id: string;
  @Input() displayField = 'value';
  @Input() invalid: boolean;

  public value = [];
  private propagateChnage = (_: any) => {};
  private propagateTouched = (_: any) => {};

  constructor(private el: ElementRef) {}

  writeValue(obj: string[]): void {
    if (obj) {
      this.value = obj;
    }
  }

  isChekced(i: number): boolean {
    return this.value.find(v => v.id === this.selections[i].id);
  }

  updateValue() {
    const inputs = this.el.nativeElement.getElementByTabName('input');
    const newValue = [];
    this.selections.forEach((selection, i) => {
      if (inputs[i].checked) {
        newValue.push(selection);
      }
    });
    this.propagateChnage(newValue);
    this.propagateTouched(newValue);
  }

  registerOnChange(fn: any): void {
    this.propagateChnage = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
