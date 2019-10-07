
var Pageloader = Vue.component('Pageloader', {template: `
<template>
<div class="preloader">
			<div class="sk-spinner sk-spinner-wave">
     	 		<div class="sk-rect1"></div>
       			<div class="sk-rect2"></div>
       			<div class="sk-rect3"></div>
      	 		<div class="sk-rect4"></div>
      			<div class="sk-rect5"></div>
     		</div>
    	</div>                
</template>
`});

let Pageheader = Vue.component('Pageheader', {template: `
<template>
<header style="direction:rtl">
     <div class="container">
          <div class="container">
             <div class="row">
                   
                  <div id="canvasContainer" class="col-md-4 col-sm-4 col-xs-12 text-right" >
                     <canvas id="canvas" class="fi" width="50" height="50">
                        </canvas>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-12 text-center" >   		 <button id="databaseBtn" type="button" 
                            class="btn btn-info btn-md" data-toggle="modal" >سامانه مراکز
                        </button>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-12 d-flex justify-content-start topSicon" style="position:relative; right:10%" >
                          <ul class="social-icon fi" style="display:none;">
                            <li><span class="persian" style="color:rgba(40,175,236,1.00);%"> با ما در ارتباط باشید </span></li>
                            <li><a href="https://www.instagram.com/timeeducationalgroup/" class="fa fa-instagram"></a></li>
                            <li><a href="http://www.t.me/timeinstitute" class="fa fa-telegram"></a></li>
                          </ul>
                  </div>
              </div>
          </div>
     </div>
</header>              
</template>
`});

let Pagenav = Vue.component('Pagnav', {template: `
<template>
<nav class="navbar navbar-default templatemo-nav" role="navigation" id="menuHide">
        	<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
					
				</div>
				<div class="collapse navbar-collapse navigation-bar">
                <img src="images/time.png" class="logo" >
					<ul class="nav navbar-nav navbar-right navigation-bar" id="roLink">                      
						<li><a id="cuLink" href="#contact" style="font-size:large" class="persian">تماس با ما</a></li>
						<li><a id="emLink" href="#portfolio" style="font-size:large" class="persian ">مطالب آموزشی</a></li>
						<li><a id="osLink" href="#service" style="font-size:large" class="persian ">خدمات ما</a></li>
						<li><a id="ocLink" href="#team" style="font-size:large" class="persian ">دوره های ما</a></li>
						<li><a id="auLink" href="#about" style="font-size:large" class="persian ">درباره ما</a></li>
						<li><a id="hpLink" href="#top" style="font-size:large" class="persian ">صفحه اصلی</a></li>
                       
					</ul>
				</div>
			</div>    
			</nav>
</template>
`});

let Pagemodal = Vue.component('Pagemodal', {template: `
<template>
                <div id="myModal" class="modal" role="dialog">
                  <div class="modal-dialog modal-md">
                
                    <!-- Modal content-->
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close closeModal">&times;</button><br>
                        <h4 class="modal-title text-info text-center">سامانه مرکز مورد نظر را گزینش نمایید</h4>
                      </div>
                      <div class="modal-body">
                                   <div class="row">
                        <div class="col-md-6 col-s-12">
                        <figure class="effect-bubba">
                             <a href="http://time-gr.ir/">
                                    <img src="images/computer-desk-electronics-238118.jpg" alt="img02" class="img-responsive" />
                                    <figcaption>
								       <h2 >سامانه سایر مراکز</h2>
								       <p >هروی، مرزداران، فرمانیه</p>
								       </figcaption> </a></figure></div>
				
                       <div class="col-md-6 col-s-12">
                       <figure class="effect-bubba">
                             <a href="http://selfstudyielts.com/test/db/logindb.php">
                                    <img src="images/book-computer-design-326424.jpg" alt="img02" class="img-responsive" >
                                    <figcaption>
								       <h2 >سامانه مرکز دولت</h2>
								       <p >Teachers' Automated System</p>
							            </figcaption></a></figure></div>
                                    </div>
									</div>
  
                      <div class="modal-footer text-center d-flex justify-content-center">
                                   <div class="row">
                                   <div class="col-md-12 col-s-12  text-center" >
                       
                       <button type="button" class="btn btn-default btn-info" id="closeModal">بستن</button>
                                   </div>
                                   </div>
                      </div>
                      
                      
                    </div>
                
                  </div>
                </div>
</template>
`});

let Pagehome = Vue.component('Pagehome', {template: `
<template>
               	<section id="home">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-offset-2 col-md-8" >
    					<h1 class="wow fadeIn persian" data-wow-offset="50" data-wow-delay="0.9s">
                      زبــان دیگر<span class="">دنیــای دیگر</span></h1>
    					<div class="element">
                            <div class="sub-element" ><p class="persian" >
                             &#x1F9D0; !سلام دوست عزیز
                            </p></div>
                            <div class="sub-element"> &#128580; <p class="persian" > 
                             آیا می دانستید با هدف و یا خواسته خود فاصله بسیار کمی دارید؟
                            </p></div>
                            <div class="sub-element"><p class="persian" style="direction:rtl;">
                           &#128521; همین امروز با ما تماس گرفته تا در این مسیر همراه و راهنمای شما باشیم
                            </p></div>
    					<a data-scroll href="#about" class="btn btn-default wow fadeInUp" data-wow-offset="50" data-wow-delay="0.6s">
                        ابتدای صفحه </a>
    				</div>
    			</div>
    		</div>
    	</section>
</template>
`});

