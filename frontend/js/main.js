

//for smaller screen responsiveness

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const closeIcon = document.createElement('span');
    const content = document.querySelector('main'); // Assuming main contains the main content

    // Create the close icon element
    closeIcon.innerHTML = '&times;';
    closeIcon.classList.add('close-icon');
    closeIcon.style.display = 'none';
    closeIcon.style.fontSize = '30px';
    closeIcon.style.cursor = 'pointer';
    closeIcon.style.color = '#fff';

    // Append the close icon to the navbar
    navbarToggler.parentNode.insertBefore(closeIcon, navbarToggler.nextSibling);

    // Apply initial styles to navbar items
    navbarCollapse.style.backgroundColor = '#343a40'; // Ensure the background color is set

    // Toggle menu visibility on hamburger click
    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.style.display = 'none';
            closeIcon.style.display = 'block';
            content.style.paddingTop = '80px'; // Adjust this value to push the content down
        } else {
            navbarToggler.style.display = 'block';
            closeIcon.style.display = 'none';
            content.style.paddingTop = '0'; // Reset the padding
        }
    });

    // Hide menu on close icon click
    closeIcon.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
        navbarToggler.style.display = 'block';
        closeIcon.style.display = 'none';
        content.style.paddingTop = '0'; // Reset the padding
    });

    // Ensure the menu closes when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target) && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarToggler.style.display = 'block';
            closeIcon.style.display = 'none';
            content.style.paddingTop = '0'; // Reset the padding
        }
    });
    navbarCollapse.style.marginTop = '40px'; // Adjust this value to push the menu down
    // Apply responsive styles using JavaScript
    function applyResponsiveStyles() {
        if (window.innerWidth <= 992) {
            // Styles for small screens
            navbarToggler.style.display = 'block';
        } else {
            // Styles for larger screens
            navbarToggler.style.display = 'none';
            closeIcon.style.display = 'none';
            navbarCollapse.classList.remove('show');
            content.style.paddingTop = '0'; // Reset the padding
        }
    }

    // Initial check
    applyResponsiveStyles();

    // Add event listener for window resize
    window.addEventListener('resize', applyResponsiveStyles);
});






//Dropdown Toggle


