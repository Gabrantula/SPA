import { html } from '../../node_modules/lit-html/lit-html.js';
//import { del } from '../api/api.js';
import { deleteItem, getById } from '../api/data.js';
import { getUserData } from '../util.js';

let detailsTemplate = (card, isOwner, onDelete) => html`
<section id="details-page">
    <div id="details-wrapper">
        <img src=${card.imageUrl} alt="monkey-2">

        <div id="info-wrapper">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
${cardControlTemplate(card, isOwner, onDelete)}
        </div>
    </div>
</section>
`
let cardControlTemplate = (card, isOwner, onDelete) => {
    if (isOwner) {
        return html`<a class="action" href="/edit/${card._id}">Edit</a>
        <a @click=${onDelete} class="action" href="javascript:void(0)">Delete</a>`
    }
    else {
        return null
    }
}
export async function detailsPage(ctx) {
    let card = await getById(ctx.params.id)

    let userData = getUserData()
    //tova shte e true ili false
    let isOwner = userData?.id == card._ownerId
    ctx.render(detailsTemplate(card, isOwner, onDelete))

    async function onDelete() {
        let choice = confirm('Are you shure you want to delete this funny card?')

        if (choice) {
            await deleteItem(ctx.params.id)
            ctx.page.redirect('/all-cards')
        }
    }
}