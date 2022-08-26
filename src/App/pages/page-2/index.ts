import { Component } from 'nefbl'

import JiangsuMap from '@datapool/jiangsu.geojson'

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
            time: 2000,
            data() {
                return {

                    // 地图数据
                    JiangsuMap,

                    // 动画进度
                    deep: 0,

                    // 图表数据系列
                    bottom1Data: [
                        [0, 10, 15, 7, 2000, 1700, 4000, 10000, 400, 100],
                        [0, 1000, 15, 7, 4000, 2700, 4000, 12000, 400, 100],
                        [3000, 10, 155, 7, 2000, 1700, 2000, 5000, 1400, 1000],
                        [0, 10, 1005, 7, 1000, 3700, 4000, 8000, 400, 2100],
                        [100, 10, 15, 17, 2000, 1500, 1000, 9000, 2400, 100]
                    ],
                    bottom2Data: [
                        [10.0, 8.04, 1],
                        [8.07, 6.95, 5],
                        [13.0, 7.58, 5],
                        [9.05, 8.81, 6],
                        [11.0, 8.33, 10],
                        [14.0, 7.66, 5],
                        [13.4, 6.81, 9],
                        [10.0, 6.33, 1],
                        [14.0, 8.96, 5],
                        [12.5, 6.82, 5],
                        [9.15, 7.2, 7],
                        [11.5, 7.2, 9],
                        [3.03, 4.23, 3],
                        [12.2, 7.83, 5],
                        [2.02, 4.47, 2],
                        [1.05, 3.33, 5],
                        [4.05, 4.96, 9],
                        [6.03, 7.24, 1],
                        [12.0, 6.26, 5],
                        [12.0, 8.84, 3],
                        [7.08, 5.82, 5],
                        [5.02, 5.68, 9]
                    ],

                    right2Data: {
                        indicator: [
                            { name: '特殊气瓶', max: 6500 },
                            { name: '焊接气瓶', max: 16000 },
                            { name: '氧舱', max: 30000 },
                            { name: '医用氧舱', max: 38000 },
                            { name: '压力容器', max: 52000 },
                            { name: '第二类压力容器', max: 25000 },
                            { name: '第三类压力容器', max: 2000 }
                        ],
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000, 1000],
                                name: '实验室一'
                            },
                            {
                                value: [5000, 14000, 28000, 6000, 42000, 2000, 230],
                                name: '实验室二'
                            }
                        ],
                    },

                    // 悬浮提示数据
                    hover: {
                        show: false,
                        x: 0, y: 0,
                        title: "",
                        items: []
                    }

                }
            },
            mounted() {
                var that = this;
                this.deep = 1;
                setInterval(function () {
                    that.deep = that.deep == 0 ? 1 : 0;
                }, 2000);
            },
        })

            .$bind('mousemove', ['$getLoopColors', function ($getLoopColors: Function) {
                return function (target: any) {
                    if (target.series) {

                        let _hover: any = {
                            show: true,
                            title: "none",
                            x: target.left,
                            y: target.top,
                            items: []
                        }

                        // 地图
                        if (target.series == 'ui-map') {
                            _hover.title = target.data.properties.name
                        }

                        // 折线图
                        else if (target.series == 'ui-line') {
                            _hover.title = target.data.ruler == " " ? "none" : target.data.ruler
                            for (let i = 0; i < target.data.value.length; i++) {
                                _hover.items.push({
                                    value: "值：" + target.data.value[i],
                                    color: target.data.color[i]
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

                        // 雷达图
                        else if (target.series == 'ui-radar') {
                            _hover.title = target.data.name
                            let _color = $getLoopColors(target.subRegion - -1)
                            for (let i = 0; i < this.right2Data.indicator.length; i++) {
                                _hover.items.push({
                                    value: this.right2Data.indicator[i].name + ":" + target.data.value[i],
                                    color: _color[target.subRegion]
                                })
                            }
                        }

                        // 饼图
                        else if (target.series == 'ui-pie') {
                            _hover.title = target.data.data.name
                            _hover.items.push({
                                value: "值：" + target.data.data.value,
                                color: target.data.color
                            })
                        }

                        if (_hover.title != 'none') this.hover = _hover
                    } else {
                        this.hover.show = false;
                    }
                }
            }])
    }
}
