/* =====================================
   Speech-to-Text & Text-to-Speech Converter
   JavaScript Functionality
   ===================================== */

// ===== Browser Compatibility Check =====
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechSynthesis = window.speechSynthesis;

// Check if browser supports required APIs
if (!SpeechRecognition) {
    showNotification('Speech Recognition API not supported in your browser', 'error');
}

// ===== Global Variables =====
let recognition;
let isRecording = false;
let utterance;

// ===== Initialize Speech Recognition =====
function initializeSpeechRecognition() {
    if (!SpeechRecognition) return;
    
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        isRecording = true;
        document.getElementById('recordBtn').style.display = 'none';
        document.getElementById('stopBtn').style.display = 'inline-block';
        document.getElementById('speechOutput').value = '';
    };

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            
            if (event.results[i].isFinal) {
                finalTranscript += transcript + ' ';
            } else {
                interimTranscript += transcript;
            }
        }

        document.getElementById('speechOutput').value = finalTranscript || interimTranscript;
    };

    recognition.onerror = (event) => {
        let errorMessage = 'Speech recognition error: ';
        
        switch(event.error) {
            case 'no-speech':
                errorMessage += 'No speech detected. Please try again.';
                break;
            case 'audio-capture':
                errorMessage += 'No microphone found. Ensure it is connected.';
                break;
            case 'network':
                errorMessage += 'Network error occurred.';
                break;
            default:
                errorMessage += event.error;
        }
        
        showNotification(errorMessage, 'error');
    };

    recognition.onend = () => {
        isRecording = false;
        document.getElementById('recordBtn').style.display = 'inline-block';
        document.getElementById('stopBtn').style.display = 'none';
    };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeSpeechRecognition();
    populateVoices();
    setupEventListeners();
});

// ===== Speech-to-Text Functions =====
function startRecording() {
    if (!SpeechRecognition) {
        showNotification('Speech Recognition not supported in your browser', 'error');
        return;
    }

    if (recognition) {
        recognition.start();
    }
}

function stopRecording() {
    if (recognition) {
        recognition.stop();
    }
}

// ===== Text-to-Speech Functions =====
function populateVoices() {
    if (!SpeechSynthesis) return;

    const voiceSelect = document.getElementById('voiceSelect');
    const voices = SpeechSynthesis.getVoices();

    voiceSelect.innerHTML = '';
    
    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

// Repopulate voices when they're loaded (some browsers load them asynchronously)
if (SpeechSynthesis) {
    SpeechSynthesis.onvoiceschanged = populateVoices;
}

function speakText() {
    if (!SpeechSynthesis) {
        showNotification('Text-to-Speech not supported in your browser', 'error');
        return;
    }

    const text = document.getElementById('textInput').value.trim();
    
    if (!text) {
        showNotification('Please enter some text to speak', 'error');
        return;
    }

    // Cancel any ongoing speech
    SpeechSynthesis.cancel();

    utterance = new SpeechSynthesisUtterance(text);
    
    // Get selected voice
    const voiceSelect = document.getElementById('voiceSelect');
    const voices = SpeechSynthesis.getVoices();
    const selectedVoice = voices[voiceSelect.value];
    
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    // Get speech rate
    const rate = parseFloat(document.getElementById('rateSlider').value);
    utterance.rate = rate;

    // Additional settings
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
        showNotification('Playing audio...', 'success');
    };

    utterance.onerror = (event) => {
        showNotification('Error in text-to-speech: ' + event.error, 'error');
    };

    utterance.onend = () => {
        showNotification('Audio playback finished', 'success');
    };

    SpeechSynthesis.speak(utterance);
}

function pauseSpeech() {
    if (!SpeechSynthesis) return;
    
    if (SpeechSynthesis.paused) {
        SpeechSynthesis.resume();
        showNotification('Resumed', 'success');
    } else if (SpeechSynthesis.speaking) {
        SpeechSynthesis.pause();
        showNotification('Paused', 'success');
    }
}

function stopSpeech() {
    if (!SpeechSynthesis) return;
    
    SpeechSynthesis.cancel();
    showNotification('Stopped', 'success');
}

// ===== Utility Functions =====
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).value;
    
    if (!text.trim()) {
        showNotification('Nothing to copy', 'error');
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        showNotification('Text copied to clipboard!', 'success');
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Text copied to clipboard!', 'success');
    });
}

function downloadText(elementId, filename) {
    const text = document.getElementById(elementId).value;
    
    if (!text.trim()) {
        showNotification('Nothing to download', 'error');
        return;
    }

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    showNotification('File downloaded successfully!', 'success');
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ===== Event Listeners Setup =====
function setupEventListeners() {
    // Update rate value display
    const rateSlider = document.getElementById('rateSlider');
    if (rateSlider) {
        rateSlider.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value).toFixed(1);
            document.getElementById('rateValue').textContent = value + 'x';
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Spacebar to play/pause
        if (e.code === 'Space' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            if (SpeechSynthesis && SpeechSynthesis.speaking) {
                pauseSpeech();
            } else {
                speakText();
            }
        }

        // Escape to stop
        if (e.key === 'Escape') {
            if (isRecording) {
                stopRecording();
            }
            if (SpeechSynthesis) {
                stopSpeech();
            }
        }
    });
}

// ===== Additional Features =====

// Detect language from text input (basic implementation)
function detectLanguage(text) {
    // Simple language detection - can be enhanced with a library like langdetect.js
    const words = text.toLowerCase().split(' ');
    // This is a placeholder - in production, use a proper language detection library
    return 'en-US';
}

// Clear all inputs
function clearAll() {
    document.getElementById('speechOutput').value = '';
    document.getElementById('textInput').value = '';
    SpeechSynthesis.cancel();
    showNotification('Cleared all fields', 'success');
}

// Get browser information for debugging
function getBrowserInfo() {
    const info = {
        browser: navigator.userAgent,
        speechRecognitionSupported: !!SpeechRecognition,
        speechSynthesisSupported: !!SpeechSynthesis,
        microphone: navigator.mediaDevices ? 'May be available' : 'Not available',
    };
    console.log('Browser Info:', info);
    return info;
}

// Initialize browser info on page load
console.log('Speech-to-Text & Text-to-Speech Converter Initialized');
console.log(getBrowserInfo());

// Handle page unload - stop any ongoing speech/recording
window.addEventListener('beforeunload', () => {
    if (isRecording) {
        stopRecording();
    }
    if (SpeechSynthesis) {
        SpeechSynthesis.cancel();
    }
});

// ===== Accessibility Enhancements =====

// Announce important messages to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// Enhanced notification for accessibility
const originalShowNotification = showNotification;
showNotification = function(message, type = 'success') {
    originalShowNotification(message, type);
    announceToScreenReader(message);
};
