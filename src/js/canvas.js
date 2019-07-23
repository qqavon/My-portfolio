const canvasElement = document.querySelector('canvas')
const ctx = canvasElement.getContext('2d')

canvasElement.width = window.innerWidth
canvasElement.height = window.innerHeight

window.addEventListener('resize', () => {
    canvasElement.width = window.innerWidth
    canvasElement.height = window.innerHeight
})

function Particle() {
    this.minSize = 200
    this.maxSize = canvasElement.width/4
    
    this.size = Math.random() * (this.maxSize - this.minSize) + this.minSize
    this.currentSize = this.size

    this.x = (Math.random() * canvasElement.width)
    this.y = (Math.random() * canvasElement.height)
    this.currentSize = this.size * this.start

    this.spdMin = .35 + (Math.random() * 2)
    this.spdMax = 15
    this.currentSpd = this.spdMax

    this.draw = function() {
        ctx.beginPath()

        ctx.moveTo(this.x, this.y)

        ctx.lineTo(this.x, this.y + this.currentSize)
        ctx.lineTo(this.x + this.currentSize, this.y)
        ctx.lineTo(this.x, this.y - this.currentSize)
        ctx.lineTo(this.x - this.currentSize, this.y)
        ctx.lineTo(this.x, this.y + this.currentSize)

        ctx.fillStyle = '#11111C'
        ctx.fill()
    }

    this.update = function() {
        if(this.currentSpd > this.spdMin) {
            this.currentSpd -= .1
        }
        this.y += this.currentSpd
        
        if(this.currentSize >= 0) {
            this.currentSize = this.size * ( 1 - ( this.y / (canvasElement.height/1.25) ))
        }
        else {
            this.size = Math.random() * (this.maxSize - this.minSize) + this.minSize
            this.currentSize = this.size

            this.y -= this.size*4
            this.x = (-this.currentSize/2) + (Math.random() * canvasElement.width) + (this.currentSize/2)
        }
        
        this.draw()
    }
}

const p = new Particle()
const particles = []

let quantity = Math.floor(canvasElement.width/50)
for(let i = 0; i < quantity; i++) {
    particles[i] = new Particle()
}

function animate() {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)
    requestAnimationFrame(animate)
    
    particles.forEach(p => p.update())
    p.update()
}
animate()