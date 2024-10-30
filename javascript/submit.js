function enviarCadastro(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const numero = document.getElementById("numero").value;

    const dbSheetURL = "https://sheetdb.io/api/v1/c4xyqr57qi0ur";

    fetch(dbSheetURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            numero: numero,
        }),
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("dialogForm").close();
            document.getElementById("dialogConfirmacao").showModal();
        } else {
            alert("Erro ao enviar cadastro. Tente novamente.");
        }
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao enviar cadastro. Verifique a conexão e tente novamente.");
    });
}