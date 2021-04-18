import { LitElement, html, css } from 'lit-element'

export class Button extends LitElement {

  size: string = 'small'
  disabled: boolean = false

  static get properties() {
    return {
      size: { type: String },
      disabled: { type: Boolean }
    }
  }

  static get styles() {
    return css `
      :host {
				--bto-button-font-size-small: 12px;
				--bto-button-font-size-medium: 14px;
				--bto-button-font-size-large: 16px;
      }

			.btn {
				font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
				font-weight: 700;
				border: 0;
				border-radius: 3em;
				cursor: pointer;
				display: inline-block;
				line-height: 1;				
			}

			.button-small {
				font-size: var(--bto-button-font-size-small);
				padding: 10px 16px;
			}

			.button-medium {
				font-size: var(--bto-button-font-size-meduim);
				padding: 11px 20px;
			}

			.button-large {
				font-size: var(--bto-button-font-size-large);
				padding: 12px 24px;
			}      
    `
  }

  render() {
    return html `
      <button class="btn button-${this.size}" ?disabled="${this.disabled}">
        <span>
          <slot></slot>
        </span>
      </button>
    `
  }

}

customElements.define('bto-button', Button)