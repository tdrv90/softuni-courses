function growingWord() {
  let growingText = document.querySelector("#exercise > p");

  if (!growingText.hasAttribute('style')) {
    growingText.setAttribute('style', 'color: blue; font-size: 2px');
  } else {
    let attributes = growingText.getAttribute('style');
    let [colorStyle, sizeStyle] = attributes.split('; ');

    let color = colorStyle.split(': ');
    if (color[1] === 'blue') {
      color[1] = 'green';
    } else if (color[1] === 'green') {
      color[1] = 'red';
    } else if (color[1] === 'red') {
      color[1] = 'blue';
    }
    color = color.join(": ");

    let size = Number(sizeStyle.match(/[\d]+/gi));
    size *= 2;
    sizeStyle = `font-size: ${size}px`;

    let style = `${color}; ${sizeStyle}`
    growingText.setAttribute('style', style);
  }
}