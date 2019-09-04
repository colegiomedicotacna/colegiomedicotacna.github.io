/************************************************************
 * JS Document by: Cristhian Larico || <Larico.Net> (c) 2018 
 ************************************************************/

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}


(function($) {
    'use strict';

    var $metas = $('#metas');
    $metas.load('metas.html', completeFunction);

    function completeFunction(responseText, textStatus, request) {
        if (textStatus == 'error') {
            $metas.text('ocurrio un error en: ' + request.status + ' ' + request.statusText);
        }
    }


    var $lateral = $('#lateral');
    $lateral.load('lateral.html', completeFunction);

    function completeFunction(responseText, textStatus, request) {
        if (textStatus == 'error') {
            $lateral.text('ocurrio un error en: ' + request.status + ' ' + request.statusText);
        }
    }


    var $header = $('#header');
    $header.load('header.html', completeFunction);

    function completeFunction(responseText, textStatus, request) {
        if (textStatus == 'error') {
            $header.text('ocurrio un error en: ' + request.status + ' ' + request.statusText);
        }
    }

    var $popup = $('#popup');
    $popup.load('popup.html', completeFunction);

    function completeFunction(responseText, textStatus, request) {
        if (textStatus == 'error') {
            $popup.text('ocurrio un error en: ' + request.status + ' ' + request.statusText);
        }
    }


    var $lateralr = $('#lateralr');
    $lateralr.load('lateralr.html', completeFunction);

    function completeFunction(responseText, textStatus, request) {
        if (textStatus == 'error') {
            $lateralr.text('ocurrio un error en: ' + request.status + ' ' + request.statusText);
        }
    }



    var $footer = $('#footer');
    $footer.load('footer.html', completeFunction);

    function completeFunction(responseText, textStatus, request) {
        if (textStatus == 'error') {
            $footer.text('ocurrio un error en: ' + request.status + ' ' + request.statusText);
        }
    }




})(jQuery);