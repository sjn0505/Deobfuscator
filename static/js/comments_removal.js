
  export function removeComment(code){
    const savedText = [];
    return code
       .replace(/(['"`]).*?\1/gm,function (match) {
        var i = savedText.push(match);
        return (i-1)+'###';
    })
    // remove  // comments
    .replace(/\/\/.*/gm,'//deleted')
    // now extract all regex and save them
    .replace(/\/[^*\n].*\//gm,function (match) {
        var i = savedText.push(match);
        return (i-1)+'###';
    })
    // remove /* */ comments
    .replace(/\/\*[\s\S]*\*\//gm,'//deleted')
    // remove <!-- --> comments
    .replace(/<!--[\s\S]*-->/gm, '//deleted')
    .replace(/\d+###/gm,function(match){
        var i = Number.parseInt(match);
        return  savedText[i];
    })
   
}


