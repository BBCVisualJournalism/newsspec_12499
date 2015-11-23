define(['lib/news_special/bootstrap', 'svg_as_img'], function (news, SvgAsImg) {
    $.emit('init_images');

    SvgAsImg.replaceSvgs();

    news.sendMessageToremoveLoadingImage();
});