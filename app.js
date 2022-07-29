const images = [
    { 'id': '1', 'url':'./img/shingeki.jpg' },
    { 'id':'2', 'url':'./img/naruto.jpg' },
    { 'id':'3', 'url':'./img/death-note.jpg' },
    { 'id':'4', 'url':'./img/demon-slayer.jpg' },
    { 'id':'5', 'url':'./img/chihiro.png' },
]
const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach((image) => {
        container.innerHTML += `
        <div class='item'>
           <img src='${image.url}'
        </div>
    `
    })
}

  loadImages(images, containerItems)
  let items = document.querySelectorAll('.item')
const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}
const next = () => {
    const lastItem = items[items.length -1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)