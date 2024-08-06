function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;

    var url = "https://wa.me/5587999676546?text=" + "Bom dia! entrei em contato pelo site, e estou precisando de uma consultoria." + "%0a"
        + "%0a"
        + "Nome: " + nome + "%0a"
        + "Mensagem: " + mensagem;

    window.open(url, "_blank");

    return false;
}