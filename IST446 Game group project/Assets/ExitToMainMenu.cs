using UnityEngine;
using System.Collections;

public class ExitToMainMenu : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	// Update is called once per frame
	public void StartGame () {
		Application.LoadLevel ("");
		
	}

	public void MainMenu(){
		Application.LoadLevel ("");
	}

	// Update is called once per frame
	void ExitGame () {
		Application.Quit ();
	}
}
