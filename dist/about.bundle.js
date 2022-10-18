(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["about"],{

/***/ "./src/data/about.csv":
/*!****************************!*\
  !*** ./src/data/about.csv ***!
  \****************************/
/***/ ((module) => {

module.exports = [["OUR MISSION"," \"Lorem ipsum dolor sit amet"," consectetur adipiscing elit"," sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor magna eget. Elit ut aliquam purus sit amet. Tincidunt vitae semper quis lectus nulla at. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Eu volutpat odio facilisis mauris sit amet. At urna condimentum mattis pellentesque id. Consectetur lorem donec massa sapien faucibus et molestie. Vel turpis nunc eget lorem. Hendrerit gravida rutrum quisque non tellus. Enim facilisis gravida neque convallis a cras semper. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Condimentum vitae sapien pellentesque habitant.\""],["OUR PASSION"," \"Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Libero id faucibus nisl tincidunt eget nullam non nisi. Euismod lacinia at quis risus sed. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Consequat mauris nunc congue nisi vitae. Ultricies mi eget mauris pharetra et ultrices neque. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Vulputate eu scelerisque felis imperdiet proin fermentum. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Vivamus arcu felis bibendum ut tristique et.\""],["OUR COMMITMENT"," \"Fermentum odio eu feugiat pretium nibh ipsum. Leo integer malesuada nunc vel risus commodo. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. In massa tempor nec feugiat nisl. Blandit cursus risus at ultrices mi tempus imperdiet nulla. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Ut placerat orci nulla pellentesque. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Tortor pretium viverra suspendisse potenti nullam ac. Ultrices neque ornare aenean euismod. Aliquet lectus proin nibh nisl condimentum id. Quisque egestas diam in arcu cursus euismod quis viverra. Sit amet est placerat in. Sed libero enim sed faucibus turpis in eu mi. Nulla aliquet porttitor lacus luctus accumsan tortor. Cursus euismod quis viverra nibh cras pulvinar. Sit amet dictum sit amet justo.\""]]

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _data_about_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/about.csv */ "./src/data/about.csv");
/* harmony import */ var _data_about_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_about_csv__WEBPACK_IMPORTED_MODULE_0__);


// creates the text portion of the about page, pulling all data from the about.csv
function makeText() {
    const textArea = document.createElement('div');
    textArea.classList.add('content-box');
    textArea.classList.add('text-box');
    _data_about_csv__WEBPACK_IMPORTED_MODULE_0___default().forEach(element => {
        const head = document.createElement('h2');
        console.log( element[0]);
        head.innerHTML = element[0];
        
        const body = document.createElement('p');
        body.innerHTML = element.slice(1).toString();
        
        textArea.appendChild(head);
        textArea.appendChild(body);
    });
    return textArea;
}

function about() {
    const container = document.createElement('div');
    container.classList.add('container');

    const textArea = makeText();
    
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-space');
    imageBox.classList.add('about-img');

    container.appendChild(textArea);
    container.appendChild(imageBox);

    return container;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZGF0YS9hYm91dC5jc3YiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gW1tcIk9VUiBNSVNTSU9OXCIsXCIgXFxcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXCIgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0XCIsXCIgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIE1hc3NhIG1hc3NhIHVsdHJpY2llcyBtaSBxdWlzIGhlbmRyZXJpdCBkb2xvciBtYWduYSBlZ2V0LiBFbGl0IHV0IGFsaXF1YW0gcHVydXMgc2l0IGFtZXQuIFRpbmNpZHVudCB2aXRhZSBzZW1wZXIgcXVpcyBsZWN0dXMgbnVsbGEgYXQuIE9yY2kgcGhhc2VsbHVzIGVnZXN0YXMgdGVsbHVzIHJ1dHJ1bSB0ZWxsdXMgcGVsbGVudGVzcXVlIGV1IHRpbmNpZHVudCB0b3J0b3IuIEV1IHZvbHV0cGF0IG9kaW8gZmFjaWxpc2lzIG1hdXJpcyBzaXQgYW1ldC4gQXQgdXJuYSBjb25kaW1lbnR1bSBtYXR0aXMgcGVsbGVudGVzcXVlIGlkLiBDb25zZWN0ZXR1ciBsb3JlbSBkb25lYyBtYXNzYSBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUuIFZlbCB0dXJwaXMgbnVuYyBlZ2V0IGxvcmVtLiBIZW5kcmVyaXQgZ3JhdmlkYSBydXRydW0gcXVpc3F1ZSBub24gdGVsbHVzLiBFbmltIGZhY2lsaXNpcyBncmF2aWRhIG5lcXVlIGNvbnZhbGxpcyBhIGNyYXMgc2VtcGVyLiBTY2VsZXJpc3F1ZSB2aXZlcnJhIG1hdXJpcyBpbiBhbGlxdWFtIHNlbSBmcmluZ2lsbGEgdXQgbW9yYmkuIENvbmRpbWVudHVtIHZpdGFlIHNhcGllbiBwZWxsZW50ZXNxdWUgaGFiaXRhbnQuXFxcIlwiXSxbXCJPVVIgUEFTU0lPTlwiLFwiIFxcXCJNYXNzYSB0aW5jaWR1bnQgbnVuYyBwdWx2aW5hciBzYXBpZW4gZXQgbGlndWxhIHVsbGFtY29ycGVyIG1hbGVzdWFkYS4gTGliZXJvIGlkIGZhdWNpYnVzIG5pc2wgdGluY2lkdW50IGVnZXQgbnVsbGFtIG5vbiBuaXNpLiBFdWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cyBzZWQuIFN1c3BlbmRpc3NlIHVsdHJpY2VzIGdyYXZpZGEgZGljdHVtIGZ1c2NlIHV0IHBsYWNlcmF0IG9yY2kgbnVsbGEgcGVsbGVudGVzcXVlLiBTb2xsaWNpdHVkaW4gdGVtcG9yIGlkIGV1IG5pc2wgbnVuYyBtaSBpcHN1bSBmYXVjaWJ1cy4gQ29uc2VxdWF0IG1hdXJpcyBudW5jIGNvbmd1ZSBuaXNpIHZpdGFlLiBVbHRyaWNpZXMgbWkgZWdldCBtYXVyaXMgcGhhcmV0cmEgZXQgdWx0cmljZXMgbmVxdWUuIFR1cnBpcyBlZ2VzdGFzIHNlZCB0ZW1wdXMgdXJuYSBldCBwaGFyZXRyYSBwaGFyZXRyYSBtYXNzYSBtYXNzYS4gVnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldCBwcm9pbiBmZXJtZW50dW0uIEZlcm1lbnR1bSBvZGlvIGV1IGZldWdpYXQgcHJldGl1bSBuaWJoIGlwc3VtIGNvbnNlcXVhdCBuaXNsIHZlbC4gVml2YW11cyBhcmN1IGZlbGlzIGJpYmVuZHVtIHV0IHRyaXN0aXF1ZSBldC5cXFwiXCJdLFtcIk9VUiBDT01NSVRNRU5UXCIsXCIgXFxcIkZlcm1lbnR1bSBvZGlvIGV1IGZldWdpYXQgcHJldGl1bSBuaWJoIGlwc3VtLiBMZW8gaW50ZWdlciBtYWxlc3VhZGEgbnVuYyB2ZWwgcmlzdXMgY29tbW9kby4gVml2ZXJyYSB0ZWxsdXMgaW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QgdmVzdGlidWx1bSByaG9uY3VzLiBJbiBtYXNzYSB0ZW1wb3IgbmVjIGZldWdpYXQgbmlzbC4gQmxhbmRpdCBjdXJzdXMgcmlzdXMgYXQgdWx0cmljZXMgbWkgdGVtcHVzIGltcGVyZGlldCBudWxsYS4gSW4gbWV0dXMgdnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldCBwcm9pbiBmZXJtZW50dW0uIFV0IHBsYWNlcmF0IG9yY2kgbnVsbGEgcGVsbGVudGVzcXVlLiBOdWxsYSBmYWNpbGlzaSBldGlhbSBkaWduaXNzaW0gZGlhbSBxdWlzIGVuaW0gbG9ib3J0aXMgc2NlbGVyaXNxdWUgZmVybWVudHVtLiBUb3J0b3IgcHJldGl1bSB2aXZlcnJhIHN1c3BlbmRpc3NlIHBvdGVudGkgbnVsbGFtIGFjLiBVbHRyaWNlcyBuZXF1ZSBvcm5hcmUgYWVuZWFuIGV1aXNtb2QuIEFsaXF1ZXQgbGVjdHVzIHByb2luIG5pYmggbmlzbCBjb25kaW1lbnR1bSBpZC4gUXVpc3F1ZSBlZ2VzdGFzIGRpYW0gaW4gYXJjdSBjdXJzdXMgZXVpc21vZCBxdWlzIHZpdmVycmEuIFNpdCBhbWV0IGVzdCBwbGFjZXJhdCBpbi4gU2VkIGxpYmVybyBlbmltIHNlZCBmYXVjaWJ1cyB0dXJwaXMgaW4gZXUgbWkuIE51bGxhIGFsaXF1ZXQgcG9ydHRpdG9yIGxhY3VzIGx1Y3R1cyBhY2N1bXNhbiB0b3J0b3IuIEN1cnN1cyBldWlzbW9kIHF1aXMgdml2ZXJyYSBuaWJoIGNyYXMgcHVsdmluYXIuIFNpdCBhbWV0IGRpY3R1bSBzaXQgYW1ldCBqdXN0by5cXFwiXCJdXSIsImltcG9ydCBEYXRhIGZyb20gJy4vZGF0YS9hYm91dC5jc3YnO1xuXG4vLyBjcmVhdGVzIHRoZSB0ZXh0IHBvcnRpb24gb2YgdGhlIGFib3V0IHBhZ2UsIHB1bGxpbmcgYWxsIGRhdGEgZnJvbSB0aGUgYWJvdXQuY3N2XG5mdW5jdGlvbiBtYWtlVGV4dCgpIHtcbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYm94Jyk7XG4gICAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dC1ib3gnKTtcbiAgICBEYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zb2xlLmxvZyggZWxlbWVudFswXSk7XG4gICAgICAgIGhlYWQuaW5uZXJIVE1MID0gZWxlbWVudFswXTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gZWxlbWVudC5zbGljZSgxKS50b1N0cmluZygpO1xuICAgICAgICBcbiAgICAgICAgdGV4dEFyZWEuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgICAgIHRleHRBcmVhLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZXh0QXJlYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdGV4dEFyZWEgPSBtYWtlVGV4dCgpO1xuICAgIFxuICAgIGNvbnN0IGltYWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VCb3guY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc3BhY2UnKTtcbiAgICBpbWFnZUJveC5jbGFzc0xpc3QuYWRkKCdhYm91dC1pbWcnKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQm94KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9