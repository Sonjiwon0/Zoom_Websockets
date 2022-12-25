import express from "express";
const app = express();

// view engine을 Pug로 설정
app.set("view engine", "pug");
// views 디렉토리 설정
app.set("views", __dirname + "/views");
// public 폴더를 유저에게 공유
app.use("/public", express.static(__dirname + "/public"));
// home.pug를 render 해주는 route handler 생성
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);
