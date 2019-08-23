define(['jquery', 'my-script'], function($, my){
    my.fooBar();
    console.log($.length ? 'jQuery loaded' : 'jQuery not loaded');
});
