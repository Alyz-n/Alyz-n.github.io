
let selectCounter = 0;
function selectArticle(id) {
    let numberOfArticles = document.getElementsByName("article").length;
    for (var i = 1;i <= numberOfArticles; i++){
            document.getElementById("a" + i).checked = false;
    }
    if (selectCounter == 0){
        document.getElementById(id).checked = true;
        selectCounter++;
        console.log(selectCounter);
    } else if (selectCounter == 1){
        document.getElementById(id).checked = false;
        selectCounter--;
        console.log(selectCounter);
    }
}

setTimeout(function(){
    document.body.className="";
},500);