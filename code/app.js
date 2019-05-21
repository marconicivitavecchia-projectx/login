var app ={

    showLogin: function(){

        console.log("showLogin");
        document.getElementsByClassName("register-container").style.visibility = "visible";
    },
    
    onError:function(e){
        console.log("error!");
        console.log(JSON.stringify(e));
    },
}

$(document).ready(app.init);