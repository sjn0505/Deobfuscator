  
   
   
   export function RemoveStringSplitters(code){
        let regex = /(['"`].*?['"']\s[+]\s['"`].*?['"`])|(['"`].*?['"'][+]\s['"`].*?['"`])|(['"`].*?['"']\s[+]['"`].*?['"`])|(['"`].*?['"'][+]['"`].*?['"`])/gm;
        // regex for detecting "...." + "...."
        let regex1 = /(["'`]\s[+]\s['"`])|(["'`][+]\s['"`])|(["'`]\s[+]['"`])|(["'`][+]['"`])/gm;
        // regex for detecting " + "
        let allMatches = code.match(regex);
        let uniq = [...new Set(allMatches)];
        console.log(allMatches);
        for(let i =0; i< uniq.length; i++)
        {
            // let allSubMatches = uniq[i].match(regex1);
            let newstr = uniq[i].replace(regex1, "")
            code = code.replace(uniq[i], newstr);
            //code = code.split(uniq[i]).join("var"+i)
        }
        return code;
    }
   
   



