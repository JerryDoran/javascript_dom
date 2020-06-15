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

console.log();
