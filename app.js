const container = document.querySelector('.container');
const cellsAmountBtn = document.querySelector('.set-cells-amount');

function makeGridBox (sideLength) {
    
    for(i = 0; i < (sideLength ** 2); i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseenter', () => {
            div.style.setProperty('background-color', 'black');
            div.style.setProperty('border', '1px solid white');
        });
        container.appendChild(div);
    };

    container.style.setProperty('grid-template-rows', `repeat(${sideLength}, 1fr)`);
    container.style.setProperty('grid-template-columns', `repeat(${sideLength}, 1fr)`);

};

cellsAmountBtn.addEventListener('click', () => {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    };
    
    makeGridBox(prompt('Set the size of the box', ''));
});

