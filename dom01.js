// 1) highlight all of the words that are over 4 characters long
const paragraph = document.querySelector('p');

// create an array of words from the paragraph
paragraph.innerHTML = paragraph.innerText
  .split(' ')
  .map((word) =>
    word.length > 8
      ? `<span style="background-color: yellow">${word}</span>`
      : word
  )
  .join(' ');

// 2) Add link back to the source of the text after the paragraph tag
// (https://forcemipsum.com)

const link = document.createElement('a');
link.href = 'https://forcemipsum.com';
link.innerText = 'Text generated from Forcem Ipsum';
document.body.appendChild(link);

// 3) split each new sentence on to a separate line in the paragraph text
// A sentence can be assumed to be a string of text terminated with a '.'
paragraph.innerHTML = paragraph.innerHTML.split('.').join('</p><p>') + '</p>';

// 4) count the number of words in the paragraph tag and display the count
// after the heading.  Assume all words are separated by a singular white space
const wordCount = paragraph.innerText.split(' ').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;

// insert new div element before the paragraph
document.body.insertBefore(wordCountElem, paragraph);

// 5) replace all question marks with thinking face symbols and exclamation marks
// with astonished faces
Array.from(document.querySelectorAll('p')).forEach((p) => {
  p.innerHTML = p.innerHTML
    .replace(/\?/g, '&#128556')
    .replace(/\!/g, '&#128561');
});
