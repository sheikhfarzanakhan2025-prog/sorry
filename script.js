function revealMessage() {
    // Intro স্ক্রিন সরিয়ে ফেলা
    gsap.to("#intro-screen", {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        display: "none",
        ease: "power2.in"
    });

    // মেইন কার্ড দেখানো
    gsap.to("#main-content", {
        duration: 1.2,
        display: "block",
        opacity: 1,
        delay: 0.8,
        ease: "power3.out",
        onComplete: startTyping // কার্ড আসার পর টাইপিং শুরু হবে
    });
}

function startTyping() {
    new Typed('#typing-text', {
        strings: [
            'জানি অনেক রাগ করে আছেন...',
            'আপনার ওই নীরবতা আমার একদম সহ্য হচ্ছে না।',
            'বিশ্বাস করেন, আপনাকে কষ্ট দেওয়া আমার উদ্দেশ্য ছিল না।',
            'প্লিজ, এবার একটু কথা বলুন?'
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1500,
        showCursor: true,
        cursorChar: '|',
        onComplete: function() {
            // টাইপিং শেষ হলে নিচের বাটনটি ভেসে উঠবে
            gsap.to(".final-note", { duration: 1, opacity: 1, y: -10 });
        }
    });
}