let Pageaboutus = Vue.component('Pageaboutus', {template: `
<template>
<section id="about" style="direction:rtl">
			<div class="container">
				<div class="row" >
					<div class="col-md-12" ><br><br>
    					<h2 class="wow bounceIn persian " data-wow-offset="50" data-wow-delay="0.3s" style="direction:rtl; font-size:xx-large">اعضای موسسه زبان <span>تایم</span></h2>
    				</div>
					<div class="col-md-4 col-sm-4 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
						<div class="media x">
							<div class="media-heading-wrapper">
								<div class="media-object pull-right" style="margin-left:3%">
									<i class="fa fa-university" style="color:rgba(239,102,34,1.00)"></i>
								</div>
								<h3 class="media-heading persian" style="direction:rtl;">تایم دولت</h3>
							</div>
							<div class="media-body persian">
								<p class="" style="direction:rtl; font-size:large; text-align:justify"> مرکز دولت (آکادمی زبان مهرداد/Mehrdad Javid) با قدمتی کمی بیشتر از سایر مراکز مفتخر بوده میزبان حجم زیادی از فراگیران PTE&nbsp;Academic - TOEFL - IELTS و همچنین زبان آموزان مکالمه با هدف تحصیل یکی از دو مدرک فوق می باشد. نهایت سعی به عمل آمده تا تمامی زبان آموزان از افراد بزرگسال انتخاب شده تا با حضور در مسیر و خصوصی(ویا نیمه گروهی) با نظارت کامل و دقیق سریعتر گام به سوی اهداف خود بردارند.</p> 
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-offset="50" data-wow-delay="1.5s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-right" style="margin-left:3%">
									<i class="fa fa-university" style="color:lightblue"></i>
								</div>
								<h3 class="media-heading persian" style="direction:rtl;">تایم هروی</h3>
							</div>
							<div class="media-body persian">
								<p class="persian" style="direction:rtl; font-size:large; text-align:justify">مرکز ميدان هروي از خرداد ماه سال ٩٢ فعايت خود را به عنوان دومين مركز موسسه تايم آغاز كرد. اين شعبه با آموزش زبان هاي مختلف از جمله انگليسي،آلماني، فرانسوي و ايتاليايي خدمات آموزشي خود را براي تمامي گروه هاي سني اراىه مي دهد. اين مركز با بهره گيري از اساتيد مجرب و باتجربه در سطوح مختلف از مبتدي تا پيشرفته و براي كلاس هاي آماده سازي آزمونهاي IELTS و TOEFL دانشجو مي پذيرد. </p> 
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="2.0s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-right" style="margin-left:3%">
									<i class="fa fa-university" style="color:orange"></i>
								</div>
                                <h3 class="media-heading persian" style="direction:rtl;">راد تایم</h3>
							</div>
							<div class="media-body persian" >
								<p class="persian" style="direction:rtl; font-size:large; text-align:justify">مراکز راد تایم از سال نود و چهاردر دو مکان مرزداران و فرمانیه مفتخر بوده تا دوره های زبان خود را برای تمامی متقاضیان ارایه دهد. این مرکز در کنار دوره های حضوری، دوره های آنلاین هم ارایه می دهد. برای دریافت اطلاعات تکمیلی از متقاضیان درخواست شده
                                 به
                                 <a href="https://radtime.org/" style="text-decoration:blink" target="_blank"> سایت اختصاصی </a>
                                 این مرکز رجوع کرده ویا با آنها تماس بگیرید. </p> 
								
							</div>
						</div>
					</div>	</div>
				</div>
			</div>
		</section>
</template>
`});

