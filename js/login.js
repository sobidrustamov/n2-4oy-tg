document.addEventListener("DOMContentLoaded", async function () {
  let form = document.querySelector("form");
  let phone = form[0].value;
  let password = form[1].value;

  if(!phone || !password || password.length < 4)
});
