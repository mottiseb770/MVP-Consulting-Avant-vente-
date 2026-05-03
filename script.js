function analyser() {
  
document.getElementById("resultat").innerHTML =
"<p>⏳ Analyse IA en cours...</p>";
  const input =
document.getElementById("clientInput").value.toLowerCase();

  let analyse = "";

  if (input.includes("vpn")) {

    analyse =
    "<h2 style='color:red;'>🔴 Incident VPN Critique</h2>" +

    "<p><strong>Criticité :</strong> ÉLEVÉE</p>" +

    "<p><strong>Hypothèses :</strong><br>" +
    "- problème accès distant<br>" +
    "- problème MFA<br>" +
    "- problème firewall</p>" +

    "<p><strong>Actions recommandées :</strong><br>" +
    "- vérifier logs VPN<br>" +
    "- vérifier authentification MFA<br>" +
    "- vérifier règles firewall</p>";

  }

  else if (input.includes("serveur")) {

    analyse =
    "<h2 style='color:orange;'>🟠 Incident Serveur</h2>" +

    "<p><strong>Criticité :</strong> MOYENNE</p>" +

    "<p><strong>Hypothèses :</strong><br>" +
    "- saturation CPU<br>" +
    "- saturation RAM<br>" +
    "- problème applicatif</p>" +

    "<p><strong>Actions recommandées :</strong><br>" +
    "- vérifier monitoring<br>" +
    "- vérifier charge serveur<br>" +
    "- vérifier services Windows/Linux</p>";

  }

  else {

    analyse =
    "<h2 style='color:green;'>🟢 Analyse Générale</h2>" +

    "<p><strong>Criticité :</strong> FAIBLE</p>" +

    "<p><strong>Hypothèses :</strong><br>" +
    "- problème réseau<br>" +
    "- problème sécurité<br>" +
    "- problème infrastructure</p>";

  }
  
  setTimeout(() => {

  document.getElementById("resultat").innerHTML =
  analyse;
}