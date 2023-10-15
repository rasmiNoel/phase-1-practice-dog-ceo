console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/1"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(json) {
    const main = document.getElementById('dog-image-container')
    json.message.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        main.appendChild(img)
    })
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(json) {
    const ul = document.getElementById('dog-breeds')
    const breeds = Object.keys(json.message)
    breeds.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed
        ul.appendChild(li)
        li.addEventListener('click', changeColor)
    })
}

function changeColor(event) {
    event.target.style.color = 'red'
}

function filterBreeds() {
    const dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('change', function(event) {
        const ul = document.getElementById('dog-breeds')
        const breeds = ul.getElementsByTagName('li')
        for (let i = 0; i < breeds.length; i++) {
            if (breeds[i].innerText[0] === event.target.value) {
                breeds[i].style.display = ''
            } else {
                breeds[i].style.display = 'none'
            }
        }
    })
}
filterBreeds()
