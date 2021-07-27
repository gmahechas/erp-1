import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';
import { MDCTextField } from '@material/textfield';

@Component({
  tag: 'wc-input',
  styleUrl: 'wc-input.scss',
  shadow: false,
})
export class WcInput {
  @Element() element: HTMLElement;
  input: MDCTextField;

  @Prop() name = '';
  @Prop({ mutable: true, reflect: true }) value = '';
  @Prop() label = '';
  @Prop() required = false;
  @Prop() disabled = false;
  @Event() inputChange: EventEmitter<string>;

  componentDidRender() {
    this.input = new MDCTextField(this.element.querySelector('.mdc-text-field'));
  }

  render() {
    return (
      <Host name={this.name}>
        <label
          class={{
            'mdc-text-field mdc-text-field--outlined': true,
            'mdc-text-field--disabled': this.disabled,
          }}
        >
          <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading"></span>
            <span class="mdc-notched-outline__notch">
              <span class="mdc-floating-label">{this.label}</span>
            </span>
            <span class="mdc-notched-outline__trailing"></span>
          </span>
          <input type="text" name={this.name} class="mdc-text-field__input" value={this.value} onInput={this.onInput} required={this.required} disabled={this.disabled} />
        </label>
      </Host>
    );
  }

  private onInput = (event: InputEvent) => {
    this.value = (event.currentTarget as HTMLInputElement).value;
    this.inputChange.emit(this.value);
  };
}
