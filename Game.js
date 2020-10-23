class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    Player.getPlayerinfo()
    if(allPlayers!==undefined){
    var y=150
    for(var pr in allPlayers){
      if(pr==="player"+player.index){
        fill("red")
      }
      else{
        fill("black")
      } 
      y += 20;
      text(allPlayers[pr].name+ ":"+allPlayers[pr].distance,120,y);
    }
  }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance = player.distance + 25;
      player.update();
    }
  }
}
