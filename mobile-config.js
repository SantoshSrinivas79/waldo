// Set PhoneGap/Cordova preferences
App.setPreference('StatusBarBackgroundColor', '#387EF5');

App.icons({
    'iphone': 'resources/icons/app.png',
    'iphone_2x': 'resources/icons/app.png'

    // XXX : add Android icons here
    // 'android_ldpi': 'resources/icons/icon-ldpi.png',
    // 'android_mdpi': 'resources/icons/icon-mdpi.png',
    // 'android_hdpi': 'resources/icons/icon-hdpi.png',
    // 'android_xhdpi': 'resources/icons/icon-xhdpi.png'
});

App.configurePlugin('plugin.google.maps', {
    'API_KEY_FOR_IOS': 'AIzaSyA6TONWD6mlqfqWaMyiGzJWnXG7ij2Eukk',
    '$API_KEY_FOR_ANDROID' : 'whatever'
});