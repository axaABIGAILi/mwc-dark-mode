// variable with CSS specifications
var dark = ' body {/*\n*//*\n*/ background: #171717 !important ;/*\n*/ /*\n*//*\n*/}#sprinter-name {/*\n*//*\n*/ color: #007373 !important ;/*n\n*//*\n/}#sprinter-status{/*\n*//*\n*/color: #adadad !important ;/*\n*//*\n*/}.work-area {/*\n*/ background-color: #000 !important ;/*\n*/ border: 1px solid #454545 !important ;/*\n*/ color: #adadad !important ;/*\n//*\n*/}#cloud-storage {/*\n//*\n*/ opacity: 0.7 !important ;/*\n*//*\n*/}';
// injection function
function mwcDark(css) {
  var style, head;
  head = document.getElementsByTagName('head')[0];
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  head.appendChild(style);
};
// function call
mwcDark(dark);