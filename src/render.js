//render js file 
document.addEventListener('DOMContentLoaded', () => { //sets up an event listener that waits for HTML code to be uploaded first before executing inside code
    const startButton = document.getElementById('start-button'); //creates a start button variable that refers to the 'start-button' in the index.html 

    startButton.addEventListener('click', () => {
        //upon clicking on the start button the event listener will transfer the user to the "Timer" page 
        window.location.href = 'timer.html'; //changes the current page to 'timer.html' 


    }); 

    const backButton = document.getElementById('back-button'); 
    backButton.addEventListener('click', () => { 
        window.location.href = 'index.html';
    })



    //Minimize and Close buttons 
    // the query selector finds an image element with an image element with the alt attribute 'Minimize' inside an element with the class with class 'window-controls'
    const minimizeButton = document.querySelector('.window-controls img[alt="Minimize"]'); 
    const closeButton = document.querySelector('.window-controls img[alt="Close"]'); 

    if (minimizeButton) {  //if the minimize button is pressed (not null)
        minimizeButton.addEventListener('click', () => { 
            console.log("minimize button clicked")
            window.electronAPI.minimizeWindow();  //minimize the window 
        });
    }

    if (closeButton){ //check if close button is clicked
        closeButton.addEventListener('click', () => { 
            console.log("close button clicked")
             window.electronAPI.closeWindow();  //if click closes electron app 
        });
    }

});
