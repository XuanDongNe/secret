/* Additional JavaScript functions for enhanced experience */

// Function to create sparkle effects
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Enhanced typing effect with sparkles
function enhancedTypeIt(selector, options) {
    const element = document.querySelector(selector);
    if (element) {
        const rect = element.getBoundingClientRect();
        
        // Add sparkles during typing
        const originalAfterStep = options.afterStep;
        options.afterStep = function() {
            if (Math.random() < 0.3) {
                createSparkle(
                    rect.left + Math.random() * rect.width,
                    rect.top + Math.random() * rect.height
                );
            }
            if (originalAfterStep) originalAfterStep();
        };
        
        return new TypeIt(selector, options).go();
    }
}

// Random emoji rain
function createEmojiRain(duration = 5000) {
    const emojis = ['💕', '💖', '💗', '💘', '💝', '💟', '💌', '💐', '🌸', '🌺', '🌷', '🌹', '🦋', '✨', '⭐', '💫'];
    const interval = setInterval(() => {
        const emoji = document.createElement('div');
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.top = '-50px';
        emoji.style.fontSize = Math.random() * 20 + 15 + 'px';
        emoji.style.zIndex = '100';
        emoji.style.pointerEvents = 'none';
        emoji.style.animation = 'fall 4s linear forwards';
        document.body.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 4000);
    }, 200);
    
    setTimeout(() => clearInterval(interval), duration);
}

// Screen flash effect
function screenFlash(color = '#ff69b4', duration = 300) {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = color;
    flash.style.opacity = '0.7';
    flash.style.zIndex = '9999';
    flash.style.pointerEvents = 'none';
    flash.style.transition = `opacity ${duration}ms ease`;
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => flash.remove(), duration);
    }, 50);
}

// Birthday surprise mode
function activateBirthdayMode() {
    // Add birthday elements
    const birthdayHat = document.createElement('div');
    birthdayHat.innerHTML = '🎂';
    birthdayHat.style.position = 'fixed';
    birthdayHat.style.top = '10px';
    birthdayHat.style.right = '10px';
    birthdayHat.style.fontSize = '50px';
    birthdayHat.style.zIndex = '1000';
    birthdayHat.style.animation = 'spin 3s linear infinite';
    document.body.appendChild(birthdayHat);
    
    // Birthday confetti
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 50,
                spread: 360,
                origin: { y: Math.random() },
                colors: ['#ff69b4', '#ffd700', '#ff1493', '#00ff00', '#1e90ff']
            });
        }, i * 500);
    }
    
    // Remove after celebration
    setTimeout(() => {
        birthdayHat.remove();
    }, 10000);
}

// Interactive cursor trail
let isMouseMoving = false;
document.addEventListener('mousemove', (e) => {
    if (!isMouseMoving) {
        isMouseMoving = true;
        setTimeout(() => isMouseMoving = false, 50);
        
        if (Math.random() < 0.1) {
            createSparkle(e.clientX, e.clientY);
        }
    }
});

// Surprise countdown timer
function surpriseCountdown(message = "🎉 SURPRISE! 🎉", callback) {
    const countdown = document.createElement('div');
    countdown.style.position = 'fixed';
    countdown.style.top = '50%';
    countdown.style.left = '50%';
    countdown.style.transform = 'translate(-50%, -50%)';
    countdown.style.fontSize = '4em';
    countdown.style.fontWeight = 'bold';
    countdown.style.color = '#ff1493';
    countdown.style.zIndex = '10000';
    countdown.style.textShadow = '3px 3px 6px rgba(0,0,0,0.7)';
    countdown.style.animation = 'pulse 1s infinite';
    document.body.appendChild(countdown);
    
    let count = 3;
    countdown.innerHTML = count;
    
    const timer = setInterval(() => {
        count--;
        if (count > 0) {
            countdown.innerHTML = count;
        } else {
            countdown.innerHTML = message;
            clearInterval(timer);
            
            if (callback) callback();
            
            setTimeout(() => {
                countdown.style.animation = 'fadeOut 1s forwards';
                setTimeout(() => countdown.remove(), 1000);
            }, 2000);
        }
    }, 1000);
}

// Text animation effects
function animateText(element, text, options = {}) {
    const {
        speed = 50,
        rainbow = false,
        sparkle = false,
        bounce = false
    } = options;
    
    element.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.innerHTML = text[i] === ' ' ? '&nbsp;' : text[i];
        span.style.opacity = '0';
        
        if (rainbow) {
            span.style.color = `hsl(${(i * 30) % 360}, 70%, 60%)`;
        }
        
        if (bounce) {
            span.style.display = 'inline-block';
            span.style.animation = `bounce 1s infinite ${i * 0.1}s`;
        }
        
        element.appendChild(span);
        
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transition = 'opacity 0.3s ease';
            
            if (sparkle) {
                createSparkle(
                    span.offsetLeft + element.offsetLeft,
                    span.offsetTop + element.offsetTop
                );
            }
        }, i * speed);
    }
}

// Add CSS for additional animations
const additionalCSS = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes fadeOut {
    from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    to { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
}

.pulse {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}
`;

const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);

// Export functions for use in main script
window.enhancedEffects = {
    createSparkle,
    enhancedTypeIt,
    createEmojiRain,
    screenFlash,
    activateBirthdayMode,
    surpriseCountdown,
    animateText
};