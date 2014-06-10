requirejs.config({
    "baseUrl": "js",
    "paths": {
      "jquery": "lib/jquery.min",
      "mui-resize" : "MUI/mui.resize",
      "mui-naver" : "MUI/mui.naver"  
    },
    "shim": {
        "mui-resize" : { deps:['jquery']},
        "mui-naver" : { deps:['jquery']},        
        "jquery" : {'exports' : 'jquery'}
    }
});

// Load the main app module to start the app
requirejs(["app/require.start"]);