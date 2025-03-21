# Study With Me - Pomodoro Timer Application

A retro-styled, pixel-art inspired Pomodoro timer application designed to boost productivity and manage study sessions efficiently.

![Study With Me App](images/Clover_pixel.png)

## Features

- **Pomodoro Timer**: 25-minute focused work sessions
- **Short Break**: 5-minute short breaks
- **Long Break**: 30-minute extended breaks
- **Session Counter**: Tracks completed Pomodoro sessions
- **Motivational Messages**: Random encouraging quotes after each completed Pomodoro
- **Pixel Art Design**: Retro-inspired interface with animations
- **Desktop Application**: Built with Electron for cross-platform compatibility

## How to Use

1. Launch the application
2. Click the START button on the home screen
3. Choose your timer mode:
   - **Pomodoro**: 25-minute focused work session
   - **Short Break**: 5-minute break
   - **Long Break**: 30-minute break (recommended after 4 Pomodoros)
4. Click START to begin the timer
5. Focus on your task until the timer completes
6. When the timer finishes, you'll receive an alert notification
7. The app automatically tracks your completed Pomodoro sessions

## Installation Options

### Option 1: Desktop Application
1. Download the latest release for your operating system:
   - Windows (.exe)
   - macOS (.dmg)
   - Linux (AppImage or .deb)
2. Run the installer and follow the prompts
3. Launch the "Study With Me" application

### Option 2: Direct Web Files
1. Download the ZIP file containing all the web files
2. Extract all files to a folder on your computer
3. Open `index.html` in your web browser

### Option 3: From Source Code
1. Clone the repository: `git clone https://github.com/yourusername/study-with-me.git`
2. Install dependencies: `npm install`
3. For web version: open `index.html` in your browser
4. For desktop version: run `npm start` to launch the Electron app
5. Build desktop versions: `npm run make` to create platform-specific packages

## Technical Details

### File Structure
```
├── src/
│   ├── index.js          # Electron main process
│   ├── index.html        # Main landing page
│   ├── timer.html        # Timer interface
│   ├── timer.js          # Timer functionality
│   ├── render.js         # Main page event handlers
│   ├── preload.js        # Electron preload script
│   └── styles.css        # Application styling
├── assets/
│   ├── icon.ico          # Windows application icon
│   ├── icon.icns         # macOS application icon
│   ├── icon.png          # Linux application icon
│   ├── Clover_pixel.png  # App logo
│   ├── Minimize.png      # UI element
│   └── Close.png         # UI element
├── package.json          # Project configuration
└── README.md             # Documentation
```

### Technologies Used
- **HTML/CSS/JavaScript**: Core web technologies
- **Electron**: For desktop application packaging
- **Google Fonts**: "Press Start 2P" and "Pixelify Sans" for retro styling
- **CSS Animations**: For interactive button effects

### Timer Implementation
The timer uses JavaScript's `setInterval` function to create a countdown that:
- Updates every second
- Switches between different modes (Pomodoro, short break, long break)
- Provides visual feedback on the current state
- Tracks completed sessions
- Displays motivational messages

## The Pomodoro Technique

The Pomodoro Technique was developed by Francesco Cirillo in the late 1980s and consists of the following steps:

1. Choose a task to work on
2. Set the timer for 25 minutes (one Pomodoro)
3. Work on the task until the timer rings
4. Take a short break (5 minutes)
5. After four Pomodoros, take a longer break (15-30 minutes)

This technique helps improve focus, manage distractions, and maintain mental freshness by breaking work into manageable intervals.

## Customization

You can customize the application by modifying:
- Timer durations in `timer.js`
- Motivational messages in the `motivations` array
- Visual styling in `styles.css`
- Font choices in the HTML files

## Building from Source

To build the application:

1. Ensure you have Node.js installed
2. Clone the repository
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development version:
   ```
   npm start
   ```
5. Build platform-specific packages:
   ```
   npm run make
   ```
   This will create platform-specific installers in the `out` directory

## System Requirements

### Desktop App
- **Windows**: Windows 10 or later
- **macOS**: macOS 10.13 or later
- **Linux**: Ubuntu 18.04 or other modern Linux distribution

### Web Version
Compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.

## Feedback and Contributions

Feedback and contributions are welcome! Feel free to fork the repository, submit issues, or create pull requests.

---

Created by Mighty Burapachaisri
