//console.log(document.querySelector(".js-modal-open"));

//querySelectorでセレクターで指定したidを持つ
document.querySelector('.js-modal-open').addEventListener('click',test1());

const open = document.getElementById('open');

const modal = document.getElementById('modal');

console.log(document.getElementById('modal'));

function test1(){

    console.log("test");
}

function openmodalwindow(){

    modal.classList.remove('hidden');

}

function close_modal(){

    modal.classList.add('hidden');


}


function closeModalWindow(modalElement) {
    document.body.removeChild(modalElement);
}

