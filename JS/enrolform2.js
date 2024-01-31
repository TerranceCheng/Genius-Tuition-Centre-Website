$("#submit").click(function(){

  var onlytext = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var icno = /^\d{6}-\d{2}-\d{4}$/;
  var contact = /^(\+60)*\d{8,10}$/;

  if (document.form.sname.value == '' || 
  document.form.pname.value == '' || 
  document.form.bdate.value == '' || 
  document.form.poccupation.value == '' || 
  document.form.sicno.value == '' || 
  document.form.picno.value == '' || 
  document.form.scontact.value == '' || 
  document.form.pcontact.value == '' || 
  document.form.school.value == '' ||
  document.form.sdate.value == '' ||
  document.form.edate.value == '') {

      swal({
        title: "Fields Empty!",
        text: "Please check the missing field!",
        icon: "warning",
        button: "Okay",
      });

      return false;

  }

  else if (document.form.sname.value.match(onlytext) && 
  document.form.pname.value.match(onlytext) && 
  document.form.bdate.value != '' && 
  document.form.poccupation.value.match(onlytext) && 
  document.form.sicno.value.match(icno) && 
  document.form.picno.value.match(icno) && 
  document.form.scontact.value.match(contact) && 
  document.form.pcontact.value.match(contact) && 
  document.form.school.value.match(onlytext) &&
  document.form.sdate.value != '' && 
  document.form.edate.value != '') {

      swal({
        title: "Successfully Submitted!",
        text: "Please allow up to 3 working days\nfor us to proceed your registration.",
        icon: "success",
        button: "Done",
      });

      return true;

  }

  else if (!document.form.sname.value.match(onlytext)) {

      swal({
        title: "Student Name is Invalid!",
        text: "Please check the invalid field!",
        icon: "warning",
        button: "Okay",
      });
      
      return false;

  }

  else if (!document.form.pname.value.match(onlytext)) {

    swal({
      title: "Parents Name is Invalid!",
      text: "Please check the invalid field!",
      icon: "warning",
      button: "Okay",
    });
    
    return false;

  }

  else if (!document.form.poccupation.value.match(onlytext)) {

    swal({
      title: "Parents Occupation is Invalid!",
      text: "Please check the invalid field!",
      icon: "warning",
      button: "Okay",
    });

    return false;

  }

  else if (!document.form.sicno.value.match(icno)) {

    swal({
      title: "Student IC is Invalid!",
      text: "Please check the invalid field! (XXXXXX - XX - XXXX)",
      icon: "warning",
      button: "Okay",
    });

    return false;

  }

  else if (!document.form.picno.value.match(icno)) {

    swal({
      title: "Parents IC Invalid!",
      text: "Please check the invalid field! (XXXXXX - XX - XXXX)",
      icon: "warning",
      button: "Okay",
    });

    return false;

  }

  else if (!document.form.scontact.value.match(contact)) {

    swal({
      title: "Student Contact is Invalid!",
      text: "Please check the invalid field! (+60XXXXXXXX)",
      icon: "warning",
      button: "Okay",
    });

    return false;

  }

  else if (!document.form.pcontact.value.match(contact)) {

    swal({
      title: "Parents Contact is Invalid!",
      text: "Please check the invalid field! (+60XXXXXXXX)",
      icon: "warning",
      button: "Okay",
    });

    return false;

  }

  else if (!document.form.school.value.match(onlytext)) {

    swal({
      title: "School Name is Invalid!",
      text: "Please check the invalid field!",
      icon: "warning",
      button: "Okay",
    });

    return false;

  }


  else {

    swal({
      title: "Error!",
      text: "Please reload this page!",
      icon: "error",
      button: "Okay",
    });

    return false;

  }

});