let Pageourcourses = Vue.component('Pageourcourses', {template: `
<template>
<section id="team">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12">
    					<h2 class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s"><span>دوره های</span> ما</h2>
    				</div>
                    
                    <div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.6s" >
    					<div class="team-wrapper" style="cursor:help">
    						<img src="images/team-im5.jpg" class="img-responsive" alt="team img 4" style="height:auto">
    							<div class="team-des">
    								<h4 class="persian" style="direction:rtl; text-align:justify;">دوره مکالمه و تقویت مهارت گفتاری </h4>
    								<span  style="text-align:center">Conversation</span>
    								 <p class="persian courses zum" style="direction:rtl; text-align:justify;"> سیستم آموزشی دوره های مکالمه گروهی برپایه یادگیری زبان انگلیسی به دو صورت کاملا آکادمیک ( با پوشش چهار مهارتِ گفتاری، شنیداری، خوانداری، نوشتاری) و همچنین کاملا محاوره ( باپوشش دو مهارت گفتاری و شنیداری و در زمانهایی بدون کتاب)  مدون شده است. این دوره ها برای آن دسته از زبان آموزانی است که تمایل داشته تمامی سطوح آموزشی را بصورت عادی سه روز هفته زوج یا فرد 1.5 ساعته یا نیمه فشرده سه روز در هفته زوج یا فرد 3 ساعته طی کنند در نظر گرفته شده است. در صورت نیاز هم زبان آموزان توانسته با برنامه ریزی شخصی این مسیر را فشرده تر با زمان بندی خود طی کنند. <br>
              در این نوع دوره ها تاکید بیشتر بر تقویت سطح زبان عمومی و آماده‌سازی زبان‌آموز جهت شرکت در دوره‌های آمادگی امتحانات آکادمیک از نظیر IELTS و TOEFL  بمرور زمان می باشد از آنجایی که تمامی فراگیران فرصت نسبتا کافی برای يادگيری و تمرین مفاهيم هر مبحث آموزشی را در داخل و خارج محيط كلاس دارند. <br>
           در این نوع دوره ، بدلیل وجود زمان کافی ،تنوع زیادی در نحوه اداره کلاس وجود دارد، برای مثال ديدگاه آموزش از محتوا مركزی (content centered) به فرآيند محوری (process centered) و يادگيری محوری (learning centered) چرخش داشته و نقش معلم از انتقال دهنده اطلاعات به هدايت كننده ی فعاليتهای يادگيری تغيير یافته تا فراگیران در طول دوران آموزشی خود از تجربه جدیدی بهره ببرند. </p>
    							</div>
    					</div>
    				</div>
    				<div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.3s">
    					<div class="team-wrapper" style="cursor:help">
    						<img src="images/team-img1.jpg" class="img-responsive" alt="team img 1">
    							<div class="team-des ">
    								<h4 class="persian" style="direction:rtl; text-align:justify">دوره آمادگی امتحان آیلتس</h4>
    								<span style="text-align:center"> IELTS Academic/General </span>
    								              <p class="persian courses zum" style="direction:rtl; text-align:justify;"> این دوره ها برای آن دسته از زبان آموزانی برگزار می شود که سطح علمی زبانشان از سطح متوسط بالاتر بوده و تمایل شرکت در آزمونهای رسمی این امتحان را دارند. ارائه این دوره ها برای داوطلبین امتحان در دو مرحله منظم صورت گرفته تا حد اکثر ممکن فراگیران توانسته اطلاعات آموزشی را منظم دسته بندی نموده و احساس آشفتگی و پریشانی نمایند. 
              
              در مرحله اول داوطلب آزمون با مبانی ابتدائی آشنا شده و بر نقاط ضعف شخصی خود غلبه می نماید


           سپس داوطلب با مبانی تست زنی، تکنیکها و روش استفاده از دانش آموخته شده در دوره های قبلی آشنا می شود.

   <br>
               طول و تعداد جلسات و روزهای هر دوره تمامی متناسب با نیاز داوطلب یا داوطلبان درابتدا تعریف می شود <br>
 			
              همچنین دوره های خصوصی برای زبان آموزانی توصیه می شود که در نواحی در زبان ضعف داشته و یا نیازمند به برنامه ریزی فردی .سرعتی متفاوت و یا حتی با زمان بندی جداگانه برای تحقق هدف خود هستند .در تمامی دوره ها تاکید به چهار مهارت بوده که برای پوشش کامل آنها بطور معمول از چند استاد متخصص در هر مهارت کمک گرفته می شود .تمامی داوطلبین موازی با شرکت از دوره ها دعوت به شرکت در امتحانات شبیه سازی شده تست اصلی شده تا 
            
               
              با شرکت در کارگاه های رفع اشکال از  پشتیبانی های آموزشی برخورد شده و همچنین 
               با آشنایی با شکل و شمایل و شرایط امتحانی بر اظطراب خود غلبه کرده و با اطمینان بیشتر عازم مراکز امتحانی شوند.  
              </p>
              		
    							</div>
    					</div>
    				</div>
    				<div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.6s">
    					<div class="team-wrapper" style="cursor:help">
    						<img src="images/team-img2.jpg" class="img-responsive" alt="team img 2">
    							<div class="team-des">
    								<h4 class="persian" style="direction:rtl; text-align:justify">دوره آمادگی امتحان تافل</h4><br>
    								<span  style="text-align:center">TOEFL iBT</span>
    								<p class="persian courses zum" style="direction:rtl; text-align:justify; "> این دوره ها در دو مرحله
             

جهت آماده سازی داوطلب با پیش ساختارهای آکادمیک تست از نظیر متون شنیداری دانشگاهی ٬ واژگان آکادمیک و مهارت های فرعی تست از جمله نت برداری ٬ نقل بیان و سپس جهت آشنایی با تکنیکهای تست زنی، نکات امتحانی٬ تقویت دانش مهارت آموخته شده

طراحی شده است.
 
             <br> فراگیران این دوره ها برای رسیدن به نمره دلخواه در حداقل زمان ممکن هر یک می بایست قبل از شروع دوره برنامه ریزی شخصی و در هنگام شرکت در دوره مشاوره آموزشی دریافت نمایند.در این دوره ها نهایت سعی شده است که بسیاری از منابع استاندارد برای هر مهارت استفاده شود. از آنجایی که اکثر کتب در بازار تمامی مهارتهای گفتاری٬ شنیداری٬ خوانداری و نوشتاری را به صورت استاندارد تحت پوشش قرار نمی دهندو بسیاری از افراد با مطالعه منابع به ظاهر درست و در باطن غیر استاندارد و ضعیف به مراکز آزمون رفته و نتیجه خارج از تصوربدست می آورند.<br> از آنجایی که این امتحان تا حدودی ماهیت تخصصی  دارد برای آماده سازی داوطلبین برای تمامی مهارتها از اساتید مشخصی (و منابع جمع اوری شده) در تمامی مسیر آموزش استفاده میشود که از ابتدا تا انتهای کار ،موفقیت در آزمون ، آنها را همراهی می نمایند. طول و تعداد جلسات و روزهای هر دوره تمامی متناسب با نیاز داوطلب یا داوطلبان درابتدا تعریف می شود.
           
              </p>
    							</div>
    					</div>
    				</div>
    				<div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.3s">
    					<div class="team-wrapper" style="cursor:help">
    						<img src="images/team-img3.jpg" class="img-responsive" alt="team img 3">
    							<div class="team-des">
    								<h4 class="persian" style="direction:rtl; text-align:justify">دوره آمادگی امتحان پی تی ای</h4>
    								<span  style="text-align:center">PTE Academic</span>
    								<p class="persian courses zum" style="direction:rtl; text-align:justify;">دوره آمادگی امتحان پی تی ای آکادمیمک مختص متقاضیانی بوده که تمایل داشته برای مهاجرت استرالیا (و حتی انگلیس)اقدام نمایند. از آنجایی که نمره دلخواه در آزمون های مشابه پی تی ای ( و قابل قبول در استرالیا) کمی زمان بر و پر از فراز و نشیب می باشد، این آزمون که تمامی فرایند ارزیابی توسط کامپیوتر (وبه دور از هر گونه اعمال نظر فرد مصحح) صورت می گیرد گزینه مناسبی می باشد. دوره آمادگی این آزمون نیز در دو مرحله ارایه داده می شود. <br>
                                   
در مرحله اول متقاضی می بایست تسلط در مهارتهایی از جمله تلفظ، دیکته، روان خوانی و روان گویی (Fluency) پیدا کند. در ضمن  گرامر، دامنه لغات و مهارت شنیداری (ضرروری ترین مهارت این آزمون)خود را ارتقا می دهد. منابع مختلفی که متقاضی در این مرحله از آنها استفاده می کند به طور کامل از کتب انتشارات Pearson که بانک سوالات آزمون اصلی را هم تشکیل میدهد استفاده می شود. <br>
در دوره نهایی با در دست داشتن منابع حقیقی امتحان و بهره گیری از بسیاری از نرم افزارها و سایتهای معتبر و کارا از جمله
 <a href="https://www.apeuni.com/" title="سایت بانک سوالات آزمون" style="text-decoration:blink">ایپ یونی </a>
 متقاضیان آشنا با سوالات گوناگون روشهای مختلف برای پاسخگویی این تست می شوند. این آزمون علیرغم تنوع زیاد درنوع سوال، برای کسب نمره کامل ایده آل برای افرادی می باشد که دارای پیشینه قوی در زبان می باشند. در کنار این دوره متقاضیان نیاز مبرمی به مطالعات شخصی داشته که یکی دیگر از رموز موفقیت در این تست محسوب می شود.

</p>
    							</div>
    					</div>
    				</div>
    				
    			</div>
    		</div>
    	</section>
</template>
`});

