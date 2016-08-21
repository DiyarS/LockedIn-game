#pragma strict

var soundhover : AudioClip;
var beep : AudioClip;
var currentCanvas:Canvas;
var chooseLevel : boolean;
function Start () {
//	moveToCanvas.enabled = false;
	currentCanvas.enabled = false;
}
function Update (){}
// Update is called once per frame
	
	function BackButtonChooseLevel () {
		currentCanvas.enabled = false;
	
	}
   function BackButtonClicked () {
			
			(GameObject.Find("Main Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = true;
			currentCanvas.enabled = false;
			Time.timeScale = 1;
			Screen.lockCursor = true;
			Screen.showCursor = true;
	}
 