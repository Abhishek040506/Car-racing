class Form{
    constructor(){
        this.info = createInput('name')
        this.button = createButton('submit')
        this.greeting = createElement('h2')
        this.title = createElement('h2')
    }
    display(){
    this.title.html("Dead car racing")
    this.title.position(diplayWidth/2-50, 0)    
    this.info.position(displayWidht/2-40, diplayHeight/2-80)
    this.button.position(diplayWidth/2-30, diplayHeight/2)

    this.button.mousePressed(()=>{
    this.info.hide()
    this.button.hide()
    player.name= this.input.value
    player.count += 1;
    player.index = playerCount
    player.update()
    player.updateCount(playerCount)
    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2 - 70, diplayHeight/4)
    }
    )
    }

    hide(){
        this.info.hide()
        this.button.hide()
        this.greeting.hide()
        this.title.hide()
    }
 }