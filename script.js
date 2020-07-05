var image1=document.getElementById("img1");
            var image2=document.getElementById("img2");
            var image3=document.getElementById("img3");
           
            var funct1=function(){
              
                return new Promise(function(resolve,reject){
                    setTimeout(function(){
                        document.getElementById("header1").style.display="none";
                                console.log("hi");
                        resolve({'img1src':'images1/cse-department.png'})
                    },4000)
                })
            }
            var funct2=function(){
                return new Promise(function(resolve,reject){
                    setTimeout(function(){
                        document.getElementById("header2").style.display="none";
                                 console.log("hi");
                        resolve({'img2src':'images1/ECE.jpg'})
                        //reslove({'img2src':{source}})
                    },2000)
                })
            }
            var funct3=function(){
                return new Promise(function(resolve,reject){
                    setTimeout(function(){
                        document.getElementById("header3").style.display="none";
                                 console.log("hi");
                        resolve({'img3src':'images1/EEE.jpg'})
                        //resolve({'img3src':'source'})
                    },2000)
                })
            }
            async function images(){
                var res1=await funct1();
                image1.src=res1.img1src;
            
            //    console.log(image1.onload);
                var res2=await funct2();
                image2.src=res2.img2src;
                var res3=await funct3();
                image3.src=res3.img3src;
                return image1;


            }
            images();
          
