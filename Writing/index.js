let currentIndex = 0;
const slides = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const imageWidth = images[0].clientWidth;

function showSlide(index) {
    const offset = -index * imageWidth;
    slides.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Automatically transition to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Initial setup
showSlide(currentIndex);

//More codes

// Add smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Expandable and collapsible sections

const expandableSections = document.querySelectorAll('.expandable');

expandableSections.forEach(section => {
    const title = section.querySelector('.expandable-title');

    title.addEventListener('click', () => {
        section.classList.toggle('expanded');
    });
});



// Additional JavaScript for sliding visuals

const researchVisuals = document.getElementById('research-visuals');
const employmentVisuals = document.getElementById('employment-visuals');

function slideVisuals(container) {
    const visuals = container.getElementsByClassName('visual');
    let currentIndex = 0;

    function showVisual(index) {
        const offset = -index * visuals[0].offsetWidth;
        container.style.transform = `translateX(${offset}px)`;
    }

    function nextVisual() {
        currentIndex = (currentIndex + 1) % visuals.length;
        showVisual(currentIndex);
    }

    function prevVisual() {
        currentIndex = (currentIndex - 1 + visuals.length) % visuals.length;
        showVisual(currentIndex);
    }

    setInterval(nextVisual, 5000);
    showVisual(currentIndex);
}

slideVisuals(researchVisuals);
slideVisuals(employmentVisuals);


// Existing code...

// Smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Expandable and collapsible sections

const expandableSections = document.querySelectorAll('.expandable');

expandableSections.forEach(section => {
    const title = section.querySelector('.expandable-title');

    title.addEventListener('click', () => {
        section.classList.toggle('expanded');
    });
});

// Image gallery slider with motion

let galleryIndex = 0;
const galleryImages = document.querySelectorAll('.image-gallery img');
const galleryImageWidth = galleryImages[0].clientWidth;

function showGalleryImage(index) {
    const galleryOffset = -index * galleryImageWidth;
    document.querySelector('.image-gallery').style.transform = `translateX(${galleryOffset}px)`;
}

function nextGalleryImage() {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    showGalleryImage(galleryIndex);
}

function prevGalleryImage() {
    galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
    showGalleryImage(galleryIndex);
}

// Automatically transition to the next gallery image every 5 seconds
setInterval(nextGalleryImage, 5000);

// Initial setup for gallery
showGalleryImage(galleryIndex);

// Additional motion to images in the latest research and impact on employment sections

const researchImages = document.querySelectorAll('#research img');
const employmentImages = document.querySelectorAll('#employment img');

function applyHoverMotion(images) {
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
}

applyHoverMotion(researchImages);
applyHoverMotion(employmentImages);

// Additional JavaScript for movement on click
function animateContact() {
    var contactSection = document.getElementById('contact');
    contactSection.style.backgroundColor = '#27ae60'; // Change background color on click

    // Reset the background color and transform after a delay
    setTimeout(function () {
        contactSection.style.backgroundColor = '#3498db';
        contactSection.style.transform = 'translateX(0)';
    }, 1000); // Adjust the delay as needed
}


// For the first section
let currentIndexSection1 = 0;
const slidesSection1 = document.querySelector('.slider-section-1 .slider');
const imagesSection1 = document.querySelectorAll('.slider-section-1 .slider img');
const imageWidthSection1 = imagesSection1[0].clientWidth;

function showSlideSection1(index) {
    const offsetSection1 = -index * imageWidthSection1;
    slidesSection1.style.transform = `translateX(${offsetSection1}px)`;
}

function nextSlideSection1() {
    currentIndexSection1 = (currentIndexSection1 + 1) % imagesSection1.length;
    showSlideSection1(currentIndexSection1);
}

function prevSlideSection1() {
    currentIndexSection1 = (currentIndexSection1 - 1 + imagesSection1.length) % imagesSection1.length;
    showSlideSection1(currentIndexSection1);
}

setInterval(nextSlideSection1, 5000);
showSlideSection1(currentIndexSection1);

// For the second section
let currentIndexSection2 = 0;
const slidesSection2 = document.querySelector('.slider-section-2 .slider');
const imagesSection2 = document.querySelectorAll('.slider-section-2 .slider img');
const imageWidthSection2 = imagesSection2[0].clientWidth;

function showSlideSection2(index) {
    const offsetSection2 = -index * imageWidthSection2;
    slidesSection2.style.transform = `translateX(${offsetSection2}px)`;
}

function nextSlideSection2() {
    currentIndexSection2 = (currentIndexSection2 + 1) % imagesSection2.length;
    showSlideSection2(currentIndexSection2);
}

function prevSlideSection2() {
    currentIndexSection2 = (currentIndexSection2 - 1 + imagesSection2.length) % imagesSection2.length;
    showSlideSection2(currentIndexSection2);
}

setInterval(nextSlideSection2, 5000);
showSlideSection2(currentIndexSection2);





// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Adding background animation to sections on scroll
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateSections() {
      sections.forEach(section => {
        if (isInViewport(section)) {
          section.classList.add('background-gradient');
        } else {
          section.classList.remove('background-gradient');
        }
      });
    }
  
    window.addEventListener('scroll', animateSections);
  });
  
  // Adding movement animations to sections on scroll
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateSections() {
      sections.forEach(section => {
        if (isInViewport(section)) {
          section.classList.add('animate__animated', 'animate__fadeInUp');
        } else {
          section.classList.remove('animate__animated', 'animate__fadeInUp');
        }
      });
    }
  
    window.addEventListener('scroll', animateSections);
  });


  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let previousTranslate = 0;

    function startDrag(e) {
        isDragging = true;
        startPosition = e.clientX || e.touches[0].clientX;
        animateSlider();
    }

    function endDrag() {
        isDragging = false;
        const movedBy = currentTranslate - previousTranslate;

        if (movedBy < -100 && currentTranslate !== 0) {
            // Move to the next slide
            currentTranslate += 100;
        } else if (movedBy > 100 && currentTranslate !== -100 * (slider.children.length - 1)) {
            // Move to the previous slide
            currentTranslate -= 100;
        }

        animateSlider();
    }

    function drag(e) {
        if (isDragging) {
            const currentPosition = e.clientX || e.touches[0].clientX;
            currentTranslate = previousTranslate + currentPosition - startPosition;
        }
    }

    function animateSlider() {
        slider.style.transform = `translateX(${currentTranslate}%)`;
    }

    slider.addEventListener("mousedown", startDrag);
    slider.addEventListener("touchstart", startDrag);

    slider.addEventListener("mouseup", endDrag);
    slider.addEventListener("touchend", endDrag);

    slider.addEventListener("mousemove", drag);
    slider.addEventListener("touchmove", drag);
});

