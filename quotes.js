const generateQuote = function() {
    const quotes = [
    {
        quote: "The unexamined life is not worth living.",
        author: "Socrates"
    },
    {
        quote: "Whereof one cannot speak, thereof one must be silent.",
        author: " Ludwig Wittgenstein"
    },
    {
        quote: "Entities should not be multiplied unnecessarily.",
        author: " William of Ockham"
    },
    {
        quote: "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short.",
        author: " Thomas Hobbes"
    },
    {
        quote: "I think therefore I am.",
        author: " René Descartes"
    },
    {
        quote: "God is dead! He remains dead! And we have killed him.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Happiness is not an ideal of reason but of imagination.",
        author: "Immanuel Kant"
    },
    {
        quote: "No man's knowledge here can go beyond his experience.",
        author: "John Locke"
    },
    {
        quote: "Liberty consists in doing what one desires.",
        author: "John Stuart Mill"
    },
    {
        quote: "Set your life on fire. Seek those who fan your flames.",
        author: "Rumi"
    },
    {
        quote: "I know you’re tired but come, this is the way.",
        author: "Rumi"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = '"'+quotes[arrayIndex].quote+'"';
    document.getElementById("author").innerHTML = '-'+quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
