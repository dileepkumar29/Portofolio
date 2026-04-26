document.addEventListener("DOMContentLoaded", function () {
    const showBtn = document.getElementById("showHackathonCerts");
    const certSection = document.getElementById("hackathonCerts");
  
    showBtn.addEventListener("click", () => {
      certSection.classList.toggle("d-none");
      if (!certSection.classList.contains("d-none")) {
        certSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });