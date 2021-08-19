var nameValidated = false;
var phoneValidated = false;
var emailValidated = false;
var messageValidated = false;

$("#validationMail").keyup(function () {
  if (
    $("#validationMail")
      .val()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  ) {
    $("#mail-feed").text("Looks good!");
    $("#mail-feed").show();
    $("#mail-feed").css("class", "valid-feedback");
    emailValidated = true;
  } else {
    $("#mail-feed").show();
    $("#mail-feed").text("Invalid email address!");
    $("#mail-feed").css("class", "invalid-feedback");
    emailValidated = false;
  }
});
$("#validationMail").blur(function () {
  if ($("#validationMail").val() == "") {
    $("#mail-feed").show();
    $("#mail-feed").text("Must enter an email address");
    $("#mail-feed").css("class", "invalid-feedback");
    emailValidated = false;
  }
});

$("#validationMessage").blur(function () {
  if ($("#validationMessage").val().length < 50) {
    $("#msg-feed").show();
    $("#msg-feed").text("Message length must be at least 50 characters");
    $("#msg-feed").css("class", "invalid-feedback");
    messageValidated = false;
  } else {
    $("#msg-feed").show();
    $("#msg-feed").text("Looks good!");
    $("#msg-feed").css("class", "valid-feedback");
    messageValidated = true;
  }
  if ($("#validationMessage").val() == "") {
    $("#msg-feed").show();
    $("#msg-feed").text("You must leave a message ");
    $("#msg-feed").css("class", "invalid-feedback");
    messageValidated = false;
  }
});

$("#validationName").keyup(function () {
  if (
    $("#validationName")
      .val()
      .match(/^[A-Za-z][A-Za-z\ ]/)
  ) {
    $("#name-feed").show();
    $("#name-feed").text("Looks good!");
    $("#name-feed").css("class", "valid-feedback");
    nameValidated = true;
  } else {
    $("#name-feed").show();
    $("#name-feed").text("Invalid name! Check your input");
    $("#name-feed").css("class", "invalid-feedback");
    nameValidated = false;
  }
  $("#validationName").keypress(function (e) {
    if (
      (e.charCode >= 33 && e.charCode <= 64) ||
      (e.charCode >= 91 && e.charCode <= 96) ||
      (e.charCode >= 123 && e.charCode <= 126)
    ) {
      e.preventDefault();
    }
  });
  if ($("#validationName").val().length < 4) {
    $("#name-feed").show();
    $("#name-feed").text("Name should have at least 3 characters");
    $("#name-feed").css("class", "invalid-feedback");
    nameValidated = false;
  }
});
$("#validationName").blur(function () {
  if ($("#validationName").val() == "") {
    $("#name-feed").show();
    $("#name-feed").text("Name should not be empty!");
    $("#name-feed").css("class", "invalid-feedback");
    nameValidated = false;
  }
});
$("#validationPhone").keypress(function (e) {
  return e.charCode >= 48 && e.charCode <= 57;
});
$("#validationPhone").keyup(function (e) {
  if ($("#validationPhone").val().match(/^\d+$/)) {
    $("#phone-feed").show();
    $("#phone-feed").text("Looks good!");
    $("#phone-feed").css("class", "valid-feedback");
    phoneValidated = true;
  }
  if ($("#validationPhone").val().length < 6) {
    $("#phone-feed").show();
    $("#phone-feed").text("Phone number should have at least 6 digits!");
    $("#phone-feed").css("class", "invalid-feedback");
    phoneValidated = false;
  }
});

$("#validationPhone").blur(function () {
  if ($("#validationPhone").val() == "") {
    $("#phone-feed").show();
    $("#phone-feed").text("Phone number is required!");
    $("#phone-feed").css("class", "invalid-feedback");
    phoneValidated = false;
  }
});

$("#submit-form").submit(function (e) {
  if (
    $("#validationName").val() == "" &&
    $("#validationMail").val() == "" &&
    $("#validationPhone").val() == "" &&
    $("#validationMessage").val() == ""
  ) {
    e.preventDefault();
    $("#phone-feed").show();
    $("#name-feed").show();
    $("#mail-feed").show();
    $("#msg-feed").show();
  } else if (
    nameValidated &&
    phoneValidated &&
    emailValidated &&
    messageValidated
  ) {
    e.preventDefault();
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbz0UDOd3o2UwkTTTAwd-RjqQe7m4oeh9o5BO-JAr0YhRDTJvQQyDjZrHfU0sqc63F7p9A/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  } else {
    e.preventDefault();
  }
});
