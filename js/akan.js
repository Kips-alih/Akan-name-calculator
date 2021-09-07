  function myFunction(){
  // names arrays
  let akanFemaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
  let akanMaleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  //user information
  let birthDay= document.getElementById("inputBirthDay").value;
  let gender= document.querySelector("form select[id=mySelect]").value;
  let name = document.getElementById("nameInput").value;


  //manipulate user info
  let date=new Date(birthDay);
  let yourDay=date.getDay();
  //control flow
  if ( birthDay !="" && gender=="female") {

    document.getElementById("akanName").innerHTML =" You were born on "+ weekDays[yourDay]+ " and your akan name is " +akanFemaleNames[yourDay]+" .";
    alert(" Hello " + name +",you were born on "+ weekDays[yourDay]+ " and your akan name is " +akanFemaleNames[yourDay]+" .");
    }
    else if(birthDay !="" && gender=="male"){

      document.getElementById("akanName").innerHTML =" You were born on "+ weekDays[yourDay]+ " and your akan name is " +akanMaleNames[yourDay]+" .";
      alert(" Hello " + name +", you were born on "+ weekDays[yourDay]+ " and your akan name is " +akanMaleNames[yourDay]+" .");

    }
    else{
    alert("Please select all the fields!")
    }
  };