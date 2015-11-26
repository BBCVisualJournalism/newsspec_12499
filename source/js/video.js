define(['lib/news_special/bootstrap', 'bump-3'], function (news, bump) {

    var Video = function (videoContainerSelector, vpid, holdingImage) {
        this.selector = videoContainerSelector;
        this.$videoContainer = news.$(this.selector);
        this.videoEl = bump(this.selector).find('.section_video');
        this.vpid = vpid;
        this.holdingImage = holdingImage;
        this.mp = null;
        this.$overlay = this.$videoContainer.find('.section_video_overlay');
        this.cta_breakpoint = 612;

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
                autoplay: false
            };
            this.mp = this.videoEl.player(playerSettings);
            this.mp.load();
            this.setEvents();
            
            if (this.getVideoWidth() >= this.cta_breakpoint) {
                this.disableSmpCta();
            }
        },

        setEvents: function () {
            this.mp.bind('ended', this.videoEnded.bind(this));
            this.mp.bind('playing', this.hideOverlay.bind(this));

            var self = this;
            news.$(window).on('resize', function () {
                if (self.getVideoWidth() >= self.cta_breakpoint) {
                    self.disableSmpCta();
                } else {
                    self.enableSmpCta();
                }
            });
        },

        playVideo: function () {
            this.hideOverlay();
            this.mp.play();
        },

        hideOverlay: function () {
            this.$overlay.addClass('section_video_overlay-hidden');
        },

        videoEnded: function () {
            this.$overlay.removeClass('section_video_overlay-hidden');
        },

        videoStop: function () {
            this.videoEnded();
            this.mp.stop();
        },

        getVideoWidth: function () {
            return this.$videoContainer.width();
        },

        disableSmpCta: function () {
            var ui_config = {
                cta: { enabled: false }
            };
            this.mp.updateUiConfig(ui_config);
        },

        enableSmpCta: function () {
            var ui_config = {
                cta: { enabled: true }
            };
            this.mp.updateUiConfig(ui_config);
        }
    };

    return Video;
});