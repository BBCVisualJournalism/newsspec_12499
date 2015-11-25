define(['lib/news_special/bootstrap', 'video', 'bind.polyfill'], function (news, Video) {
    news.$('.main').removeClass('no-js');

    $.emit('init_images');

    new Video('#section_video_container-venezuela', 'p02w03kx', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/venezuela/venezuela_poster_image_1290.jpg');
    new Video('#section_video_container-syria', 'p02w03kx', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/syria/syria_poster_image_1290.jpg');
    new Video('#section_video_container-siberia', 'p02w03kx', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/siberia/siberia_poster_image_1290.jpg');
    new Video('#section_video_container-pakistan', 'p02w03kx', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/pakistan/pakistan_poster_image_1290.jpg');
    new Video('#section_video_container-us', 'p02w03kx', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/us/us_poster_image_1290.jpg');
    new Video('#section_video_container-congo', 'p02w03kx', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/congo/congo_poster_image_1290.jpg');

    news.sendMessageToremoveLoadingImage();
});