

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":970},"pages":[{"id":"page-igor-marapara","displayName":"Igor Marapara","link":{"linkType":"LinkTypePage","href":"#!page-igor-marapara"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-photo","displayName":"Photo","link":{"linkType":"LinkTypePage","href":"#!page-photo"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-code","displayName":"Code","link":{"linkType":"LinkTypePage","href":"#!page-code"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}

        $(function () {
            $('.go-down').click(function () {
                $('html,body').animate({scrollTop: $('#after-hero').offset().top}, 500);
            });
        });
    