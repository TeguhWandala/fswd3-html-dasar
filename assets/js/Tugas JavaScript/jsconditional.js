 //if
 function ifconditional(){
    let respond = prompt('berapa hasil 1 + 1?');

    if (respond == 2) {
        alert("Kamu benar")
    }
    }
    ifconditional();

    //if-else
    function ifelseconditional(){
    let respond = prompt('berapa hasil 10 x 10?');

    if (respond == 100) {
        alert("Kamu benar");
    }else {
        alert("Kamu salah");
    }
    }
    ifelseconditional();

    //else-if
    function elseifconditional() {
    let respond = prompt("Masukkan nilai anda")

    if (respond >=70 && respond <=100) {
        alert("Pertahankan nilai kamu!");
    } else if (respond <70 && respond >=0){
        alert("Tingkatkan lagi nilai kamu!")
    } else
        alert("Anda salah memasukkan nilai!")
    }
    elseifconditional();

    //switch
    function switcconditional() {
        let respond = prompt(
            "Silahkan pilih game berikut \n 1. Mobile Legends \n 2. Genshin Impact \n 3. Valorant");

        switch (respond) {
            case "1":
                alert("Moonton")
                break;
        
            case "2":
                alert("Hoyoverse")
                break;
        
            case "3":
                alert("Riot Games")
                break;
        
            default:
                break;
        }
    }
    switcconditional();