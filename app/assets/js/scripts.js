/*!
 * axit
 * Frontend practice project
 * 
 * @author Marcin Groszkiewicz
 * @version 
 * Copyright 2018.  licensed.
 */
(function () {
    'use strict';

// HAMBURGER MENU
    $('.hamburger').on('click', function() {
        $(this).toggleClass('open');
        $('.menu').slideToggle();
    });

    $('.menu').on('click', function () {
        if(this.style.display === 'block') {
            $('.menu').slideToggle();
        }
    });

// FEATURE PRICING ANIMATION
    $('.anim-price1').hover(
        function () {
            $('.recmnd1').addClass('anim-recommended');
        },
        function () {
            $('.recmnd1').removeClass('anim-recommended');
        }
    );
    $('.anim-price2').hover(
        function () {
            $('.recmnd2').addClass('anim-recommended');
        },
        function () {
            $('.recmnd2').removeClass('anim-recommended');
        }
    );
    $('.anim-price3').hover(
        function () {
            $('.recmnd3').addClass('anim-recommended');
        },
        function () {
            $('.recmnd3').removeClass('anim-recommended');
        }
    );

// HEADER FORM VALIDATION
    var formHeader = document.querySelector('.header-form'),
        username = document.forms.hform.username,
        email = document.forms.hform.email,
        password = document.forms.hform.password,

        usernameError = document.querySelector('#username-error'),
        emailError = document.querySelector('#email-error'),
        passwordError = document.querySelector('#password-error');

    formHeader.addEventListener('submit', Validate, false);
    username.addEventListener('blur', nameVerify, true);
    email.addEventListener('blur', emailVerify, true);
    password.addEventListener('blur', passwordVerify, true);

    function Validate(e) {
        e.preventDefault();
        if(username.value === '') {
            usernameError.textContent = '* Type name';
            username.focus();
            return void 0;
        }
        if(email.value === '') {
            emailError.textContent = '* Provide a valid email address';
            email.focus();
            return void 0;
        }
        if(password.value === '') {
            passwordError.textContent = '* Enter the password';
            password.focus();
            return void 0;
        }
    }

    function nameVerify() {
        if(username.value !== '') {
            usernameError.innerHTML = '';
            return true;
        }
    }

    function emailVerify() {
        if(email.value !== '') {
            emailError.innerHTML = '';
            return true;
        }
    }

    function passwordVerify() {
        if(password.value !== '') {
            passwordError.innerHTML = '';
            return true;
        }
    }

// SCROLL TO TOP BUTTON

    function createScrollTopButton() {
        var scrollTopBtn = document.createElement('button');
        scrollTopBtn.classList.add('scroll-top-btn', 'hidden');
        scrollTopBtn.textContent = 'GO UP';

        document.body.appendChild(scrollTopBtn);

        return scrollTopBtn;
    }

    var scrollTopBtn = createScrollTopButton();

    function showScrollTopButton(e) {
        if(document.documentElement.scrollTop > 350) {
            scrollTopBtn.classList.remove('hidden');
        } else {
            scrollTopBtn.classList.add('hidden');
        }
    }

    function scrollToTop(e) {
        if(document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -20);
            setTimeout(scrollToTop, 1);
        }
    }

    window.addEventListener('scroll', showScrollTopButton, false);
    scrollTopBtn.addEventListener('click', scrollToTop, false);

// SEND MAIN CONTACT FORM
// TODO: handle form sending
    var mainContactForm = document.querySelector('.main-contact-form');

    mainContactForm.addEventListener('submit', function(e) {e.preventDefault()}, false);
})();

