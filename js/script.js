function BodyMassIndexCalc()
{
 var Bodyweight=parseFloat(document.getElementById("Body-Weight").value);
 var Bodyheight=parseFloat(document.getElementById("Body-Height").value);
 var BodyMassIndex;
 BodyMassIndex=Bodyweight/((Bodyheight/100)*(Bodyheight/100));
 document.getElementById("Body-Mass-Index").innerHTML=BodyMassIndex.toFixed(2)
 console.log(Bodyweight);
 console.log(Bodyheight);
 console.log(BodyMassIndex);
}