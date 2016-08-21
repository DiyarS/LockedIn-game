#pragma strict

function Start () {

}

function Update () {

}
 var soundhover : AudioClip;
 var beep : AudioClip;
 var QuitButton : boolean = true;
 
 function OnMouseEnter(){
     audio.PlayOneShot(soundhover);
     //audio.clip = soundhover;
    // audio.Play();
 }
 
 function OnMouseUp(){
     audio.PlayOneShot(beep);
   //  yield new WaitForSeconds(0.35);
     if(QuitButton){
         Application.Quit();
     }
 }