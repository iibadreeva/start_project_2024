'use strict';

function e(e, t) {
  if (t == null || t > e.length) t = e.length;
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

function t(e) {
  if (Array.isArray(e)) return e;
}

function r(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol !== 'undefined' && e[Symbol.iterator]) ||
        e['@@iterator'];
  if (r == null) return;
  var n = [];
  var a = true;
  var o = false;
  var l, u;
  try {
    for (r = r.call(e); !(a = (l = r.next()).done); a = true) {
      n.push(l.value);
      if (t && n.length === t) break;
    }
  } catch (e) {
    o = true;
    u = e;
  } finally {
    try {
      if (!a && r['return'] != null) r['return']();
    } finally {
      if (o) throw u;
    }
  }
  return n;
}

function n() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function a(e, a) {
  return t(e) || r(e, a) || l(e, a) || n();
}

function o(e) {
  '@swc/helpers - typeof';
  return e && typeof Symbol !== 'undefined' && e.constructor === Symbol
    ? 'symbol'
    : typeof e;
}

function l(t, r) {
  if (!t) return;
  if (typeof t === 'string') return e(t, r);
  var n = Object.prototype.toString.call(t).slice(8, -1);
  if (n === 'Object' && t.constructor) n = t.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(n);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return e(t, r);
}
var u = Object.create;
var i = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var d = Object.getPrototypeOf,
  s = Object.prototype.hasOwnProperty;
var p = function (e, t) {
    for (var r in t)
      i(e, r, {
        get: t[r],
        enumerable: !0
      });
  },
  v = function (e, t, r, n) {
    var a = true,
      l = false,
      u = undefined;
    if (
      (t && (typeof t === 'undefined' ? 'undefined' : o(t)) == 'object') ||
      typeof t == 'function'
    )
      try {
        var d = function () {
          var a = v.value;
          !s.call(e, a) &&
            a !== r &&
            i(e, a, {
              get: function () {
                return t[a];
              },
              enumerable: !(n = f(t, a)) || n.enumerable
            });
        };
        for (
          var p = c(t)[Symbol.iterator](), v;
          !(a = (v = p.next()).done);
          a = true
        )
          d();
      } catch (e) {
        l = true;
        u = e;
      } finally {
        try {
          if (!a && p.return != null) {
            p.return();
          }
        } finally {
          if (l) {
            throw u;
          }
        }
      }
    return e;
  };
var m = function (e, t, r) {
    return (
      (r = e != null ? u(d(e)) : {}),
      v(
        t || !e || !e.__esModule
          ? i(r, 'default', {
              value: e,
              enumerable: !0
            })
          : r,
        e
      )
    );
  },
  y = function (e) {
    return v(
      i({}, '__esModule', {
        value: !0
      }),
      e
    );
  };
var b = {};
p(b, {
  PDFDownloadButton: function () {
    return O;
  },
  PDFInfo: function () {
    return P;
  },
  PDFPreview: function () {
    return S;
  }
});
module.exports = y(b);
var D = m(require('react')),
  w = function (e) {
    var t = e.base64;
    var r = a((0, D.useState)(null), 2),
      n = r[0],
      o = r[1],
      l = a((0, D.useState)(''), 2),
      u = l[0],
      i = l[1],
      f = a((0, D.useState)(''), 2),
      c = f[0],
      d = f[1],
      s = a((0, D.useState)(''), 2),
      p = s[0],
      v = s[1],
      m = a((0, D.useState)(''), 2),
      y = m[0],
      b = m[1];
    return (
      (0, D.useEffect)(
        function () {
          if (t) {
            var e, r, n, a;
            var l = atob(t);
            o(Math.round(l.length / 1024)),
              i(
                ((e = l.match(/^.PDF-([0-9.]+)/)) === null || e === void 0
                  ? void 0
                  : e[1]) || 'Unknown'
              ),
              d(
                ((r = l.match(/<xmp:CreateDate>(.+?)<\/xmp:CreateDate>/)) ===
                  null || r === void 0
                  ? void 0
                  : r[1]) || 'Unknown'
              ),
              v(
                ((n = l.match(/<xmp:ModifyDate>(.+?)<\/xmp:ModifyDate>/)) ===
                  null || n === void 0
                  ? void 0
                  : n[1]) || 'Unknown'
              ),
              b(
                ((a = l.match(/<xmp:CreatorTool>(.+?)<\/xmp:CreatorTool>/)) ===
                  null || a === void 0
                  ? void 0
                  : a[1]) || 'Unknown'
              );
          }
        },
        [t]
      ),
      D.default.createElement(
        'div',
        null,
        D.default.createElement('p', null, 'File Size: ', n, ' KB'),
        D.default.createElement('p', null, 'PDF Version: ', u),
        D.default.createElement('p', null, 'Create Date: ', c),
        D.default.createElement('p', null, 'Modify Date: ', p),
        D.default.createElement('p', null, 'Creator Tool: ', y)
      )
    );
  },
  P = w;
var h = m(require('react')),
  F = function (e) {
    var t = e.base64,
      r = e.style,
      n = e.className;
    return t
      ? h.default.createElement(
          'object',
          {
            style: r,
            type: 'application/pdf',
            className: n,
            data: 'data:application/pdf;base64,'.concat(t),
            'aria-label': 'PDF preview'
          },
          'Your browser does not support PDFs. Download the PDF to view it:',
          h.default.createElement(
            'a',
            {
              href: 'data:application/pdf;base64,'.concat(t),
              download: 'document.pdf'
            },
            'Download PDF'
          )
        )
      : h.default.createElement('p', null, 'No PDF data provided.');
  },
  S = F;
var g = m(require('react')),
  E = function (e) {
    var t = e.base64,
      r = e.downloadFileName,
      n = r === void 0 ? 'file.pdf' : r,
      a = e.style,
      o = e.className;
    return g.default.createElement(
      'a',
      {
        href: 'data:application/octet-stream;base64,'.concat(t),
        download: n,
        style: a,
        className: o
      },
      'Download PDF'
    );
  },
  O = E;
0 &&
  (module.exports = {
    PDFDownloadButton: PDFDownloadButton,
    PDFInfo: PDFInfo,
    PDFPreview: PDFPreview
  }); //# sourceMappingURL=index.js.map
