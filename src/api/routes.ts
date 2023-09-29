import { filterKey } from '@/helpers/decorator'

interface TR {
    label: string
    path: string
    id: string
    element: string
}

class Routes {
    routes: TR[] = [{
        label: 'Разделы',
        path: 'section',
        id: 'section',
        element: '/page'
    }]
    @filterKey(['element'])
    getMenu(): Omit<TR, "element">[] {
        return this.routes
    }
}

export default new Routes()