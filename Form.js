class Form{
    constructor(){
     this.input = createInput("player name")
     this.button = createButton("Submit")
     this.greeting = createElement('h2')
     this.reset = createButton("Reset")
    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game"); 
        title.position(displayWidth/2-50,30);

        this.input.position(displayWidth/2-20,displayHeight/2-30);
        this.button.position(displayWidth/2-20,displayHeight/2+30);
        this.reset.position(displayWidth-100,50);

       this.button.mousePressed(()=>{ 
           this.input.hide();
           this.button.hide();
          player.name = this.input.value();
          playerCount++
          player.index = playerCount;
        console.log(player.index)
          player.update();
          player.updateCount(playerCount);

         

           this.greeting.html("Welcome to the game" + player.name );
           this.greeting.position(displayWidth/2-40,300);
    })

    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);

    })
           
    
    }

    hide(){
       this.input.hide();
       this.button.hide();
       this.greeting.hide();

    }
}