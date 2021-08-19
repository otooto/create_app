'use strict';

const addTaskTrigger = document.getElementsByClassName("js-addTask-trigger")[0];

const addTaskTarget = document.getElementsByClassName("js-addTask-target")[0];

const addTaskValue = document.getElementsByClassName("js-addTask-value")[0];

const delateTasl = document.getElementsByClassName("js-addTask-delete")[0];

const check = document.getElementsByClassName("check")[0];
//getElementsByClassNameメソッド。対象のHTLMCollectionを返す
//実質ソースコードにある要素全部を返却する。複数に適応出来るので返ってくるのは配列みたいなもの。

//リロード時に前のタスクを表示する。
window.onload = Load 

function Load(){
    
    //localStorage内の配列数分(つまりliの数分)回す
    for(let j = 0; j < localStorage.length; j++){

        const listItem = document.createElement('li');
        // li要素を作成
    
        const removeButton = document.createElement('button');
        //削除のbutton要素を作成
    
        const finishButton = document.createElement('button');
        //完了のbutton要素を作成

        removeButton.innerText = '削除';
        //button要素のテキストを変更(加える)。削除をbuttonに追加
    
        finishButton.innerText = '完了';
    
        finishButton.setAttribute('id','finish');
        //idを追加
    
        const num = localStorage.getItem(j);
        //localstorage内のkey順にvalueを取得

        listItem.innerText = num;

        console.log(num);

        listItem.append(removeButton);
        //削除ボタンも追加する。

        listItem.append(finishButton);
        //完了ボタンも追加する。

        addTaskTarget.appendChild(listItem);
        //DOM要素の追加が可能。親要素の中に子要素を追加できる。今回はlistItemを追加する

        finishButton.addEventListener('click', () => finishTask(listItem));
        //ここでも定義しないとクリックは働かない

        removeButton.addEventListener('click', () => removeTask(removeButton));
    
    }
    

};

//localStorage確認
check.addEventListener('click',() => {

    for(let i = 0; i < localStorage.length; i++){

        const num = localStorage.getItem(i);

        console.log(num);
    }

});

//タスクを全て削除
delateTasl.addEventListener('click', () => {

    localStorage.clear();

    const Tasklist = document.getElementsByClassName("todo js-addTask-target")[0];

    console.log(Tasklist);

    while(Tasklist.firstChild){
        console.log(Tasklist.firstChild);
        Tasklist.removeChild(Tasklist.firstChild);
    }
    //引数targetTaskにある。liの範囲を削除する

});


//個別のタスクを削除
const removeTask = removeButton => {
    const targetTask = removeButton.closest('li');
    //一番近いliを取得する
    addTaskTarget.removeChild(targetTask);
    //引数targetTaskにある。liの範囲を削除する
};

//タスクが完了
const finishTask = listItem => {

    console.log("表示");

    console.log(listItem);

    let finish = document.getElementById('finish');

    finish.remove();

    listItem.classList.add("red");
    //classを追加。これでhtml側にリンクしているcssを呼び出す。
} 

const addTask = task => {

    localStorage.setItem(localStorage.length,task);
    //storge.length = ストレージ内のアイテムの数を返す
    //toString = アイテムの数を文字列とする。

    console.log(localStorage.length);
    //引数taskは入力された文字列を受け取る

    const listItem = document.createElement('li');
    // li要素を作成

    const removeButton = document.createElement('button');
    //削除のbutton要素を作成

    const finishButton = document.createElement('button');

    //完了のbutton要素を作成
    
    removeButton.innerText = '削除';
    //button要素のテキストを変更(加える)。削除をbuttonに追加

    finishButton.innerText = '完了';

    finishButton.setAttribute('id','finish');

    listItem.innerText = task;
    //空のliにtaskの文字列を追加する。

    listItem.append(removeButton);
    //削除ボタンも追加する。

    listItem.append(finishButton);
    //完了ボタンも追加する。

    addTaskTarget.appendChild(listItem);
    //DOM要素の追加が可能。親要素の中に子要素を追加できる。今回はlistItemを追加する

    finishButton.addEventListener('click', () => finishTask(listItem));

    removeButton.addEventListener('click', () => removeTask(removeButton));
    //イベントリスナー、削除ボタンが押されたら引数に追加されたtodoを渡したremoveTaskが実行

};

//タスクの追加buttonが押された動きだす
//addEventListenerはイベントに合わせて実行する関数、イベントリスナーを定義する
addTaskTrigger.addEventListener('click', () => {

    //valueはテキストbox内の値を取得する
    const task = addTaskValue.value;
    
    //空白時警告
    if(task === ""){
        alert('入力が必須です');
    }else{

    //task内の文字列をaddTaskに渡している
    addTask(task);

    //空の文字列を与えている。これでinputの中身を空白にすることが出来る。これがないと前回の入力が残り続ける
    addTaskValue.value = '';

    }
    
});

