  function myFunction(){
  // names arrays
  let akanFemaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
  let akanMaleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  //user information
  let birthDay=document.getElementById("inputBirthDay").value;
  let femaleGender=document.getElementById("female").value;
  let maleGender=document.getElementById("male").value;

  //manipulate user info
  let date=new Date(birthDay);
  let yourDay=date.getDay();
  //control flow
  if ( birthDay !=""&&femaleGender) {

    document.getElementById("akanName").innerHTML =" You were born on "+ weekDays[yourDay]+ " and your akan name is " +akanFemaleNames[yourDay]+" .";
    alert(" You were born on "+ weekDays[yourDay]+ " and your akan name is " +akanFemaleNames[yourDay]+" .");
    }
    else if(birthDay !=""&&maleGender){

      document.getElementById("akanName").innerHTML =" You were born on "+ weekDays[yourDay]+ " and your akan name is " +akanMaleNames[yourDay]+" .";
      alert(" You were born on "+ weekDays[yourDay]+ " and your akan name is " +akanMaleNames[yourDay]+" .");

    }
    else{
    alert("select all the fields")
    }
  };