let Pageourservices = Vue.component('Pageourservices', {template: `
<template>
<section id="service" style="direction:rtl">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12">
    					<h2 class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.5s">خدمات <span>ما</span> </h2>
    				</div>
    				<a href="http://selfstudyielts.com/test/form.php" style="text-decoration: none !important"><div class="col-md-4 wow fadeIn justified" data-wow-offset="50" data-wow-delay="0.6s" style="color:white;">
    					<i class="fa fa-laptop targetPulse" style="right:35%"></i>
    					<h4 class="targetPulse" style="right:30%">تست تعیین سطح آنلاین</h4>
    					
              <p > با شرکت در آزمون تعیین سطح می توانید سطح زبان انگلیسی خود را ارزیابی کنید. این آزمون شامل 80 سئوال 4 گزینه ای می باشد.   </p>
               <p > لطفا پیش از شرکت در آزمون به نکات زیر توجه فرمایید:</p>
	          <ul>
	            <li style="list-style-type:none" >	<i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp; مدت زمان آزمون تعیین سطح 30 دقیقه می باشد. </li>
               <li  style="list-style-type:none">	<i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp; پس از پایان آزمون تعیین سطح از طرف گروه آموزشی با  شما تماس گرفته خواهد شد تا دوره های متناسب با سطح شما به شما ارایه داده شوند. </li> 
               
               <li style="list-style-type:none">	<i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp;  از آن دسته  زبان آموزانی که تمایل به تقویت مکالمه و مهارت محاوره خود دارند بعد از این آزمون برای امتحان (مصاحبه) شفاهی دعوت به عمل می آید</li>
                              <li style="list-style-type:none">	<i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp;  از آن دسته زبان آموزانی که تمایل به شرکت در آزمونهای بین المللی دارند بعد از این آزمون برای امتحان (مصاحبه) شفاهی و آزمون نوشتاری دعوت به عمل می آید
               
               <li style="list-style-type:none">	<i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp; در صورت تمایل برای شما پس از آزمون زمان برای مشاوره، مصاحبه رایگان نیز گذاشته می شود</li>
    				</div></a>
    				<div class="col-md-4 active wow fadeIn justified" data-wow-offset="50" data-wow-delay="1.2s" style="cursor:help">
    					<i class="fa fa-book"></i>
    					<h4>دوره های زبان عادی و فشرده </h4>
    					<p>
                        آموزش زبان انگلیسی درغالب عادی، فشرده و خصوصی می باشد:
                        <ul>
	            <li style="list-style-type:none">
                         <i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp; 
                 عادی: دوره های مکالمه گروهی برپایه یادگیری زبان به صورت محاوره و آکادمیک ( کاملاً کاربردی با پوشش چهار مهارتِ گفتاری، شنیداری، خوانداری، نوشتاری ) می باشد. این روند آموزشی برای آن دسته از زبان آموزانی است که تمایل داشته تمامی سطوح آموزشی را بصورت عادی دو یا سه روزدر هفته طی کنند. </li><br>
                 <li style="list-style-type:none">
                        <i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp; فشرده: این دوره های برپایه یادگیری به صورت فشرده سه ساعت هرروز می باشد. این روند آموزشی برای آن دسته از زبان آموزانی است که زمان آزاد داشته و تمایل دارند سطوح زبان را با سرعت بیشتری طی نمایند.</li><br>
                        <li style="list-style-type:none">
                          <i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp; خصوصی: این دوره ها (همراه با ارتباط مستقیم و نظارت کامل بر فرایند) برای آن دسته از زبان آموزانی است که تمایل داشته تمامی سطوح آموزشی را سریع ترو مبتنی با نقاط ضعف و قوت خود طی نمایند و یا آن دسته که بنا به شرایط زمانی خود نمی تواند از کلاسهای مدون استفاده نمایند. </li>
                        
                         </p>
    				</div>
    				<div class="col-md-4 wow fadeIn justified" data-wow-offset="50" data-wow-delay="1.9s" style="cursor:help">
    					<i class="fa fa-plus-circle"></i>
    					<h4> خدمات پشتیبانی آموزشی  </h4>
    					<p>  پاره ای ازخدمات پشتیبانی مراکز به شرح زیر می باشد:
                        
                         <li style="list-style-type:none">
                         <i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp; 
جلسات مشاوره و ارزیابی: زبان آموزان در طی مسیر آموزشی توسط مسولین آموزش هر مرکز ارزیابی شده تا میزان پیشرفت آنها ثبت و به آنها گزارش داده شود. در صورت نیاز هم برای کلاسها و مطالعات آنها نیز برنامه ریزی مجدد صورت می گیرد. 
 </li>
                 <li style="list-style-type:none">
                        <i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp;آزمونهای آزمایشی امتحان های آکادمیک: برای آشنا شدن با شرایط و زمانبندی تست و ارزیابی شخصی از نقاط ضعف و قوت خود متقاضیان آزمونهای آیلتس و یا تافل می توانند از آزمونهای آزمایشی (رایگان) استفاده نمایند. نتیجه این آزمونها برای آنها پس آزمون تحلیل شده و در صورت نیاز رفع اشکال صورت می گیرد.</li>
                        <li style="list-style-type:none">
                          <i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp;جلسات آزمون آزمایشی: متقاضیان امتحان های آکادمیک از نظیر آیلتس و تافل توانسته در امتحانات آزمایشی در کنار اساتید بر خوردار شوند. در این نوع جلسات اساتید روند و نحوه پاسخگویی زبان آموزان را مورد نظر قرار داده و پس از پایان آزمون به آنها گزارشی از اشتباهاتشان می دهند. </li>
                        <li style="list-style-type:none">
                          <i class="fas fa-spinner fa-pulse" style="color:rgba(0,189,254,1.00)"></i>&nbsp;&nbsp;جلسات آزمون آزمایشی: متقاضیان امتحان های آکادمیک از نظیر آیلتس و تافل توانسته در امتحانات آزمایشی در کنار اساتید بر خوردار شوند. در این نوع جلسات اساتید روند و نحوه پاسخگویی زبان آموزان را مورد نظر قرار داده و پس از پایان آزمون به آنها گزارشی از اشتباهاتشان می دهند </li>
                        
                        
                        
                        
                        
                        </p>
    				</div>
    			</div>
    		</div>
    	</section>
</template>
`});


