var canvas = new fabric.Canvas('myCanvas'); 

player_x = 10; 
player_y = 10; 

block_width = 30; 
block_height = 30; 

var player_object= ""; 
var block_object= "";

function uploadboy(){

   fabric.Image.fromURL("player.png",function(Img){

     player_object=Img;
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set ({

        top:player_y,
        left:player_x

     });

canvas.add(player_object);
   });
}



function uploadblock(getimage){

   fabric.Image.fromURL(getimage,function(Img){

     block_object=Img;
     block_object.scaleToWidth(block_width);
     block_object.scaleToHeight(block_height);
     block_object.set ({

        top:player_y,
        left:player_x

     });

canvas.add(block_object);
   });
}


window.addEventListener("keydown",keypressed);

function keypressed(e){

   var key_code=e.keyCode;
   console.log(key_code);


   if (key_code=="38"){

      up();
      console.log("up");
   }

   if (key_code=="40"){

      down();
      console.log("down");
   }

   if (key_code=="37"){

      left();
      console.log("left");
   }

   if (key_code=="39"){

      right();
      console.log("right");
   }


   if (key_code=="65"){

      uploadblock("cloud.jpg");
      console.log("a");
   }


   if (key_code=="66"){

      uploadblock("dark_green.png");
      console.log("b");
   }


   if (key_code=="67"){

      uploadblock("ground.png");
      console.log("c");
   }


   if (key_code=="68"){

      uploadblock("light_green.png");
      console.log("d");
   }


   if (key_code=="69"){

      uploadblock("roof.jpg");
      console.log("e");
   }


   if (key_code=="70"){

      uploadblock("trunk.jpg");
      console.log("f");
   }


   if (key_code=="71"){

      uploadblock("unique.png");
      console.log("g");
   }


   if (key_code=="72"){

      uploadblock("wall.jpg");
      console.log("h");
   }


   if (key_code=="73"){

      uploadblock("yellow_wall.png");
      console.log("i");
   }

   if (e.shiftKey==true && key_code=="107"){
       block_height= block_height+10;
       block_width= block_width+10;
       console.log("+");
       document.getElementById("current_width").innerHTML=block_width;
       document.getElementById("current_height").innerHTML=block_height;
   }

   if (e.shiftKey==true && key_code=="109"){
      block_height= block_height-10;
      block_width= block_width-10;
      console.log("-");
      document.getElementById("current_width").innerHTML=block_width;
      document.getElementById("current_height").innerHTML=block_height;
  }

}

function up(){

   if(player_y>0){

      player_y=player_y-block_height;
      canvas.remove(player_object);
      uploadboy();


   }

}

function down(){

   if(player_y<500){

      player_y=player_y+block_height;
      canvas.remove(player_object);
      uploadboy();


   }


}

function right(){

   if(player_x<850){

      player_x=player_x+block_width;
      canvas.remove(player_object);
      uploadboy();


   }

}

function left(){

   if(player_x>0){

      player_x=player_x-block_width;
      canvas.remove(player_object);
      uploadboy();


   }


}