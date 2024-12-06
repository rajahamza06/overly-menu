document.addEventListener("DOMContentLoaded", function () {
    let t1 = gsap.timeline({ paused: true });

    // Define the GSAP timeline animations
    t1.to(".menu-overlay", {
        duration: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power2.out"
    });

    t1.from(
        ".menu-link, .btn",
        {
            opacity: 0,
            y: 60,
            duration: 0.05,
            stagger: 0.05,
            ease: "power1.inOut"
        },
        "<"
    );

    t1.to(
        ".video-preview",
        {
            duration: 1,
            height: "200px",
            ease: "power2.out"
        },
        "<"
    );

    t1.to(
        ".menu-divider",
        {
            duration: 1,
            width: "100%",
            ease: "power4.out"
        },
        "<"
    );

    // Open menu function
    function openMenu() {
        document.querySelector(".menu-overlay").style.pointerEvents = "all";
        t1.play(); // Fixed typo here
    }

    // Close menu function
    function closeMenu() {
        document.querySelector(".menu-overlay").style.pointerEvents = "none";
        t1.reverse();
    }

    // Event listeners for menu open and close buttons
    document.querySelector(".menu-btn-open").addEventListener("click", openMenu);
    document.querySelector(".menu-btn-close").addEventListener("click", closeMenu);

    // Initialize the timeline in reverse to keep the menu hidden initially
    t1.reverse();
});
