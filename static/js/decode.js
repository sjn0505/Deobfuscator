//code for backslash unicode
        
   function unescapeUnicode( str ) {
    	 return str.replace( /\\u([a-fA-F0-9]{4})/g, function(g, m1) {
         return String.fromCharCode(parseInt(m1, 16));
    });
}


//Code for octal

function encode(str) {
  return decToOctBytes(charsToBytes(str.split(''))).join(' ');
}

function decode(octBytes) {
  return bytesToChars(octToDecBytes(octBytes.split(' '))).join('');
}

function charsToBytes(chars) {
  return chars.map(function(char) {
    return char.charCodeAt(0);
  });
}

function bytesToChars(bytes) {
  return bytes.map(function(byte) {
    return String.fromCharCode(parseInt(byte, 10));
  });
}

function decToOctBytes(decBytes) {
  return decBytes.map(function(dec) {
    return ('000' + dec.toString(8)).substr(-3);
  });
}

function octToDecBytes(octBytes) {
  return octBytes.map(function(oct) {
    return parseInt(oct, 8);
  });
}
//Ampersand hex

function convertHTMLEntity(text){
    const span = document.createElement('span');

    return text
    .replace(/&[#A-Za-z0-9]+;/gi, (entity,position,text)=> {
        span.innerHTML = entity;
        return span.innerText;
    });
}

export {unescapeUnicode,convertHTMLEntity,decode,bytesToChars,octToDecBytes};
  
