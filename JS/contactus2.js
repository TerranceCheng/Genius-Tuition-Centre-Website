$("#submit").click(function(){

  var onlytext = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var contact = /^(\+60)*\d{8,10}$/;
  var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (document.form.uname.value == '' || 
  document.form.ucontact.value == '' || 
  document.form.uemail.value == '' ||
  document.form.ufeedback.value == '') {

      swal({
        title: "Fields Empty!",
        text: "Please check the missing field!",
        icon: "warning",
        button: "Okay",
      });

      return false;

  }

  else if (document.form.uname.value.match(onlytext) && 
  document.form.ucontact.value.match(contact) && 
  document.form.uemail.value.match(email)) {

      swal({
        title: "Successfully Submitted!",
        text: "Thank you for your feedback.\nWe will send an email to you\nafter we reviewed your feedback.",
        icon: "success",
        button: "Done",
      });

      return true;

  }

  else if (!document.form.uname.value.match(onlytext)) {

    swal({
      title: "Name is Invalid!",
      text: "Please check the invalid field!",
      icon: "warning",
      button: "Okay",
    });
    
    return false;

  }

  else if (!document.form.ucontact.value.match(contact)) {

    swal({
      title: "Phone Number is Invalid!",
      text: "Please check the invalid field! (+60XXXXXXXX)",
      icon: "warning",
      button: "Okay",
    });

    return false;

  }

  else if (!document.form.uemail.value.match(email)) {

    swal({
      title: "Email is Invalid!",
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