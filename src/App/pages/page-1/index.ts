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
            time: 200,
            data() {
                return {

                    // 地图数据
                    chianMap,

                    // 资金发布情况数据
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
                    ],

                    // 悬浮提示数据
                    hover: {
                        show: false,
                        x: 0, y: 0,
                        title: "",
                        items: []
                    }
                }
            }
        })

            .$bind('mousemove', ["$getLoopColors", function ($getLoopColors: Function) {
                return function (target: any) {
                    if (target.series) {

                        let _hover: any = {
                            show: true,
                            title: "none",
                            x: target.left,
                            y: target.top,
                            items: []
                        }

                        // 雷达图
                        if (target.series == 'ui-radar') {
                            _hover.title = target.data.name
                            let _color = $getLoopColors(target.subRegion - -1)
                            for (let i = 0; i < this.indicator.length; i++) {
                                _hover.items.push({
                                    value: this.indicator[i].name + ":" + target.data.value[i],
                                    color: _color[target.subRegion]
                                })
                            }
                        }

                        // 柱状图
                        else if (target.series == 'ui-bar') {
                            _hover.title = target.data.ruler
                            _hover.items.push({
                                value: target.data.value,
                                color: target.data.color
                            })
                        }

                        // 环图
                        else if (target.series == "ui-pie") {
                            _hover.title = ""
                            for (let i = 0; i < target.attr.data.length; i++) {
                                _hover.items.push({
                                    value: "值：" + target.attr.data[i].value,
                                    color: target.attr.colors[i]
                                })
                            }
                        }

                        // 地图
                        else if (target.series == 'ui-map') {
                            _hover.title = target.data.properties.name
                        }

                        // 折线图
                        else if (target.series == 'ui-line') {
                            _hover.title = target.data.ruler
                            for (let i = 0; i < target.data.value.length; i++) {
                                _hover.items.push({
                                    value: "值：" + target.data.value[i],
                                    color: target.data.color[i]
                                })
                            }
                        }

                        if (_hover.title != 'none') this.hover = _hover
                    } else {
                        this.hover.show = false;
                    }
                }
            }])

    }

}
