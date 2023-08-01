document.addEventListener('DOMContentLoaded', (event) => {
    // Get a reference to the main tag
    const main = document.querySelector('main');

    // Define three jokes
    const joke1 = "Why don't scientists trust atoms? Because they make up everything!";
    const joke2 = "Why did the bicycle fall over? Because it was two-tired!";
    const joke3 = "What's orange and sounds like a parrot? A carrot!";

    // Define an HTML template with the jokes
    const jokeTemplate = `
        <h1>My Jokes</h1>
        <ul>
            <li>${joke1}</li>
            <li>${joke2}</li>
            <li>${joke3}</li>
        </ul>
    `;

    // Put the template inside the main tag
    main.innerHTML = jokeTemplate;

    // Create a paragraph tag
    const p = document.createElement('p');
    p.textContent = "That's all folks!";

    // Append the paragraph tag to the body tag
    document.body.appendChild(p);
});
