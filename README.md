# Cscheckout integrations

## Installation

### For clients

Please do not install this module. It will be installed automatically as
cscheckout dependency.

### For developers

Use this approach if you have access to our private repositories!

```bash
cd <magento_root>
composer config repositories.cssoft composer https://docs.cssoftsolutions.com/packages/
composer require cssoft/cscheckout-integrations:dev-master --prefer-source
bin/magento module:enable CSSoft_CscheckoutIntegrations
bin/magento setup:upgrade
```
