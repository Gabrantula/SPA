import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/api.js';

let registerTemplate = (onSubmit) => html`
<section id="register-page">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onSubmit} class="form-register">
            <p>Username</p>
            <input type="text" name="username" placeholder="username">
            <p>Email</p>
            <input type="text" name="email" placeholder="email">
            <p>Password</p>
            <input type="password" name="password" placeholder="password">
            <p>Repeat Password</p>
            <input type="password" name="rePass" placeholder="repeat password">
            <div>
                <button type="submit">register</button>
            </div>
            <p>Already have an account?<a href="/login">Sign in</a>.</p>
        </form>
    </div>
</section>
`
export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()

        let formData = new FormData(ev.target)

        let username = formData.get('username').trim()
        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        let rePass = formData.get('rePass').trim()


        if (email == '' || username == '' || password == '' || rePass == '') {
            return alert('Pleace, fill all fields!')
        }
        if (password != rePass) {
            return alert('Password don\'t much!')
        }
        await register(username, email, password)
        ctx.updateUserNav()
        ev.target.reset()
        ctx.page.redirect('/all-cards')
    }
}