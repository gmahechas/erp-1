import { Component, Host, h, Element } from '@stencil/core';
import { MDCDataTable } from '@material/data-table';

@Component({
  tag: 'wc-table',
  styleUrl: 'wc-table.scss',
  shadow: false,
})
export class WcTable {
  dataTable: MDCDataTable;
  @Element() element: HTMLElement;

  componentDidRender() {
    this.dataTable = new MDCDataTable(this.element.querySelector('.mdc-data-table'));
  }

  render() {
    return (
      <Host>
        <div class="mdc-data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="Dessert calories">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" scope="col">
                    Dessert
                  </th>
                  <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" scope="col">
                    Carbs (g)
                  </th>
                  <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" scope="col">
                    Protein (g)
                  </th>
                  <th class="mdc-data-table__header-cell" scope="col">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell">Frozen yogurt</th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
                  <td class="mdc-data-table__cell">Super tasty</td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell">Ice cream sandwich</th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.33333333333</td>
                  <td class="mdc-data-table__cell">I like ice cream more</td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell">Eclair</th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
                  <td class="mdc-data-table__cell">New filing flavor</td>
                </tr>
              </tbody>
            </table>
          </div>
          <slot name="paginator" />
        </div>
      </Host>
    );
  }
}
