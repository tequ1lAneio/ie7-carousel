var img = document.getElementsByClassName('img')
var wrapper = document.getElementById('wrapper')
var leftBtn = document.getElementById('leftBtn')
var rightBtn = document.getElementById('rightBtn')
var imgNum = document.getElementById('wrapper')

function Carousel(opt) {
    var _this = this
    var timer;
    this.currentIndex = 0
    this.init = function() {
        wrapper.style.width = 133 + 170 * (img.length - 1) + 'px'
        wrapper.style.left = -3 * 170 + 'px'
        wrapper.style.height = img[0].offsetHeight + 'px'
        this.toLeft()
        this.toRight()
    }
    this.toLeft = function() {
        leftBtn.addEventListener('click', () => {
            this.animate('left')
        })
    }
    this.toRight = function() {
        rightBtn.addEventListener('click', () => {
            carousel.animate('right')
        })
    }
    this.animate = function(direction) {
        var step = 0; 
        var _this = this

        timer = setInterval(() => {
            if (direction === 'right') {
                if (step <= 160) {
                    wrapper.style.left = wrapper.offsetLeft - 5 + 'px'
                    step += 5
                } else {
                    wrapper.style.left = wrapper.offsetLeft - 5 + 'px'
                    this.currentIndex ++
                    if (wrapper.offsetLeft == - (img.length - 3) * 170) {
                        wrapper.style.left = -3 * 170 + 'px'
                    }
                    clearInterval(timer)
                }
            } else {
                
            }
            
        }, 5)
    }
}


var carousel = new Carousel()
carousel.init()