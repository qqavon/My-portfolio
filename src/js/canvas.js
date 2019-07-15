const canvasElement = document.querySelector('canvas')
const ctx = canvasElement.getContext('2d')

canvasElement.width = window.innerWidth
canvasElement.height = window.innerHeight

window.addEventListener('resize', () => {
    canvasElement.width = window.innerWidth
    canvasElement.height = window.innerHeight
})

function Particle() {
    this.start = Math.random() * 1

    this.minSize = 200
    this.maxSize = canvasElement.width/4
    
    this.size = Math.random() * (this.maxSize - this.minSize) + this.minSize
    this.currentSize = this.size
    
    this.x = Math.random() * canvasElement.width
    this.y = -this.size

    //init
    this.y = (canvasElement.height/1.25) * this.start
    this.currentSize = this.size * this.start

    this.spd = .25 + (Math.random() * 2)

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
        this.y += this.spd
        
        if(this.currentSize >= 0) {
            this.currentSize = this.size * ( 1 - ( this.y / (canvasElement.height/1.25) ))
        }
        else {
            this.size = Math.random() * (this.maxSize - this.minSize) + this.minSize
            this.currentSize = this.size

            this.y = -this.size*2
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