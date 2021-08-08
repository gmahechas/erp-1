/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcButton {
        "disabled": boolean;
        "icon": string;
        "type": string;
    }
    interface WcDropdown {
        "disabled": boolean;
        "label": string;
        "name": string;
        "required": boolean;
        "value": string | object;
    }
    interface WcDropdownOption {
        "disabled": boolean;
        "selected": boolean;
        "value": string | object;
    }
    interface WcIconButton {
        "dataFirstPage": boolean;
        "dataLastPage": boolean;
        "dataNextPage": boolean;
        "dataPrevPage": boolean;
        "disabled": boolean;
        "paginationButton": boolean;
    }
    interface WcInput {
        "disabled": boolean;
        "label": string;
        "name": string;
        "required": boolean;
        "value": string;
    }
    interface WcPaginator {
    }
    interface WcTable {
    }
}
declare global {
    interface HTMLWcButtonElement extends Components.WcButton, HTMLStencilElement {
    }
    var HTMLWcButtonElement: {
        prototype: HTMLWcButtonElement;
        new (): HTMLWcButtonElement;
    };
    interface HTMLWcDropdownElement extends Components.WcDropdown, HTMLStencilElement {
    }
    var HTMLWcDropdownElement: {
        prototype: HTMLWcDropdownElement;
        new (): HTMLWcDropdownElement;
    };
    interface HTMLWcDropdownOptionElement extends Components.WcDropdownOption, HTMLStencilElement {
    }
    var HTMLWcDropdownOptionElement: {
        prototype: HTMLWcDropdownOptionElement;
        new (): HTMLWcDropdownOptionElement;
    };
    interface HTMLWcIconButtonElement extends Components.WcIconButton, HTMLStencilElement {
    }
    var HTMLWcIconButtonElement: {
        prototype: HTMLWcIconButtonElement;
        new (): HTMLWcIconButtonElement;
    };
    interface HTMLWcInputElement extends Components.WcInput, HTMLStencilElement {
    }
    var HTMLWcInputElement: {
        prototype: HTMLWcInputElement;
        new (): HTMLWcInputElement;
    };
    interface HTMLWcPaginatorElement extends Components.WcPaginator, HTMLStencilElement {
    }
    var HTMLWcPaginatorElement: {
        prototype: HTMLWcPaginatorElement;
        new (): HTMLWcPaginatorElement;
    };
    interface HTMLWcTableElement extends Components.WcTable, HTMLStencilElement {
    }
    var HTMLWcTableElement: {
        prototype: HTMLWcTableElement;
        new (): HTMLWcTableElement;
    };
    interface HTMLElementTagNameMap {
        "wc-button": HTMLWcButtonElement;
        "wc-dropdown": HTMLWcDropdownElement;
        "wc-dropdown-option": HTMLWcDropdownOptionElement;
        "wc-icon-button": HTMLWcIconButtonElement;
        "wc-input": HTMLWcInputElement;
        "wc-paginator": HTMLWcPaginatorElement;
        "wc-table": HTMLWcTableElement;
    }
}
declare namespace LocalJSX {
    interface WcButton {
        "disabled"?: boolean;
        "icon"?: string;
        "type"?: string;
    }
    interface WcDropdown {
        "disabled"?: boolean;
        "label"?: string;
        "name"?: string;
        "onSelectChange"?: (event: CustomEvent<string | object>) => void;
        "required"?: boolean;
        "value"?: string | object;
    }
    interface WcDropdownOption {
        "disabled"?: boolean;
        "selected"?: boolean;
        "value"?: string | object;
    }
    interface WcIconButton {
        "dataFirstPage"?: boolean;
        "dataLastPage"?: boolean;
        "dataNextPage"?: boolean;
        "dataPrevPage"?: boolean;
        "disabled"?: boolean;
        "paginationButton"?: boolean;
    }
    interface WcInput {
        "disabled"?: boolean;
        "label"?: string;
        "name"?: string;
        "onInputChange"?: (event: CustomEvent<string>) => void;
        "required"?: boolean;
        "value"?: string;
    }
    interface WcPaginator {
    }
    interface WcTable {
    }
    interface IntrinsicElements {
        "wc-button": WcButton;
        "wc-dropdown": WcDropdown;
        "wc-dropdown-option": WcDropdownOption;
        "wc-icon-button": WcIconButton;
        "wc-input": WcInput;
        "wc-paginator": WcPaginator;
        "wc-table": WcTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-button": LocalJSX.WcButton & JSXBase.HTMLAttributes<HTMLWcButtonElement>;
            "wc-dropdown": LocalJSX.WcDropdown & JSXBase.HTMLAttributes<HTMLWcDropdownElement>;
            "wc-dropdown-option": LocalJSX.WcDropdownOption & JSXBase.HTMLAttributes<HTMLWcDropdownOptionElement>;
            "wc-icon-button": LocalJSX.WcIconButton & JSXBase.HTMLAttributes<HTMLWcIconButtonElement>;
            "wc-input": LocalJSX.WcInput & JSXBase.HTMLAttributes<HTMLWcInputElement>;
            "wc-paginator": LocalJSX.WcPaginator & JSXBase.HTMLAttributes<HTMLWcPaginatorElement>;
            "wc-table": LocalJSX.WcTable & JSXBase.HTMLAttributes<HTMLWcTableElement>;
        }
    }
}