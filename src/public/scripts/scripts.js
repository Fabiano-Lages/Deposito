window.addEventListener("load", () => {
    document.querySelector("#frmProcurar").addEventListener("submit", (ev) => {
        if(!document.querySelector("#txtProcurar").value) {
            ev.preventDefault();
            alert("Preencha algo antes de clicar no botão procurar");
        }
    });
});