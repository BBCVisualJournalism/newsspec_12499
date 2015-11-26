define(['lib/news_special/bootstrap', 'video', 'bind.polyfill'], function (news, Video) {
    news.$('.main').removeClass('ns_no-js');

    $.emit('init_images');

    new Video('#section_video_container-venezuela', 'p03912vm', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/venezuela/venezuela_poster_image_1290.jpg');
    new Video('#section_video_container-syria', 'p0393rt0', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/syria/syria_poster_image_1290.jpg');
    new Video('#section_video_container-siberia', 'p0393rt0', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/siberia/siberia_poster_image_1290.jpg');
    new Video('#section_video_container-pakistan', 'p0393v4l', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/pakistan/pakistan_poster_image_1290.jpg');
    new Video('#section_video_container-us', 'p0394ktk', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/us/us_poster_image_1290.jpg');
    new Video('#section_video_container-congo', 'p03941tm', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/congo/congo_poster_image_1290.jpg');

    news.sendMessageToremoveLoadingImage();
});