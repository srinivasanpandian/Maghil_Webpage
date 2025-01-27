const heroContent = [
    {
        img: "img/33460222_8002225 1 (1).png",
        heading: "Transform your digital presence to grow your business",
        text: "Our platform helps you identify your top spenders, boost table turns, reduce wait times, and serve more customers with fewer resources—all while saving on costs.",
        btnText: "Book Demo",
        btnLink: "bookdemo.html"
    },
    {
        img: "img/group1.png",
        heading: "Simplify Your Business Operations",
        text: "Our tools are designed to help you manage inventory, streamline orders, and generate real-time reports with ease.",
        btnText: "Learn More",
        btnLink: "#features"
    },
    {
        img: "img/hero3.jpg",
        heading: "Empower Your Team with Smart Solutions",
        text: "Enable your staff to deliver better service and stay ahead of customer needs with innovative technology.",
        btnText: "Get Started",
        btnLink: "signup.html"
    }
];

let currentIndex = 0;
const heroImg = document.getElementById("hero-img");
const heroHeading = document.getElementById("hero-heading");
const heroText = document.getElementById("hero-text");
const heroBtn = document.getElementById("hero-btn");

function updateHeroSection() {
    currentIndex = (currentIndex + 1) % heroContent.length;

    heroImg.src = heroContent[currentIndex].img;
    heroHeading.textContent = heroContent[currentIndex].heading;
    heroText.textContent = heroContent[currentIndex].text;
    heroBtn.textContent = heroContent[currentIndex].btnText;
    heroBtn.parentElement.href = heroContent[currentIndex].btnLink;
}

setInterval(updateHeroSection, 5000); // Change every 5 seconds
