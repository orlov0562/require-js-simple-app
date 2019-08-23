define(['jquery', 'my-script'], function($, my){
    my.sayHello();
    console.log($.length ? 'jQuery loaded' : 'jQuery not loaded');
});
