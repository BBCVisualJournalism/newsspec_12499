define(['lib/news_special/bootstrap'], function (news) {
    $.emit('init_images');
    news.sendMessageToremoveLoadingImage();
});