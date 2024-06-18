const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response){
     
    // отправляем ответ
    response.send(
        "Hello World!"
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