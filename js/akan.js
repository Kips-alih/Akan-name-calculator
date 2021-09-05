function myFunction(){
// names arrays
let akanFemaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
let akanMaleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]

//user information
let birthDay=document.getElementById("inputBirthDay").value;
let femaleGender=document.getElementById("mySelect").selectedOptions[0].value;

//manipulate user info
let date=new Date(birthDay);
let yourDay=date.getDay();
//control flow
if ( birthDay !=""&&femaleGender) {
  document.getElementById("akanName").innerHTML ="Your akan name is " +akanFemaleNames[yourDay]+" .";
  alert("Your akan name is " +akanFemaleNames[yourDay]+" .");
}
};