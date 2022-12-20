import {render } from "../node_modules/lit-html/lit-html.js";
import page from '../node_modules/page/page.mjs';
import {logout} from './api/api.js';
import {getUserData} from './util.js';
import { allCardsPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { gabyPage } from "./views/gaby-page.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { userPage } from "./views/my-cards.js";
import { registerPage } from "./views/register.js";

let root= document.getElementById('main-container')
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext)
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/all-cards', allCardsPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/my-cards', userPage)
page('/Gaby-page', gabyPage)

updateUserNav()
page.start()

function decorateContext(ctx, next) {
    ctx.render= (content) => render(content, root)
    ctx.updateUserNav=updateUserNav
    next()
}
function updateUserNav() {
    let userData=getUserData()
    if(userData) {
        document.getElementById('user').style.display= 'inline-block'
        document.getElementById('guest').style.display= 'none'
        document.querySelector('#user span').textContent=`Welcome, ${userData.username}`
    }
    else {
        document.getElementById('guest').style.display= 'inline-block'
        document.getElementById('user').style.display= 'none'
    }
}
async function onLogout() {
    await logout()
    updateUserNav()
    page.redirect('/')
}