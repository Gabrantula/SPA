import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/data.js'

let allCardsTemplate = (cards) => html`
<section id="catalog-page">
  <h1>All funny cards</h1>
${cards.length == 0 ? html`<h1>No funny cards in database.</h1>` 
: html`<div class="card-container">${cards.map(cardPreview)}</div>`}
</section>
`
let cardPreview = (card) => html`
 <div class="card">
        <div class="img">
            <img src=${card.imageUrl} alt="monkey-2">
        </div>
        <div class="info">
            <p>${card.title}</p>
            <a class="btn" href="/details/${card._id}">Details</a>
        </div>
    </div>
`
export async function allCardsPage(ctx) {
    let cards = await getAll()
    ctx.render(allCardsTemplate(cards))
}