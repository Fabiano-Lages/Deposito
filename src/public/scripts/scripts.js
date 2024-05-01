window.addEventListener("load", () => {
});

const logar = () => {
    const lst = document.querySelectorAll("#frmLogar input");
    lst.forEach(ele => {
        ele.value = ele.value.trim();
    });
    document.getElementById("btnLogar").click();
};