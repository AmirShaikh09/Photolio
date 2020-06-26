// Taking Array of Image Addresses  
      // Suppose it as information from the server 
      // Modify this for different address 
     var a = ['/imgs/DSC_3264.JPG','/imgs/DSC_3300.JPG','/imgs/DSC_3359.JPG','/imgs/IMG_20200625_150048_562.jpg']; 
              var x = 0; 
              for (var i = 0; x < a.length; i++) { 
                  var append = "<div class='row'>"; 
                  for (var j = 0; j < 6 && x < a.length; j++) { 
                      append += ` 
              <div class="contain col-sm-6 col-md-2"> 
                  <img class="img-responsive" src=` + a[x++] + `> 
              </div> 
              `; 
                  } 
                  append += '</div>'; 
                  appender(append); 
              } 
          
              // Function to append the data 
              function appender(x) { 
                  $('#gallery').html(function(i, original_html) { 
                      return (original_html + x); 
                  }); 
              } 
          
              // For Image Modal 
              $(document).on('click', 'img', function() { 
                  imgAddr = $(this).attr('src'); 
                  data = "<center><img src=" + imgAddr + " width='50%'>"; 
                  $('#myModal').find('.modal-body').html(data); 
                  $('#myModal').modal(); 
              });

              function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                  x.className += " responsive";
                } else {
                  x.className = "topnav";
                }
              }