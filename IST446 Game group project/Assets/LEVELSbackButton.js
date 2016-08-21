#pragma strict

var soundhover : AudioClip;
var beep : AudioClip;
//var moveToCanvas:Canvas;
var currentCanvas:Canvas;
var back:boolean;
function Start () {
//	moveToCanvas.enabled = false;
	currentCanvas.enabled = false;
}

function Update () {
} 
 function OnMouseEnter(){
     audio.PlayOneShot(soundhover);
     audio.PlayOneShot(beep); 
    currentCanvas.enabled = false;
    (GameObject.Find("Main Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = true;
  
 }
 