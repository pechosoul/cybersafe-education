function phishingAlert()
{
    alert(
    "Ini adalah simulasi phishing.\n\nJangan pernah memasukkan password, OTP, atau data pribadi pada link yang mencurigakan."
    );
}

function cekKuis()
{
    let skor = 0;

    if(document.querySelector('input[name="q1"]:checked')?.value=="b")
        skor++;

    if(document.querySelector('input[name="q2"]:checked')?.value=="a")
        skor++;

    if(document.querySelector('input[name="q3"]:checked')?.value=="b")
        skor++;

    document.getElementById("hasil").innerHTML =
        "Skor Anda : " + skor + " / 3";
}