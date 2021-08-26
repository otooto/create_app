$(function(){
    console.log('read jQuery File!');
});

$(function(){
    $('h1').css('color', '#00eeff');
});
//console.log(document.querySelector(".js-modal-open"));

//querySelectorでセレクターで指定したidを持つ
document.querySelector('.js_modal_open').addEventListener('click',test1());

//modal_content下の要素を取得する。
const modal = document.getElementById('modal_content');


$(function(){
    $('.js_modal_open').on('click',function(){
        console.log('push');
        $('.modal_fadeIn').fadeIn();
        return false;
    });
});

let close_modal =() => {

    $('.modal_fadeIn').fadeOut();
    return false;

};

/*
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
    */



//クリックしたら、hiddenを消すことで隠れている内容を表示する。
function openmodalwindow(){

    $('modal_content').fadeIn();

    return false;

    modal.classList.remove('hidden');

}

//逆にhiddenを追加して、モーデルを隠す
/*
function close_modal(){

    modal.classList.add('hidden');

}
*/

//モーダル表示中に画面をクリックすると、その時だけ動いている。
modal.addEventListener('click',() =>{

    close_modal();
    test1();
});


console.log(document.getElementById('modal_content'));

function test1(){

    console.log("test");
}


