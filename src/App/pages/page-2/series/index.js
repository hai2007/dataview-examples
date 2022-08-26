import Clunch from 'clunch'

import uiBorder from './ui-border'
import uiTitle from './ui-title'
import map from '@clunch/map/index.js'
import line from '@clunch/line'
import bar from '@clunch/bar'
import processWave from '@clunch/process-wave'
import radar from '@clunch/radar'
import pie from '@clunch/pie'

Clunch.series({

    // 边框
    "ui-border": uiBorder,

    // 标题
    "ui-title": uiTitle,

    //  图表
    "ui-map": map,
    "ui-line": line,
    "ui-bar": bar,
    "ui-process-wave": processWave,
    "ui-radar": radar,
    "ui-pie": pie

})
