function fillTestRed() {
          var target = document.getElementById("testCanvas");
          var targetContext = target.getContext("2d");
          
          var height = target.height;
          var width = target.width;
          
          targetContext.fillStyle = "#FF0001";
          targetContext.fillRect(0, 0, width, height);
}

function clearCanvas() {      
          var target = document.getElementById("testCanvas");
          var targetContext = target.getContext("2d");
          
          var height = target.height;
          var width = target.width;
          
          targetContext.clearRect( 0, 0, width, height);
}

function codeSubmit(target, textbox) {
          codeInsert(target, textbox);
}

function codeInsert(target, textbox) {
          
          var checktype = document.getElementById(target).tagName;
          var code = $('input#canvasCode').val();
          
          
          code = "<script type='text/javascript'>" + code + '</script>';

          if(checktype === "CANVAS") {
                    // Apply the canvas code here.
                    
                    $("#reactiveScriptDiv").html(code);

                    MSApp.execUnsafeLocalFunction(function () {
                              
                    });
          }
}