import { html } from '../../node_modules/lit-html/lit-html.js';
import { editItem, getById } from '../api/data.js';

let editTemplate = (card, onSubmit) => html`
<section id="edit-page">
    <div class="form">
        <form @submit=${onSubmit} class="edit-form">
            <h2>Edit your card</h2>
            <p>Animal image</p>
            <input type="text" name="imageUrl" placeholder="Animal image" .value=${card.imageUrl}>
            <p>Title</p>
            <input type="text" name="title" placeholder="Title" .value=${card.title}>
            <p>Description</p>
            <textarea name="description" placeholder="Description" .value=${card.description}></textarea>
            <div>
                <button type="submit">Edit</button>
            </div>
        </form>
    </div>
</section>
`
export async function editPage(ctx) {
    let id = ctx.params.id
    let card = await getById(id)

    ctx.render(editTemplate(card, onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()

        let formData = new FormData(ev.target)

        let card = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
        }
        if (card.title == '' || card.description == '' || card.imageUrl == '') {
            //  return notify('All fields are required!');
            return alert('All fields are required!');
        }
        await editItem(id, card)
        ev.target.reset()
        ctx.page.redirect('/details/' + id)
    }
}