//これで入力フォームの値を取得できる１
const textvalue = document.getElementsByClassName("input_isbn")[0];

let flag = 0;

const click_js = () => {

    //これで入力フォームの値を取得できる２
    //console.log(textvalue.value);

    isbn_value = textvalue.value;

    console.log(isbn_value);

    //既に登録されているのかを探索する。登録された場合にはflagは1になる
    serchstorage(isbn_value);
    //flag=1なら既に登録済みなのでapiは叩かない
    if(flag === 0){
        addlocalstrage(isbn_value);
    }
    //確認用
    console.log(flag);

    flag = 0;

}


const addlocalstrage = value => {

    console.log(value);

    //Storageオブジェクト。これがlocalStorageの元
    //Storage.length = Storageオブジェクトの保存されているデータアイテム数を返す
    localStorage.setItem(value,value);

    console.log(localStorage.length);

};


const del_click_js = () => {


    localStorage.clear();
    /*
    for(let i = 0; i < localStorage.length; i++){
        localStorage.removeItem(i);
    }
    */

}

const show_storage = () => {

    for(let j = 0; j < localStorage.length; j++){

        console.log(localStorage.getItem(j));

    }
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

//確認用
const test = () => {
    console.log(flag);
    flag = 0;
}