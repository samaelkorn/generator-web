import { menu } from '@/helpers/decorator'

class Menu {
    menu: string[] = ['test']
    @menu()
    getMenu() {
        return this.menu
    }
}

export default Menu