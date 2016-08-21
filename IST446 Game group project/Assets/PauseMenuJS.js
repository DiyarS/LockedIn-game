#pragma strict

var pauseCanvas:Canvas;
var mainCamera:GameObject;
function Start () {
		Screen.lockCursor = true;
		Screen.showCursor = false;
		pauseCanvas.enabled = false;
}

function Update () {
if (Input.GetKeyDown (KeyCode.Escape)) {
			//(GameObject.Find("").GetComponent("MouseLook") as MonoBehaviour).enabled = false;
			(gameObject.Find("Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = false;
			pauseCanvas.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
				}

}

function ResumeGame () {

			//(GameObject.Find("").GetComponent("MouseLook") as MonoBehaviour).enabled = false;
			(gameObject.Find("Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = true;
			pauseCanvas.enabled = false;
			Time.timeScale = 1;
			Screen.lockCursor = true;
			Screen.showCursor = false;
				

}
