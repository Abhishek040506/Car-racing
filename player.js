class Player{
    constructor(){
     this.index = null
     this.distance = 0
     this.name = null  
    }

        getCount(){
        var playerRef =  database.ref('playercount')
        playerRef.on("value",(data)=>{
            playercount = data.val()
        })
        }

        updateCount(count){
            database.ref('/').update({playercount:count})
        }

       static getPlayerInfo(){
            var playerRef = database.ref('players') 
            playerRef.on("value",(data)=>{
                allplayers = data.val()
            })
        }

        update(){
          var playerIndex = "players/player"+this.index()
          database.ref(playerIndex).set({
              name : this.name,
              distance : this.distance
          })  
        }
}