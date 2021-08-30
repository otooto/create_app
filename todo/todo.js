'use strict';

const addTaskTrigger = document.getElementsByClassName("js-addTask-trigger")[0];

const addTaskTarget = document.getElementsByClassName("js-addTask-target")[0];

const addTaskValue = document.getElementsByClassName("js-addTask-value")[0];

const ollDelete = document.getElementsByClassName("js-addTask-delete")[0];
//getElementsByClassNameメソッド。対象のHTLMCollectionを返す
//実質ソースコードにある要素全部を返却する。複数に適応出来るので返ってくるのは配列みたいなもの。

console.log(ollDelete);

//タスクを削除
const removeTask = removeButton => {
    const targetTask = removeButton.closest('li');
    //一番近いliを取得する
    addTaskTarget.removeChild(targetTask);
    //引数targetTaskにある。liの範囲を削除する
};

//全てのタスクを削除
ollDelete.addEventListener('click', () => {

    const Tasklist = document.getElementsByClassName("todo js-addTask-target")[0];

    console.log(Tasklist);

    while(Tasklist.firstChild){
        console.log(Tasklist.firstChild);
        Tasklist.removeChild(Tasklist.firstChild);
    }

});

//タスクが完了
const finishTask = listItem => {

    console.log("表示");

    console.log(listItem);

    //console.log(document.getElementById('finish'));

    let finish = document.getElementById('finish');

    finish.remove();

    //document.getElementById('finish').remove();
    //console.log(finish);

    listItem.classList.add("red");

} 

const addTask = task => {
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

//buttonが押された動きだす
//addEventListenerはイベントに合わせて実行する関数、イベントリスナーを定義する
addTaskTrigger.addEventListener('click', () => {

    //valueはテキストbox内の値を取得することが出来る
    const task = addTaskValue.value;

    localStorage.setItem("test",task);
    //ローカルストレージにデータを取得

    //inputへ入力された文字列をaddタスクに渡している
    addTask(task);

    //空の文字列を与えている。これでinputの中身を空白にすることが出来る。これがないと前回の入力が残り続ける
    addTaskValue.value = '';
    
});
