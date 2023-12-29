document.addEventListener('DOMContentLoaded', function () {
    const quoteTextElement = document.getElementById('quoteText');
    const quoteAuthorElement = document.getElementById('quoteAuthor');
    const getNewQuoteButton = document.getElementById('getNewQuote');
  
   // getNewQuoteButton.addEventListener('click', function () {
     // getQuote();
 //   });
  
    function getQuote() {
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          const quoteText = data.content;
          const quoteAuthor = data.author;
          displayQuote(quoteText, quoteAuthor);
        })
        .catch(error => {
          console.error('Error fetching quote:', error);
        });
    }
  
    function displayQuote(quoteText, quoteAuthor) {
      quoteTextElement.textContent = `"${quoteText}"`;
      //quoteAuthorElement.textContent = `— ${quoteAuthor}`;
    }
  
    // Get a quote when the extension is opened
    getQuote();
  });
  