// Taking Array of Image Addresses  
      // Suppose it as information from the server 
      // Modify this for different address 
     var a = ['/imgs/DSC_3264.JPG',
              '/imgs/DSC_3300.JPG',
              '/imgs/DSC_3359.JPG',
              '/imgs/IMG_20200625_150048_562.jpg',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.720.720a/s640x640/108125481_111597133833228_6641756164179765891_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=QxUGXIs_lUkAX-VsWJZ&oh=025fbd89c05e80f5f753d568852a1581&oe=5F3FCE63',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c179.0.721.721a/s640x640/107257171_992915271141563_2168700115111820552_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=8ZOiZhX8XbUAX-skUVn&oh=8f81096d25338a9c8cb15e89ac79cf50&oe=5F3CF13C',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c179.0.721.721a/s640x640/107191014_2695738147377452_5414352699552873058_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=TLbrLbd7uRsAX__TxKB&oh=f4793173b36c67aeb6c1b5d84df2d9f4&oe=5F401EB3',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.720.720a/s640x640/106704401_741177149966722_7827391862089249842_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=t_utWHp7fY8AX8dFecl&oh=afd7bc8cadf2e5fc1d7fa21d4d13af79&oe=5F3E196F',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.720.720a/s640x640/106508872_918565561956276_580132424552323176_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ql6L1wJxa-wAX9JRiy8&oh=d52c131773f28557112e8af35eb95920&oe=5F3FE501',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.720.720a/s640x640/70021071_132600678050884_82591903392646417_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=VkT37m2b7WsAX9wah5F&oh=bb0c3b2f24da03fc5eb9a219ae91ff72&oe=5F401082',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/69529509_1652854971524132_4009241268840063001_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Cqm0Y8kk3KIAX-tENtv&oh=02920eb2549486350e8b3609c27d3091&oe=5F3D9833',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/69496529_310659729750943_6652211859783541325_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=cG0audiWB1MAX8HWPY7&oh=a455a1dffa3520327f8823e972d12756&oe=5F3D9C3D',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/66833312_427911977821485_8345192393568339947_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=nC-GAdsu9lQAX8b1Qk2&oh=48cbc8efa167a03f229de94b76e2fe9f&oe=5F3E2970',
              'https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/60609941_218527345775016_8179831929802879600_n.jpg?_nc_ht=instagram.fpnq2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=UqXvvr-NlOsAX-GOxAP&oh=44391b98d11e5cdd44b4bf36548a28ee&oe=5F3F0788']; 
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