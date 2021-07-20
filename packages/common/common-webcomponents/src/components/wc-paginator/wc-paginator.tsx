import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-paginator',
  styleUrl: 'wc-paginator.scss',
  shadow: false,
})
export class WcPaginator {
  render() {
    return (
      <Host>
        <div class="mdc-data-table__pagination">
          <div class="mdc-data-table__pagination-trailing">
            <div class="mdc-data-table__pagination-rows-per-page">
              <div class="mdc-data-table__pagination-rows-per-page-label">Rows per page</div>

              <wc-dropdown></wc-dropdown>

              <div class="mdc-data-table__pagination-navigation">
                <div class="mdc-data-table__pagination-total">1‑10 of 100</div>

                <wc-icon-button data-first-page="true" pagination-button="true" disabled>
                  first_page
                </wc-icon-button>
                <wc-icon-button data-prev-page="true" pagination-button="true" disabled>
                  chevron_left
                </wc-icon-button>
                <wc-icon-button data-next-page="true" pagination-button="true">
                  chevron_right
                </wc-icon-button>
                <wc-icon-button data-last-page="true" pagination-button="true">
                  last_page
                </wc-icon-button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
