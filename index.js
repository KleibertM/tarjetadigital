function openWhatsApp() {
  window.open("https://wa.me/51907488194", "_blank");
}

function callPhone() {
  window.location.href = "tel:+51907488194";
}

function requestProposal() {
  window.location.href = "mailto:info@marketeando.pe";
}

function downloadVcard() {
  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:Donny Escalante
ORG:Marketeando.pe
TITLE:Manager
TEL:+51907488194
EMAIL:info@marketeando.pe
END:VCARD
  `;

  const blob = new Blob([vcard], { type: "text/vcard" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Donny_Escalante.vcf";
  link.click();
}

function shareCard() {
  if (navigator.share) {
    navigator.share({
      title: "Donny Escalante",
      text: "Estrategia digital para marcas que quieren crecer",
      url: window.location.href
    });
  } else {
    alert("Tu navegador no soporta compartir.");
  }
}
