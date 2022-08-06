import Clunch from 'clunch'

import uiBorder1 from './ui-border-1'
import uiBorder2 from './ui-border-2'
import uiTitle from './ui-title'
import map from '@clunch/map/index.js'
import bar from '@clunch/bar'
import pie from '@clunch/pie'
import line from '@clunch/line'
import radar from '@clunch/radar'

Clunch.series({

    // 边框
    "ui-border-1": uiBorder1,
    "ui-border-2": uiBorder2,

    // 标题
    "ui-title": uiTitle,

    //  图表
    "ui-map": map,
    "ui-bar": bar,
    "ui-pie": pie,
    "ui-line": line,
    "ui-radar": radar

})