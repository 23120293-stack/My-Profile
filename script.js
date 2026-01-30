window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
const form = document.querySelector("form");
form.addEventListener("submit", function () {
  alert("Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.");
});