let Pageposts = Vue.component('Pageposts', {template: `
<template>
<section id="portfolio"  style="direction:rtl">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12">
    					<h2 class="wow bounceIn fadeInRight" data-wow-offset="50" data-wow-delay="0.3s">مطالب <span>آموزشی</span></h2>
    				</div>
    				 <a href="#" onclick="openNavOne()"> 
    				<div  id="x1" class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s" 
                    onclick="openNavOne()">
                        <div class="portfolio-thumb">
    					   <img src="images/improvelistening.jpg" class="img-responsive" alt="portfolio img 1">
                                <div class="portfolio-overlay text-center">
                                    <h3>  شش منبع آنلاین برای تقویت مهارت شنیداری</h3><br>
                                    <a href="#" class="btn btn-default text-center" onclick="openNavOne()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
    				</div>
    				</a>
    				 <a href="#" onclick="openNavTwo()"> 
    				<div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s" 
                    onclick="openNavTwo()">
                        <div class="portfolio-thumb">
                           <img src="images/portfolio-img2.jpg" class="img-responsive" alt="portfolio img 2">
                                <div class="portfolio-overlay text-center">
                                    <h3> استفاده از محیط اطراف برای یادگیری زبان</h3><br>
                                    <a href="#" class="btn btn-default text-center" onclick="openNavTwo()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
                    </div>
                    </a>
                     <a href="#" onclick="openNavThree()"> 
                    <div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.2s" 
                    onclick="openNavThree()" >
                        <div class="portfolio-thumb">
                           <img src="images/portfolio-img3.jpg" class="img-responsive" alt="portfolio img 3">
                                <div class="portfolio-overlay text-center">
                                    <h3>لغات و اصطلاحات مرتبط با غذا</h3><br>
                                    <a href="#" class="btn btn-default text-center" onclick="openNavThree()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
                    </div>
                    </a>
                     <a href="#" onclick="openNavFour()"> 
                    <div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.5s" onclick="openNavFour()">
                        <div class="portfolio-thumb">
                           <img src="images/portfolio-img4.jpg" class="img-responsive" alt="portfolio img 4">
                                <div class="portfolio-overlay text-center">
                                   <h3>ضرب المثل های پندآموز انگلیسی </h3><br>
                                    <a href="#" class="btn btn-default text-center" onclick="openNavFour()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
                    </div>
                    </a>
                    <a href="#" onclick="openNavFive()"> 
                    <div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.8s" 
                    onclick="openNavFive()">
                        <div class="portfolio-thumb">
                           <img src="images/portfolio-img5.jpg" class="img-responsive" alt="portfolio img 5">
                                <div class="portfolio-overlay text-center">
                                    <h3>بارم بندی سوالات آزمون<br></h3><h4> PTE-Academic</h4><br>
                                    <a href="#" class="btn btn-default text-center" onclick="openNavFive()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
                    </div>
                    </a>
                     <a href="#" onclick="openNavSix()"> 
                    <div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.8s" 
                    onclick="openNavSix()">
                        <div class="portfolio-thumb">
                           <img src="images/portfolio-img6.jpg" class="img-responsive" alt="portfolio img 6">
                                <div class="portfolio-overlay text-center">
                                    <h3>غلطهای رایج زبان انگلیسی</h3><br>
                                    <a href="#" class="btn btn-default text-center"  onclick="openNavSix()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
                    </div>
                    </a>
                    <a href="#" onclick="openNavSeven()"> 
                    <div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.6s" >
                        <div class="portfolio-thumb">
                           <img src="images/portfolio-img7.jpg" class="img-responsive" alt="portfolio img 7">
                                <div class="portfolio-overlay text-center">
                                    <h3>باورهای غلط متقاضیان آزمون آیلتس </h3><br>
                                    <a href="#" class="btn btn-default text-center" onclick="openNavSeven()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
                    </div>
                    </a>
                     <a href="#" onclick="openNavEight()"> 
                    <div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.6s" 
                    onclick="openNavEight()">
                        <div class="portfolio-thumb">
                           <img src="images/portfolio-img8.jpg" class="img-responsive" alt="portfolio img 8">
                                <div class="portfolio-overlay text-center">
                                    <h3>یادگری Collocation  در زبان انگلیسی </h3><br>
                                    <a href="#" class="btn btn-default text-center" onclick="openNavEight()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
                    </div>
    			</div>
    			</a>
    				<div class="row">
    				   <a href="#" onclick="openNavNine()"> 
    				<div  id="x1" class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.0s" 
                    onclick="openNavNine()" >
                        <div class="portfolio-thumb">
    					   <img src="images/portfolio-img9.jpg" class="img-responsive" alt="portfolio img 1">
                                <div class="portfolio-overlay text-center">
                                    <h3>  لغات و اصطلاحات مرتبط با نظر و عقیده</h3><br>
                                    <a href="#" class="btn btn-default text-center" onclick="openNavNine()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
    				</div>
    				</a>
    				<a href="#" onclick="openNavTen()"> 
    				<div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.1s" 
                    onclick="openNavTen()" >
                        <div class="portfolio-thumb">
    					   <img src="images/portfolio-img10.jpg" class="img-responsive" alt="portfolio img 1">
                                <div class="portfolio-overlay text-center">
                                    <h3>  نکاتی برای انتخاب یک معلم زبان خوب</h3><br>
                                    <a href="#" class="btn btn-default text-center" onclick="openNavTen()">برای مشاهده کلیک کنید</a>
                                </div>
                        </div>
    				</div>
    				</a>
    		</div>
</template>
`});

