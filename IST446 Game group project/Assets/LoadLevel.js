#pragma strict

var levelToLoad : String;
 var soundhover : AudioClip;
 var beep : AudioClip;
 
function Start () {
 	}

function Update () {
}

 function OnMouseEnter(){
     audio.PlayOneShot(soundhover);
    // audio.clip = soundhover;
     //audio.Play();
 }
 
 function OnMouseUp(){
  //   audio.PlayOneShot(beep);   
     Application.LoadLevel(levelToLoad);
 }
 
 
