requirejs.config({
    "baseUrl": "js",
    "paths": {
      "jquery": "lib/jquery.min",
      "mui-resize" : "MUI/mui.resize" 
    },
    "shim": {
        "mui-resize" : { deps:['jquery']},
        "jquery" : {'exports' : 'jquery'}
    }
});

// Load the main app module to start the app
requirejs(["app/require.start"]);