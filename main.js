var wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

var formColor = document.createElement('form');

wrapper.appendChild(formColor);

var inpText = document.createElement('input');
inpText.style.marginBottom = 10 + 'px';
formColor.appendChild(inpText);

var selectType = document.createElement('select');
selectType.style.marginBottom = 10 + 'px';
formColor.appendChild(selectType);

var opt1 = document.createElement('option');
opt1.value = 'RGB';
opt1.textContent = 'RGB';
selectType.appendChild(opt1);

var opt2 = document.createElement('option');
opt2.value = 'RGBA';
opt2.textContent = 'RGBA';
selectType.appendChild(opt2);

var opt3 = document.createElement('option');
opt3.value = 'HEX';
opt3.textContent = 'HEX';
selectType.appendChild(opt3);

var inpCode = document.createElement('input');
inpCode.style.marginBottom = 10 + 'px';
formColor.appendChild(inpCode);

var save = document.createElement('button');
save.textContent = 'Save';
formColor.appendChild(save);

var res = document.createElement('div');
res.className = 'result';
wrapper.appendChild(res);



var Color = [
  { name: "aliceblue", rgb: "240,248,255", rgba: "240,248,255,1", hex: "#f0f8ff" },
  { name: "antiquewhite", rgb: "250,235,215", rgba: "250,235,215,1", hex: "#faebd7" },
  { name: "aqua", rgb: "0,255,255", rgba: "0,255,255,1", hex: "#00ffff" },
  { name: "aquamarine", rgb: "127,255,212", rgba: "127,255,212,1", hex: "#7fffd4" },
  { name: "azure", rgb: "240,255,255", rgba: "240,255,255,1", hex: "#f0ffff" },
  { name: "beige", rgb: "245,245,220", rgba: "245,245,220,1", hex: "#f5f5dc" },
  { name: "bisque", rgb: "255,228,196", rgba: "255,228,196,1", hex: "#ffe4c4" },
  { name: "black", rgb: "0,0,0", rgba: "0,0,0,1", hex: "#000000" },
  { name: "blanchedalmond", rgb: "255,235,205", rgba: "255,235,205,1", hex: "#ffebcd" },
  { name: "blue", rgb: "0,0,255", rgba: "0,0,255,1", hex: "#0000ff" },
  { name: "blueviolet", rgb: "138,43,226", rgba: "138,43,226,1", hex: "#8a2be2" },
  { name: "brown", rgb: "165,42,42", rgba: "165,42,42,1", hex: "#a52a2a" },
  { name: "burlywood", rgb: "222,184,135", rgba: "222,184,135,1", hex: "#deb887" },
  { name: "cadetblue", rgb: "95,158,160", rgba: "95,158,160,1", hex: "#5f9ea0" },
  { name: "chartreuse", rgb: "127,255,0", rgba: "127,255,0,1", hex: "#7fff00" },
  { name: "chocolate", rgb: "210,105,30", rgba: "210,105,30,1", hex: "#d2691e" },
  { name: "coral", rgb: "255,127,80", rgba: "255,127,80,1", hex: "#ff7f50" },
  { name: "cornflowerblue", rgb: "100,149,237", rgba: "100,149,237,1", hex: "#6495ed" },
  { name: "cornsilk", rgb: "255,248,220", rgba: "255,248,220,1", hex: "#fff8dc" },
  { name: "crimson", rgb: "220,20,60", rgba: "220,20,60,1", hex: "#dc143c" },
  { name: "cyan", rgb: "0,255,255", rgba: "0,255,255,1", hex: "#00ffff" },
  { name: "darkblue", rgb: "0,0,139", rgba: "0,0,139,1", hex: "#00008b" },
  { name: "darkcyan", rgb: "0,139,139", rgba: "0,139,139,1", hex: "#008b8b" },
  { name: "darkgoldenrod", rgb: "184,134,11", rgba: "184,134,11,1", hex: "#b8860b" },
  { name: "darkgray", rgb: "169,169,169", rgba: "169,169,169,1", hex: "#a9a9a9" },
  { name: "darkgreen", rgb: "0,100,0", rgba: "0,100,0,1", hex: "#006400" },
  { name: "darkkhaki", rgb: "189,183,107", rgba: "189,183,107,1", hex: "#bdb76b" },
  { name: "darkmagenta", rgb: "139,0,139", rgba: "139,0,139,1", hex: "#8b008b" },
  { name: "darkolivegreen", rgb: "85,107,47", rgba: "85,107,47,1", hex: "#556b2f" },
  { name: "darkorange", rgb: "255,140,0", rgba: "255,140,0,1", hex: "#ff8c00" },
  { name: "darkorchid", rgb: "153,50,204", rgba: "153,50,204,1", hex: "#9932cc" },
  { name: "darkred", rgb: "139,0,0", rgba: "139,0,0,1", hex: "#8b0000" },
  { name: "darksalmon", rgb: "233,150,122", rgba: "233,150,122,1", hex: "#e9967a" },
  { name: "darkseagreen", rgb: "143,188,143", rgba: "143,188,143,1", hex: "#8fbc8f" },
  { name: "darkslateblue", rgb: "72,61,139", rgba: "72,61,139,1", hex: "#483d8b" },
  { name: "darkslategray", rgb: "47,79,79", rgba: "47,79,79,1", hex: "#2f4f4f" },
  { name: "darkturquoise", rgb: "0,206,209", rgba: "0,206,209,1", hex: "#00ced1" },
  { name: "darkviolet", rgb: "148,0,211", rgba: "148,0,211,1", hex: "#9400d3" },
  { name: "deeppink", rgb: "255,20,147", rgba: "255,20,147,1", hex: "#ff1493" },
  { name: "deepskyblue", rgb: "0,191,255", rgba: "0,191,255,1", hex: "#00bfff" },
  { name: "dimgray", rgb: "105,105,105", rgba: "105,105,105,1", hex: "#696969" },
  { name: "dodgerblue", rgb: "30,144,255", rgba: "30,144,255,1", hex: "#1e90ff" },
  { name: "firebrick", rgb: "178,34,34", rgba: "178,34,34,1", hex: "#b22222" },
  { name: "floralwhite", rgb: "255,250,240", rgba: "255,250,240,1", hex: "#fffaf0" },
  { name: "forestgreen", rgb: "34,139,34", rgba: "34,139,34,1", hex: "#228b22" },
  { name: "fuchsia", rgb: "255,0,255", rgba: "255,0,255,1", hex: "#ff00ff" },
  { name: "gainsboro", rgb: "220,220,220", rgba: "220,220,220,1", hex: "#dcdcdc" },
  { name: "ghostwhite", rgb: "248,248,255", rgba: "248,248,255,1", hex: "#f8f8ff" },
  { name: "gold", rgb: "255,215,0", rgba: "255,215,0,1", hex: "#ffd700" },
  { name: "goldenrod", rgb: "218,165,32", rgba: "218,165,32,1", hex: "#daa520" },
  { name: "gray", rgb: "128,128,128", rgba: "128,128,128,1", hex: "#808080" },
  { name: "green", rgb: "0,128,0", rgba: "0,128,0,1", hex: "#008000" },
  { name: "greenyellow", rgb: "173,255,47", rgba: "173,255,47,1", hex: "#adff2f" },
  { name: "honeydew", rgb: "240,255,240", rgba: "240,255,240,1", hex: "#f0fff0" },
  { name: "hotpink", rgb: "255,105,180", rgba: "255,105,180,1", hex: "#ff69b4" },
  { name: "indianred", rgb: "205,92,92", rgba: "205,92,92,1", hex: "#cd5c5c" },
  { name: "indigo", rgb: "75,0,130", rgba: "75,0,130,1", hex: "#4b0082" },
  { name: "ivory", rgb: "255,255,240", rgba: "255,255,240,1", hex: "#fffff0" },
  { name: "khaki", rgb: "240,230,140", rgba: "240,230,140,1", hex: "#f0e68c" },
  { name: "lavender", rgb: "230,230,250", rgba: "230,230,250,1", hex: "#e6e6fa" },
  { name: "lavenderblush", rgb: "255,240,245", rgba: "255,240,245,1", hex: "#fff0f5" },
  { name: "lawngreen", rgb: "124,252,0", rgba: "124,252,0,1", hex: "#7cfc00" },
  { name: "lemonchiffon", rgb: "255,250,205", rgba: "255,250,205,1", hex: "#fffacd" },
  { name: "lightblue", rgb: "173,216,230", rgba: "173,216,230,1", hex: "#add8e6" },
  { name: "lightcoral", rgb: "240,128,128", rgba: "240,128,128,1", hex: "#f08080" },
  { name: "lightcyan", rgb: "224,255,255", rgba: "224,255,255,1", hex: "#e0ffff" },
  { name: "lightgoldenrodyellow", rgb: "250,250,210", rgba: "250,250,210,1", hex: "#fafad2" },
  { name: "lightgray", rgb: "211,211,211", rgba: "211,211,211,1", hex: "#d3d3d3" },
  { name: "lightgreen", rgb: "144,238,144", rgba: "144,238,144,1", hex: "#90ee90" },
  { name: "lightpink", rgb: "255,182,193", rgba: "255,182,193,1", hex: "#ffb6c1" },
  { name: "lightsalmon", rgb: "255,160,122", rgba: "255,160,122,1", hex: "#ffa07a" },
  { name: "lightseagreen", rgb: "32,178,170", rgba: "32,178,170,1", hex: "#20b2aa" },
  { name: "lightskyblue", rgb: "135,206,250", rgba: "135,206,250,1", hex: "#87cefa" },
  { name: "lightslategray", rgb: "119,136,153", rgba: "119,136,153,1", hex: "#778899" },
  { name: "lightsteelblue", rgb: "176,196,222", rgba: "176,196,222,1", hex: "#b0c4de" },
  { name: "lightyellow", rgb: "255,255,224", rgba: "255,255,224,1", hex: "#ffffe0" },
  { name: "lime", rgb: "0,255,0", rgba: "0,255,0,1", hex: "#00ff00" },
  { name: "limegreen", rgb: "50,205,50", rgba: "50,205,50,1", hex: "#32cd32" },
  { name: "linen", rgb: "250,240,230", rgba: "250,240,230,1", hex: "#faf0e6" },
  { name: "magenta", rgb: "255,0,255", rgba: "255,0,255,1", hex: "#ff00ff" },
  { name: "maroon", rgb: "128,0,0", rgba: "128,0,0,1", hex: "#800000" },
  { name: "mediumaquamarine", rgb: "102,205,170", rgba: "102,205,170,1", hex: "#66cdaa" },
  { name: "mediumblue", rgb: "0,0,205", rgba: "0,0,205,1", hex: "#0000cd" },
  { name: "mediumorchid", rgb: "186,85,211", rgba: "186,85,211,1", hex: "#ba55d3" },
  { name: "mediumpurple", rgb: "147,112,219", rgba: "147,112,219,1", hex: "#9370db" },
  { name: "mediumseagreen", rgb: "60,179,113", rgba: "60,179,113,1", hex: "#3cb371" },
  { name: "mediumslateblue", rgb: "123,104,238", rgba: "123,104,238,1", hex: "#7b68ee" },
  { name: "mediumspringgreen", rgb: "0,250,154", rgba: "0,250,154,1", hex: "#00fa9a" },
  { name: "mediumturquoise", rgb: "72,209,204", rgba: "72,209,204,1", hex: "#48d1cc" },
  { name: "mediumvioletred", rgb: "199,21,133", rgba: "199,21,133,1", hex: "#c71585" },
  { name: "midnightblue", rgb: "25,25,112", rgba: "25,25,112,1", hex: "#191970" },
  { name: "mintcream", rgb: "245,255,250", rgba: "245,255,250,1", hex: "#f5fffa" },
  { name: "mistyrose", rgb: "255,228,225", rgba: "255,228,225,1", hex: "#ffe4e1" },
  { name: "moccasin", rgb: "255,228,181", rgba: "255,228,181,1", hex: "#ffe4b5" },
  { name: "navajowhite", rgb: "255,222,173", rgba: "255,222,173,1", hex: "#ffdead" },
  { name: "navy", rgb: "0,0,128", rgba: "0,0,128,1", hex: "#000080" },
  { name: "oldlace", rgb: "253,245,230", rgba: "253,245,230,1", hex: "#fdf5e6" },
  { name: "olive", rgb: "128,128,0", rgba: "128,128,0,1", hex: "#808000" },
  { name: "olivedrab", rgb: "107,142,35", rgba: "107,142,35,1", hex: "#6b8e23" },
  { name: "orange", rgb: "255,165,0", rgba: "255,165,0,1", hex: "#ffa500" },
  { name: "orangered", rgb: "255,69,0", rgba: "255,69,0,1", hex: "#ff4500" },
  { name: "orchid", rgb: "218,112,214", rgba: "218,112,214,1", hex: "#da70d6" },
  { name: "palegoldenrod", rgb: "238,232,170", rgba: "238,232,170,1", hex: "#eee8aa" },
  { name: "palegreen", rgb: "152,251,152", rgba: "152,251,152,1", hex: "#98fb98" },
  { name: "paleturquoise", rgb: "175,238,238", rgba: "175,238,238,1", hex: "#afeeee" },
  { name: "palevioletred", rgb: "219,112,147", rgba: "219,112,147,1", hex: "#db7093" },
  { name: "papayawhip", rgb: "255,239,213", rgba: "255,239,213,1", hex: "#ffefd5" },
  { name: "peachpuff", rgb: "255,218,185", rgba: "255,218,185,1", hex: "#ffdab9" },
  { name: "peru", rgb: "205,133,63", rgba: "205,133,63,1", hex: "#cd853f" },
  { name: "pink", rgb: "255,192,203", rgba: "255,192,203,1", hex: "#ffc0cb" },
  { name: "plum", rgb: "221,160,221", rgba: "221,160,221,1", hex: "#dda0dd" },
  { name: "powderblue", rgb: "176,224,230", rgba: "176,224,230,1", hex: "#b0e0e6" },
  { name: "purple", rgb: "128,0,128", rgba: "128,0,128,1", hex: "#800080" },
  { name: "rebeccapurple", rgb: "102,51,153", rgba: "102,51,153,1", hex: "#663399" },
  { name: "red", rgb: "255,0,0", rgba: "255,0,0,1", hex: "#ff0000" },
  { name: "rosybrown", rgb: "188,143,143", rgba: "188,143,143,1", hex: "#bc8f8f" },
  { name: "royalblue", rgb: "65,105,225", rgba: "65,105,225,1", hex: "#4169e1" },
  { name: "saddlebrown", rgb: "139,69,19", rgba: "139,69,19,1", hex: "#8b4513" },
  { name: "salmon", rgb: "250,128,114", rgba: "250,128,114,1", hex: "#fa8072" },
  { name: "sandybrown", rgb: "244,164,96", rgba: "244,164,96,1", hex: "#f4a460" },
  { name: "seagreen", rgb: "46,139,87", rgba: "46,139,87,1", hex: "#2e8b57" },
  { name: "seashell", rgb: "255,245,238", rgba: "255,245,238,1", hex: "#fff5ee" },
  { name: "sienna", rgb: "160,82,45", rgba: "160,82,45,1", hex: "#a0522d" },
  { name: "silver", rgb: "192,192,192", rgba: "192,192,192,1", hex: "#c0c0c0" },
  { name: "skyblue", rgb: "135,206,235", rgba: "135,206,235,1", hex: "#87ceeb" },
  { name: "slateblue", rgb: "106,90,205", rgba: "106,90,205,1", hex: "#6a5acd" },
  { name: "slategray", rgb: "112,128,144", rgba: "112,128,144,1", hex: "#708090" },
  { name: "snow", rgb: "255,250,250", rgba: "255,250,250,1", hex: "#fffafa" },
  { name: "springgreen", rgb: "0,255,127", rgba: "0,255,127,1", hex: "#00ff7f" },
  { name: "steelblue", rgb: "70,130,180", rgba: "70,130,180,1", hex: "#4682b4" },
  { name: "tan", rgb: "210,180,140", rgba: "210,180,140,1", hex: "#d2b48c" },
  { name: "teal", rgb: "0,128,128", rgba: "0,128,128,1", hex: "#008080" },
  { name: "thistle", rgb: "216,191,216", rgba: "216,191,216,1", hex: "#d8bfd8" },
  { name: "tomato", rgb: "255,99,71", rgba: "255,99,71,1", hex: "#ff6347" },
  { name: "turquoise", rgb: "64,224,208", rgba: "64,224,208,1", hex: "#40e0d0" },
  { name: "violet", rgb: "238,130,238", rgba: "238,130,238,1", hex: "#ee82ee" },
  { name: "wheat", rgb: "245,222,179", rgba: "245,222,179,1", hex: "#f5deb3" },
  { name: "white", rgb: "255,255,255", rgba: "255,255,255,1", hex: "#ffffff" },
  { name: "whitesmoke", rgb: "245,245,245", rgba: "245,245,245,1", hex: "#f5f5f5" },
  { name: "yellow", rgb: "255,255,0", rgba: "255,255,0,1", hex: "#ffff00" },
  { name: "yellowgreen", rgb: "154,205,50", rgba: "154,205,50,1", hex: "#9acd32" }
];





