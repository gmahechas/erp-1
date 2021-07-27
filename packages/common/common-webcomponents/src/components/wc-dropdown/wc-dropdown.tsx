import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';
import { MDCSelect } from '@material/select';

@Component({
  tag: 'wc-dropdown',
  styleUrl: 'wc-dropdown.scss',
  shadow: false,
})
export class WcDropdown {
  @Element() element: HTMLElement;
  select: MDCSelect;

  @Prop() name = '';
  @Prop({ mutable: true, reflect: true }) value: string | object = '';
  @Prop() label = '';
  @Prop() required = false;
  @Prop() disabled = false;
  @Event() selectChange: EventEmitter<string | object>;

  componentDidRender() {
    this.select = new MDCSelect(this.element.querySelector('.mdc-select'));
    this.select.listen('MDCSelect:change', (event: CustomEvent) => {
      this.value = event.detail.value;
      this.selectChange.emit(this.value);
    });
  }

  render() {
    return (
      <Host name={this.name}>
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
              <slot />
            </ul>
          </div>
        </div>
      </Host>
    );
  }

}
