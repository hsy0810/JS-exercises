# AMD
- [参考](https://qiita.com/nanocloudx/items/70f1316debf05b93ac82)
- define()に配列でモジュール名を指定する記法です。

```javascript
define(['jquery', 'underscore'], function ($, _) {
    function a(){}; // public
    function b(){}; // private
    return a;
});

```

# UMD
- [参考](https://qiita.com/tenkei/items/1868a4c04ab4d8cdfb23#umd)
- AMDとCommonJSの両方をサポートしなければならない局面においては、UMDを用いることができます。
- UMDは、グローバル変数定義をサポートしているものの、本質的には両者を用いるための方法を提供します。
- 結果として、UMDのモジュールはクライアントとサーバの両方で利用可能となっています。

```javascript

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
    define(['myModule', 'myOtherModule'], factory);
  } else if (typeof exports === 'object') {
      // CommonJS
    module.exports = factory(require('myModule'), require('myOtherModule'));
  } else {
    // Browser globals (Note: root is window)
    root.returnExports = factory(root.myModule, root.myOtherModule);
  }
}(this, function (myModule, myOtherModule) {
  // Methods
  function notHelloOrGoodbye(){}; // A private method
  function hello(){}; // A public method because it's returned (see below)
  function goodbye(){}; // A public method because it's returned (see below)

  // Exposed public methods
  return {
      hello: hello,
      goodbye: goodbye
  }
}));

```