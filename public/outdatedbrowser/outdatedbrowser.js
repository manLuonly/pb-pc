/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.1.2 - 2015
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
var outdatedBrowser = function (t) {
    function o(t) {
        s.style.opacity = t / 100, s.style.filter = "alpha(opacity=" + t + ")"
    }

    function e(t) {
        o(t), 1 == t && (s.style.display = "block"), 100 == t && (u = !0)
    }

    function r() {
        var t = document.getElementById("btnCloseUpdateBrowser"),
            o = document.getElementById("btnUpdateBrowser");
        s.style.backgroundColor = bkgColor, s.style.color = txtColor, s.children[0].style.color = txtColor, s.children[1].style.color = txtColor, o.style.color = txtColor, o.style.borderColor && (o.style.borderColor = txtColor), t.style.color = txtColor, t.onmousedown = function () {
            return s.style.display = "none", !1
        }, o.onmouseover = function () {
            this.style.color = bkgColor, this.style.backgroundColor = txtColor
        }, o.onmouseout = function () {
            this.style.color = txtColor, this.style.backgroundColor = bkgColor
        }
    }

    function l() {
        var t = !1;
        if (window.XMLHttpRequest) t = new XMLHttpRequest;
        else if (window.ActiveXObject) try {
            t = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (o) {
            try {
                t = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (o) {
                t = !1
            }
        }
        return t
    }

    function a(t) {
        var o = l();
        return o && (o.onreadystatechange = function () {
            n(o)
        }, o.open("GET", t, !0), o.send(null)), !1
    }

    function n(t) {
        var o = document.getElementById("outdated");
        return 4 == t.readyState && (o.innerHTML = 200 == t.status || 304 == t.status ? t.responseText : d, r()), !1
    }
    var s = document.getElementById("outdated");
    this.defaultOpts = {
        bgColor: "#f25648",
        color: "#ffffff",
        lowerThan: "transform",
        languagePath: "./outdatedbrowser.html"
    }, t ? ("IE8" == t.lowerThan || "borderSpacing" == t.lowerThan ? t.lowerThan = "borderSpacing" : "IE9" == t.lowerThan || "boxShadow" == t.lowerThan ? t.lowerThan = "boxShadow" : "IE10" == t.lowerThan || "transform" == t.lowerThan || "" == t.lowerThan || "undefined" == typeof t.lowerThan ? t.lowerThan = "transform" : ("IE11" == t.lowerThan || "borderImage" == t.lowerThan) && (t.lowerThan = "borderImage"), this.defaultOpts.bgColor = t.bgColor, this.defaultOpts.color = t.color, this.defaultOpts.lowerThan = t.lowerThan, this.defaultOpts.languagePath = t.languagePath, bkgColor = this.defaultOpts.bgColor, txtColor = this.defaultOpts.color, cssProp = this.defaultOpts.lowerThan, languagePath = this.defaultOpts.languagePath) : (bkgColor = this.defaultOpts.bgColor, txtColor = this.defaultOpts.color, cssProp = this.defaultOpts.lowerThan, languagePath = this.defaultOpts.languagePath);
    var u = !0,
        i = function () {
            var t = document.createElement("div"),
                o = "Khtml Ms O Moz Webkit".split(" "),
                e = o.length;
            return function (r) {
                if (r in t.style) return !0;
                for (r = r.replace(/^[a-z]/, function (t) {
                        return t.toUpperCase()
                    }); e--;)
                    if (o[e] + r in t.style) return !0;
                return !1
            }
        }();
    if (!i("" + cssProp)) {
        if (u && "1" !== s.style.opacity) {
            u = !1;
            for (var c = 1; 100 >= c; c++) setTimeout(function (t) {
                return function () {
                    e(t)
                }
            }(c), 8 * c)
        }
        " " === languagePath || 0 == languagePath.length ? r() : a(languagePath);
        var d = '<h6>暂不支持此浏览器</h6><p>要正常浏览本网站请升级您的浏览器。<a id="btnUpdateBrowser" href="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B01F18C2A-ABA5-C190-4EAA-63BED4B18576%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe">现在升级</a></p>'
    }
};

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }

            func();
        };
    }
}

var supportsPromise = typeof Promise !== "undefined" && Object.prototype.toString.call(Promise.resolve()) === '[object Promise]';

//call plugin function after DOM ready
if (false === supportsPromise) {
    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: true,
        languagePath: './outdatedbrowser.html'
    })
}


