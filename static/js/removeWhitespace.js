export function remove_space(str)
{
        
        var st1 = str.replace( /[\r\n]+/gm, "" );
	var st= st1.split(" ").join("");
	return st;
 } 



     			
