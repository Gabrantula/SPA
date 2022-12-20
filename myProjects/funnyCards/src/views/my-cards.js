import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyItems } from '../api/data.js';
import { getUserData } from '../util.js';

let profileTemplate = (cards, userData) => html`
    <section id="my-page">
        <p>My cards count: ${cards.length}</p>
        ${cards.length == 0 
        ? html`<h2>No cards in database.</h2>`
           : html`<div class="all-my-cards">
            ${cards.map(cardTemplate)} 
        </div>`} 
    </section >
    `;

let cardTemplate = (card) => html`
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
export async function userPage(ctx) {
    let userData = getUserData()
    let cards = await getMyItems(userData.id)
    ctx.render(profileTemplate(cards, userData))
    //console.log(userData);
}