//future sections
const futureVisuals = document.getElementById('future-visuals');
    let rotationAngle = 0;

    futureVisuals.addEventListener('mouseenter', () => {
        rotationAngle += 10; // Adjust rotation speed
        updateRotation();
        updateBackgroundColor();
    });

    function updateRotation() {
        futureVisuals.style.transform = `rotate(${rotationAngle}deg)`;
    }

    function updateBackgroundColor() {
        const colors = ['#f0f0f0', '#d3d3d3']; // Add more colors as needed
        document.body.style.backgroundColor = colors[rotationAngle % colors.length];
    }


    const inspirationGallery = document.getElementById('inspiration-gallery');
    const moreImagesGallery = document.getElementById('more-images-gallery');

    // Make images float
    floatImages(inspirationGallery);
    floatImages(moreImagesGallery);

    function floatImages(gallery) {
        let direction = 1; // 1 for right, -1 for left
        let position = 0;

        function animate() {
            position += direction;
            gallery.style.transform = `translateX(${position}px)`;

            // Reverse direction when reaching the edge of the container
            if (position >= gallery.scrollWidth - gallery.clientWidth || position <= 0) {
                direction *= -1;
            }

            requestAnimationFrame(animate);
        }

        animate();
    }
    //Footer

    // JavaScript for footer interactivity
    function animateFooter() {
        var footer = document.querySelector('footer');
        footer.style.backgroundColor = '#2980b9'; // Change background color on click

        // Reset the background color after a delay
        setTimeout(function () {
            footer.style.backgroundColor = '#3498db';
        }, 1000); // Adjust the delay as needed
    }

