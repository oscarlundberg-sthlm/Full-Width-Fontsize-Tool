const textToMod = document.getElementsByClassName('headline-auto-width');

for (text of textToMod) {
    const parentWidth = parseInt(getComputedStyle(text.parentNode).width);

    let textWidth;
    let fontSize = parseInt(getComputedStyle(text).fontSize);    
    
    switch (getComputedStyle(text).display) {
        
        case 'block':
            textWidth = text.scrollWidth;
            
            if (textWidth > parentWidth) {
                console.log("decreasing fontsize");
                while (textWidth > parentWidth) {
                    fontSize--;
                    text.style.fontSize = `${fontSize}px`;
                    textWidth = text.scrollWidth;
                }
            } else if (textWidth === parentWidth) {
                console.log("increasing fontsize");
                while (textWidth === parentWidth) {
                    fontSize++;
                    text.style.fontSize = `${fontSize}px`;
                    textWidth = text.scrollWidth;
                    if (textWidth < parentWidth) textWidth = parentWidth;
                }
                fontSize--;
                text.style.fontSize = `${fontSize}px`;
            }
            text.style.visibility = "visible";
            break;

        default:
            break;
    }   
}