//Camelia- event listner for the sign up form in Homepage
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modalForm");
openModalButton.addEventListener("click", () => {
	modal.style.display = "flex";
});
closeModalButton.addEventListener("click", () => {
	modal.style.display = "none";
});
