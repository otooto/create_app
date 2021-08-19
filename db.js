import Dexie from "https://unpkg.com/dexie@3.0.2/dist/dexie.min.js"

//DB定義。SocialDBがDB名
const db = new Dexie("SocialDB");

//store_nameがストア名。ようはテーブル。最初のnameがキー、ageがインデックス
db.version(1).stores({
    store_name: "name,age"
});

db.store_name.put({
    name:"佐藤",age:20,hobby:"川下り"
}).catch((error) => {
    console.error(error);
});

