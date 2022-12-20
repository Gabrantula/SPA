import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/data.js';

let createTemplate = (onSubmit) => html`
<section id="create-page">
    <div class="form">
        <form @submit=${onSubmit} class="create-form">
            <h2>Create funny card</h2>
            <p>Animal image</p>
            <input type="text" name="imageUrl" placeholder="Enter animal image">
            <p>Title</p>
            <input type="text" name="title" placeholder="Enter Title">
            <p>Description</p>
            <textarea name="description" placeholder="Enter Description"></textarea>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    </div>

</section>
`
export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()

        let formData = new FormData(ev.target)

        let title = formData.get('title').trim()
        let description = formData.get('description').trim()
        let imageUrl = formData.get('imageUrl').trim()

        if (title == '' || description == '' || imageUrl == '') {
            return alert('Pleace, fill all fields!')
        }
        await createItem({
            title,
            description,
            imageUrl
        })
        ev.target.reset()
        ctx.page.redirect('/all-cards')
    }
}