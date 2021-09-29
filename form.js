class Form{
//constructor
constructor(){
this.input = createInput("Name");
this.button = createButton('get awareness');
this.title = createElement('h2');
this.points=createElement('h3')
}

//hide 
hide(){
this.button.hide();
this.input.hide();
this.title.hide();
}

//display
display(){
this.title.html("THE EARTH GAME");
this.title.position(displayWidth/2 - 50, 0);
this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
this.button.position(displayWidth/2 + 30, displayHeight/2);
background(fbg);
//mouse pressed
this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
//player.name = this.input.value();
//player.update();
  });

}

}