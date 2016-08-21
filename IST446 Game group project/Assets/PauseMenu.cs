using UnityEngine;
using System.Collections;

public class PauseMenu : MonoBehaviour {
	public Canvas pauseCanvas;
	public GameObject cameraObject;
	// Use this for initialization
	void Start () {
		Screen.lockCursor = true;
		Screen.showCursor = false;
		pauseCanvas.enabled = false;
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Escape)) {
			//(GameObject.Find("").GetComponent("MouseLook") as MonoBehaviour).enabled = false;
			(GameObject.Find("Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = false;
			pauseCanvas.enabled = true;
			Time.timeScale = 0;
			Screen.lockCursor = false;
			Screen.showCursor = true;
				}
	
	}
	public void ResumeGame () {
			//(GameObject.Find("").GetComponent("MouseLook") as MonoBehaviour).enabled = true;
			(GameObject.Find("Camera").GetComponent("CameraFollow") as MonoBehaviour).enabled = true;
			pauseCanvas.enabled = false;
			Time.timeScale = 1;
			Screen.lockCursor = true;
			Screen.showCursor = false;
	}

	public void MainMenu(){
		Application.LoadLevel ("MainMenu");
	}
}
