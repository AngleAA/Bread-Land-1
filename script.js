
$("button").click(function() {
    var direction = $(".direction").val();
    var money = $(".money").val();

if(direction==="North" && money<=60){
    $(".message").html("Butterbrot");
    $(".image").html('<img src="https://zitronensuess.files.wordpress.com/2015/12/butterbrot.jpg">');
    $(".Desc").html("An essential for low budget living. Great with Doctor's Sausage.");

}else if(direction ==="North" && money === "7071987"){
    $(".message").html("Calorie Mate");
    $(".image").html('<img src="https://www.takaski.com/wp-content/uploads/2016/02/CALORIE-MATE-chocolate.jpg?ph=8c44f67b7ad2d44ca558e552">');
    $(".Desc").html("SNAAAAAAKE");
    
}else if(direction ==="North" && money >= 1150){
    $(".message").html("Rye Bread");
    $(".image").html('<img src="https://www.zehndersstore.com/wp-content/uploads/2016/11/black-russian-rye-bread.jpg">');
    $(".Desc").html("A bread a bit tougher than white bread. Good with butter.");
    
}else if(direction ==="South" && money <= 60){
    $(".message").html("White Bread");
    $(".image").html('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVMeYK_ma8ZpIqDuaFvaOTdk-jD1zOtKyTkgvqTorFoirfnN3uA">');
    $(".Desc").html("The most basic of bread. One of the more unhealthy types.");
    
}else if(direction ==="South" && money >= 1150){
    $(".message").html("Garlic Bread");
    $(".image").html('<img src="https://www.thechunkychef.com/wp-content/uploads/2017/07/Homemade-Garlic-Bread-feat.jpg">');
    $(".Desc").html("One of mankind's greatest inventions.");
}
});
