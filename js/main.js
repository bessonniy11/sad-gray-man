let rounItems = document.querySelectorAll('.body__item');

for (let index = 0; index < rounItems.length; index++) {
  let rounItem = rounItems[index];
  let svgFills = document.querySelectorAll('.svgfill');
  let descTitle = document.querySelectorAll('.description__title');
  let descText = document.querySelectorAll('.description__text');
  rounItem.addEventListener("mouseenter", function (e) {
    rounItem.classList.add('_active');
    svgFills[index].classList.add('_active');
    descTitle[index].classList.add('_active');
    descText[index].classList.add('_active');

  });
  rounItem.addEventListener("mouseleave", function (e) {
    rounItem.classList.remove('_active');
    svgFills[index].classList.remove('_active');
    descTitle[index].classList.remove('_active');
    descText[index].classList.remove('_active');
  });

}


// function connect(div1, div2, color, thickness) {
//   var off1 = getOffset(div1);
//   var off2 = getOffset(div2);
//   var x1 = off1.left + (off1.width / 2);
//   var y1 = off1.top + off1.height + 2;
//   var x2 = off2.left + (off2.width / 2);
//   var y2 = off2.top + 2;
//   console.log(x1 + " " + x2);
//   var length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
//   var cx = ((x1 + x2) / 2) - (length / 2);
//   var cy = ((y1 + y2) / 2) - (thickness / 2);
//   var angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);
//   var htmlLine = "<div id=\"line\" style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
//   document.body.innerHTML += htmlLine;
// }

// function getOffset(el) {
//   var rect = el.getBoundingClientRect();
//   return {
//     left: rect.left + window.pageXOffset,
//     top: rect.top + window.pageYOffset,
//     width: rect.width || el.offsetWidth,
//     height: rect.height || el.offsetHeight
//   };
// }

// window.testIt = function () {
//   var div1 = document.getElementById('div1');
//   var div2 = document.getElementById('div2')
//   connect(div1, div2, "#F00", 1);
// }
{/* <line id="line" x1="149" y1="21" x2="120" y2="90" stroke="#fff" />


let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let line = document.getElementById('line');

window.addEventListener('resize', function (e) {
  console.log("Координаты div2 = " + div2.offsetLeft);
  console.log("Координаты x1 = " + line.getAttribute('x1'));
  let truePosition = div2.offsetLeft;
  let linePosition = line.getAttribute('x1');
}) */}


// function test() {
//   if (div2.offsetHeight != line.getAttribute('x1')) {
//     div2.offsetHeight = line.getAttribute('x1')
//   }
// }
// test()

