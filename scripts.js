
function setClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "display: hidden;";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
</script>



<script>
	function directory(){
		var varein = document.getElementById("dirForm").value.trim();
		window.open('http://directory.intra.bt.com/cgi/startup.cgi?search_for=' + varein);
		document.forms["directorysearch"].reset()}
</script>


<script>
	function fixit(){
		var varein2 = document.getElementById("fixitForm").value.trim();
		window.open('https://fixit.bt.com/pages/search.aspx?k=' + varein2);
		document.forms["fixitsearch"].reset()}
</script>


<script>
	function google(){
		var varquery = document.getElementById("googleForm").value.trim();
		window.open('https://www.google.com/search?q=' + varquery);
		document.forms["googlesearch"].reset()}
</script>



<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script type="text/javascript">
		$(document).ready(function(){ 

// Light blue

		$('#theme1').click(function(){
		$('body').css({backgroundColor: "#abdcff"});
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans, li a .dropbtn').css({backgroundColor: "#7ec0ee"});  
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({border: "12px solid #ebeff5"});
		$('.button, .button3, .button2').css({backgroundColor: "#a4d2f3"});
		$('.button').css({color: "#fff"});
		$('.button, button3').css({border: "3px solid #ebeff5"});
		$('#pDirectory, #pFix, a').css({color: "#fff"});
		$('.dropdown-content a').css({color: "#397099"});
$('#theme1').css({border: "4px solid #fff", opacity: "1"}); 
$('#theme2, #theme3, #theme4, #theme5, #theme6, #theme7').css({border: "2px solid #fff", opacity: "0.4"});
})

// Dark blue

		$('#theme2').click(function(){
		$('body').css({backgroundColor: "#204060"});
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({backgroundColor: "#336699"});  
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({border: "12px solid #a4d2f3"});
		$('.button, .button3, .button2').css({backgroundColor: "#204060"});
		$('.button').css({color: "#fff"});
		$('.button, button3').css({border: "3px solid #a4d2f3"});
		$('#pDirectory, #pFix, a').css({color: "#fff"});
		$('.dropdown-content a').css({color: "#204060"});
$('#theme2').css({border: "4px solid #fff", opacity: "1"}); 
$('#theme1, #theme3, #theme4, #theme5, #theme6, #theme7').css({border: "2px solid #fff", opacity: "0.4"});
})

// Pink

		$('#theme3').click(function(){
		$('body').css({backgroundColor: "#cc0099"});
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({backgroundColor: "#ff66d9"});  
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({border: "12px solid #efb2e0"});
		$('.button, .button3, .button2').css({backgroundColor: "#b300b3"});
		$('.button').css({color: "#fff"});
		$('.button, button3').css({border: "3px solid #ebeff5"});
		$('#pDirectory, #pFix, a').css({color: "#fff"});
		$('.dropdown-content a').css({color: "#6b006b"});
$('#theme3').css({border: "4px solid #fff", opacity: "1"}); 
$('#theme1, #theme2, #theme4, #theme5, #theme6, #theme7').css({border: "2px solid #fff", opacity: "0.4"});
})

// Green

		$('#theme4').click(function(){
		$('body').css({backgroundColor: "#66B032"});
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({backgroundColor: "#C0DF81"});  
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({border: "12px solid #d1e7c1"});
		$('.button, .button3, .button2').css({backgroundColor: "#66B032"});
		$('.button').css({color: "#fff"});
		$('.button, button3').css({border: "3px solid #ebeff5"});
		$('#pDirectory, #pFix, a').css({color: "#375f1b"});
		$('.dropdown-content, a').css({color: "#375f1b"});
		$('li a, dropdown').css({color: "#375f1b"});
$('#theme4').css({border: "4px solid #fff", opacity: "1"}); 
$('#theme1, #theme2, #theme3, #theme5, #theme6, #theme7').css({border: "2px solid #fff", opacity: "0.4"});
})

// Orange

		$('#theme5').click(function(){
		$('body').css({backgroundColor: "#FB9902"});
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({backgroundColor: "#fdd6aa"});  
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({border: "12px solid #975B02"});
		$('.button, .button3, .button2').css({backgroundColor: "#FB8604"});
		$('.button').css({color: "#fff"});
		$('.button, button3').css({border: "3px solid #975B02"});
		$('#pDirectory, #pFix, a').css({color: "#975B02"});
		$('.dropdown-content, a').css({color: "#975B02"});
		$('li a, dropdown').css({color: "#975B02"});
$('#theme5').css({border: "4px solid #fff", opacity: "1"}); 
$('#theme1, #theme2, #theme3, #theme4, #theme6, #theme7').css({border: "2px solid #fff", opacity: "0.4"});
})

// Red
		$('#theme6').click(function(){
		$('body').css({backgroundColor: "#8a121f"});
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({backgroundColor: "#8a121f"});  
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({border: "12px solid #d8cdcf"});
		$('.button, .button3, .button2').css({backgroundColor: "#c25f69"});
		$('.button').css({color: "#fff"});
		$('.button, button3').css({border: "3px solid #d8cdcf"});
		$('#pDirectory, #pFix, a').css({color: "#d8cdcf"});
		$('.dropdown-content a').css({color: "#8a121f"});

$('#theme6').css({border: "4px solid #fff", opacity: "1"}); 
$('#theme1, #theme2, #theme3, #theme4, #theme5, #theme7').css({border: "2px solid #fff", opacity: "0.4"});
})

// Black
		$('#theme7').click(function(){
		$('body').css({backgroundColor: "#000"});
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({backgroundColor: "#313131"});  
		$('.maindiv, .google, .directory, .other, .sidemenu, ul.trans').css({border: "12px solid #a5a5a5"});
		$('.button, .button3, .button2').css({backgroundColor: "#000"});
		$('.button').css({color: "#fff"});
		$('.button, button3').css({border: "3px solid #a5a5a5"});
		$('#pDirectory, #pFix, a').css({color: "#fff"});
		$('.dropdown-content a').css({color: "#313131"});

$('#theme7').css({border: "4px solid #fff", opacity: "1"}); 
$('#theme1, #theme2, #theme3, #theme4, #theme5, #theme6').css({border: "2px solid #fff", opacity: "0.4"});
})



})
</script>


<script type="text/javascript">
		$(document).ready(function(){ 
		$('#corner').hover(function() {
			$('#sms').css({fontSize: "48px"});
			}, function() {
			$('#sms').css({fontSize: "24px"});
});
})
</script>

<script type="text/javascript">
		$(document).ready(function(){ 
		$('#corner1').hover(function() {
			$('#kbd').css({fontSize: "48px"});
			}, function() {
			$('#kbd').css({fontSize: "24px"});
});
})