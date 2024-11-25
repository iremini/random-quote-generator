
const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "It always seems impossible until it's done. - Nelson Mandela"
];

document.getElementById("generateQuote").addEventListener("click", function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Automatically use ireminiapk.com as the website URL
    const websiteURL = "https://ireminiapk.com";
    
    // Display the random quote
    document.getElementById("quoteDisplay").textContent = randomQuote;
    
    // Create and display the backlink
    const backlinkHTML = `<a href="${websiteURL}" target="_blank" rel="noopener noreferrer">Visit ireminiapk.com</a>`;
    document.getElementById("backlinkDisplay").innerHTML = `Check this link for more: ${backlinkHTML}`;
});
