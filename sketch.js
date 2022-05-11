var hypnoticBall, database;
var position = 0;
var bola;

function setup() {
  
    createCanvas(500, 500);
    bola = createSprite(250, 250, 10, 10);
    bola.shapeColor = "red";

    //variável que terá o banco de dados


    //função que criará um ouvinte nos valores do banco de dados



}


function draw() {
    background("white");

    if(position !== undefined){

        if (keyDown(LEFT_ARROW)) {
            mexer(-3,0);
        }
        if (keyDown(RIGHT_ARROW)) {
            mexer(3,0);
        }
        if (keyDown(UP_ARROW)) {
            mexer(0,-3);
        }
        if (keyDown(DOWN_ARROW)) {
            mexer(0,3);
        }
        drawSprites();

    }
}

//função que irá alterar os valores dentro do banco de dados 

function mexer(x,y){
    bola.x +=x;
    bola.y +=y

}

//função que irá coletar os valores da posição do banco de dados e por na bola

function mostrarErro(){
    console.log("Dados não recebidos do banco de dados");
}