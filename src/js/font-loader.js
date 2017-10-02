(function () { // Scoping in the case this is being used un-bundled

  // This script should be inlined into the document. Using the external
  // .js file is recommended only for prototyping and non-performance critical
  // applications.

  // store = falsy when local storage isn't available
  // store = localStorage when localStorage is available
  var store;
  try {
    var id = 'localStorageTest';
    store = localStorage;
    store.setItem(id, id);
    if (store.getItem(id) !== id) store = false;
    store.removeItem(id);
  } catch (exception) {}

  // put the font bundle css into a style tag and inject into the page
  function injectFontCSS(fontBundleName, css) {
    var doc = document;
    style = doc.createElement('style');
    style['data-font-bundle-name'] = fontBundleName;
    if (style.styleSheet) { style.styleSheet.cssText = css; }
    else { style.appendChild(doc.createTextNode(css)); }
    var head = doc.head || doc.getElementsByTagName('head')[0];
    head.appendChild(style);
    doc.body.className += ' font-bundle-' + fontBundleName + '-loaded ';
  }

  // Insert fonts into the page
  function getFontCSS(fontBundleName, cb) {
    // Get font from local storage cache
    var cachedCSS = store.getItem('font-bundle-' + fontBundleName);
    if (cachedCSS) {
      cb(fontBundleName, cachedCSS)
    }
    else {
      // Get font async over css
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var css = xhr.responseText;
          setTimeout(function () { // slight defer via event loop
            store.setItem('font-bundle-' + fontBundleName, css);
            cb(fontBundleName, css);
          }, 1);
        }
      };
      xhr.open("GET", "/fonts/" + fontBundleName + ".css");
      xhr.send();
    }
  }

  getFontCSS('primary', function (fontBundleName, css) {
    injectFontCSS(fontBundleName, css);
    getFontCSS('secondary', function (fontBundleName, css) {
      injectFontCSS(fontBundleName, css);
    });
  });

}());
