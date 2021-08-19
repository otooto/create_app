//console.log(document.querySelector(".js-modal-open"));

//querySelectorでセレクターで指定したidを持つ
document.querySelector('.js-modal-open').addEventListener('click',test1());


function test1(){

    console.log("test");
}

function openmodalwindow(){

    const modalElement = document.createElement('div');

    modalElement.classList.add("modal");

    modalElement.id = 'mask';

    const innerElement = document.createElement('div');
    innerElement.classList.add('inner');

    innerElement.insertAdjacentHTML('afterbegin','<h2>モーダルの中身です</h2><div class="inModal"></div><div id="modal" class="closeModal">×</div>');

    //<div class="modal"> \ <div class inner> <h2>~</h2> </div>を作っている
    modalElement.appendChild(innerElement);

    //ここでDOMでHTMLに上を追加している。
    document.body.appendChild(modalElement);

    //modalElement.addEventListener('click', () => {
        //closeModalWindow(modalElement);
    //});
};

function closeModalWindow(modalElement) {
    document.body.removeChild(modalElement);
}
