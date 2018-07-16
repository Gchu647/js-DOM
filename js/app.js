/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
name1.innerHTML = "Tay-tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
position2.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
alias3.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var profClass = document.getElementsByClassName("profile");
profClass[0].innerHTML = "Get the funk up! Batman";



/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
profClass[1].innerHTML = "Be the water!";


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var aliasClass = document.getElementsByClassName("alias")
aliasClass[2].innerHTML = "Motha Fck Gangsta";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var tempDiv1 = document.createElement("div");
tempDiv1.id = "name7";
tempDiv1.innerHTML = "Peter Griffin";
var targetDiv1 = document.getElementById("nameParent");
targetDiv1.appendChild(tempDiv1);

/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var tempDiv2 = document.createElement("div")
tempDiv2.id = "alias8";
tempDiv2.innerHTML = "Old Man Riverwalk";
var targetDiv2 = document.getElementById("aliasParent");
targetDiv2.appendChild(tempDiv2);



//Final Boss
/*9. Create your own profile.*/
var myProfile = document.getElementsByClassName("block3 col-sm-4");
var profParent = document.createElement("div");
var myName = document.createElement("div");
var myPosition = document.createElement("div");
var myBio = document.createElement("div");

myName.id = "name9";
myPosition.id = "position9";
myBio.id = "bio9";
myName.innerHTML = "Soma Yukihira";
myPosition.innerHTML = "Chef";
myBio.innerHTML = " Likes to say, 'It wasn't much', after serving food";

myProfile[2].appendChild(profParent); //It has to be index 2, and why error on index 3?
profParent.appendChild(myName);
profParent.appendChild(myPosition);
profParent.appendChild(myBio);

