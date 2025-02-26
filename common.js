function copyToClipboard(text) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);
    
    // Alert the copied text
    alert("Copied to clipboard!");
  }