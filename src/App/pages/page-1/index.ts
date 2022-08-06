import { Component } from 'nefbl'

import chianMap from '@datapool/china.geojson'

// https://hai2007.github.io/clunch/
import Clunch from 'clunch'

import style from './index.scss'
import template from './index.html'

import render from './index.clunch'
import './series/index.js'

@Component({
    template,
    styles: [style]
})
export default class {

    $mounted() {

        new Clunch({
            el: document.getElementById('canvas'),
            render,
            data() {
                return {
                    chianMap,
                    indicator: [
                        { name: '销售', max: 6500 },
                        { name: '管理', max: 16000 },
                        { name: '信息技术', max: 30000 },
                        { name: '客服', max: 38000 },
                        { name: '研发', max: 52000 },
                        { name: '市场', max: 25000 }
                    ],
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: '预算分配'
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: '实际开销'
                        }
                    ]
                }
            }
        })

        // 如果需要悬浮提示，放开下面的代码，打印的target包含了当前鼠标悬浮位置信息
        // .$bind('mousemove', function (target: any) {
        //     if (target.series) {
        //         console.log(target)
        //     }
        // })

    }

}
