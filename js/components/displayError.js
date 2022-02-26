function displayError(message = "An error has occured. Please try again.") {
  return `<div class="error">${message}<button onClick="window.location.reload();">Reload</button></div>`;
}