let Pagebacktotop = Vue.component('Pagebacktotop', {template: `
<template>
<div>
 <p id="back-top" class="wow bounceIn" data-wow-delay="0.6s">
	 <a href="" class="scrollToTop"> <i class="fa fa-angle-up scrollToTop"></i></a>
 </p>

</div>
</template>
`});

let Pagecontact = Vue.component('Pagecontact', {template: `
<template>
	<div class="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
    					<address>
    						<h3><span>با هم اکنون تماس بگیرید &#128522;</span></h3>
    						<p ><i class="fa fa-phone"></i><br>
                            <h4  class="wow bounceIn " data-wow-offset="50" data-wow-delay="0.3s">
                               <a href="mailto:education@time-gr.com?Subject=Enquiry" title="برای ارسال ایمیل مستقیم به مرکز کلیک نمایید">
                            مرکز دولت:</a>&nbsp;&nbsp;22&nbsp;57&nbsp;3536 - 22&nbsp;57&nbsp;3536</h4>
                            <h4 style="text-align:center" class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.6s">
                               <a href="mailto:education2@time-gr.com?Subject=Enquiry" title="برای ارسال ایمیل مستقیم به مرکز کلیک نمایید">
                            مرکز هروی:</a>&nbsp;&nbsp; 22&nbsp;98&nbsp;4010 - 22&nbsp;94&nbsp;8405</h4>
                            <h4  class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.9s">
                                <a href="mailto:education3@time-gr.com?Subject=Enquiry" title="برای ارسال ایمیل مستقیم به مرکز کلیک نمایید">
                            مرکز مرزداران:</a>&nbsp; 44&nbsp;38&nbsp;1728 - 44&nbsp;38&nbsp;1726 </h4>
                            <h4 style="text-align:center" class="wow bounceIn" data-wow-offset="50" data-wow-delay="1.1s">
                               <a href="mailto:education3@time-gr.com?Subject=Enquiry" title="برای ارسال ایمیل مستقیم به مرکز کلیک نمایید">
                            مرکز فرمانیه:</a>&nbsp;&nbsp; 26&nbsp;65&nbsp;9021 - 22&nbsp;24&nbsp;9851 </h4>
                                                    
                            </p>
    						<p><i class="fa fa-map-marker"></i> 
                            <h4  class="wow bounceIn" data-wow-offset="50" data-wow-delay="1.2s"> مرکز دولت:  چهارراه پاسداران، دولت، نبش مفاخری</h4>
                            <h4 style="text-align:center" class="wow bounceIn" data-wow-offset="50" data-wow-delay="1.3s">مرکز هروی:  میدان هروی، جنب بانک شهر </h4>
                            <h4  class="wow bounceIn" data-wow-offset="50" data-wow-delay="1.4s">مرکز مرزداران:   بلوار مرزداران، روبروی چهارراه آریافر    </h4>
                            <h4 style="text-align:center" class="wow bounceIn" data-wow-offset="50" data-wow-delay="1.5s">مرکز فرمانیه:  لواسان غربی، پلاک 142  </h4>
                            
                            </p>
    					</address>
    					<ul class="social-icon">
    						
    						<li><a href="http://www.t.me/timeinstitute" class="fa fa-telegram"></a></li>
    						<li><a href="https://www.instagram.com/timeeducationalgroup/" class="fa fa-instagram"></a></li><li><h4> در شبکه های اجتماعی به ما بپوندید</h4></li>
    					</ul>
    				</div>
	

</template>
`});



