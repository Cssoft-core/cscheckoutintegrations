define([
    'jquery',
    'Magento_Checkout/js/action/set-shipping-information'
], function ($, setShippingInformationAction) {
    'use strict';

    return {
        /**
         * Init plugin
         */
        init: function () {
            $(document).on(
                'click',
                '[type=checkbox][name=shipperhq-option]',
                setShippingInformationAction
            );
        }
    };
});
