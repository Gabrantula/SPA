import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/api.js';

let loginTemplate = (onSubmit) => html`
    <section id="login-page">
        <div class="form">
            <h2>Login</h2>
            <form @submit=${onSubmit} class="form-login">
                <p>Email</p>
                <input type="text" name="email" placeholder="email">
                <p>Password</p>
                <input type="password" name="password" placeholder="password">
                <div>
                    <button type="submit">login</button>
                </div>
                <p class="message">Not registered? <a href="/register">Create an account</a></p>
            </form>
        </div>
    </section>
`
export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()

        let formData = new FormData(ev.target)

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()

        if (email == '' || password == '') {
            return alert('Pleace, fill all fields!')
        }
        await login(email, password)
        ctx.updateUserNav()
        ev.target.reset()
        ctx.page.redirect('/all-cards')
    }
}