
import { Fragment } from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <Fragment>
    <header>
        <nav>
            <NavLink to={'/'}>logo</NavLink>
            <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'headphones'}>Headphones</NavLink>
            <NavLink to={'speakers'}>Speakers</NavLink>
            <NavLink to={'earphones'}>Earphones</NavLink>
            </div>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    </Fragment>
  )
}
