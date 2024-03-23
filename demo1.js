function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function checkEmail(email)
{	
	
  var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  
  if(pattern.test(email)) {         
	return true;
  } else {   
	return false; 
  }

}

function toggleFormVisibility()
{
  var frm_element = document.getElementById('subscribe_frm'); 
  var sub_link_element = document.getElementById('sub');
  var nosub_link_element = document.getElementById('nosub');

  var vis = frm_element.style;
  
  if(vis.display=='' || vis.display=='none') {
	  vis.display = 'block';
	  sub_link_element.style.display='none';
	  nosub_link_element.style.display='';
  } else {
	  vis.display = 'none';
	  sub_link_element.style.display='block';
	  nosub_link_element.style.display='none';
  }

}

function processFormData() 
{

  var name_element = document.getElementById('txt_name');
  var email_element = document.getElementById('txt_email');
  var gender_element = document.getElementById('slt_gender');
  var location_element = document.getElementById('slt_location');
  var enquiry_element = document.getElementById('txt_enquiry');

  var name = trim(name_element.value);
  var email = trim(email_element.value);
  var gender = gender_element.value;
  var location = location_element.value;
  var enquiry = enquiry_element.value;

  var error_message = 'The following fields had errors in them: \n\n';
  var data = 'Congratulation..!!!: \n\n';

  var error_flag = false;

  if(name == '') {
	  error_message += 'Name: Please enter your name\n';
	  error_flag = true;
  } else {
	  data += 'Your Name: ' + name + '\n';
  }

  if(!checkEmail(email)) {
	  error_message += 'Email: Please enter a valid email address\n';
	  error_flag = true;
  } else {
	  data += 'Email: ' + email + '\n';
  }

 

 
  if(enquiry == '') {
	  error_message += 'Enquiry: Please enter your enquiry\n';
	  error_flag = true;
  } else {

         data += 'Gender: ' + gender + '\n';
         data += 'Location: ' + location + '\n';
	   data += 'Enquiry: ' + enquiry;
  }


 
 

  if(error_flag) {
	  alert(error_message);
  } else {
	  alert(data);
  }

}