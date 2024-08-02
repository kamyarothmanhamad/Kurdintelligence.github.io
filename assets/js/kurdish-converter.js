// assets/js/kurdish-converter.js

function convertToSorani(latinText) {
  const conversionMap = {
    'a': 'ا',
    'b': 'ب',
    'c': 'ج',
    'ç': 'چ',
    'd': 'د',
    'e': 'ە',
    'ê': 'ێ',
    'f': 'ف',
    'g': 'گ',
    'h': 'ھ',
    'i': 'ی',  // 'i' translates to nothing
    'î': 'ی',
    'j': 'ژ',
    'k': 'ک',
    'l': 'ل',
    'll': 'ڵ',  // Added: emphatic L
    'm': 'م',
    'n': 'ن',
    'o': 'ۆ',
    'p': 'پ',
    'q': 'ق',
    'r': 'ر',
    'rr': 'ڕ',  // Added: emphatic R
    's': 'س',
    'ş': 'ش',
    't': 'ت',
    'u': 'و',
    'û': 'وو',
    'v': 'ڤ',
    'w': 'و',
    'x': 'خ',
    'y': 'ی',
    'z': 'ز',
    '\'': 'ع'
  };

  // Function to convert a single word
  function convertWord(word) {
    // Handle the special case for 'Ê' at the beginning of a word
    if (word.startsWith('Ê')) {
      return 'ئێ' + word.slice(1).replace(/ll|rr|[a-zçêîşû']/gi, match => conversionMap[match.toLowerCase()] || match);
    }
    // Handle the special case for 'ê' at the beginning of a word
    if (word.startsWith('ê')) {
      return 'ئێ' + word.slice(1).replace(/ll|rr|[a-zçêîşû']/gi, match => conversionMap[match.toLowerCase()] || match);
    }
    // Regular conversion for other words
    return word.replace(/ll|rr|[a-zçêîşû']/gi, match => conversionMap[match.toLowerCase()] || match);
  }

  // Split the text into words, convert each word, then join back
  return latinText.split(/\s+/).map(convertWord).join(' ');
}

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('alphabetToggle');
  const postContent = document.getElementById('postContent');
  let isSorani = false;
  let originalContent = postContent.innerHTML;

  toggleButton.addEventListener('click', function() {
    if (isSorani) {
      postContent.innerHTML = originalContent;
      toggleButton.textContent = 'Switch to Sorani';
    } else {
      postContent.innerHTML = convertToSorani(postContent.innerText);
      toggleButton.textContent = 'Switch to Latin';
    }
    isSorani = !isSorani;
  });
});
