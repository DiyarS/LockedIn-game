#pragma strict

var soundhover : AudioClip;
var beep : AudioClip;
var aboutCanvas:Canvas;
var loadLevelCanvas:Canvas;

function Start () {
	aboutCanvas.enabled = false;
}	
function Update () {
	if (Input.GetKeyDown (KeyCode.Escape)) {
			//(GameObject.Find("").GetComponent("MouseLook") as MonoBehaviour).enabled = false;
			(GameObject.Find("Main Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = true;
			aboutCanvas.enabled = false;
			Time.timeScale = 1;
				}
} 
 function OnMouseEnter(){
     audio.PlayOneShot(soundhover);
 }
 
 function OnMouseUp(){
     audio.PlayOneShot(beep);
   //  yield new WaitForSeconds(0.35);
      
     (GameObject.Find("Main Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = false;
     aboutCanvas.enabled = true;
     Time.timeScale = 0;
     Screen.lockCursor = false;
     Screen.showCursor = true;
 }
 
 function LoadLevelsCanvas(){
     audio.PlayOneShot(beep);
   //  yield new WaitForSeconds(0.35);
      
     (GameObject.Find("Main Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = false;
     loadLevelCanvas.enabled = true;
     Time.timeScale = 0;
     Screen.lockCursor = false;
     Screen.showCursor = true;
 }