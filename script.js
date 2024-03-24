document.addEventListener("DOMContentLoaded", function() {
    var typingSound = document.getElementById("typing-sound");
    var typingText = document.querySelector(".typing-text");
    var searchTexts = ["What Do You Wanna Search Today?",
    "I am Jarvis",
    "How may I Help You",
    "Where can I find information on quantum mechanics?",
    "How do I learn to play the guitar?",
    "What are the best books to read?",
    "Can you help me with my math homework?",
    "How can I improve my programming skills?",
    "What's the weather forecast for tomorrow?",
    "What is the capital of France?",
    "How do I cook a perfect steak?",
    "What are the symptoms of COVID-19?",
    "How do I create a website?",
    "What are the benefits of meditation?",
    "Can you recommend a good movie?",
    "How do I start investing in stocks?",
    "What is the meaning of life?",
    "Where can I buy affordable furniture?",
    "How do I get in shape?",
    "What are the best travel destinations?",
    "How do I overcome procrastination?",
    "What is the process for applying to college?",
    "Where can I learn a new language?",
    "How do I fix a leaking faucet?",
    "What are the best podcasts to listen to?",
    "What are the symptoms of anxiety?",
    "How do I make a budget?",
    "What is the best way to study for exams?",
    "What are the benefits of yoga?",
    "How do I improve my memory?",
    "Where can I find volunteer opportunities?",
    "What are the signs of depression?",
    "How do I negotiate a salary?",
    "What is the history of Ancient Rome?",
    "What are the best strategies for time management?",
    "How do I start a small business?",
    "What are the benefits of drinking water?",
    "How do I create a resume?",
    "What are the best ways to relax?",
    "What is the process for buying a house?",
    "How do I deal with stress?",
    "Where can I find free online courses?",
    "What are the symptoms of the common cold?",
    "How do I become a better communicator?",
    "What are the best techniques for public speaking?",
    "What is the meaning of happiness?",
    "How do I build self-confidence?",
    "What are the steps for planning a wedding?",
    "What are the best strategies for job hunting?",
    "How do I prepare for a job interview?",
    "What are the benefits of regular exercise?",
    "How do I find a good therapist?",
    "What are the best ways to save money?",
    "What is the process for adopting a pet?",
    "How do I start a blog?",
    "What are the symptoms of the flu?",
    "How do I build a strong relationship?",
    "What are the best strategies for weight loss?",
    "What are the benefits of eating healthy?",
    "How do I quit a bad habit?",
    "What is the history of World War II?",
    "What are the best ways to boost productivity?",
    "How do I organize my time effectively?",
    "What are the signs of a toxic relationship?",
    "What are the best ways to improve focus?",
    "How do I develop a growth mindset?",
    "What are the benefits of positive thinking?",
    "What is the process for applying for a visa?",
    "How do I start a YouTube channel?",
    "What are the symptoms of food poisoning?",
    "How do I build a strong professional network?",
    "What are the best strategies for studying?",
    "How do I build a good credit score?",
    "What are the benefits of reading?",
    "How do I cope with loss?",
    "What are the steps for planning a vacation?",
    "What are the best ways to overcome fear?",
    "How do I develop resilience?",
    "What are the benefits of mindfulness meditation?",
    "How do I start investing in real estate?",
    "What are the symptoms of allergies?",
    "How do I create a healthy work-life balance?",
    "What are the best strategies for conflict resolution?",
    "What is the process for starting a family?",
    "How do I find my passion?",
    "What are the signs of a heart attack?",
    "How do I create an effective study schedule?",
    "What are the benefits of laughter?",
    "How do I overcome imposter syndrome?",
    "What are the steps for planning a birthday party?",
    "What are the best ways to improve self-discipline?",
    "How do I build a successful career?",
    "What are the benefits of journaling?",
    "How do I develop leadership skills?",
    "What is the history of the Industrial Revolution?",
    "What are the best strategies for conflict management?",
    "How do I improve my emotional intelligence?",
    "What are the symptoms of a concussion?",
    "How do I start a nonprofit organization?",
    "What are the benefits of learning a musical instrument?",
    "How do I create a positive mindset?",
    "What are the best ways to build trust in a relationship?",
    "What is the process for starting a new hobby?",
    "How do I build a successful team?",
    "What are the symptoms of heat exhaustion?",
    "How do I start a career in photography?",
    "What are the benefits of traveling solo?",
    "How do I become more assertive?",
    "What are the steps for planning a baby shower?",
    "What are the best strategies for effective communication?",
    "How do I build a personal brand?",
    "What is the history of the Renaissance?",
    "What are the benefits of having a mentor?",
    "How do I improve my problem-solving skills?",
    "What are the signs of a healthy relationship?",
    "What are the best ways to stay motivated?",
    "How do I start a fitness routine?",
    "What are the symptoms of a panic attack?"];
    var speed = 50; // Typing speed in milliseconds

    function playTypingSound() {
        typingSound.currentTime = 0;
        typingSound.play();
    }

    function typeWriter() {
        var index = 0;

        function typeNextText() {
            var text = searchTexts[index];
            var charIndex = 0;
            typingText.textContent = "";
            var typingInterval = setInterval(function() {
                if (charIndex < text.length) {
                    typingText.textContent += text.charAt(charIndex);
                    charIndex++;
                    playTypingSound();
                } else {
                    clearInterval(typingInterval);
                    setTimeout(function() {
                        index = (index + 1) % searchTexts.length; // Move to the next text or loop back to the beginning
                        typeNextText(); // Type the next text
                    }, 1000); // Wait for 1 second before typing the next text
                }
            }, speed);
        }

        typeNextText(); // Start typing the first text
    }

    typeWriter(); // Start the typing animation

    var searchButton = document.getElementById("search-button");
    var searchInput = document.getElementById("search-query");
    var searchSuggestions = document.getElementById("search-suggestions");

    searchButton.addEventListener("click", function() {
        search();
    });

    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });

    function search() {
        var query = searchInput.value.trim();
        if (query !== "") {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
        }
    }

    searchInput.addEventListener("input", function() {
        var query = searchInput.value.trim();
        if (query !== "") {
            // Example: Fetch suggestions based on the query and display them
            var suggestions = getSuggestions(query);
            displaySuggestions(suggestions);
        } else {
            clearSuggestions();
        }
    });

    function getSuggestions(query) {
        // Example: Perform an API request to get search suggestions based on the query
        // Here, we're just returning some dummy suggestions
        return ["suggestion 1", "suggestion 2", "suggestion 3"];
    }

    function displaySuggestions(suggestions) {
        searchSuggestions.innerHTML = "";
        suggestions.forEach(function(suggestion) {
            var suggestionElement = document.createElement("div");
            suggestionElement.textContent = suggestion;
            suggestionElement.classList.add("search-suggestion");
            suggestionElement.addEventListener("click", function() {
                searchInput.value = suggestion;
                clearSuggestions();
                // Perform search or any other action here
                console.log("Performing search for:", suggestion);
            });
            searchSuggestions.appendChild(suggestionElement);
        });
    }

    function clearSuggestions() {
        searchSuggestions.innerHTML = "";
    }
});
