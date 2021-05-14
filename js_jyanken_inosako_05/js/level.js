alert("ここではレベルをあげることができます");

$("#level_up_button").on("click", function(){
    sessionStorage.setItem('level', 100)
    alert("レベルアップしました");
    });  

