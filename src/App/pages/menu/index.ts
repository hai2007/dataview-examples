import { Component } from 'nefbl'

import style from './index.scss'
import template from './index.html'

@Component({
    template,
    styles: [style]
})
export default class {

    openPage(event: Event) {
        let btn = document.createElement('a')
        btn.setAttribute('href', "#/" + ((<HTMLElement>event.target).getAttribute('tag')))
        btn.setAttribute('target', '_blank')
        btn.click()
    }

}
