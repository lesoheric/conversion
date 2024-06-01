function convertir() {
    const tauxDeChange = 4753,125;
    const euroInput = document.getElementById('euroInput').value;
    const montantEuros = parseFloat(euroInput);

    if (isNaN(montantEuros)) {
        document.getElementById('resultat').innerText = 'Veuillez entrer un nombre valide.';
        return;
    }

    const montantFrancsBurundais = montantEuros * tauxDeChange;
    document.getElementById('resultat').innerText = `Montant en francs burundais : ${montantFrancsBurundais.toLocaleString()} BIF`;
}
