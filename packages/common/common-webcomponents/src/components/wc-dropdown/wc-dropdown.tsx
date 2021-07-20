import { Component, Host, h, Element, Prop } from '@stencil/core';
import { MDCSelect } from '@material/select';
import { IItem } from '../../utils/item.interface';

@Component({
  tag: 'wc-dropdown',
  styleUrl: 'wc-dropdown.scss',
  shadow: false,
})
export class WcDropdown {
  @Element() element: HTMLElement;
  select: MDCSelect;

  @Prop() label = '';
  @Prop() required = false;
  @Prop() disabled = false;
  @Prop() data: IItem[] = [];

  constructor() {}

  componentDidRender() {
    this.select = new MDCSelect(this.element.querySelector('.mdc-select'));
  }

  private getOptions() {
    return this.data.map((item: IItem) => {
      return (
        <li
          class={{
            'mdc-list-item': true,
            'mdc-list-item--selected': item.selected,
            'mdc-list-item--disabled': item.disabled,
          }}
          data-value={item.value}
        >
          <span class="mdc-list-item__ripple"></span>
          <span class="mdc-list-item__text">{item.label}</span>
        </li>
      );
    });
  }
  render() {
    return (
      <Host>
        <div
          class={{
            'mdc-select mdc-select--outlined': true,
            'mdc-select--required': this.required,
            'mdc-select--disabled': this.disabled,
          }}
        >
          <div class="mdc-select__anchor">
            <span class="mdc-notched-outline">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__notch">
                <span class="mdc-floating-label">{this.label}</span>
              </span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
            <span class="mdc-select__selected-text-container">
              <span class="mdc-select__selected-text"></span>
            </span>
            <span class="mdc-select__dropdown-icon">
              <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false">
                <polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
                <polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
              </svg>
            </span>
          </div>

          <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
            <ul class="mdc-list">
              <li class="mdc-list-item" data-value="">
                <span class="mdc-list-item__ripple"></span>
              </li>
              {this.getOptions()}
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
