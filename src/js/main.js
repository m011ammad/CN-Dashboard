// ! menu
$('.bars').click(function () {
    $('.right-side-block').toggleClass('is-active');
    $('.left-side-block').toggleClass('is-active');
})

/* 
todo
document.getElementsByClassName('bars')[0].addEventListener('click', function(){
    document.querySelector('.right-side-block').classList.toggle('is-active');
    document.querySelector('.content').classList.toggle('is-active');
});
*/

// ! notification
$('.notification__icon').click(function () {
    $('.dropdown__notification').toggleClass('is-active');
})
// close the notification dropdown if user click out of target
$(document).click(function (event) {
    if(
    !$(event.target).closest('.dropdown__notification').length &&
    !$(event.target).closest('.notification').length
    ){
        $('.dropdown__notification').removeClass('is-active');
    }
})

// ! user avatar
$('.avatar-img__input').on('change', function () {
    var input = $(this);
    if (input[0] && input[0].files && input[0].files[0]) {
        if (!input[0].files[0].type.includes("image")) {
            // $('.avatar--img').attr('src', '../img/pr3o.png');
            return false;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.avatar___img')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input[0].files[0]);
    }
});
$('input:file').change(
    function (e) {
        // console.log(e.currentTarget.files);
        // var numFiles = e.currentTarget.files.length;
        var fileSize = parseInt(e.currentTarget.files[0].size, 10) / 1024;
        filesize = Math.round(fileSize);
        $('.filesize').addClass('filesize').text('(' + filesize + 'kb)');
        $('.selectedFiles').text(e.currentTarget.files[0].name).appendTo($('.selectedFiles'));

});