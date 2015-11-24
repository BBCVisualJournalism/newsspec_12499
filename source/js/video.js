define(['lib/news_special/bootstrap', 'bump-3'], function (news, $) {

    var Video = function (videoContainerSelector, vpid, holdingImage) {
        this.selector = videoContainerSelector;
        this.$videoContainer = news.$(this.selector);
        this.$video = $(this.selector).find('.section_video');
        this.vpid = vpid;
        this.holdingImage = holdingImage;
        this.mp = null;
        this.$overlay = this.$videoContainer.find('.section_video_overlay');

        this.init();
    };

    Video.prototype = {
        init: function () {
            this.$videoContainer.on('click', this.playVideo.bind(this));

            var playerSettings = {
                product: 'news',
                playlistObject: {
                    items : [{
                        vpid : this.vpid
                    }],
                    holdingImageURL: this.holdingImage
                },
                responsive: true,
                autoplay: false,
                ui: {
                    cta: {
                        enabled: false
                    }
                }
            };
            this.mp = this.$video.player(playerSettings);
            this.mp.bind('ended', this.videoEnded.bind(this));
            this.mp.load();
        },

        playVideo: function () {
            this.$overlay.hide();
            this.mp.play();
        },

        videoEnded: function () {
            this.$overlay.show();
        },

        videoStop: function () {
            this.videoEnded();
            this.mp.stop();
        }
    };

    return Video;
});