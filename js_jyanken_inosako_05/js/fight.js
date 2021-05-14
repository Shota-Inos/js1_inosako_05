if(sessionStorage.getItem("name")){
    var value = sessionStorage.getItem("name");
    $("#title_character").val(value);  
};


var random = Math.floor(Math.random()*100);
console.log(random);


var choice = 2

$("#character_choice_choki").on("click", function(){
    var choice = sessionStorage.getItem('level');
    if(choice > random){
        alert('勝ち');
    } else if(choice == random){
        alert('引き分け');
    }else{
        alert('負け');
    }
});


$("#character_choice_gu").on("click", function(){
    var choice = sessionStorage.getItem('level');
    if(choice > random){
          alert('勝ち');
    } else if(choice == random){
          alert('引き分け');
    }else{
        alert('負け');
    }
});

$("#character_choice_pa").on("click", function(){
    var choice = sessionStorage.getItem('level');
    if(choice > random){
        alert('勝ち');
    } else if(choice == random){
        alert('引き分け');
    }else{
        alert('負け');
    }
});
