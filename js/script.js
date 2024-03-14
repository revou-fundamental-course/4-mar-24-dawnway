var Bodyweight; //variabel untuk menyimpan berat badan
var Bodyheight; //variabel untuk menyimpan tinggi badan
var BodyMassIndex; //variabel untuk menyimpan hasil kalkulasi BMI
var BMIdiffExplain; //variabel untuk menyimpan penjelasan extra hasil kalkulasi BMI
var BMIgraph; //variabel untuk menyimpan alamat gambar ilustrasi BMI
var BMIclass; //Variabel untuk menyimpan klasifikasi hasil perhitungan BMI
var RadOptAmount; //Variabel untuk membantu menghapus pilihan radio

function malegraph()
{
    //untuk mengarahkan ke gambar BMI laki-laki
    BMIgraph="asset/BMI-men.jpg"
}

function femalegraph()
{
    //untuk mengarahkan ke gambar BMI perempuan
    BMIgraph="asset/BMI-women.jpg"
}

function BodyMassIndexCalc()
{
    Bodyweight=parseFloat(document.getElementById("Body-Weight").value);//mengambil value berat badan dengan decimal
    Bodyheight=parseFloat(document.getElementById("Body-Height").value);//mengambil value tinggi badan dengan decimal
    BodyMassIndex=Bodyweight/((Bodyheight/100)*(Bodyheight/100));//kalkulasi BMI
    BodyMassIndex=BodyMassIndex.toFixed(1);//membatasi jumlah decimal
    //penjelasan extra hasil kalkulasi
    BMIdiffExplain="Sesuai keterbatasan yang sudah dinyatakan di bagian Form Input, perbedaan antara perkiraan dengan kondisi yang nyata dapat terjadi. untuk penjelasan lebih mendalam mengenai kondisi tubuh anda, mohon hubungi ahli gizi atau ahli medis.";
    //menentukan klasifikasi berat berdasarkan hasil kalkulasi BMI
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
        BMIclass="Data yang anda masukkan salah atau kosong. mohon periksa ulang data berat dan tinggi badan anda";
        BMIdiffExplain="";
    }
    //memasukkan data ke HTML
    document.getElementById("Body-Mass-Index").innerHTML=BodyMassIndex;
    document.getElementById("BMI-Classification").innerHTML=BMIclass;
    document.getElementById("DifferencesExplanation").innerHTML=BMIdiffExplain;
}

function showimage()
{
    //conditional untuk memastikan bahwa radio sudah dipilih dan untuk memperingatkan user jika belum
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
    //fungsi untuk mengembalikan halaman ke halaman semula dan mengosongkan kolom-kolom input
    BodyMassIndex=0;
    Bodyweight=document.getElementById("Body-Weight").value="";
    Bodyheight=document.getElementById("Body-Height").value="";
    BMIclass="Mohon Masukkan data berat dan tinggi badan anda";
    document.getElementById("Body-Mass-Index").innerHTML=BodyMassIndex.toFixed(1);
    document.getElementById("BMI-Classification").innerHTML=BMIclass;
    BMIdiffExplain="";
    document.getElementById("DifferencesExplanation").innerHTML=BMIdiffExplain;
    BMIgraph="";
    document.getElementById("BMI-Graph").src=BMIgraph;
    //pengulangan untuk memastikan semua radio tidak terpilih
    RadOptAmount = document.getElementsByName("Gender");
    for(var i=0;i<RadOptAmount.length;i++)
    RadOptAmount[i].checked = false;
}