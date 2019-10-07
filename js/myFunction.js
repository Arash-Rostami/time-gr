
                               
                               $(document).ready(function(){
										$('[data-toggle="tooltip"]').tooltip({trigger:"hover", animation: true, delay: {show: 300, hide: 1000}});   
									});
						         
								function myFunction() {
								 var d = new Date();
                                 var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
								 var month = months[d.getMonth()];
								 var day = d.getDate();
								 var year = d.getFullYear();
								 var datotal = "<span style='color:rgba(40,167,233,1.00)'>" + day + " " + month + " " + year + "</span>";								 
								 

								  document.getElementById("copright").innerHTML += datotal;
								  
								  
								  
								  var imageHead = document.getElementById("home");
								  var i = 0;
								  setInterval(function() {
										  imageHead.style.backgroundImage = "url('images/dic (" + [i] + ").jpg')";
										  i = i + 1;
										  if (i == 6) {
											i =  0;
										  }
									}, 30000); 
								  
								 
								  
								  }	
								  	
									  $(".fi").hide();
									  $(".fi").show(2000);
									  
									  $("#databaseBtn").click(function(){
											  $("#myModal").slideDown("slow");
											});
											
									   $(".closeModal, #closeModal").click(function(){
											  $("#myModal").slideToggle("slow");
											});
											
									  $('.scrollToTop').click(function(event){
                                              event.preventDefault();
                                              $('html, body').animate({scrollTop: $('#top').offset().top}, 2000);});
											  
											  
									   $('.navigation-bar, #menuHide').singlePageNav();
																				


                                var canvas = document.getElementById("canvas");
                                var ctx = canvas.getContext("2d");
                                var radius = canvas.height / 2;
                                ctx.translate(radius, radius);
                                radius = radius * 0.90
                                setInterval(drawClock, 1000);
                                
                                function drawClock() {
                                  drawFace(ctx, radius);
                                  drawNumbers(ctx, radius);
                                  drawTime(ctx, radius);
                                }
                                
                                function drawFace(ctx, radius) {
                                  var grad;
                                  ctx.beginPath();
                                  ctx.arc(0, 0, radius, 0, 2*Math.PI);
                                  ctx.fillStyle = 'white';
                                  ctx.fill();
                                  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
                                  grad.addColorStop(0, 'black');
                                  grad.addColorStop(0.5, 'white');
                                  grad.addColorStop(1, '#333');
                                  ctx.strokeStyle = grad;
                                  ctx.lineWidth = radius*0.1;
                                  ctx.stroke();
                                  ctx.beginPath();
                                  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
                                  ctx.fillStyle = '#333';
                                  ctx.fill();
                                }
                                
                                function drawNumbers(ctx, radius) {
                                  var ang;
                                  var num;
                                  ctx.font = radius*0.15 + "px arial";
                                  ctx.textBaseline="middle";
                                  ctx.textAlign="center";
                                  for(num = 1; num < 13; num++){
                                    ang = num * Math.PI / 6;
                                    ctx.rotate(ang);
                                    ctx.translate(0, -radius*0.85);
                                    ctx.rotate(-ang);
                                    ctx.fillText(num.toString(), 0, 0);
                                    ctx.rotate(ang);
                                    ctx.translate(0, radius*0.85);
                                    ctx.rotate(-ang);
                                  }
                                }
                                
                                function drawTime(ctx, radius){
                                    var now = new Date();
                                    var hour = now.getHours();
                                    var minute = now.getMinutes();
                                    var second = now.getSeconds();
                                    //hour
                                    hour=hour%12;
                                    hour=(hour*Math.PI/6)+
                                    (minute*Math.PI/(6*60))+
                                    (second*Math.PI/(360*60));
                                    drawHand(ctx, hour, radius*0.5, radius*0.07);
                                    //minute
                                    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
                                    drawHand(ctx, minute, radius*0.8, radius*0.07);
                                    // second
                                    second=(second*Math.PI/30);
                                    drawHand(ctx, second, radius*0.9, radius*0.02);
                                }
                                
                                function drawHand(ctx, pos, length, width) {
                                    ctx.beginPath();
                                    ctx.lineWidth = width;
                                    ctx.lineCap = "round";
                                    ctx.moveTo(0,0);
                                    ctx.rotate(pos);
                                    ctx.lineTo(0, -length);
                                    ctx.stroke();
                                    ctx.rotate(-pos);
                                };
								  
								 
								 

							  		  
								  
							  function openNavOne() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
										  	$.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-1.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
										  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavOne() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}
									  
							  function openNavTwo() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
										  $.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-2.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
										  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavTwo() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}									  
							  function openNavThree() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
										  $.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-3.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
										  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavThree() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}									  
							  function openNavFour() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
										  $.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-4.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
										  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavFour() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}								  
							  function openNavFive() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
										  $.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-5.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
										  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavFive() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}									  
							  function openNavSix() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
										  $.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-6.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
										  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavSix() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}		
						  
							  function openNavSeven() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
										  $.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-7.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
										  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavSeven() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}									  

								  
							  function openNavEight() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
										  $.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-8.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
										  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavEight() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}								

                             function openNavNine() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
                        					$.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-9.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
								  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavNine() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}
                              function openNavTen() {
										  document.getElementById("menuHide").style.display = "none";
										  document.getElementById("back-top").style.display = "none";
                        					$.ajax({
                        					    type: 'GET',
                        						url: 'posts/post-10.html',
                        						data: "",
                        						async:true,
                        						success: function(response) {
                        						 $('#mySidenav').html(response);
                        												     }
                        							  });
								  document.getElementById("mySidenav").style.width = "100%";
										  
										} 
										
										function closeNavTen() {
										  document.getElementById("mySidenav").style.width = "0";
										  document.getElementById("menuHide").style.display = "block";
										  document.getElementById("back-top").style.display = "block";


}
							
									  
									  
									 
								
						/*	$(document).ready(function(){
  $("x1").on('click', function(){
	$("#containerFirst").load("first.txt", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      alert("External content loaded successfully!");
    if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
  });
}); */
                              