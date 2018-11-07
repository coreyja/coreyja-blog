function colorHex(color) {
  return JSON.parse(document.querySelector('[name="theme-color-map-hex"]').content)[color];
}
function colorManifest(color) {
  return JSON.parse(document.querySelector('[name="theme-color-manifest-map"]').content)[color];
}

function changeColorTo(color) {
  var elementsToChange = document.querySelectorAll('[data-color-changer-class]');
  Array.from(elementsToChange).forEach(function(element) {
    element.className = element.dataset.colorChangerClass + color;
  });
  document.querySelector('[name="theme-color"]').content = '#' + colorHex(color);
  document.querySelector('link[rel="manifest"]').href = colorManifest(color);
}

function changeThemeColor(event) {
  changeColorTo(event.srcElement.dataset.color);
}

window.onload = function() {
  var bars = document.getElementsByClassName('Header-coloredBar');
  Array.from(bars).forEach(function(bar) { bar.onclick = changeThemeColor; })
}
