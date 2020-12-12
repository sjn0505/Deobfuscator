import {RemoveLongNames} from './longNames.js';
import {RemoveStringSplitters} from './stringSplitting.js';
import {removeComment} from './comments_removal.js';
import {unescapeUnicode,convertHTMLEntity,decode,bytesToChars,octToDecBytes} from './decode.js';
import {remove_space} from './removeWhitespace.js';


$(function() {
              $('#sendsub').bind('click', function() {
		var output;
		var name = document.getElementById("sendsub").value;
		
		var text = document.getElementById("submitText").value;
		console.log(text);
		if (name == "Remove whitespace") {
			output=remove_space(text);
		}
		 
		else if (name == "Rename") {
			 output = RemoveLongNames(text);
		}

		else if (name == "Beautify") {
			var js_source_text = text;
			 output = js_beautify(String(js_source_text), {
      				'indent_size': 1,
      				'indent_char': '\t'
    			 });
			
    			
  		}

		else if(name == "String split"){
			 output = RemoveStringSplitters(text);
   			
		}
		else if(name == "Remove comments"){
			output = removeComment(text);
		}
		else if(name == "Decode backslash unicode"){
			output = unescapeUnicode(text);
			
		}

		else if(name == "Decode percent unicode"){
			console.log("entered");
			var x = decodeURI(text);
			output = unescape(x);
		}


		else if(name == "Decode Ampersand hex"){
			output = convertHTMLEntity(text);
		
		}

		else if(name == "Decode octal"){
			output = decode(text);
			
		}	
		else if(name == "Decode base64"){
			output = atob(String(text));
			
		}	
		else {
			output = "Check your input";
		}
			
		$.post('/', {  
                  		code: $('textarea[name="code"]').val(),
              			  }, function(data) {
		 		 		$('#getText').text(output);
						$('#log').text("yup works");
						
		 		 });
                	return false;
              })
            });

