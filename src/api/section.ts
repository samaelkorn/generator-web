import { error } from '@/helpers/decorator'

class sectionApi {
    @error()
    async getRoot() {
        return fetch('http://example.com/movies.json')
    }
}

export default new sectionApi()