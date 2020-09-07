
//------------------------calculator functions-----------------

function input_val(val) { 
	return document.getElementById("result").value+=val; 
	

} 

function find() { 
	let x = document.getElementById("result").value;
	x = x.replace("%","*0.01*"); 
	let y = eval(x); 
	console.log(x,y);
	return document.getElementById("result").value = y;
} 

/*function percent_find(){
	let x = document.getElementById("result").value;
	console.log(x);
	let y = x*0.01;
	let z = document.getElementById("result").value;
	let final = y*z;
	document.getElementById("result").value = final;
	console.log(x,y,z);

}
*/

function abs_find(){
	let x = document.getElementById("result").value;
	let y = Math.abs(x);
	return document.getElementById("result").value = y;
	 

}

function sqrt_find(){
	let x = document.getElementById("result").value;
	let y = Math.sqrt(x);
	return document.getElementById("result").value = y;
	

}

function clr() { 
	return document.getElementById("result").value = ""; 
} 



//------------------------Form Validation-------------

function alphabets_allow() {
	  var element = document.getElementById('firstName');
	  var letters = /^[A-Za-z]+$/;
	  if(element.value.match(letters))
      {
      	console.log(true);
      }
      else
      {
	      return alert('Please input alphabet characters only');
	      //return false;
      }
	  
	};

function checkNum(){
	var numEle = document.getElementById("mobile").value;
	if (numEle.length==10){
		console.log(true);
	}
	else{
		return alert("Your mobile number should be 10 digits");
	}
};
//-----------------------PALINDROME CHECK-------------------

function alphabets_only() {
	  var element = document.getElementById('palindrome_text');
	  var letters = /^[A-Za-z]+$/;
	  if(element.value.match(letters))
      {
      	console.log(true);
      }
      else
      {
	      return alert('Please input alphabet characters only');
	      //return false;
      }
	  
	};

function isPalindrome(){
	if (check_palindrome()==true){
		return document.getElementById("result").innerHTML = "It's a Palindrome";
	}
	else{
		return document.getElementById("result").innerHTML = "Not Palindrome";
		//return false;
	}
};

function check_palindrome(){
	var str_input = document.getElementById("palindrome_text").value;
    var len = str_input.length;
    var mid_str = Math.floor(len/2);

    for ( var i = 0; i < mid_str; i++ ) {
        if (str_input[i] !== str_input[len - 1 - i]) {
            return false;
        }
    }

    return true;

};

//-----------------------------ANAGRAM-----------------------------------

function anagram_find(){
	var string1 = document.getElementById("anagram_input").value;
	var string2 = document.getElementById("anagram_test").value;
	string1 = string1.toLowerCase().split(" ").join("");
	console.log(string1);
	string2 = string2.toLowerCase().split(" ").join("");
	console.log(string2);
	lenOfStr = string2.length;
	console.log(lenOfStr);
	var i = 0;
	var j = 0;
	var count = 0;
	if (string1.length == string2.length){
		console.log("for loop entry");
		for (i=0; i<lenOfStr; i++){
			console.log("for loop entry2"); //o
			for (j=0; j<lenOfStr; j++){ //j=2, 5
				if (string1[i]==string2[j]){					
					string1 = string1.replace(string1[i]," ");
					string2 = string2.replace(string2[j]," ");
					count += 1;
					break;
				}
				console.log("length1 : "+string1);
				console.log("length2 : "+string2);

			}

		}	
		console.log("for loop exit");
		if (string1.length ==count){
			console.log("the final lengths :"+string1);
			return document.getElementById("anagram_result").innerHTML="It's an ANAGRAM word";
		}
		else{
			console.log("else condition 1");
			return document.getElementById("anagram_result").innerHTML="It's not ANAGRAM word";
			
			
		}
	}
	else{
		console.log("else condition 2");
		return document.getElementById("anagram_result").innerHTML="It's not ANAGRAM word";
	}
};

//-------########-------------------------------WHO WILL SURVIVE-------------------

function guess(){
	var temp_1 = Math.round(1000*Math.random());
	var temp_2 = Math.round(1000*Math.random());
	document.getElementById("rand_1").innerHTML = temp_1;
	document.getElementById("rand_2").innerHTML = temp_2;
	// if (temp_1%3 == 0){
	// 	var human = 0;
	// 	var cockroach = 1;
	// 	var nuclear = 2;
	// }
	// else if(temp_1%3==1){
	// 	var human = 1;
	// 	var cockroach = 2;
	// 	var nuclear = 0;
		
	// }
	// else{
	// 	var human = 2;
	// 	var cockroach = 0;
	// 	var nuclear = 1;

	// }

	// if (temp_2%3 == 0){
	// 	var human = 0;
	// 	var cockroach = 1;
	// 	var nuclear = 2;
	// }
	// else if(temp_2%3==1){
	// 	var human = 1;
	// 	var cockroach = 2;
	// 	var nuclear = 0;
		
	// }
	// else{
	// 	var human = 2;
	// 	var cockroach = 0;
	// 	var nuclear = 1;

	// }

	temp_1_mod = temp_1%3;
	temp_2_mod = temp_2%3;
	if ((temp_1_mod == 0 && temp_2_mod == 1)|| (temp_1_mod == 1 && temp_2_mod == 0)){
		return document.getElementById("survive").innerHTML="Human Survive";
	}
	else if ((temp_1_mod == 1 && temp_2_mod == 2)|| (temp_1_mod == 2 && temp_2_mod == 1)){
		return document.getElementById("survive").innerHTML="Cockroach Survive";
	}
	else if ((temp_1_mod == 0 && temp_2_mod == 2) || (temp_1_mod == 2 && temp_2_mod == 0)){
		return document.getElementById("survive").innerHTML="Human Dies";
	}






};