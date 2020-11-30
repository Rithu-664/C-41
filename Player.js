class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;
    }

    getCount(){
     var getCount = database.ref('playerCount');
     getCount.on("value",function(data){playerCount = data.val()})
    }

    update(){
        var playerindex = "players/player"+this.index;
        database.ref(playerindex).set({
          name: this.name,
          distance: this.distance
        })
    
    }
    updateCount(count){
     database.ref('/').update({
         playerCount: count
     })
    }

    static playerInfo(){
        var playerInfo = database.ref('players')
        playerInfo.on("value",function(data){allPlayers=data.val();})
    }

    static updateCarsAtEnd(carsCount){
      database.ref('/').update({
          carsAtEnd:carsCount
      })
    }

    getCarCountAtEnd(){
        var getCarCount = database.ref('carsAtEnd');
        getCarCount.on("value",function(data){this.rank = data.val();})
    }
}