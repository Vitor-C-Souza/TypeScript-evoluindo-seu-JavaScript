import { view } from "./view";
export class MensagemView extends view {
    template(model) {
        return `
            <p class="alert alert-info">
                ${model}
            </p>
        `;
    }
}
