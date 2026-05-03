function analyser() {

  const input =
document.getElementById("clientInput").value;

  document.getElementById("resultat").innerHTML =
  "<h2>Analyse IA</h2>" +
  "<p><strong>Contexte :</strong><br>" + input + "</p>" +
  "<p><strong>Hypothèses :</strong><br>" +
  "- problème réseau<br>" +
  "- problème VPN<br>" +
  "- saturation serveur</p>";
}