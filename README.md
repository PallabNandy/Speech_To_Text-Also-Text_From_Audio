# 🎙️ Speech-to-Text & Text-to-Speech Converter

A powerful, accessible web application that converts **speech to text** and **text to speech** with an intuitive, modern interface. Designed specifically for accessibility, making technology available for everyone including blind and visually impaired users.

---

## ✨ Features

### 🎤 Speech-to-Text Conversion
- **Real-time Speech Recognition**: Convert spoken words to text instantly
- **Multiple Language Support**: Works with various languages and accents
- **Copy & Download**: Easily copy transcribed text or download as .txt file
- **Accuracy**: Powered by Web Speech API for reliable transcription

### 🔊 Text-to-Speech Conversion
- **Natural Voice Synthesis**: Convert text into natural-sounding audio
- **Voice Selection**: Choose from multiple voice options
- **Speed Control**: Adjust playback speed from 0.5x to 2x
- **Playback Controls**: Play, pause, and stop functionality

### ♿ Accessibility Features
- **WCAG 2.1 Level AA Compliant**: Meets international accessibility standards
- **Keyboard Navigation**: Fully navigable with keyboard
- **Screen Reader Friendly**: Optimized for assistive technologies
- **High Contrast**: Readable color schemes for visual impairment
- **Mobile Responsive**: Works on all devices and screen sizes

### 🎨 Modern User Interface
- **Responsive Design**: Adapts to any screen size
- **Gradient UI**: Beautiful gradient design with smooth animations
- **Interactive Elements**: Real-time feedback and notifications
- **Professional Layout**: Clean, organized information hierarchy

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **APIs Used** | Web Speech API, Speech Synthesis API |
| **Styling** | Modern CSS with Gradients & Animations |
| **Icons** | Font Awesome 6.4.0 |
| **Features** | Responsive, Mobile-First, Accessible |

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- No installation required - it's browser-based!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PallabNandy/Speech_To_Text-Also-Text_From_Audio.git
   cd Speech_To_Text-Also-Text_From_Audio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if you have http-server installed)
     http-server
     ```
   - Visit `http://localhost:8000` in your browser

3. **Deploy (Optional)**
   - Upload files to any web hosting service
   - GitHub Pages, Netlify, or Vercel all work great!

---

## 📖 Usage Guide

### Speech-to-Text Conversion
1. Click the **"Start Recording"** button (🎤)
2. Speak clearly into your microphone
3. Your words appear in real-time
4. Click **"Stop Recording"** to finish
5. **Copy** the text or **Download** as a file

### Text-to-Speech Conversion
1. **Enter or paste** text in the text area
2. **Select a voice** from the dropdown
3. **Adjust speed** using the slider (0.5x - 2x)
4. Click **"Play"** to hear the audio
5. Use **Pause** or **Stop** as needed

### Keyboard Shortcuts
- `Tab` - Navigate between elements
- `Enter` - Activate buttons
- `Space` - Play/Pause audio
- `Esc` - Stop recording/playback

---

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| **Chrome** | ✅ Full | Recommended |
| **Firefox** | ✅ Full | Excellent support |
| **Edge** | ✅ Full | Chromium-based |
| **Safari** | ✅ Partial | Text-to-Speech works |
| **Opera** | ✅ Full | Chromium-based |
| **IE 11** | ❌ No | Not supported |

---

## 🎯 Use Cases

### 👨‍🦯 For Blind & Visually Impaired Users
- Convert documents to audio for easy consumption
- Use voice commands to interact with content
- Navigate with keyboard using screen readers

### 📚 For Students & Learners
- Convert lectures to text for better notes
- Listen to text material for better retention
- Create accessible learning materials

### 👨‍💼 For Professionals
- Quick transcription of meetings/calls
- Convert documents for accessibility
- Create podcast-style content from text

### 🌍 For Language Learners
- Practice pronunciation with text-to-speech
- Practice listening with speech-to-text
- Support for multiple languages

---

## ⚙️ Technical Details

### Web Speech API
The application uses two main Web APIs:

1. **SpeechRecognition API**
   - Converts audio input to text
   - Real-time transcription
   - Supports multiple languages

2. **SpeechSynthesis API**
   - Converts text to audio
   - Multiple voice options
   - Adjustable speed and pitch

