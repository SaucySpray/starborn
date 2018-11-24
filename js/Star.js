// This class will define the properties of each stars
export default class Star {
  // we define the context in which our stars will appear & their poping position
  constructor(context, positions, isStarted) {
    this.context = context

    this.isStarted = isStarted

    // random angle wich our star will navigate to
    this.angle = Math.random() * Math.PI * 3

    // our star properties
    this.star = {
      radius: Math.random(),
      color: `hsl(
        ${Math.floor(Math.random() * 360)},
        ${this.randIn(50,30)}%,
        ${this.randIn(100, 70)}%
      )`,
      x: positions.x,
      y: positions.y,
      speed: {
        x: Math.cos(this.angle)*24,
        y: Math.sin(this.angle)*12
      }
    }

    this.bornStar = {
      radius: 18,
      color: '#ffffff'
    }
  }

  // speed adapt to create our star
  reduceSpeed(value) {
    this.star.speed.x = this.star.speed.x / value
    this.star.speed.y = this.star.speed.y / value
  }

  // random number between 2 values
  randIn(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // we draw our stars on canvas
  draw() {
    this.context.beginPath()
    this.star.x += this.star.speed.x
    this.star.y += this.star.speed.y
    this.context.arc(
      this.star.x,
      this.star.y,
      (this.star.radius++) / 10,
      Math.PI * 2,
      false)
      this.context.fillStyle = this.star.color
      this.context.globalAlpha = 0.2
      this.context.shadowColor = this.star.color
      this.context.closePath()
      this.context.fill()
    }
    
    drawBornStar() {
      this.reduceSpeed(6)
      this.context.beginPath()
      this.context.arc(
        this.star.x,
        this.star.y,
        this.bornStar.radius,
        Math.PI * 2,
        false
        )
      this.context.globalAlpha = 0.2
      this.context.save()
      this.context.shadowColor = this.bornStar.color
      this.context.shadowBlur = 15
      this.context.fillStyle = this.bornStar.color
      this.context.closePath()
      this.context.fill()
      this.context.restore()
    }
  }