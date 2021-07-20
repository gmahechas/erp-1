import { Component, Host, h, Prop, Element } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'wc-icon-button',
  styleUrl: 'wc-icon-button.scss',
  shadow: false,
})
export class WcIconButton {
  @Element() element: HTMLElement;
  @Prop() paginationButton: boolean = false;
  @Prop() dataFirstPage: boolean = false;
  @Prop() dataPrevPage: boolean = false;
  @Prop() dataNextPage: boolean = false;
  @Prop() dataLastPage: boolean = false;
  @Prop() disabled: boolean = false;

  componentDidRender() {
    const iconButton = new MDCRipple(this.element.querySelector('.mdc-icon-button'));
    iconButton.unbounded = true;
  }
  
  render() {
    return (
      <Host>
        <button
          class={{ 'mdc-icon-button material-icons': true, 'mdc-data-table__pagination-button': this.paginationButton }}
          data-first-page={this.dataFirstPage}
          data-prev-page={this.dataPrevPage}
          data-next-page={this.dataNextPage}
          data-last-page={this.dataLastPage}
          disabled={this.disabled}
        >
          <div class="mdc-button__icon">
            <slot />
          </div>
        </button>
      </Host>
    );
  }
}
