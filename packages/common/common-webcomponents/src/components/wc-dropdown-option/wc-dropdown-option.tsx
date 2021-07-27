import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-dropdown-option',
  styleUrl: 'wc-dropdown-option.scss',
  shadow: false,
})
export class WcDropdownOption {
  @Prop() value: string | object = '';
  @Prop() selected = false;
  @Prop() disabled = false;

  render() {
    return (
      <Host>
        <li
          class={{
            'mdc-list-item': true,
            'mdc-list-item--selected': this.selected,
            'mdc-list-item--disabled': this.disabled,
          }}
          data-value={this.value}
        >
          <span class="mdc-list-item__ripple"></span>
          <span class="mdc-list-item__text">
            <slot />
          </span>
        </li>
      </Host>
    );
  }
}
