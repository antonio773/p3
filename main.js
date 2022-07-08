var config = {
    type: Phaser.AUTO,
    scale:{
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
   width: "100%",
   height: "100%"
    },
    physics:{
        default: 'arcade',
        arcade:{
            debug: true,
            gravity:{y:100}
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game=new Phaser.Game(config);
//var sceneMain=new Phaser.Scene("main");
var width;
var height;
var player;
var ground_grupo;
var back;
var nuvem;
var camera;
var btn_left;
var btn_right;
var andar_left;
var andar_right;
var btn_pulo;
var pulo;
var arvores;
var arbustos;
var inimigo;
var bloco;

function preload(){
this.load.image("ground", "ground_game.png");
this.load.image("background", "background123.png");
this.load.image("player", "player.png");
this.load.image("btn", "btn.png");
this.load.image("nuvem", "nuvem123.png");
this.load.image("arvore", "arvore.png");
this.load.image("arbusto", "arbusto.png");
this.load.image("pulo", "btn_jump.png");
this.load.image("inimigo", "inimigo.png");
this.load.image("bloco", "bloco.png");
}

function create(){
width=game.scale.width;
height=game.scale.height;

this.input.addPointer(5);
this.physics.world.setBounds(0,0,10000,10000);
back=this.add.image(0,0,"background").setOrigin(0,0);
back.setScrollFactor(0);

nuvem=this.add.tileSprite(0,0, 1000, 100, "nuvem").setOrigin(0,0).setAlpha(0.8);
nuvem.scrollFactorX=0;

bloco=this.physics.add.group();
bloco.create(2304,150,"bloco").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();

ground_grupo=this.physics.add.staticGroup();
ground_grupo.create(0,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(192,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(384,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(576,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(768,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(960,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(1152,250,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(1344,250,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(1536,250,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(1728,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(1920,350,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(2112,350,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(2304,350,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(2304,200,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(2496,350,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(2688,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(2880,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(3264,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(3648,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(4032,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();
ground_grupo.create(4416,300,"ground").setOrigin(0,0).setScale(0.38).setBounce(1,0).refreshBody();



arvores=this.add.group();
arvores.create(400,95,"arvore").setOrigin(0,0).setScale(0.4);

arbustos=this.add.group();
arbustos.create(350,285,"arbusto").setScale(0.6).setOrigin(0,0);

inimigo=this.physics.add.group();
inimigo.create(928, 230, "inimigo").setOrigin(0,0).setScale(0.8).refreshBody();

player=this.physics.add.image(200,0,"player").setOrigin(0,0).setScale(0.2);
player.setGravityY(300);
player.setBounce(1,0.1);
//player.setCircle(130);


btn_left=this.add.image(width/100,height/1.3,"btn").setOrigin(0,0).setScale(0.5).setScrollFactor(0).setAlpha(0.8);
btn_left.setInteractive();
andar_left=false;
btn_left.on("pointerdown", function btn_left_down(){
andar_left=true;
player.flipX=true;
}, this);
btn_left.on("pointerup", function btn_left_up(){
andar_left=false;
}, this);

btn_right=this.add.image(width/8,height/1.3,"btn").setOrigin(0,0).setScale(0.5).setScrollFactor(0).setAlpha(0.8);
btn_right.flipX=true;
btn_right.setInteractive();
andar_right=false;
btn_right.on("pointerdown", function btn_right_down(){
andar_right=true;
player.flipX=false;
}, this);
btn_right.on("pointerup", function btn_right_up(){
andar_right=false;
}, this);

btn_pulo=this.add.image(width/2.6+width/2,height/1.3,"pulo").setOrigin(0,0).setScale(0.5).setScrollFactor(0).setAlpha(0.8).setInteractive();
pulo=false;
btn_pulo.on("pointerdown", function btn_pulo_down(){
pulo=true;
});
btn_pulo.on("pointerup", function btn_pulo_down(){
pulo=false;
});

this.physics.add.collider(player, ground_grupo);
this.physics.add.collider(ground_grupo, inimigo);
this.physics.add.collider(ground_grupo, bloco);
this.physics.add.collider(player, inimigo, function xd(){
gameover();
});
}

function gameover(){
window.location.reload();
//app.ShowPopup( "perdeu" );
}

function update(){
if(player.y>=500){
gameover();
}
nuvem.tilePositionX+=0.1;
camera=this.cameras.main;
camera.setBounds(0,0,10000,10000);
camera.startFollow(player, true, 0.005, 0.005, -100,40);

//andar left
if(andar_left==true){
player.body.setVelocityX(-100);
}else{
player.body.setVelocityX(0);
}
//andar right
if(andar_right==true){
player.body.setVelocityX(100);
}

//pulo
if(pulo==true&&player.body.touching.down){
player.body.setVelocityY(-300);
}

if(inimigo.getChildren()[0].x>=928){
inimigo.getChildren()[0].setVelocityX(-100);
inimigo.getChildren()[0].flipX=false;
}else if(inimigo.getChildren()[0].x<=760){
inimigo.getChildren()[0].setVelocityX(100);
inimigo.getChildren()[0].flipX=true;
}
function jj(){
alert("%&@&:")
}
}