### Browser Permissions
- **Microphone Access**: Required for speech recognition
- The browser will prompt for permission on first use
- You can revoke permissions in browser settings

---

## 🔒 Privacy & Security

✅ **Your data is safe!**
- No data is sent to external servers
- Processing happens entirely in your browser
- No cookies or tracking
- No personal information is stored
- No advertisements

---

## 📱 Mobile Compatibility

- ✅ Works on iOS Safari (partial support)
- ✅ Works on Android Chrome
- ✅ Works on Android Firefox
- ✅ Responsive touch interface
- ⚠️ Some features may be limited on mobile due to OS restrictions

---

## ✨ Accessibility Compliance

### WCAG 2.1 Level AA Standards
- ✅ Perceivable: Large fonts, high contrast, icons with labels
- ✅ Operable: Keyboard navigation, voice controls
- ✅ Understandable: Clear language, logical structure
- ✅ Robust: Compatible with assistive technologies

### Assistive Technology Support
- Screen readers (NVDA, JAWS, VoiceOver)
- Voice control software
- Switch access
- High contrast modes

---

## 🐛 Known Limitations

1. **Microphone Issues**
   - Background noise may affect accuracy
   - Thick accents might reduce recognition
   - Solution: Speak clearly in a quiet environment

2. **Browser Limitations**
   - Speech Recognition not available in all browsers
   - Text-to-Speech quality varies by browser
   - Mobile browsers have limited support

3. **Language Support**
   - Varies by browser and operating system
   - Not all language combinations are available
   - Solution: Check your browser's language settings

---

## 🚀 Future Enhancements

- [ ] Real-time translation between languages
- [ ] File upload support (PDF, Word docs)
- [ ] Audio file upload for transcription
- [ ] Download as MP3/WAV audio files
- [ ] Cloud storage integration
- [ ] Conversation mode for dialogue transcription
- [ ] Custom vocabulary support
- [ ] Dark mode theme
- [ ] Multi-language UI
- [ ] Offline functionality with Service Workers

---

## 💡 Tips & Tricks

### For Better Speech Recognition
- Use a quality microphone
- Minimize background noise
- Speak at a natural pace
- Use punctuation naturally in speech ("period", "comma")
- Keep sentences concise

### For Better Text-to-Speech
- Use proper capitalization and punctuation
- Add pauses with ellipsis (...)
- Avoid special characters and emojis
- Use phonetic spelling for proper nouns if needed

---

## 🤝 Contributing

We welcome contributions! Please feel free to:

1. **Report Issues**: Found a bug? [Open an issue](https://github.com/PallabNandy/Speech_To_Text-Also-Text_From_Audio/issues)
2. **Suggest Features**: Have an idea? Share it with us!
3. **Submit PRs**: Want to improve the code? Submit a pull request!

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Developer

**Pallab Nandy**
- 🎓 Final-year B.Sc in Computer Science & Engineering
- 🏫 Port City International University (PCIU)
- 🤖 Interests: AI, ML, Medical Image Analysis, Explainable AI

### Contact & Social
- 📧 Email: [pallabnandy3@gmail.com](mailto:pallabnandy3@gmail.com)
- 💼 LinkedIn: [Pallab Nandy](https://www.linkedin.com/in/pallab-nandy-bb39b5227)
- 🐙 GitHub: [@PallabNandy](https://github.com/PallabNandy)

---

## 🙏 Acknowledgments

- Built with ❤️ for accessibility
- Inspired by the need to make technology inclusive
- Thanks to the web standards community
- Font Awesome for icons

---

## 📞 Support

Need help? Here are some resources:

1. **Check Browser Support**: Ensure your browser supports the Web Speech API
2. **Enable Microphone**: Grant microphone permissions in browser settings
3. **Update Browser**: Use the latest version of your browser
4. **Clear Cache**: Try clearing browser cache and cookies
5. **Report Issues**: Open an issue on GitHub

---

## 🎉 Thank You!

Thank you for using Speech-to-Text & Text-to-Speech Converter! 

If you find this project helpful, please:
- ⭐ Star the repository
- 🔄 Share with others
- 💬 Provide feedback
- 🐛 Report bugs
- 💡 Suggest improvements

Together, we're making technology more accessible for everyone! 🌟

---

**Made with 💖 by Pallab Nandy** | Last Updated: May 2026
