define(['lib/news_special/bootstrap'], function (news) {

    var Svgs = function () {};

    Svgs.prototype = {
        svgSupported: function () {
            return document.implementation.hasFeature(
                'http://www.w3.org/TR/SVG11/feature#Image', '1.1');
        }
    };

    return new Svgs();
});