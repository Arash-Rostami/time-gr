<?PHP
        if ($_POST['mail_address'] >1){ 
            echo "<script> alert('Sorry bot, this is not the place for you!'); </script>";
        }else{
            if (isset ($_POST['submit']) AND $_POST['submit'] ='submit' AND
            empty($_POST['mail_address'])) {
                
                    $t = $_POST['text_contact'];
                    $m = $_POST['mail_contact'];
                    $h = $_POST['mail_address'];
                    $n = $_POST['name_contact'];
                    $p = $_POST['phone_contact'];
                    $to='education@time-gr.com';
                    $subject= 'Online Enquiry';
                    $headers = "MIME-Version: 1.0\r\n";
                    $headers .= "Content-Type: text/html; charset='utf-8'\r\n";
                    $mess= "<b>Name: </b>" .$n ."<br><b> Phone: </b>" .$p ."<br><b> Email: </b>" .$m ." <br><b>Text: </b>" .$t;
            
                            if ( mail($to,$subject,$mess,$headers)){
                            echo "<script> alert('پیام شما با موفقیت ارسال گردید'); </script>";
                            echo "<meta http-equiv='refresh' content='0'>";
                                
                                
                            }
            
            }
        }
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>TIME Educational Group</title>
		<meta name="keywords" content="IELTS, TOEFL iBT, PTE Academic, کلاس مکالمه">
        <meta name="author" content="Arash Rostami">
		<meta name="description" content="">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">

	</head>
	<body id="top" class="persian" onload="myFunction()" >
	    
	    <div id='app'>
	    
		    <Pageloader></Pageloader>
            <Pageheader></Pageheader>
		    <Pagenav></Pagenav>
            <Pagemodal></Pagemodal>
            <Pagehome></Pagehome>
		    <Pageaboutus></pageaboutus>
    	    <Pageourcourses></Pageourcourses>
    	    <Pageourservices></Pageourservices>
    	    <Pageposts></Pageposts>
            <Pagebacktotop></Pagebacktotop>
            
          	<div id="mySidenav" class="sidenav"></div>
                            
                            

    	</section>
        <section id="contact" style="direction:rtl;">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12">
    					<h2 class="wow bounceIn" data-wow-offset="500" data-wow-delay="0.3s">تماس <span>با ما</span></h2>
    				</div>
    				<div class="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
    					<form name="sentMessage" id="contactForm" novalidate action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
    					    
                        	<label>نام</label>
    						<input name="name_contact" type="text" class="form-control" id="fullname">
                            
                            <label>تلفن</label>
    						<input name="phone_contact" type="number" class="form-control" id="phone" value="شماره موبایل">
   						  	
                            <label>ایمیل</label>
    						<input name="mail_contact" type="email" class="form-control" id="email">
    						
    						<label class="email_address">ایمیل آدرس</label>
    						<input name="mail_address" type="email" class="form-control email_address">
   						  	
                            <label>پیام</label>
    						<textarea name="text_contact" rows="6" class="form-control" id="message"></textarea>
    						
    						
                            <input type="submit" name="submit" value="ارسال نمایید" class="form-control">
    					</form>
    				</div>
    		<Pagecontact></Pagecontact>
    			</div>
    		</div>
    	</section>
    	
    	
           <Pagefooter></Pagefooter>
      
</div>

</body>
	       	 <script src="js/vue.js"></script>
		     <script src="js/vueInstance.js"></script>
		            



</html>