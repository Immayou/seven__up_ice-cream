(() => {
  const refs = {
    openFranchiseBtn: document.querySelector(".franchise-modal"),
    closeFranchiseBtn: document.querySelector(".franchise-modal-close-btn"),
    franchise: document.querySelector(".franchise-backdrop"),
    body: document.querySelector("body"),
  };

  refs.openFranchiseBtn.addEventListener("click", toggleMenu);
  refs.closeFranchiseBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.franchise.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
