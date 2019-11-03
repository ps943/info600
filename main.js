
		function doSubmit()
			{
			if (validateText() && validateYear() )
				{
            			var mydate = new Date();
  				var n = mydate.getHours();
  				var k = mydate.getMinutes();
   				document.getElementById('form-value').innerHTML += '<p>'+ n+":"+k+" - "+ document.myform.fullName.value + " , " + document.myform.major.value + " , " + document.myform.startYear.value + "  " + "</p>";
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
// if variable length is zero, meaning space, alert box is pop-up for entering student name or major 
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
						{ 
							alert(notification);
						}
						return test;
				}

// Validating the year less than 2000 or more than 4 digits

		function validateYear()
			{
				var testyear = true;
				var notification ="";
				var enteredyear = document.myform.startYear.value
				if(enteredyear<2000)
				{
					testyear = false;
					notification +=" Error : Entered year "+enteredyear+" is less than 2000 "
				}
				else if (enteredyear.length>4)
               			 {
                			testyear = false;
					notification +=" Please enter a valid year"
               			 }
				if (!testyear)
						 {
						alert(notification);
								 }
				 return testyear;
			 }

		
