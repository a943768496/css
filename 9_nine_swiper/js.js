var items = document.getElementsByClassName('item')
var goPreBtn = document.getElementById('goPre')
var goNextBtn = document.getElementById('goNext')
var points = document.getElementsByClassName('point')

var index = 0

var time = 0

var goIndex = function() {
  for (let i = 0; i < items.length; i++) {
    items[i].className = 'item'
    points[i].className = 'point'
  }
  items[index].className = 'item active'
  points[index].className = 'point active'
  time = 0
}

var goNext = function() {
  if(index < 3) {
    index++
  }else{
    index = 0
  }
  goIndex()
}

goNextBtn.addEventListener('click', function() {
  goNext()
})

goPreBtn.addEventListener('click', function() {
  if(index > 0) {
    index--
  }else{
    index = 3
  }
  goIndex()
})

for (let i =0; i < points.length; i++) {
  points[i].addEventListener('click', function(){
    var pointIndex = this.getAttribute('data-index')
    index = pointIndex
    goIndex()
  })
}


setInterval(function(){
  time++
  if(time == 20) {
    goNext()
  }
},100)



