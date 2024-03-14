var Bodyweight;
var Bodyheight;
var BodyMassIndex;
var BMIgraph;
var BMIclass;

function malegraph()
{
    BMIgraph="asset/BMI-men.jpg"
}

function femalegraph()
{
    BMIgraph="asset/BMI-women.jpg"
}

function BodyMassIndexCalc()
{
    Bodyweight=parseFloat(document.getElementById("Body-Weight").value);
    Bodyheight=parseFloat(document.getElementById("Body-Height").value);
    BodyMassIndex=Bodyweight/((Bodyheight/100)*(Bodyheight/100));
    BodyMassIndex=BodyMassIndex.toFixed(1);
    if(BodyMassIndex>30)
    {
        BMIclass="Obesitas";
    }
    else if(BodyMassIndex<=30 && BodyMassIndex>=25)
    {
        BMIclass="Berat Badan Berlebih"
    }
    else if(BodyMassIndex<25 && BodyMassIndex>=18.5)
    {
        BMIclass="Berat Badan Ideal"
    }
    else if(BodyMassIndex<18.5)
    {
        BMIclass="Berat Badan Kurang"
    }
    else
    {
        BodyMassIndex="BMI tidak bisa dihitung";
        BMIclass="Data yang anda masukkan salah mohon periksa ulang data berat dan tinggi badan anda"
    }
    document.getElementById("Body-Mass-Index").innerHTML=BodyMassIndex;
    document.getElementById("BMI-Classification").innerHTML=BMIclass;
}

function showimage()
{
    if (BMIgraph=="asset/BMI-men.jpg"||BMIgraph=="asset/BMI-women.jpg")
    {}
    else
    {
        BMIgraph="asset/BMI-Unknown.jpg";
    }
    document.getElementById("BMI-Graph").src=BMIgraph;
}

function Emptyall()
{
 BodyMassIndex=0;
 Bodyweight=document.getElementById("Body-Weight").value="";
 Bodyheight=document.getElementById("Body-Height").value="";
 BMIclass="Mohon Masukkan data berat dan tinggi badan anda";
 document.getElementById("Body-Mass-Index").innerHTML=BodyMassIndex.toFixed(2);
 document.getElementById("BMI-Classification").innerHTML=BMIclass;
}