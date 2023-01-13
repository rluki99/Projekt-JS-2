const plus = document.querySelector('.sizeUp')
const minus = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const p = document.querySelector('p')
let fSize = 36

const sizeUp = () => {
    fSize+=16
    p.style.fontSize = fSize + 'px'
}

const sizeDown = () => {
    if(fSize>=32) {
        fSize-=16
        p.style.fontSize = fSize + 'px'
    } else {}
}

const colorChange = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    p.style.color = `rgb(${r},${g},${b})`
    p.textContent = `Kolor to : rgb(${r},${g},${b})`
}


plus.addEventListener('click', sizeUp)
minus.addEventListener('click',sizeDown)
color.addEventListener('click',colorChange)
