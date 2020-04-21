let imagesIndex = 1
let maxIndex = 4
let cuee = imagesIndex
document.getElementById('prev').onclick = () => {
    let img = document.getElementById('flower')
    console.log(img)
    cuee--
    if (cuee >= imagesIndex && cuee <= maxIndex) {
        img.setAttribute('src', `./images/${cuee}.jpg`)
    }

}
document.getElementById('next').onclick = () => {
    let img = document.getElementById('flower')
    console.log(img)
    cuee++
    if (cuee <= maxIndex) {
        img.setAttribute('src', `./images/${cuee}.jpg`)
    }

}