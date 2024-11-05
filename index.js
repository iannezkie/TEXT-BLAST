document.getElementById("message").addEventListener("input", function() {
    const maxLength = 150;
    const currentLength = this.value.length;
    const remaining = maxLength - currentLength;
    
    document.getElementById("charCount").textContent = `${remaining} characters remaining`;
  });
  