function setCookie(name, value, daysToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toGMTString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


save.addEventListener('click', function (event) {
  event.preventDefault();

  var colorName = inpText.value;
  var colorType = selectType.value;
  var colorCode = inpCode.value;


  if (colorName === "" || colorCode === "") {
    res.textContent = "Заполните все поля";
    return;
  }


  var ColorValid = false;
  var typeValid = false;
  var codeValid = false;

  Color.forEach(elem => {
    if (elem.name === colorName) {
      ColorValid = true;
      inpText.classList.remove('error');
    }

    const rgbRegExp = /^\d{1,3},\d{1,3},\d{1,3}$/;
    const rgbaRegExp = /^\d{1,3},\d{1,3},\d{1,3},[0-1]?(\.\d{1,2})?$/;
    const hexRegExp = /^#[0-9A-Fa-f]{6}$/;

    if (colorType === "RGB" && rgbRegExp.test(colorCode)) {
      typeValid = true;
      selectType.classList.remove('error');
    } else if (colorType === "RGBA" && rgbaRegExp.test(colorCode)) {
      typeValid = true;
      selectType.classList.remove('error');
    } else if (colorType === "HEX" && hexRegExp.test(colorCode)) {
      typeValid = true;
      selectType.classList.remove('error');
    }


    if (colorCode === elem.rgb && elem.name === colorName || colorCode === elem.rgba && elem.name === colorName || colorCode === elem.hex && elem.name === colorName) {
      codeValid = true;
      inpCode.classList.remove('error');
    }

    if (ColorValid && typeValid && codeValid) {
      var newColor = `name ${colorName.toUpperCase()}  type ${colorType.toUpperCase()}  code ${colorCode}`;
      res.textContent = newColor;
      res.style.color = 'greenyellow';
      res.style.backgroundColor = colorName;
    }
    setCookie(colorName, colorCode, 1);
  });

  if (!ColorValid) {
    inpText.classList.add('error');
  }

  if (!typeValid) {
    selectType.classList.add('error');
  }

  if (!codeValid) {
    inpCode.classList.add('error');
  }

});



var cookies = document.cookie.split('; ');
console.log(cookies);

var nameArr = [];
var valueArr = [];

cookies.forEach(obj => {
  var nameC = obj.split("=");
  var cookieName = (nameC[0].trim());
  var cookieValue = (nameC[1].trim());

  Color.forEach(elem => {
    if(cookieName === elem.name){
      nameArr.push(cookieName);
    }
    if(cookieValue === elem.rgb || cookieValue === elem.rgba || cookieValue === elem.hex){
      valueArr.push(cookieValue);
    }
  });
});

var ul = document.createElement('ul');
ul.className = 'ulName';
wrapper.appendChild(ul);


inpText.addEventListener('mouseenter', function () {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  nameArr.forEach(elem => {
    var li = document.createElement('li');
    li.textContent = elem;
    ul.appendChild(li);
  });

  ul.style.display = 'block';

});
function hideList() {
  ul.style.display = 'none';
}

ul.addEventListener('mouseenter', function () {
  ul.style.display = 'block';
  Array.from(ul.children).forEach(elem => {
    elem.addEventListener('click', function () {
      var newCont = elem.textContent;
      inpText.value = newCont;
      ul.style.display = 'none';
    })
  });
})


ul.addEventListener('mouseleave', function () {
  hideList();
});
inpText.addEventListener('mouseleave', function () {
  hideList();
});






var ulColor = document.createElement('ul');
ulColor.className = 'ulColor';
wrapper.appendChild(ulColor);


inpCode.addEventListener('mouseenter', function () {
  while (ulColor.firstChild) {
    ulColor.removeChild(ulColor.firstChild);
  }

  valueArr.forEach(elem => {
    var li = document.createElement('li');
    li.textContent = elem;
    ulColor.appendChild(li);
  });

  ulColor.style.display = 'block';

});
function hideList1() {
  ulColor.style.display = 'none';
}

ulColor.addEventListener('mouseenter', function () {
  ulColor.style.display = 'block';
  Array.from(ulColor.children).forEach(elem => {
    elem.addEventListener('click', function () {
      var newCont = elem.textContent;
      inpCode.value = newCont;
      ulColor.style.display = 'none';
    })
  });
})


ulColor.addEventListener('mouseleave', function () {
  hideList1();
});
inpCode.addEventListener('mouseleave', function () {
  hideList1();
});