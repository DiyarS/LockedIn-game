#pragma strict

var levelToLoad : String;
 var soundhover : AudioClip;
 var beep : AudioClip;
 var QuitButton : boolean;
 var NewGameLoadLevel : Canvas;

function Start () {
 NewGameLoadLevel.enabled = false;
    

}

function Update () {

}


 
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
     else{
         //Application.LoadLevel(levelToLoad);
         NewGameLoadLevel.enabled = true;
         (GameObject.Find("Main Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = false;
     }
 }
 
 
