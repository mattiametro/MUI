requirejs.config({
    "baseUrl": "js",
    "paths": {
      "jquery": "lib/jquery.min",
      "mui-resize" : "MUI/mui.resize",
      "mui-naver" : "MUI/mui.naver",
      "mui-grid" : "MUI/mui.grid",
      "mui-eq" : "MUI/mui.eq"         
    },
    "shim": {
        "mui-resize" : { deps:['jquery']},
        "mui-naver" : { deps:['jquery']},        
        "mui-grid" : { deps:['jquery']}, 
        "mui-eq" : { deps:['jquery']},        
        "jquery" : {'exports' : 'jquery'}
    }
});

// Load the main app module to start the app
requirejs(["app/require.start"]);