
				function doSubmit()
				{

					if (validateText() && validateYear() )
					{
            var mydate = new Date();
  					var n = mydate.getHours();
  					var k = mydate.getMinutes();
   document.getElementById('form-value').innerHTML += '<p>'+ n+":"+k+" "+ document.myform.fullName.value + " " + document.myform.major.value + " " + document.myform.startYear.value + " " + "</p>";
	 document.myform.fullName.value = "";
	 document.myform.major.value = "";
	 document.myform.startYear.value = "";
				  }

				 return false;

			 }
			 
// textbox validation function


			function validateText()
					 {
					var test = true;
					var notification = "";
					var studentname =  document.myform.fullName.value;
					var studentmajor = document.myform.major.value;
					if (studentname.length == 0)
					 {
// if variable length is zero, meaning space, test is set to false and notification is initialed with message
						test = false;
						notification += "Please enter the student name.\n";
					 }
				else if (studentmajor.length == 0)
					 {
						test = false;
						notification += "Please enter the student major.\n";
					 }
				   if (!test)
// printing the notification on alertbox
								{ alert(notification);
										}
						return test;
					}


			function validateYear()
			{
				var testyear = true;
				var notification ="";
				var enteredyear = document.myform.startYear.value
				if(enteredyear<2000)
				{
					testyear = false;
					notification +=" Please enter year greater than 2000"
				}
				if (!testyear)
						 {
							 alert(notification);
								 }
				 return testyear;
			 }

		
