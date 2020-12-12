
   		
 export function RemoveLongNames(code){
        const savedText = [];
        code = code.replace(/(['"`]).*?\1/gm,function (match) {
        var i = savedText.push(match);
        return (i-1)+'###';
        });
        //that was for pushing string values
        code =code.replace(/\/[^*\n].*\//gm,function (match) {
        var i = savedText.push(match);
        return (i-1)+'###';
        });
        //that was for pushing regex values in code
        //var count =0;
        let regs = /(\w{12,})/gm;
        let allMatches = code.match(regs);
        let uniq = [...new Set(allMatches)];
      
	/*fs.writeFile('lnlog.txt', uniq, (err, data) => { 
   		 if (err) throw err; 
	});*/
        for(let i =0; i< uniq.length; i++)
        {
            code = code.split(uniq[i]).join("var"+i)
        }
        //to be continues

        code = code.replace(/\d+###/gm,function(match){
            var i = Number.parseInt(match);
            return  savedText[i];
        })
        
        //console.log(code);
	return code;
    }

    
   
    //console.log(cleancode);
   

