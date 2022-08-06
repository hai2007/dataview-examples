
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/menu/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('31');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('32');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "openPage",
    value: function openPage(event) {
      var btn = document.createElement('a');
      btn.setAttribute('href', "#/" + event.target.getAttribute('tag'));
      btn.setAttribute('target', '_blank');
      btn.click();
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/menu/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n header{\n\nline-height: 50px;\n\nbox-shadow: 1px 3px 10px 2px #a29999;\n\n}\n\n header>h2{\n\ndisplay: inline-block;\n\nfont-size: 16px;\n\npadding-left: 50px;\n\nbackground-image: url('./logo.png');\n\nbackground-repeat: no-repeat;\n\nbackground-position: 10px center;\n\nbackground-size: auto 70%;\n\n}\n\n .list{\n\nheight: calc(100vh - 50px);\n\noverflow: auto;\n\npadding: 30px 0;\n\n}\n\n .list ul{\n\nmargin: auto;\n\nmax-width: 1040px;\n\noverflow: auto;\n\n}\n\n .list ul>li{\n\ndisplay: inline-block;\n\nmargin: 20px 10px;\n\ncursor: pointer;\n\n}\n\n .list ul>li:hover{\n\ntext-decoration: underline;\n\nfont-weight: 800;\n\n}\n\n .list ul>li>div{\n\npointer-events: none;\n\nwidth: 240px;\n\n}\n\n .list ul>li>div.icon{\n\nheight: 135px;\n\nbackground-color: rgb(230, 227, 227);\n\nbackground-repeat: no-repeat;\n\nbackground-position: center center;\n\nbackground-size: cover;\n\n}\n\n .list ul>li>div.label{\n\ntext-align: center;\n\nfont-size: 12px;\n\npadding-top: 5px;\n\n}\n\n .list ul>li[tag=\"page-1\"]>.icon{\n\nbackground-image: url('./image/example-1.png');\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/menu/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<header>\n    <h2>\n        ⛳️ 数据可视化大屏例子\n    </h2>\n</header>\n<div class=\"list\">\n    <ul>\n        <li ui-on:click=\"openPage\" tag=\"page-1\">\n            <div class=\"icon\"></div>\n            <div class=\"label\">\n                #1:全国企业大数据\n            </div>\n        </li>\n    </ul>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
