//これで入力フォームの値を取得する
const textvalue = document.getElementsByClassName("input_isbn")[0];

let flag = 0;

//クリックしたら入力があるか、空白か判定
const searchBook = () => {

    try {
        //入力フォームのISBNコードを代入
        //const input_information = document.getElementById("ISBN_CODE").value;

        const input_information = textvalue.value;

        //空白時にエラー扱いする
        if(input_information == ""){
            throw error;
        }

        //エラーの場合はここは呼ばれない。問題ないなら通る
        console.log(input_information);
        //引数に入力値のISBNを渡す

        serchstorage(input_information);

        //フラグが立っている場合には、既に登録済みという事。立ってない時は新たに表示する。
        if(flag === 0){
            addlocalstrage(input_information);
            createtitle(input_information);
        }


    } catch (error) {
        //エラーの場合はブラウザに警告を出す
        alert("入力してください");
    }

    //ここでフラグは0にする。関数内だとそこにいかない場合には直せない
    flag = 0;

}

//タイトルと画像を持つ変数
let g_title;

let g_photo;

let g_big_photo;

//楽天ブックス書籍検索APIからタイトルを取得して表示する。
const createtitle = async (input_information) => {

    //APIのURLを代入、パラメータに自分のID,format,isbnについて設定
    let api_url = "https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&isbn=&applicationId=ここに楽天API";
    //urlコンストラクターを定義
    let serach_url = new URL(api_url);
    //urlの読み取りプロパティを定義とsetメソッドで指定したパラメータに関連した値を指定した値に設定する。ここでisbn=input_informationとなる
    serach_url.searchParams.set("isbn",input_information);
    
    //確認用log
    console.log(serach_url);

    //ここでAPIを叩く。
    fetch(serach_url)
        .then(response => {

            if(response.ok){
                return response.json();
            }
        })//ここでjsonが返ってくるまでの処理
        .then(json => {

            console.log(json);
            //jsonの形式が配列になっているので
            let json_Items = json.Items[0].Item;
            //JSONから画像とタイトルを読み込み.これが一番大きい画像
            g_photo = json_Items.largeImageUrl;
            g_title = json_Items.title;
            console.log(g_title);
            let element = document.getElementById('book_title');
            //指定したDOMツリー内の第一引数で指定した位置に、第二引数の内容を代入
            element.insertAdjacentHTML('beforeend',`<div class="area" ><img src=${g_photo} id="position" alt="書籍の表紙" title=${g_title}></img><p>${g_title}</p></div>`);
        });

    
}

//探索を実行。探索結果がヒットした時にはフラグを立てる
const serchstorage = isbn_value => {

    let check;
    //strageの配列分回す事が出来る
    for(let l = 0; l < localStorage.length; l++){

        if(isbn_value === localStorage.key(l)){

            check = localStorage.getItem(l);
            console.log(check);
            flag = 1;

        }
    }
}

//記録用にlocalStrageに記録する。
const addlocalstrage = value => {

    console.log(value);

    //Storageオブジェクト。これがlocalStorageの元
    //Storage.length = Storageオブジェクトの保存されているデータアイテム数を返す
    localStorage.setItem(value,value);

    console.log(localStorage.length);

};


//確認用の別関数
const check = () =>{

    console.log(g_title);
}

//最初のテスト関数
async function test(){

    let url1 = "https://qiita.com/api/v2/items";

    fetch(url)
    .then(res => {
        if (res.ok) {
            return res.json(); 
        }
    })
    .then(json => {
        console.log(json);

        var okok = json.Items

        console.log(Object.keys(json));
        console.log(Object.keys(json).length);
        console.log(okok[0].Item.title);
        console.log(Object.keys(json.Items));
    });

}

const del_storage = () => {

    localStorage.clear();

}

