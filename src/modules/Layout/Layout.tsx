import { useEffect } from 'react'
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom"
import sectionApi from '@/api/section'
import routesApi from '@/api/routes'
import Home from '@/views/home/pages/Home'

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home",
        element: <span>2</span>,
    }
])

const Layout = () => {
    const menu = routesApi.getMenu()
    console.log(routesApi.getRoute())

    useEffect(() => {
        sectionApi.getRoot()
    }, [])

    return (
        <section className="main-content columns is-fullheight">
            <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
                <ul className="menu-list">
                    {menu.map(({ path, label }) =>
                        <li key={path}>
                            <a className="navbar-item">
                                {label}
                            </a>
                        </li>
                    )}
                </ul>
            </aside>
            <div className="container column is-10">
                <div className="section">
                    <RouterProvider router={router} />
                </div>
            </div>
        </section>
    )
}

export default Layout
