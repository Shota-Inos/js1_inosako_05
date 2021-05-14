
var character_level;


//名前を、ストレージに保存
$("#character_name_save").on("click", function(){
    var value = $("#character_name_textarea").val();
    sessionStorage.setItem("name", value)
    sessionStorage.setItem('level', 1)
    alert("名前が確定しました");
    });


//”name"に値が記入された際に、テキストエリアに表示
if(sessionStorage.getItem("name")){
    var name = sessionStorage.getItem("name");
    $("#character_name_textarea").val(name);  
    var value = sessionStorage.getItem("level");
    $("#character_level_textarea").val(value);  

}else{
    alert("名前を入力してください");
};

//レベル
if(sessionStorage.getItem("level")){
    var value = sessionStorage.getItem("level");
    $("#character_level_textarea").val(value);  
};





