document.addEventListener("DOMContentLoaded", function (event) {

    let addProductbtn = document.querySelector("#addbutton");
    let productCard = document.querySelector("#addproduct");
    addProductbtn.addEventListener('click', function () {

        if (productCard.classList.contains("dispnone")) {
            productCard.classList.remove("dispnone");
            }
        
    });

    let closebtn = document.querySelector("#closecard");
    let c = document.querySelector("#addproduct");
    closebtn.addEventListener('click', function () {
        if (!c.classList.contains("dispnone")) {
            c.classList.add("dispnone");
            }
        
    });


});