const container = document.querySelector('.container');


function makeGrid (rows, columns) {
    
    for(i = 0; i < (rows * columns); i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseenter', () => {
            div.style.setProperty('background-color', 'black')
            div.style.setProperty('border', '1px solid white')
        })
        container.appendChild(div);
    }

    container.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
    container.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr)`);

}

makeGrid(prompt('Set the rows', ''), prompt('Set the columns', ''));



