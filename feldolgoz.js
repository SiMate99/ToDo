$(function(){
   
    $("#add").on("click", adatKuld);
    $("#betolt").on("click", beolvas);
    $("#lista").delegate(".kuka", "click", adatTorol);
});

var teendok = [];

function beolvas(){
    $.ajax({
        type: "POST",
        url: "feldolgoz.php",
        success: function(result){
            console.log(result);
            teendok = JSON.parse(result);
            console.log(teendok);
            kiir();
        },
        error:function(){
            alert("Hiba az adatok betöltésekor!");
        }
    });
}

function adatKuld(){
    var teendo = {
        todo : $("#teendo").val(),
        datum : $("#datum").val()
    };
    
    $.ajax({
        type: "POST",
        url: "beir.php",
        data: teendo,
        success: function(ujTeendo){
            teendok.push(JSON.parse(ujTeendo));
            console.log(teendok);
            kiir();
        },
        error:function(){
            alert("Hiba az adatok mentésekor!");
        }
    });
}

function kiir(){
    $("#lista").empty();
    for (var i = 0; i < teendok.length; i++) {
        var todo = teendok[i].todo;
        var datum = teendok[i].datum;
        var elem = "<li>" + todo + " " + datum + "<img class='kuka' src='kepek/kuka.png'>" + "<img src='kepek/pipa.png'>" + "</li>";

        $("#lista").append(elem);
    }
}

function adatTorol(){
    console.log("Meghívtam a töröl metódust!");
    var ID = $(this).attr("id");
    console.log(ID);
    var aktElem = $(this).closest("li");
    $.ajax({
        type: "DELETE",
        url: "torol.php?ID=" + ID,
        success: function (){
            console.log("Megtörtént a törlés");
            aktElem.remove();
        },
        error: function (){
            alert("Hiba az adatok törlésekor!");
        }
    });
}

//function adatModosit(){
//    var editTeendo = {
//        ID : $("#id2").val(),
//        todo : $("#nev2").val(),
//        datum : $("#tel2").val(),
//        allapot : $("#kep2").val()
//    };
//    console.log("Módosit");
//    console.log(editTeendo);
//    $.ajax({
//        type: "PUT",
//        url: "modosit.php",
//        data: editTeendo,
//        success: function(){
//            beolvas();
//        },
//        error:function(){
//            alert("Hiba az adatok módosításakor");
//        }
//    });
//}
