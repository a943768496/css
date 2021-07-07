let banner = document.querySelector('.banner')
let images = document.querySelectorAll('.image')

let x = 0
let girl_index = 1
let total_x = document.getElementsByTagName('body')[0].clientWidth
let half_x = total_x / 2
let step = half_x / 5

let image_data = [
  { x: 0, b: 4 },
  { x: 0, b: 0 },
  { x: 0, b: 1 },
  { x: 0, b: 4 },
  { x: 0, b: 5 },
  { x: 0, b: 6 },
]

let init = () => {
  for (let index = 0; index < images.length; index ++) {
    images[index].children[0].style = "transform: translateX(0px); filter: blur(" + image_data[index].b +"px); transition: 0.1s linear;"
  }
}

let blink = () => {
  let timer = 4000
  if (girl_index === 4) {
    girl_index = 1
    timer = 4000
  }else{
    girl_index ++
    timer = 50
  }
  images[1].children[0].src = "img/girl" + girl_index + ".png"

  setTimeout(() => {
    blink()
  }, timer)
}

banner.addEventListener('mouseover', (e) => {
  x = e.x
})
banner.addEventListener('mousemove', (e) => {
  let x_step = (x - e.x) * 3 / step
  let b_step = (x - e.x) / step
  for(let index = 1; index < images.length; index ++) {
    let x_change = x_step * index
    let b_change = Math.abs(image_data[index].b + b_step)
    images[index].children[0].style = "transform: translate(" + (0 - x_change) +"px); filter: blur(" + b_change +"px); transition: 0.1s linear;"
  }
})
banner.addEventListener('mouseout', (e) => {
  init()
})



window.onload = () => {
  init()
  blink()
}