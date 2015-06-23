$('#example5').sliderPro({
                width: 1024,
                height: 768,
                orientation: 'vertical',
                loop: false,
                arrows: true,
                buttons: true,
                thumbnailsPosition: 'right',
                thumbnailPointer: true,
                thumbnailWidth: 290,
                breakpoints: {
                    800: {
                        thumbnailsPosition: 'bottom',
                        thumbnailWidth: 270,
                        thumbnailHeight: 100
                    },
                    500: {
                        thumbnailsPosition: 'bottom',
                        thumbnailWidth: 120,
                        thumbnailHeight: 50
                    }
                }
            });