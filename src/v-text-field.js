import { PolymerElement, html } from '@polymer/polymer';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { TextFieldMixin } from './mixins/text-field-mixin.js';
import './styles/text-field-shared.js';
import './v-input-container.js';

export class VTextField extends TextFieldMixin(ThemableMixin(PolymerElement)) {
  static get is() {
    return 'v-text-field';
  }

  static get template() {
    return html`
      <style include="vaadin-text-field-shared-styles"></style>

      <div class="vaadin-text-field-container" part="container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
        </div>

        <v-input-container part="input-field" readonly="[[readonly]]" disabled="[[disabled]]">
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input" slot="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
        </v-input-container>

        <div part="helper-text" on-click="focus">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this._setType('text');
  }
}

customElements.define(VTextField.is, VTextField);