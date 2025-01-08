var config = {
    config: {
        mixins: {
            // Disable page reload. Reload totals with ajax instead.
            'Magento_GiftMessage/js/view/gift-message': {
                'CSSoft_CscheckoutIntegrations/js/mixin/view/magento-gift-message-mixin': true
            },
            // Fixes to work without page reload and show resultBlock, when message is not set but options are.
            'Magento_GiftWrapping/js/view/gift-wrapping': {
                'CSSoft_CscheckoutIntegrations/js/mixin/view/magento-gift-wrapping-mixin': true
            }
        }
    }
};
