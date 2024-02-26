document.addEventListener("DOMContentLoaded",onkoKirjautunut);

function onkoKirjautunut() 
{

    document.getElementById("kirjaudu_ulos_nappi").style.display = "none";

if(localStorage.getItem("kirjautunut") === "kyllä") {



document.getElementById('tervetulo_teksti').textContent += ' ' + localStorage.getItem("nimi");
document.getElementById("kirjautumis_lomake").style.display = "none";
document.getElementById("kirjaudu_ulos_nappi").style.display = "block";


}
}


function kirjaudu() {

localStorage.setItem("nimi",document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","kyllä")


}


function kirjauduUlos() {

    if(localStorage.getItem("kirjautunut") === "kyllä") {

       localStorage.removeItem("kirjautunut");
       localStorage.removeItem("nimi");

location.reload();


    }


}