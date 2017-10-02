(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzcmMvanMvZm9udC1sb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uICgpIHsgLy8gU2NvcGluZyBpbiB0aGUgY2FzZSB0aGlzIGlzIGJlaW5nIHVzZWQgdW4tYnVuZGxlZFxuXG4gIC8vIFRoaXMgc2NyaXB0IHNob3VsZCBiZSBpbmxpbmVkIGludG8gdGhlIGRvY3VtZW50LiBVc2luZyB0aGUgZXh0ZXJuYWxcbiAgLy8gLmpzIGZpbGUgaXMgcmVjb21tZW5kZWQgb25seSBmb3IgcHJvdG90eXBpbmcgYW5kIG5vbi1wZXJmb3JtYW5jZSBjcml0aWNhbFxuICAvLyBhcHBsaWNhdGlvbnMuXG5cbiAgLy8gc3RvcmUgPSBmYWxzeSB3aGVuIGxvY2FsIHN0b3JhZ2UgaXNuJ3QgYXZhaWxhYmxlXG4gIC8vIHN0b3JlID0gbG9jYWxTdG9yYWdlIHdoZW4gbG9jYWxTdG9yYWdlIGlzIGF2YWlsYWJsZVxuICB2YXIgc3RvcmU7XG4gIHRyeSB7XG4gICAgdmFyIGlkID0gJ2xvY2FsU3RvcmFnZVRlc3QnO1xuICAgIHN0b3JlID0gbG9jYWxTdG9yYWdlO1xuICAgIHN0b3JlLnNldEl0ZW0oaWQsIGlkKTtcbiAgICBpZiAoc3RvcmUuZ2V0SXRlbShpZCkgIT09IGlkKSBzdG9yZSA9IGZhbHNlO1xuICAgIHN0b3JlLnJlbW92ZUl0ZW0oaWQpO1xuICB9IGNhdGNoIChleGNlcHRpb24pIHt9XG5cbiAgLy8gcHV0IHRoZSBmb250IGJ1bmRsZSBjc3MgaW50byBhIHN0eWxlIHRhZyBhbmQgaW5qZWN0IGludG8gdGhlIHBhZ2VcbiAgZnVuY3Rpb24gaW5qZWN0Rm9udENTUyhmb250QnVuZGxlTmFtZSwgY3NzKSB7XG4gICAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICAgIHN0eWxlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVbJ2RhdGEtZm9udC1idW5kbGUtbmFtZSddID0gZm9udEJ1bmRsZU5hbWU7XG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHsgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzOyB9XG4gICAgZWxzZSB7IHN0eWxlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShjc3MpKTsgfVxuICAgIHZhciBoZWFkID0gZG9jLmhlYWQgfHwgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgZG9jLmJvZHkuY2xhc3NOYW1lICs9ICcgZm9udC1idW5kbGUtJyArIGZvbnRCdW5kbGVOYW1lICsgJy1sb2FkZWQgJztcbiAgfVxuXG4gIC8vIEluc2VydCBmb250cyBpbnRvIHRoZSBwYWdlXG4gIGZ1bmN0aW9uIGdldEZvbnRDU1MoZm9udEJ1bmRsZU5hbWUsIGNiKSB7XG4gICAgLy8gR2V0IGZvbnQgZnJvbSBsb2NhbCBzdG9yYWdlIGNhY2hlXG4gICAgdmFyIGNhY2hlZENTUyA9IHN0b3JlLmdldEl0ZW0oJ2ZvbnQtYnVuZGxlLScgKyBmb250QnVuZGxlTmFtZSk7XG4gICAgaWYgKGNhY2hlZENTUykge1xuICAgICAgY2IoZm9udEJ1bmRsZU5hbWUsIGNhY2hlZENTUylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBHZXQgZm9udCBhc3luYyBvdmVyIGNzc1xuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgIHZhciBjc3MgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAvLyBzbGlnaHQgZGVmZXIgdmlhIGV2ZW50IGxvb3BcbiAgICAgICAgICAgIHN0b3JlLnNldEl0ZW0oJ2ZvbnQtYnVuZGxlLScgKyBmb250QnVuZGxlTmFtZSwgY3NzKTtcbiAgICAgICAgICAgIGNiKGZvbnRCdW5kbGVOYW1lLCBjc3MpO1xuICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgXCIvZm9udHMvXCIgKyBmb250QnVuZGxlTmFtZSArIFwiLmNzc1wiKTtcbiAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Rm9udENTUygncHJpbWFyeScsIGZ1bmN0aW9uIChmb250QnVuZGxlTmFtZSwgY3NzKSB7XG4gICAgaW5qZWN0Rm9udENTUyhmb250QnVuZGxlTmFtZSwgY3NzKTtcbiAgICBnZXRGb250Q1NTKCdzZWNvbmRhcnknLCBmdW5jdGlvbiAoZm9udEJ1bmRsZU5hbWUsIGNzcykge1xuICAgICAgaW5qZWN0Rm9udENTUyhmb250QnVuZGxlTmFtZSwgY3NzKTtcbiAgICB9KTtcbiAgfSk7XG5cbn0oKSk7XG5cbn0se31dfSx7fSxbMV0pO1xuIl0sImZpbGUiOiJyZWktY2VkYXItZm9udC1sb2FkZXIuanMifQ==
