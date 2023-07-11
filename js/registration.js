function validateForm(event) {
    event.preventDefault();
  

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  

    var captchaInput = document.getElementById("captcha-input").value;
    var captchaCode = document.getElementById("captcha-code").textContent;
  
    if (captchaInput !== captchaCode) {
      alert("Invalid CAPTCHA!");
      return;
    }
  

    var form = document.getElementById("registration-form");
    form.submit();
  }
  
  // Generate CAPTCHA
  function generateCaptcha() {
    var captcha = "";
    var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 6; i++) {
      captcha += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
  
    return captcha;
  }
  

  function displayCaptcha() {
    var captchaCode = generateCaptcha();
    var captchaImage = document.getElementById("captcha-image");
    captchaImage.textContent = captchaCode;
  

    var hiddenCaptchaCode = document.createElement("input");
    hiddenCaptchaCode.setAttribute("type", "hidden");
    hiddenCaptchaCode.setAttribute("id", "captcha-code");
    hiddenCaptchaCode.setAttribute("value", captchaCode);
  
    var form = document.getElementById("registration-form");
    form.appendChild(hiddenCaptchaCode);
  }

  function updateProgressBar() {
    var form = document.getElementById("registration-form");
    var progressBar = document.getElementById("progress");
    var progress = (form.elements.length / form.length) * 100;
  
    progressBar.style.width = progress + "%";
  }
  

  displayCaptcha();
  updateProgressBar();
  