import { Component, ref } from 'nefbl'
import getUrlParam from '../tool/getUrlParam'

import style from './index.scss'
import template from './index.html'

import pages from './pages/lazy-load.js'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    currentPage: any

    $setup() {
        return {
            currentPage: ref(null)
        }
    }

    $mounted() {
        let urlObj = getUrlParam()
        let page = pages[urlObj.router[0]] || pages['menu']

        if (pages[urlObj.router[0]] && urlObj.router[0] != 'menu') {
            let width = 1920
            let height = 1920 * window.innerHeight / window.innerWidth

            let scale = window.innerWidth / 1920

            let rootEl = document.getElementById('root')
            rootEl.style.transformOrigin = 'left top'
            rootEl.style.transform = 'scale(' + scale + ',' + scale + ' )'
            rootEl.style.width = width + "px"
            rootEl.style.height = height + 'px'

            let styleEl = document.createElement('style')
            styleEl.innerHTML = `* {
                overflow: hidden;
            }`
            document.getElementsByTagName('head')[0].appendChild(styleEl)

        }

        page().then((data: any) => {
            this.currentPage = data.default
        })
    }

}
