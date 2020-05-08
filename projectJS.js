//Functions
function paraText(txt) {  //for creating a text
	
	var para = document.createElement("p");
	var text = document.createTextNode(txt);
	docNavigate.appendChild(para);
	docNavigate = docNavigate.lastChild;//body-form-para
	docNavigate.appendChild(text);

	docNavigate = docNavigate.parentNode;//body-form
}

function inputText(intext,ids) { //for creating input type and id ans set it to required 
	var input = document.createElement("input");
	input.setAttribute('type',intext);
	input.setAttribute('id',ids);
	input.setAttribute('required','');
	docNavigate.appendChild(input);
}

function inputTextarea(ids) { // creating text area
	var textarea = document.createElement("textarea");
	textarea.setAttribute('id',ids);
	textarea.setAttribute('required','');
	docNavigate.appendChild(textarea);
}
//end of function
//heading
var docNavigate = document.body; //strt with the body element

var div = document.createElement("div");
div.setAttribute('id','header');
docNavigate.appendChild(div);
docNavigate = docNavigate.lastChild;  //body-div

var h1 = document.createElement("h1");
var myName = document.createTextNode("Aakash Chitrakar");
docNavigate.appendChild(h1);
docNavigate = docNavigate.lastChild; //body-div-h1
docNavigate.appendChild(myName);

docNavigate = docNavigate.parentNode; //body-div

var h2 = document.createElement('h2');
var course = document.createTextNode('WEB 115 - Section 0002');
docNavigate.appendChild(h2);
docNavigate = docNavigate.lastChild; //body-div-h2
docNavigate.appendChild(course);

docNavigate = docNavigate.parentNode;//body-div
docNavigate = docNavigate.parentNode;//body

var heading = document.createElement("h1");
heading.setAttribute('class','center');
var title = document.createTextNode("Build Your Resume");
docNavigate.appendChild(heading);
docNavigate = docNavigate.lastChild;//body-h1
docNavigate.appendChild(title);

docNavigate = docNavigate.parentNode;//body

//end of heading

var form = document.createElement("form");
form.setAttribute('id','myForm');
docNavigate.appendChild(form);
docNavigate = docNavigate.lastChild;//body-form

// Form section
paraText('Enter Your Full Name');
inputText('text','fullName');

paraText('Enter Your Address');
inputText('text','address');

paraText('Enter Your Phone Number');
inputText('number','number');

paraText('Enter Your Email Address');
inputText('email','email');

paraText('Enter Your Personal Information');
inputTextarea('personalData');

paraText('Enter Your Career Object');
inputTextarea('career');

paraText('Enter Your Education Background');
inputTextarea('education');

paraText('Enter Your Work Experience');

//looping for the work experience section:  loops for 3 times

for (var i = 0; i < 4; i++) {
	paraText('Start Date (mm/dd/yyyy)');
	inputText('date','startDate'+i);

	paraText('End Date (mm/dd/yyyy)');
	inputText('date','endDate'+i);

	paraText('Employment Details');
	inputTextarea('employment' + i);
}

paraText('Enter Your Character Reference');
inputTextarea('character');

paraText('Enter Your Business Reference');
inputTextarea('refer');

//Submit button

input = document.createElement("input");
input.setAttribute('type','button');
input.setAttribute('value','Create Resume');
input.setAttribute('id','submit');
input.setAttribute('onClick','myWindow()')
docNavigate.appendChild(input);
// End of form

//styling the heading section 
document.getElementById('header').style.cssText = "color:red; text-align: center; font-family: Tahoma;"//Adding styles to the header idt.
document.getElementsByClassName('center')[0].style.cssText = "text-align:center;"//Adding styles to the class center.
document.getElementsByTagName('h2')[0].style.cssText = "font-family: Garamond; font-style: oblique;"//Adding styles to the h2 element.



//output in new window
function output(title,result) {//creatin a div block for the section
	myText += ("<div class = 'clearfix'>\n<div class=theLeft>"+ title +"</div>");
    myText += ("<div class = theRight>"+ result +"</div>\n</div>");
}
function textBreak(text){//splits the content of text area when there is a new line and adds br tag to it
	var breaks = text.split('\n');
	var newLine = breaks.join('<br>');
	
	return newLine;
}
function dateConvert(datetype){//changing date format
	var day = new Date(datetype);
	var finalDate = day.toLocaleDateString('en-US', {year: 'numeric', month: 'short'}) //day.getMonth() + " - " + day.getYear();
	return finalDate;
}
function myWindow()
{
   //receiving value from the input and storing it in a variable. 
    fullName = document.getElementById("fullName").value;
    address = document.getElementById("address").value;
    number = document.getElementById("number").value;
    email = document.getElementById("email").value;
    personalData = document.getElementById("personalData").value;
    career = document.getElementById("career").value;
    education = document.getElementById("education").value;
    refer = document.getElementById("refer").value;
    character = document.getElementById("character").value;

//validation for any empty section
    if (fullName == "" || address == "" || number == "" || email == "" || personalData == "" || career == "" || education == "" || refer == "" || character == "") {
    	return alert ("Please fill all the information");

    }
//validation for the @ in email
    var re = /\@/;
    var testEmail = re.test(email);
    if (!testEmail) {
    	alert("Email not correct");
    	return document.getElementById("email").focus();
    }
    //New window output
    personalData = textBreak(personalData);
    career = textBreak(career);
    education = textBreak(education);
    refer = textBreak(refer);
    character = textBreak(character);
    myText = ("<html>\n<head>\n<title>Resume</title>\n<style>\nbody{width:1000px;margin: 40px auto;font-size:12pt;font-family: verdana;}\n.theLeft {float:left;width:200px;text-transform:uppercase;}\n.theRight {float:right;width:600px;padding-bottom:20px;padding-right:30px;}\n .clearfix{width:inherit;display:inline-block;content:'';clear:both;}\n</style>\n</head>\n<body>\n");
    myText += ("<p style = 'text-transform:uppercase'>\n" + fullName + "</p>");
    myText += ("<p>"+ address +" / "+ number + " / " + email +"</p><hr>");
    output('Career Objectives',career);
    output('Personal Data',personalData);
    output('education',education);
    myText += ("<div>Employment Experience</div><br>");
    for (var i = 0; i < 4; i++) {
	    startDate = document.getElementById("startDate" + i).value;
	    startDate = dateConvert(startDate);
	    endDate = document.getElementById("endDate" + i).value;
	    endDate = dateConvert(endDate);
	    employment = document.getElementById("employment" + i).value;
	    employment = textBreak(employment);

	    if (startDate == "" || endDate =="" || employment == "") {  //date validation
	    	return alert ("Please fill all the employment information");
	    }
		myText += ("<div class = 'clearfix'><div class=theLeft>" + startDate + " - " + endDate + "</div>");
	    myText += ("<div class =theRight>" + employment + "</div>\n</div>");
}
    output('Character Reference',character);
    output('Business Reference',refer);
    myText += ("</body>\n</html>");
//end of new window output.
    flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    flyWindow.document.write(myText);

}



































