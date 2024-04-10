import Home from '../views/Home.js'
import About from '../views/About.js'
import Books from '../views/Books.js'
const root = document.getElementById("root");
const links = document.querySelectorAll('a')

const routes = [
    {path: '/spa', component: Home, title: 'Home'},
    {path: '/spa/about', component: About, title: 'About'},
    {path: '/spa/books', component: Books, title: 'Books'}
]

const navigableRoute = (targetedPath) => {
    routes.forEach(route => {
        if (targetedPath === route.path) {
            router(route)
        }
    })
}

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        navigableRoute(e.target.pathname)
    })
})

const router = (route) => {
    history.pushState(null, null, route.path)
    const html = new route.component(`${route.title} Page | SPA`)
    html.setTitle(`${route.title} Page | SPA`)
    root.innerHTML = html.getHTML()
}

window.addEventListener('DOMContentLoaded', (e) => {
    navigableRoute(e.target.location.pathname)
})

window.addEventListener('popstate', (e) => {
    navigableRoute(e.target.location.pathname)
})