document.addEventListener('DOMContentLoaded', function() {
    // Select the policies link and the dropdown menu
    const policiesLink = document.querySelector('.nav-link.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Add click event listener to the policies link
    policiesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        dropdownMenu.classList.toggle('show'); // Toggle the 'show' class on the dropdown menu
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!policiesLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});





 //dark mode advanced search
 document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle Icon
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'darkModeToggle';
    darkModeToggle.className = 'position-fixed';
    darkModeToggle.style.top = '10px';
    darkModeToggle.style.right = '10px';
    darkModeToggle.style.background = '#155724'; // green background
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '50%';
    darkModeToggle.style.padding = '5px';
    darkModeToggle.style.zIndex = '1000';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('active');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.classList.add('active');
    }

    // Scroll to Top Icon
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.className = 'position-fixed';
    scrollToTopBtn.style.bottom = '10px';
    scrollToTopBtn.style.left = '10px';
    scrollToTopBtn.style.background = '#28a745'; // Green background
    scrollToTopBtn.style.border = 'none';
    scrollToTopBtn.style.borderRadius = '50%';
    scrollToTopBtn.style.padding = '5px';
    scrollToTopBtn.style.zIndex = '1000';
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Enhanced Search Functionality
    const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('input');
    const searchResultsSection = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');
    const searchHistoryContainer = document.getElementById('search-history');

    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    function updateSearchHistory(query) {
        if (!searchHistory.includes(query)) {
            searchHistory.push(query);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }
    }

    function displaySearchHistory() {
        searchHistoryContainer.innerHTML = '<h3>Search History</h3>';
        const historyList = document.createElement('ul');
        searchHistory.forEach(query => {
            const listItem = document.createElement('li');
            listItem.textContent = query;
            listItem.addEventListener('click', () => {
                performSearch(query);
            });
            historyList.appendChild(listItem);
        });
        searchHistoryContainer.appendChild(historyList);
    }

    function performSearch(query) {
        const sections = document.querySelectorAll('section');
        let results = [];

        sections.forEach(section => {
            if (section.textContent.toLowerCase().includes(query.toLowerCase())) {
                results.push({
                    sectionId: section.id,
                    text: section.querySelector('h2') ? section.querySelector('h2').textContent : 'Section'
                });
            }
        });

        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        searchResultsList.innerHTML = '';
        if (results.length === 0) {
            searchResultsList.innerHTML = '<li>No results found.</li>';
        } else {
            results.forEach(result => {
                const listItem = document.createElement('li');
                listItem.textContent = result.text;
                listItem.addEventListener('click', () => {
                    document.getElementById(result.sectionId).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
                searchResultsList.appendChild(listItem);
            });
        }
        searchResultsSection.style.display = 'block';
    }

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query === '') return;

        updateSearchHistory(query);
        performSearch(query);
        displaySearchHistory();
    });

    displaySearchHistory();
});









 //search readability && marks the current screen
            
            
 document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('input');
    const searchResultsSection = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');
    const searchHistoryContainer = document.getElementById('search-history');
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Highlight the current page in the navigation
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active-page');
        }
    });

    // Function to update search history
    function updateSearchHistory(query) {
        if (!searchHistory.includes(query)) {
            searchHistory.push(query);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }
    }

    // Function to display search history
    function displaySearchHistory() {
        searchHistoryContainer.innerHTML = '<h3>Search History</h3>';
        const historyList = document.createElement('ul');
        searchHistory.forEach(query => {
            const listItem = document.createElement('li');
            listItem.textContent = query;
            listItem.addEventListener('click', () => {
                performSearch(query);
            });
            historyList.appendChild(listItem);
        });
        searchHistoryContainer.appendChild(historyList);
    }

    // Function to perform search
    function performSearch(query) {
        const sections = document.querySelectorAll('section');
        let results = [];
        sections.forEach(section => {
            if (section.textContent.toLowerCase().includes(query.toLowerCase())) {
                results.push({
                    sectionId: section.id,
                    text: section.querySelector('h2') ? section.querySelector('h2').textContent : 'Section'
                });
            }
        });
        displaySearchResults(results);
    }

    // Function to display search results
    function displaySearchResults(results) {
        searchResultsList.innerHTML = '';
        if (results.length === 0) {
            searchResultsList.innerHTML = '<li>No results found.</li>';
        } else {
            results.forEach(result => {
                const listItem = document.createElement('li');
                listItem.textContent = result.text;
                listItem.addEventListener('click', () => {
                    document.getElementById(result.sectionId).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
                searchResultsList.appendChild(listItem);
            });
        }
        searchResultsSection.style.display = 'block';
    }

    // Event listener for search form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query === '') return;
        updateSearchHistory(query);
        performSearch(query);
        displaySearchHistory();
    });

    displaySearchHistory();
});











        //chatbot section

        document.addEventListener('DOMContentLoaded', function() {
            // Sanitize user input to prevent XSS attacks
            function sanitizeInput(input) {
                const temp = document.createElement('div');
                temp.textContent = input;
                return temp.innerHTML;
            }
        
            // Chatbot Functionality
            const chatbotToggle = document.querySelector('.chatbot-toggle');
            const chatbotWindow = document.querySelector('.chatbot-window');
            const chatbotInput = document.getElementById('chatbotInput');
            const chatbotMessages = document.getElementById('chatbotMessages');
        
            // Load chat history from localStorage
            function loadChatHistory() {
                const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
                history.forEach(entry => {
                    addMessage(entry.sender, entry.message);
                });
            }
        
            // Save chat message to localStorage
            function saveChatMessage(sender, message) {
                const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
                history.push({ sender, message });
                localStorage.setItem('chatHistory', JSON.stringify(history));
            }
        
            // Show chatbot on hover
            chatbotToggle.addEventListener('mouseover', function() {
                chatbotWindow.style.display = 'flex';
                chatbotWindow.classList.add('fadeIn');
            });
        
            // Keep chatbot visible as long as cursor is on it
            chatbotWindow.addEventListener('mouseover', function() {
                chatbotWindow.style.display = 'flex';
            });
        
            chatbotToggle.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    if (!chatbotWindow.matches(':hover')) {
                        chatbotWindow.style.display = 'none';
                    }
                }, 500);
            });
        
            chatbotWindow.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    if (!chatbotToggle.matches(':hover')) {
                        chatbotWindow.style.display = 'none';
                    }
                }, 500);
            });
        
            // Close chatbot on 'Esc' key press
            document.addEventListener('keydown', function(event) {
                if (event.key === "Escape") {
                    chatbotWindow.style.display = 'none';
                }
            });
        
            // Send message on 'Enter' key press
            chatbotInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    sendMessage();
                }
            });
        
            document.querySelector('.close-btn').addEventListener('click', function() {
                chatbotWindow.style.display = 'none';
            });
        
            // Send a message
            function sendMessage() {
                const message = sanitizeInput(chatbotInput.value.trim());
                if (message === '') return;
        
                addMessage('user', message);
                saveChatMessage('user', message);
                chatbotInput.value = '';
        
                showTypingIndicator();
        
                setTimeout(() => {
                    hideTypingIndicator();
                    getResponse(message);
                }, 500);
            }
        
            // Add a message to the chat
            function addMessage(sender, message) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('chatbot-message', `${sender}-message`);
                const messageContent = document.createElement('div');
                messageContent.classList.add('message-content');
                messageContent.textContent = message;
                messageElement.appendChild(messageContent);
                chatbotMessages.appendChild(messageElement);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        
            // Show typing indicator
            function showTypingIndicator() {
                const typingIndicator = document.createElement('div');
                typingIndicator.classList.add('typing-indicator');
                typingIndicator.innerHTML = '<span></span><span></span><span></span>';
                chatbotMessages.appendChild(typingIndicator);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        
            // Hide typing indicator
            function hideTypingIndicator() {
                const typingIndicator = document.querySelector('.typing-indicator');
                if (typingIndicator) {
                    typingIndicator.remove();
                }
            }
        
            // Normalize input message by removing punctuation and converting to lowercase
            function normalizeMessage(message) {
                return message.replace(/[?.,!]/g, '').toLowerCase();
            }
        
            // Fetch response from predefined responses or online sources
            async function getResponse(message) {
                const responses = {
                    'hello': 'Hi there! How can I help you?',
                    'help': 'Sure, what do you need help with? You can also contact us at info@jackaltechltd.com.',
                    'services': 'We offer healthcare, education, finance, manufacturing, agriculture, retail, transportation, and energy services.',
                    'team': 'Our team consists of Ignace Kwizera (CEO), Emmanuel Ahishakiye (CTO), and Placide Shema (General Manager).',
                    'events': 'We have events scheduled on 1st August, 15th August, and 30th August 2024.',
                    'who created you': 'I was created by Emmanuel Ahishakiye.',
                    'about emmanuel ahishakiye': 'Emmanuel Ahishakiye is the CTO of Jackal Tech. He is a skilled software engineer with a passion for technology and innovation.',
                    'location': 'Jackal Tech is located in Kigali, Rwanda.',
                    'founded': 'Jackal Tech was founded in January 2020.',
                    'mission': 'Our mission is to drive technological innovation that addresses global challenges.',
                    'vision': 'Our vision is to be a leader in technology, consistently creating impactful innovations that elevate scientific understanding, transform societies, and improve lives worldwide.',
                    'values': 'Our core values are Innovation, Collaboration, Integrity, Empowerment, and Inclusivity.',
                    // Add more predefined responses...
                };
        
                const keywords = {
                    'made': 'create',
                    'services': 'our services'
                };
        
                const normalizedMessage = normalizeMessage(message);
                let response = null;
        
                for (const [key, value] of Object.entries(responses)) {
                    if (normalizedMessage.includes(key)) {
                        response = value;
                        break;
                    }
                }
        
                for (const [key, value] of Object.entries(keywords)) {
                    if (normalizedMessage.includes(key)) {
                        normalizedMessage.replace(key, value);
                    }
                }
        
                if (!response) {
                    response = await fetchOnlineResponse(normalizedMessage);
                }
        
                addMessage('bot', response || 'I am not sure how to respond to that. Can you rephrase?');
                saveChatMessage('bot', response || 'I am not sure how to respond to that. Can you rephrase?');
            }
        
            // Fetch response from online sources
            async function fetchOnlineResponse(query) {
                try {
                    const googleApiKey = 'YOUR_GOOGLE_API_KEY';
                    const googleCx = 'YOUR_GOOGLE_CUSTOM_SEARCH_ENGINE_ID';
                    const searchQuery = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${googleCx}&q=${encodeURIComponent(query)}`;
                    const response = await fetch(searchQuery);
                    const data = await response.json();
                    const result = data.items && data.items.length ? data.items[0].snippet : 'I am not sure how to respond to that. Can you rephrase?';
                    return result;
                } catch (error) {
                    return 'I am having trouble fetching information at the moment. Please try again later.';
                }
            }
        
            chatbotToggle.style.display = 'block';
            chatbotWindow.style.display = 'none';
        
            // Apply animations
            chatbotToggle.addEventListener('mouseover', () => {
                chatbotWindow.style.animation = 'fadeIn 0.5s ease-in-out';
            });
        
            chatbotWindow.addEventListener('mouseleave', () => {
                chatbotWindow.style.animation = 'fadeOut 0.5s ease-in-out';
                setTimeout(() => {
                    chatbotWindow.style.display = 'none';
                }, 500);
            });
        
            // Ensure smooth performance
            chatbotWindow.style.willChange = 'opacity, transform';
            chatbotToggle.style.willChange = 'transform';
        
            // Debounce function to improve performance
            function debounce(func, wait) {
                let timeout;
                return function(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            }
        
            // Load chat history on page load
            loadChatHistory();
        });








 //partner's logo sliding
 document.addEventListener("DOMContentLoaded", function() {
    const partnerLogos = document.querySelector('.partner-logos');
    const logos = document.querySelectorAll('.logo');

    let clonedLogos = [];
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        clonedLogos.push(clone);
        partnerLogos.appendChild(clone);
    });

    function startSlideShow() {
        partnerLogos.style.animation = 'slide 10s linear infinite';
    }

    function resetSlideShow() {
        partnerLogos.style.animation = 'none';
        void partnerLogos.offsetWidth; // trigger reflow
        partnerLogos.style.animation = 'slide 10s linear infinite';
    }

    startSlideShow();

    partnerLogos.addEventListener('animationiteration', resetSlideShow);
});












//Just to be safe
  //for search results 
  document.addEventListener('DOMContentLoaded', function() {
    const searchForms = document.querySelectorAll('.search-form');
    const searchInput = document.querySelectorAll('input[type="search"]');
    const searchSuggestions = document.createElement('ul');
    searchSuggestions.classList.add('search-suggestions');
    document.body.appendChild(searchSuggestions);

    searchForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = form.querySelector('input[type="search"]').value.trim();
            if (query) {
                saveSearchHistory(query);
                localStorage.setItem('searchQuery', query);
                window.location.href = 'search.html';
            }
        });
    });

    searchInput.forEach(input => {
        input.addEventListener('input', function() {
            const query = input.value.trim();
            if (query) {
                showSuggestions(query);
            } else {
                searchSuggestions.style.display = 'none';
            }
        });

        input.addEventListener('focus', function() {
            const query = input.value.trim();
            if (query) {
                showSuggestions(query);
            }
        });

        input.addEventListener('blur', function() {
            setTimeout(() => {
                searchSuggestions.style.display = 'none';
            }, 100);
        });
    });

    function saveSearchHistory(query) {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!searchHistory.includes(query)) {
            searchHistory.push(query);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }
    }

    function showSuggestions(query) {
        const results = [
            { title: 'Service 1', description: 'Description of Service 1', link: 'services.html' },
            { title: 'Service 2', description: 'Description of Service 2', link: 'services.html' },
            { title: 'About Us', description: 'Learn more about our company.', link: 'about.html' },
            { title: 'Privacy Policy', description: 'Read our privacy policy.', link: 'policies.html#privacy-policy' },
            { title: 'Terms of Use', description: 'Understand our terms of use.', link: 'policies.html#terms-of-use' },
            { title: 'Contact Us', description: 'Get in touch with us.', link: 'contact.html' },
            { title: 'Careers', description: 'Join our team.', link: 'careers.html' },
            { title: 'Healthcare Solutions', description: 'Our healthcare services.', link: 'services.html#healthcare' },
            { title: 'Education Programs', description: 'Our education services.', link: 'services.html#education' },
            { title: 'Financial Tools', description: 'Our financial services.', link: 'services.html#finance' },
            { title: 'Manufacturing Solutions', description: 'Our manufacturing services.', link: 'services.html#manufacturing' },
            { title: 'Agriculture Solutions', description: 'Our agriculture services.', link: 'services.html#agriculture' },
            { title: 'Retail Solutions', description: 'Our retail services.', link: 'services.html#retail' },
            { title: 'Smart Solutions', description: 'Our smart solutions.', link: 'services.html#smart-solutions' },
            { title: 'Consulting Services', description: 'Our consulting services.', link: 'services.html#consulting' },
            { title: 'Technology Solutions', description: 'Our technology solutions.', link: 'services.html#technology-solutions' },
            // Add more results as needed
        ];

        const filteredResults = results.filter(result =>
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.description.toLowerCase().includes(query.toLowerCase())
        );

        searchSuggestions.innerHTML = '';
        filteredResults.forEach(result => {
            const suggestionItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = result.link;
            link.textContent = result.title;
            suggestionItem.appendChild(link);
            searchSuggestions.appendChild(suggestionItem);
        });

        searchSuggestions.style.display = filteredResults.length ? 'block' : 'none';
        const inputRect = searchInput[0].getBoundingClientRect();
        searchSuggestions.style.left = `${inputRect.left}px`;
        searchSuggestions.style.top = `${inputRect.bottom}px`;
        searchSuggestions.style.width = `${inputRect.width}px`;
    }
});


//Enabling all links to work

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default link behavior
            const targetUrl = link.getAttribute('href');
            if (targetUrl) {
                window.location.href = targetUrl;  // Redirect to the target URL
            }
        });
    });
});
