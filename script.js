const form = document.querySelector("#access-form");
const documentInput = document.querySelector("#documento");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const documentNumber = documentInput.value.trim();

  if (documentNumber === "1234") {
    result.textContent = "Membresía activa. El acceso está permitido.";
    result.className = "result success";
  } else if (documentNumber === "5678") {
    result.textContent = "Membresía vencida. El acceso no está permitido.";
    result.className = "result expired";
  } else {
    result.textContent = "Documento de ejemplo no encontrado. Prueba con 1234 o 5678.";
    result.className = "result";
  }
});