let Pagefooter = Vue.component('Pagefooter', {template: `
<template>
<footer id="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p title="Designed by Arash Rostami" data-toggle="tooltip" class="wow bounceIn" data-wow-offset="50" data-wow-delay="1.5s" id="copright" style="cursor:grab">
                       	   TIME Educational Group<br> 
                    
                           </p>
                    </div>
                </div>
            </div>
        </footer>

</template>
`});






  new Vue({
        el :'#app',
        data: {
            message: '<span style="color:red">Hello World!</span>',
            count:0,
            title:'this is to test',
            url: 'www.google.come',
            texts: ['one', 'two', 'three'],
            objects:[
                {body: 'first item in array', complete:false},
                {body: 'second item in array', complete:false},
                {body: 'third item in array', complete:true}
            ]
        },
        components: {
            Pageloader,
            Pagenav,
            Pagemodal,
            Pagehome,
            Pageaboutus,
            Pageourcourses,
            Pageourservices,
            Pageposts,
            Pagebacktotop,
            Pagecontact,
            Pagefooter,
            Pageheader
        },
        
        beforeCreate: function () {
            
            let allCss = document.createElement('link');   
            allCss.setAttribute('href',"https://use.fontawesome.com/releases/v5.0.7/css/all.css");
            allCss.setAttribute('rel',"stylesheet");
            document.head.appendChild(allCss);
            
            let imageCss = document.createElement('link');   
            imageCss.setAttribute('href',"images/favicon.png");
            document.head.appendChild(imageCss);
            
            let persianfontsCss = document.createElement('link');   
            persianfontsCss.setAttribute('href',"css/persianfonts.css");
            persianfontsCss.setAttribute('rel',"stylesheet");
            document.head.appendChild(persianfontsCss);
            
            let animateCss = document.createElement('link');   
            animateCss.setAttribute('href',"css/animate.min.css");
            animateCss.setAttribute('rel',"stylesheet");
            document.head.appendChild(animateCss);
            
            let bootstrapCss = document.createElement('link');   
            bootstrapCss.setAttribute('href',"css/bootstrap.min.css");
            bootstrapCss.setAttribute('rel',"stylesheet");
            document.head.appendChild(bootstrapCss);
            
            let fontawsomeCss = document.createElement('link');   
            fontawsomeCss.setAttribute('href',"css/font-awesome.min.css");
            fontawsomeCss.setAttribute('rel',"stylesheet");
            document.head.appendChild(fontawsomeCss);
            
            let templetamoCss = document.createElement('link');   
            templetamoCss.setAttribute('href',"css/templatemo-style.css");
            templetamoCss.setAttribute('rel',"stylesheet");
            document.head.appendChild(templetamoCss);
            
            let mystyleCss = document.createElement('link');   
            mystyleCss.setAttribute('href',"css/my-style.css");
            mystyleCss.setAttribute('rel',"stylesheet");
            document.head.appendChild(mystyleCss);
            
            let ajaxCss = document.createElement('link');   
            ajaxCss.setAttribute('href',"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
            ajaxCss.setAttribute('rel',"stylesheet");
            document.head.appendChild(ajaxCss);
            
            console.log('links successfully loaded ;)');
            
            let jqueryOne = document.createElement('script');   
            jqueryOne.setAttribute('src',"https://code.jquery.com/jquery-1.11.3.js");
            document.head.appendChild(jqueryOne);
            
            let jqueryTwo = document.createElement('script');   
            jqueryTwo.setAttribute('src',"https://code.jquery.com/ui/1.12.0-rc.1/jquery-ui.js");
            document.head.appendChild(jqueryTwo);
            
            let ajaxJquery = document.createElement('script');   
            ajaxJquery.setAttribute('src',"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
            document.head.appendChild(ajaxJquery);
            
            let popperJs = document.createElement('script');   
            popperJs.setAttribute('src',"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js");
            document.head.appendChild(popperJs);
            
            let bootstrapJs = document.createElement('script');   
            bootstrapJs.setAttribute('src',"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js");
            document.head.appendChild(bootstrapJs);
            
            let mainJquery = document.createElement('script');   
            mainJquery.setAttribute('src',"js/jquery.js");
            document.head.appendChild(mainJquery);
            
            let bootstrapMin = document.createElement('script');   
            bootstrapMin.setAttribute('src',"js/bootstrap.min.js");
            document.head.appendChild(bootstrapMin);
            
            let singleNav = document.createElement('script');   
            singleNav.setAttribute('src',"js/jquery.singlePageNav.min.js");
            document.head.appendChild(singleNav);
            
            let myfunctionJs = document.createElement('script');   
            myfunctionJs.setAttribute('src',"js/myFunction.js");
            document.head.appendChild(myfunctionJs);
            
            let typedJs = document.createElement('script');   
            typedJs.setAttribute('src',"js/typed.js");
            document.head.appendChild(typedJs);
            
            let wowJs = document.createElement('script');   
            wowJs.setAttribute('src',"js/wow.min.js");
            document.head.appendChild(wowJs);
            
            
            console.log('scripts successfully loaded ;)');
        },
        mounted: function () {
            let customJs = document.createElement('script');   
            customJs.setAttribute('src',"js/custom.js");
            document.head.appendChild(customJs);
           
            
            
        }
    
    });
    
  
