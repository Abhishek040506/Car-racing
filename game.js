class Game{
    constructor(){}
    getState(){
     var game = database.ref("gamestate")
     game.on("value", function(data){
         gamestate = data.val()
     })
    }
    update(state){
        database.ref("/").update({gamestate : state})
    
    } 
    
   async start(){
    if(gamestate===0){
        player = new Player()
        var playerCountRef = await database.ref('playercount').once("value")
        if(playerCountRef.exist()){
            playercount = playerCountRef.val()
            player.getCount()
        }
        
        form = new Form()
        form.display()

        car1 = createSprite(100,200)
        car1.addImage("car1 image", carimg1)
        car2 = createSprite(300,200)
        car2.addImage("car2 image", carimg2)
        car3 = createSprite(500,200)
        car3.addImage("car3 image", carimg3)
        car4 = createSprite(700,200)
        car4.addImage("car4 image", carimg4)

        cars=[car1,car2,car3,car4]
    }

}

    play (){
        form.hide()
        Player.getPlayerInfo()
        if(allplayers !== undefined){
            background((198,135,103))
            image(track,0,-displayHeight*4,displayWidth,diplayHeight*5)
            var index = 0
            var x = 175
            var y

            for(var plr in allplayers){
                index = index+1 
                x = x+200
                y = displayHeight - allplayers[plr].distance
                cars[index-1].x = x
                cars[index-1].y = y 
                
                if(index===player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,60,60)
                    cars[index-1].shapeColour= "red" 
                }
            }
        }

        drawSprites();
    }

}
