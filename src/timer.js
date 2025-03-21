document.addEventListener('DOMContentLoaded', () => { 
    // Get references to DOM elements
    const timerDisplay = document.getElementById('timer-display');
    const pomodoroButton = document.getElementById('Pomodoro-Button');
    const shortBreakButton = document.getElementById('Short-Break-Button');
    const longBreakButton = document.getElementById('Long-Break-Button');
    const startButton = document.getElementById('start-button');
    const backButton = document.getElementById('back-button');
    const motivationText = document.getElementById('motivation');
    const countText = document.getElementById('count');
    
    // Log to confirm elements are found
    console.log("Timer display found:", timerDisplay);
    console.log("Start button found:", startButton);
    
    // Timer variables
    let currentMode = 'pomodoro';
    let timeLeft = 25 * 60; // 25 minutes in seconds
    let timerInterval = null;
    let isRunning = false;
    let pomodoroCount = 1;

    // Set active button
    function setActiveButton(button) {
        // Remove active class from all buttons
        pomodoroButton.classList.remove('active');
        shortBreakButton.classList.remove('active');
        longBreakButton.classList.remove('active');
        
        // Add active class to selected button
        button.classList.add('active');
    }

    
    // Format time as MM:SS
    function formatTime(seconds) { 
        const mins = Math.floor(seconds / 60); 
        const secs = seconds % 60; 
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    
    // Update the timer display
    function updateDisplay() { 
        timerDisplay.textContent = formatTime(timeLeft);
        console.log("Display updated:", timerDisplay.textContent);
    }
    
    // Start the timer
    function startTimer() {
        console.log("Starting timer");
        isRunning = true;
        startButton.textContent = 'PAUSE';
        
        // Clear any existing interval to avoid multiple timers
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        // Start a new interval
        timerInterval = setInterval(() => {
            console.log("Tick, timeLeft:", timeLeft);
            timeLeft--;
            updateDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                isRunning = false;
                startButton.textContent = 'START';
                
                // Update pomodoro count and motivation if we completed a pomodoro
                if (currentMode === 'pomodoro') {
                    pomodoroCount++;
                    countText.textContent = `Pomodoro Count: #${pomodoroCount}`;
                    
                    // Update motivation text
                    const motivations = [
                        "One Pomodoro at a time!",
                        "Great work! Keep the momentum going!",
                        "Focus leads to progress!",
                        "You're making excellent progress!",
                        "Each Pomodoro brings you closer to your goals!",
                        "Small steps lead to big achievements!",
                        "Stay focused and mindful!",
                        "Quality focus time builds success!",
                        "Your future self will thank you!",
                        "Building good habits one Pomodoro at a time!"
                    ];
                    const randomIndex = Math.floor(Math.random() * motivations.length);
                    motivationText.textContent = motivations[randomIndex];
                }
                
                // Reset the timer to its original duration based on current mode
                switch(currentMode) {
                    case 'pomodoro':
                        timeLeft = 25 * 60; // Reset to 25 minutes
                        break;
                    case 'shortBreak':
                        timeLeft = 5 * 60; // Reset to 5 minutes
                        break;
                    case 'longBreak':
                        timeLeft = 30 * 60; // Reset to 30 minutes
                        break;
                }
                
                // Update the display with the reset time
                updateDisplay();
                
                // Alert the user that the timer is complete
                alert('Timer completed!');
            }
        }, 1000);
    }
    
    // Pause the timer
    function pauseTimer() {
        console.log("Pausing timer");
        clearInterval(timerInterval);
        timerInterval = null;
        isRunning = false;
        startButton.textContent = 'START';
    }
    
    // Set up mode buttons
    if (pomodoroButton) {
        pomodoroButton.addEventListener('click', () => {
            setActiveButton(pomodoroButton);
            console.log("Pomodoro mode selected");
            currentMode = 'pomodoro';
            timeLeft = 25 * 60;
            updateDisplay();
        });
    }
    
    if (shortBreakButton) {
        shortBreakButton.addEventListener('click', () => {
            console.log("Short break mode selected");
            setActiveButton(shortBreakButton);
            currentMode = 'shortBreak';
            timeLeft = 5 * 60;
            updateDisplay();
        });
    }
    
    if (longBreakButton) {
        longBreakButton.addEventListener('click', () => {
            console.log("Long break mode selected");
            setActiveButton(longBreakButton);
            currentMode = 'longBreak';
            timeLeft = 30 * 60;
            updateDisplay();
        });
    }
    
    // Start/pause button
    if (startButton) {
        startButton.addEventListener('click', () => {
            console.log("Start/pause button clicked, isRunning:", isRunning);
            if (!isRunning) {
                startTimer();
            } else {
                pauseTimer();
            }
        });
    }
    
    // Back button
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    // Initialize display
    updateDisplay();
    console.log("Timer.js initialized");
});