const express = require("express");
const app = express();

app.use("/elm", express.static("public"));

app.get("/", function(request, response){
     
    // отправляем ответ
    response.send(
        new Date().toLocaleTimeString()
    );
});
app.get("/about", function(request, response){
     
    // отправляем ответ
    response.send(
        "Это простое приложение на Express.js"
    );
});

app.get("*", function(request, response){
     
    // отправляем ответ
    response.send(
        "Страница не найдена"
    );
});

app.listen(3000);