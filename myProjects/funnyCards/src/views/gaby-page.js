import { html } from '../../node_modules/lit-html/lit-html.js';

let gabyTemplate = () => html`
<section id="gaby-page">
    <div class="content">
        <h1>Contact us</h1>
    </div>
    <div class="box">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</section>
`
export async function gabyPage(ctx) {
    ctx.render(gabyTemplate())
}