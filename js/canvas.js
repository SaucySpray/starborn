export default class Canvas {
  constructor() {
    // init canvas & context
    this.$canvas = document.querySelector('#canvas')
    this.context = this.$canvas.getContext('2d')

    // define screen & mouse properties
    this.screen = {
      width: window.innerHeight,
      height: window.innerHeight,
    }
    
    this.cursor = {
      x: 0,
      y: 0,
      color: '#fff'
    }

    // ambiant sound
    this.sound = new Audio('../src/medias/sounds/eternity.mp3')
    this.sound.loop = true

    // DOM elements
    this.$interface = document.querySelector('#interface')
    this.$upper = this.$interface.querySelector('.upper')
    this.$startContainer = this.$interface.querySelector('.start-container')
    this.$start = this.$interface.querySelector('.start')
    this.$lower = this.$interface.querySelector('.lower')
    this.$playerBtn = this.$interface.querySelector('.on-off')
    this.$story = this.$interface.querySelector('.story')
    this.$storyInner = this.$story.querySelector('.story-text-inner')
    this.$storyInput = this.$story.querySelector('.input-row')
    this.$storyValue = this.$story.querySelector('.story-input')
    this.$storySubmit = this.$story.querySelector('.story-submit')
    this.$continue = this.$interface.querySelector('.continue')
    this.$logo = this.$interface.querySelector('.logo')

    // story narration
    this.story = {}
    this.name = 'Gargantua'
    this.story.intro = 'Here we are, in the deepness of our universe. Where the spatial dust dance with the gaz to create life. Not our vision of life. A life that is among our. The one who has bring life on earth for example. The life of a star.',
    this.story.nameStar = 'How would you like to name our star ?',
    this.story.nameConfirm = `Fine, let’s find out what will look the life of ${this.name} !`,
    this.story.blueStar = `${this.name} will be approximately 2.5 time larger than our sun when she’ll die, so what’s her life process ? First of all, she’ll start with an Hydrogen composition and her color will be brighter blue.`,
    this.story.yellowStar = `Then, the Hydrogen will be consume and transformed in Helium, which will change ${this.name}’s color to yellow.`,
    this.story.redStar = `Finally, after finishing her expansion and combustion, ${this.name} will be a red giant. That’s where her life pretty much end. But her death will be, as her life was, spectacular.`,
    this.story.startEnd = `${this.name} is now bigger & colder than she has never been in her life. Her time is running out and some beautiful gravity trick will oppere. ${this.name} is going to become what we call a gravitational singularity.`,
    this.story.end = `${this.name}'s mass will exeed more than 130 times the mass of our sun. And she’ll be almost invisible for humans eyes. We’ll only see the light of the others stars she’s absorbing.`

    // update canvas size & mouse position
    window.addEventListener('resize', () => this.resize())
    window.addEventListener('mousemove', (_e) => {
      this.cursor = {
        x: _e.clientX,
        y: _e.clientY
      }
    })

    //initiate size of browser
    this.resize()
  }

  // reponsive functions
  resize() {
    this.screen.width = window.innerWidth
    this.screen.height = window.innerHeight

    this.$canvas.width = this.screen.width
    this.$canvas.height = this.screen.height
  }
}

// We already exported our class when we defined it !
// Check Star.js to continue :y: !