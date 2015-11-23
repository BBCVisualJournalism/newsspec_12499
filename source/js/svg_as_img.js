define(['lib/news_special/bootstrap'], function (news) {

    var SvgAsImg = function () {};

    SvgAsImg.prototype = {
        svgSupported: function () {
            return document.implementation.hasFeature(
                'http://www.w3.org/TR/SVG11/feature#Image', '1.1');
        },

        replaceSvgs: function () {
            if (!this.svgSupported()) {
                var $allImgs = news.$('img');
                $allImgs.each(function () {
                    var $img = news.$(this),
                        imgSrc = $img.attr('src');

                    if (imgSrc.match(/svg$/)) {
                        $img.attr('src', $img.attr('data-fallback'));
                    }
                });
            }
        }
    };

    return new SvgAsImg();
});