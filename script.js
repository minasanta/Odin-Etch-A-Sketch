const grids = document.querySelector('.grids');
function build(){
    for(let i = 0;i < 16*16;i++){
        let grid = document.createElement('div');
        grid.classList.add('grid-item');
        grids.appendChild(grid);
    }
}
build();
const gridItmes = document.querySelectorAll('.grid-item');
gridItmes.forEach((grid)=> {
    grid.addEventListener("mouseover", ()=> {
        grid.style.backgroundColor='black';
    });
});


const btnClear = document.getElementById('clear');
btnClear.addEventListener('click',function(){
    const cells = document.querySelectorAll('.grid-item');
    for(let i = 0;i < 16*16;i++){
        cells[i].style.backgroundColor='white';
    }
});