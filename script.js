function convertir() {
    const tauxDeChange = 6000;
    const euroInput = document.getElementById('euroInput').value;
    const montantEuros = parseFloat(euroInput);

    if (isNaN(montantEuros)) {
        document.getElementById('resultat').innerText = 'Veuillez entrer un nombre valide.';
        return;
    }

    const montantFrancsBurundais = montantEuros * tauxDeChange;
    document.getElementById('resultat').innerText = `Montant en francs burundais : ${montantFrancsBurundais.toLocaleString()} BIF`;
}
