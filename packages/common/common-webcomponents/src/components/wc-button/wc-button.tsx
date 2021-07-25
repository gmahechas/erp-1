import { Component, Host, h, Prop, Element } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'wc-button',
  styleUrl: 'wc-button.scss',
  shadow: false,
})
export class WcButton {
  @Element() element: HTMLElement;
  button: MDCRipple;

  @Prop() type = '';
  @Prop() icon = '';
  @Prop() disabled = false;

  componentDidRender() {
    this.button = new MDCRipple(this.element.querySelector('.mdc-button'));
    this.button.unbounded = true;
  }

  render() {
    return (
      <Host>
        <button class={`mdc-button ${this.handleType()}`} disabled={this.disabled}>
          <span class="mdc-button__ripple"></span>
          {this.handleIcon()}
          <span class="mdc-button__label">
            <slot />
          </span>
        </button>
      </Host>
    );
  }

  private handleType() {
    if (this.type === 'outlined') {
      return 'mdc-button--outlined';
    } else if (this.type === 'raised') {
      return 'mdc-button--raised';
    } else {
      return '';
    }
  }

  private handleIcon() {
    return (
      this.icon != '' && (
        <i class="material-icons mdc-button__icon" aria-hidden="true">
          {this.icon}
        </i>
      )
    );
  }
}
