console.log("index.js:loaded");

const heading = document.querySelector("#test");

console.log(heading);

const headingText = heading.textContent;

console.log(headingText);

const button = document.createElement("button");

button.textContent = "Push me";

document.body.appendChild(button);

const userId = "otooto";

function fetchUserInfo(userId) {

    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)//ここでfetchするURLを指定
        .then(response => {
            console.log(response.status);//.thenでResponseオブジェクトを受け取る
            // エラーレスポンスが返されたことを検知する
            if (!response.ok) {
                console.error("エラーレスポンス", response);
            } else {
                return response.json().then(userInfo => {
                    console.log(userInfo);
                });
            }
        }).catch(error => {
            console.error(error);
        });
}