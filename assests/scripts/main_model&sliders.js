var modal = document.getElementById("Modal");
var img_1 = document.getElementById("img_1");
var img_2 = document.getElementById("img_2");
var img_3 = document.getElementById("img_3");
var img_4 = document.getElementById("img_4");
var modalImg = document.getElementById("img_main");
var captionText = document.getElementById("caption");
var head = document.getElementById("heading");
var reg1 = "®";
var res1 = reg1.sup();
var reg2 = "™";
var res2 = reg2.sup();

img_1.onclick = function(){
  modal.style.display = "block";
  $('html').css('overflow', 'hidden');
  modalImg.src = "assests/img/sliders/img1_1.jpg";
  head.innerHTML = "Android Development";
  captionText.innerHTML = "Android software development is the process by which applications are created for devices running the Android operating system. Google states that Android apps can be written using Kotlin, Java, and C++ languages using the Android software development kit (SDK), while using other languages is also possible. All non-JVM languages, such as Go, JavaScript, C, C++ or assembly, need the help of JVM language code, that may be supplied by tools, likely with restricted API support. Some programming languages and tools allow cross-platform app support (i.e. for both Android and iOS). Third party tools, development environments, and language support have also continued to evolve and expand since the initial SDK was released in 2008. The official Android app distribution mechanism to end users is Google Play; it also allows staged gradual app release, as well as distribution of pre-release app versions to testers.";
}

img_2.onclick = function(){
  modal.style.display = "block";
  $('html').css('overflow', 'hidden');
  modalImg.src = "assests/img/sliders/img2_1.png";
  head.innerHTML = "Google Cloud Platform";
  captionText.innerHTML = "Google Cloud Platform (GCP), offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.[1] Alongside a set of management tools, it provides a series of modular cloud services including computing, data storage, data analytics and machine learning.[2] Registration requires a credit card or bank account details.[3]Google Cloud Platform provides infrastructure as a service, platform as a service, and serverless computing environments.In April 2008, Google announced App Engine, a platform for developing and hosting web applications in Google-managed data centers, which was the first cloud computing service from the company. The service became generally available in November 2011. Since the announcement of the App Engine, Google added multiple cloud services to the platform.Google Cloud Platform is a part [4] of Google Cloud, which includes the Google Cloud Platform public cloud infrastructure, as well as Google Workspace (formerly G Suite[5]), enterprise versions of Android and Chrome OS, and application programming interfaces (APIs) for machine learning and enterprise mapping services.";
}

img_3.onclick = function(){
  modal.style.display = "block";
  $('html').css('overflow', 'hidden');
  modalImg.src = "assests/img/sliders/img3_1.png";
  head.innerHTML = "Flutter";
  captionText.innerHTML = "Flutter is a cross-platform UI toolkit that is designed to allow code reuse across operating systems such as iOS and Android, while also allowing applications to interface directly with underlying platform services. The goal is to enable developers to deliver high-performance apps that feel natural on different platforms, embracing differences where they exist while sharing as much code as possible.During development, Flutter apps run in a VM that offers stateful hot reload of changes without needing a full recompile. For release, Flutter apps are compiled directly to machine code, whether Intel x64 or ARM instructions, or to JavaScript if targeting the web. The framework is open source, with a permissive BSD license, and has a thriving ecosystem of third-party packages that supplement the core library functionality.";
}

img_4.onclick = function(){
  modal.style.display = "block";
  $('html').css('overflow', 'hidden');
  modalImg.src = "assests/img/sliders/img4_1.jpg";
  head.innerHTML = "UEM, Kolkata";
  captionText.innerHTML = "UEM Kolkata is established in the year 2014 by Act No 25 of 2014 of Govt of West Bengal. Being located in New Town, the Smart City of Eastern India and very near to the Netaji Subhash International Airport, the students of the University are exposed to the top corporates. UEM Kolkata has stood one out of the top 10 institutes of India including all IITs and all NITs of the country in the NPTEL program ranked by IIT Kharagpur and IIT Chennai.The IEM UEM group is an acclaimed educational group amongst the industry-centred academic training organisations of today. IEM has set sublime standards in addressing the technical and managerial resource shortage in the new era of dynamic globalisation. The IEM UEM group has risen to fame for its strong foundation in teaching and R&D in multifaceted areas. It aims to serve the future generation as well as the Nation through its commitment towards self sufficiency and unmatchable excellence.";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
  $('html').css('overflow', 'scroll');
}

$(".page").on("touchmove", function(event) {
  event.preventDefault()
});