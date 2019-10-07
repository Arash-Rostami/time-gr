<?PHP



 
if (isset ($_POST['submit']) AND $_POST['submit'] ='submit') {
    
$txt=$_POST['text_contact'];
$m = $_POST['mail_contact'];
$n = $_POST['name_contact'];
$to='education@time-gr.com';
$subject= 'Online Enquiry';
$mess= "Name: " .$n ." Email: " .$m ." Text: " .$txt;

mail($to,$subject,$mess);


  

}

?>



<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="TIME Educational Group Official Website">
		<meta name="author" content="Arash Rostami">
		<link rel="icon" href="favicon.ico">
		<title>TIME Educational Group - Main Homepage </title>
		<!-- Bootstrap core CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
		<!-- Custom styles for this template -->
		<link href="css/style.css" rel="stylesheet">
		<style>
		    
		    input:hover, textarea:hover{
		        
		        background-color:lightblue;
		        direction:rtl;
		    }
		    
		    .center {
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                  width: 40%;
} 
		    
		    
		</style>
		
		
	</head>
	<body id="page-top">
		<!-- Navigation -->
		<nav>
			<div class="container">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header page-scroll">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					</button>
					<img src="images/time.png" alt="TIME educational group logo"  class="img-responsive center">
				</div>
				
		
		<section id="portfolio">
			<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="section-title">
						<h2>خوش آمدید </h2>
						<p>لطفا یکی از گزینه های زیر را انتخاب نمایید </p>
					</div>
				</div>
			</div>

			<div class="row row-0-gutter">
				<!-- start portfolio item -->
				<div class="col-md-6 col-0-gutter">
					<div class="ot-portfolio-item">
						<figure class="effect-bubba">
							<img src="images/demo/beard-chair-computer-840996.jpg" alt="img02" class="img-responsive" />
							<figcaption>
								<h2 style="font-size:30px">لینک تعیین سطح آنلاین</h2>
								<p style="font-size:16px">هشتاد سوال تستی برای تعیین سطح زبان </p>
								<a href=" http://selfstudyielts.com/test/form.php"></a>
                                  
							</figcaption>
						</figure>
					</div>
				</div>
				<!-- end portfolio item -->
				<!-- start portfolio item -->
				<div class="col-md-6 col-0-gutter">
					<div class="ot-portfolio-item">
						<figure class="effect-bubba">
							<img src="images/demo/apple-business-click-392018.jpg" alt="img02" class="img-responsive" />
							<figcaption>
								<h2 style="font-size:30px">سایت مجموعه</h2>
								<p style="font-size:16px">در حال بروز رسانی</p>
								<a href="http://time-gr.com" ></a>
							</figcaption>
						</figure>
					</div>
				</div>
				<!-- end portfolio item -->
			</div>
						<div class="row row-0-gutter">
				<!-- start portfolio item -->
				<div class="col-md-6 col-0-gutter">
					<div class="ot-portfolio-item">
						<figure class="effect-bubba">
							<img src="images/demo/computer-desk-electronics-238118.jpg" alt="img02" class="img-responsive" />
							<figcaption>
								<h2 style="font-size:30px">سامانه اتوماسیون سایر مراکز</h2>
								<p style="font-size:16px">هروی، مرزداران، فرمانیه</p>
								   <a href="http://time-gr.ir/"></a>
                                   
							</figcaption>
						</figure>
					</div>
				</div>
				<!-- end portfolio item -->
				<!-- start portfolio item -->
				<div class="col-md-6 col-0-gutter">
					<div class="ot-portfolio-item">
						<figure class="effect-bubba">
							<img src="images/demo/book-computer-design-326424.jpg" alt="img02" class="img-responsive" />
							<figcaption>
								<h2 style="font-size:30px">سامانه اتوماسیون  مرکز دولت</h2>
								<p style="font-size:16px">Teachers' Automated System</p>
								     <a href="http://selfstudyielts.com/test/db/logindb.php"></a>
							</figcaption>
						</figure>
					</div>
				</div>
				<!-- end portfolio item -->
			</div>
				</div>
			</div>
		</section>

		<section id="contact">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center">
						<div class="section-title">
							<h2>مسیر ارتباطی</h2>
							<p>پیام خود را برای ما ارسال نمایید تا در اسرع وقت در صورت نیاز با شما تماس بگیریم. با تشکر</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 text-center">
						<form name="sentMessage" id="contactForm" novalidate action="index.php" method="POST" >
                           
								
								<div class="col-md-6">
									<div class="form-group">
										<input type="email" name="mail_contact" id="email" class="form-control" placeholder=" ایمیل " required="" data-validation-required-message="Please enter your email address." style="text-align:center">
										<p class="help-block text-danger"></p>
									</div>
								</div>
                                <div class="col-md-6">
									<div class="form-group">
										<input type="text" class="form-control" placeholder=" نام" name="name_contact" id="name" required="" data-validation-required-message="Please enter your name." style="text-align:center">
										<p class="help-block text-danger"></p>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<textarea class="form-control" placeholder="  پیام" name="text_contact" id="text" required data-validation-required-message="Please enter a message." style="text-align:center"rows="8"></textarea>
										<p class="help-block text-danger"></p>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="row">
								<div class="col-lg-12 text-center">
									<div id="success"></div>
									
									<input type="submit" name="submit" value="ارسال نمایید"  class="btn"/>
									
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		<p id="back-top">
			<a href="#top"><i class="fa fa-angle-up"></i></a>
		</p>
		<footer>
			<div class="container text-right" >
            <p><span style="font-size: 20px;">:مراکز</span></p> <br>
				<p style="font-size: 15px;"> 22573536 - 22574003 :<a href="mailto:education@time-gr.com?Subject=Query" target="_top"><span style="font-size: 20px;">دولت</span></a></p>
                <p style="font-size: 15px;"> 22984010 - 22948405 :<a href="mailto:education2@time-gr.com?Subject=Query" target="_top"><span style="font-size: 20px;">هروی</span></a></p>
                <p style="font-size: 15px;"> 44381726 - 44381728 : <a href="mailto:education3@time-gr.com?Subject=Query" target="_top"><span style="font-size: 20px;">مرزداران</span></a></p>
                <p style="font-size: 15px;"> 22249851 - 26659021 :<a href="mailto:education3@time-gr.com?Subject=Query" target="_top"><span style="font-size: 20px;">فرمانیه</span></a></p><br><br>
                
                <div style="position: relative; right:45%;"> 
                  
                  

             <a href="https://www.instagram.com/timeeducationalgroup/" ><img align="middle" style="text-align:center; display: inline; margin-left: auto;  border-radius: 50%; padding-right:5px; margin-right: auto;  width: 5%;" src="images/instagram-logo.jpg" > </a>
                    
              <a href="http://www.t.me/timeinstitute"> <img  align="middle" style="text-align:center; display: inline; margin-left: auto; padding-left:5px; border-radius: 50%; margin-right: auto;  width: 5%;" src="images/telegram-clipart-20.jpg" > </a>
                 </div> <br>
                <p class="container text-center" title="Designed by Dolat Center">  <a href="http://selfstudyielts.com"><span>TIME Educational Group</span> </a><br> 2010 - 2019</p>
                
			</div>
		</footer>

		<!-- Modal for portfolio item 1 -->
		<div class="modal fade" id="Modal-1" tabindex="-1" role="dialog" aria-labelledby="Modal-label-1">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="Modal-label-1">Dean & Letter</h4>
					</div>
					<div class="modal-body">
						<img src="images/demo/portfolio-1.jpg" alt="img01" class="img-responsive" />
						<div class="modal-works"><span>Branding</span><span>Web Design</span></div>
						<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal for portfolio item 2 -->
		<div class="modal fade" id="Modal-2" tabindex="-1" role="dialog" aria-labelledby="Modal-label-2">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="Modal-label-2">Startup Framework</h4>
					</div>
					<div class="modal-body">
						<img src="images/demo/portfolio-2.jpg" alt="img01" class="img-responsive" />
						<div class="modal-works"><span>Branding</span><span>Web Design</span></div>
						<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal for portfolio item 3 -->
		<div class="modal fade" id="Modal-3" tabindex="-1" role="dialog" aria-labelledby="Modal-label-3">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="Modal-label-3">Lamp & Velvet</h4>
					</div>
					<div class="modal-body">
						<img src="images/demo/portfolio-3.jpg" alt="img01" class="img-responsive" />
						<div class="modal-works"><span>Branding</span><span>Web Design</span></div>
						<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal for portfolio item 4 -->
		<div class="modal fade" id="Modal-4" tabindex="-1" role="dialog" aria-labelledby="Modal-label-4">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="Modal-label-4">Smart Name</h4>
					</div>
					<div class="modal-body">
						<img src="images/demo/portfolio-4.jpg" alt="img01" class="img-responsive" />
						<div class="modal-works"><span>Branding</span><span>Web Design</span></div>
						<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal for portfolio item 5 -->
		<div class="modal fade" id="Modal-5" tabindex="-1" role="dialog" aria-labelledby="Modal-label-5">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="Modal-label-5">Fast People</h4>
					</div>
					<div class="modal-body">
						<img src="images/demo/portfolio-5.jpg" alt="img01" class="img-responsive" />
						<div class="modal-works"><span>Branding</span><span>Web Design</span></div>
						<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/SmoothScroll.js"></script>
		<script src="js/theme-scripts.js"></script>
	</body>
</html>