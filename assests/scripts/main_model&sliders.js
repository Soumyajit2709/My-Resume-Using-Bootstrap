var modal = document.getElementById("Modal");
var img_1 = document.getElementById("img_1");
var img_2 = document.getElementById("img_2");
var img_3 = document.getElementById("img_3");
var img_4 = document.getElementById("img_4");
var modalImg = document.getElementById("img_main");
var captionText = document.getElementById("caption");
var head = document.getElementById("heading");
var reg1 = "®";
var res1 = reg1.sup();
var reg2 = "™";
var res2 = reg2.sup();

img_1.onclick = function(){
  modal.style.display = "block";
  $('html').css('overflow', 'hidden');
  modalImg.src = "assets/img/modal/img1_2.jpg";
  head.innerHTML = "Far Cry"+res1+" 5";
  captionText.innerHTML = "The game takes place in Hope County, a fictional region of Montana, United States. The main story revolves around the Project at Eden's Gate, a doomsday cult that has taken over the county at the command of its charismatic and powerful leader, Joseph Seed. Players control an unnamed junior deputy sheriff who becomes trapped in Hope County, and must work alongside factions of a resistance to liberate the county from the despotic rule of the Seeds and Eden's Gate. Gameplay focuses on combat and exploration; players battle enemy soldiers and dangerous wildlife using a wide array of weapons. The game features many elements found in role-playing games, such as a branching storyline and side quests. The game also features a map editor, a co-operative multiplayer mode, and a competitive multiplayer mode.<br><br><b><u>Developers:</u></b> Ubisoft Montreal & Toronto<br><b><u>Publishers:</u></b> Ubisoft<br><b><u>Series:</u></b> Far Cry<br><b><u>Release:</u></b> March 27, 2018<br><b><u>Genre:</u></b> First-person Shooter<br><b><u>Modes:</u></b> Single-player, Multiplayer<br><b><u>Platforms:</u></b> Windows, PS, Xbox<br><b><u>Engine:</u></b> Dunia";
}

img_2.onclick = function(){
  modal.style.display = "block";
  $('html').css('overflow', 'hidden');
  modalImg.src = "assets/img/modal/img2_2.jpg";
  head.innerHTML = "Grand Theft Auto V";
  captionText.innerHTML = "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their efforts to commit heists while under pressure from a corrupt government agency and powerful crime figures. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles. The game is played from either a third-person or first-person perspective, and its world is navigated on foot or by vehicle.<br><br><b><u>Developers:</u></b> Rockstar North<br><b><u>Publishers:</u></b> Rockstar Games<br><b><u>Series:</u></b> Grand Theft Auto<br><b><u>Release:</u></b> 17 September, 2013<br><b><u>Genre:</u></b> Action-adventure<br><b><u>Modes:</u></b> Single-player, Multiplayer<br><b><u>Platforms:</u></b> Windows, PS, Xbox<br><b><u>Engine:</u></b> RAGE";
}

img_3.onclick = function(){
  modal.style.display = "block";
  $('html').css('overflow', 'hidden');
  modalImg.src = "assets/img/modal/img3_2.jpg";
  head.innerHTML = "Forza Horizon 4";
  captionText.innerHTML = "Forza Horizon 4 is a racing video game set in an open world environment based in a fictionalised Great Britain, with regions that include condensed representations of Edinburgh, the Lake District (including Derwentwater), and the Cotswolds (including Broadway), among others, and features currently over 670 licensed cars. The game features a route creator which enables players to create their own races. The game takes place in a synchronised shared world, compared to the AI-driven 'drivatars' from its predecessors, with each server supporting up to 72 players. The game is also playable in offline mode. Players have the opportunity to buy in-game houses which unlock new items, cars and game-play perks. The game features a dynamic weather system that also depicts the change of seasons.<br><br><b><u>Developers:</u></b> Playground Games<br><b><u>Publishers:</u></b> Microsoft Studios<br><b><u>Series:</u></b> Forza<br><b><u>Release:</u></b> 2 October, 2018<br><b><u>Genre:</u></b> Racing<br><b><u>Modes:</u></b> Single-player, Multiplayer<br><b><u>Platforms:</u></b> Windows, Xbox<br><b><u>Engine:</u></b> Unreal Engine 4";
}

img_4.onclick = function(){
  modal.style.display = "block";
  $('html').css('overflow', 'hidden');
  modalImg.src = "assets/img/modal/img4_2.jpg";
  head.innerHTML = "Star Wars Jedi: Fallen Order"+res2;
  captionText.innerHTML = "Star Wars Jedi: Fallen Order is an action-adventure video game played from a third-person perspective. Players control Cal Kestis and have access to a lightsaber and the Force, which are used in both combat and puzzle scenarios. Enemy types range from Imperial stormtroopers, droids, and Purge Troopers, who have been trained specifically to battle Jedi, to wild beasts and undead Zabrak warriors that are native to each planet Cal explores. The game's bosses include Inquisitors, who also wield lightsabers and the Force, bounty hunters hired to hunt down Cal, large vehicles such as AT-STs, and wild beasts like the Oggdo Bogdo and the Gorgara.The options menu documents the story as well as characters the player meets, along with a guide of how to defeat enemies.<br><br><b><u>Developers:</u></b> Respawn Entertainment<br><b><u>Publishers:</u></b> 	Electronic Arts<br><b><u>Release:</u></b> 15 November, 2019<br><b><u>Genre:</u></b> Action-adventure<br><b><u>Modes:</u></b> Single-player<br><b><u>Platforms:</u></b> Windows, PS, Xbox, Stadia<br><b><u>Engine:</u></b> Unreal Engine 4";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
  $('html').css('overflow', 'scroll');
}

$(".page").on("touchmove", function(event) {
  event.preventDefault()
});