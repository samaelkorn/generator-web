import { useEffect } from 'react'
import sectionApi from '@/api/section'
import Menu from '@/api/menu'

const App = () => {
  const menuApi = new Menu()
  const menu = menuApi.getMenu()

  useEffect(() => {
    sectionApi.getRoot()
  }, [])

  return (
    <div className="container max-width">
      <nav className="navbar is-fixed-top">
        <div className="navbar-menu">
          {menu.map((item) =>
            <a className="navbar-item" key={item}>
              {item}
            </a>
          )}
        </div>
      </nav>
    </div>
  )
}

export default App
