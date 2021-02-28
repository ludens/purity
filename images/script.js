document.addEventListener('DOMContentLoaded', function () {
    var mobilenav_button = document.getElementById('mobilenav-button');
    mobilenav_button.onclick = function () {
        var mobilenav_check = document.getElementById('mobilenav-check');
        var mobilenav_icon = document.getElementById('mobilenav-icon');
        var blog_nav = document.getElementById('blog-nav');
        if (mobilenav_check.checked === true) {
            // ON → OFF
            mobilenav_icon.textContent = 'menu';
            blog_nav.classList.remove('nav-on');
        }
        else {
            // OFF → ON
            mobilenav_icon.textContent = 'clear';
            blog_nav.classList.add('nav-on');
        }
    };
});
