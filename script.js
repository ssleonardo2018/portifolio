// Currículos embutidos como data URI (base64) — funciona offline, sem depender de arquivos externos
  var premiumPdf = "data:application/pdf;base64,__PREMIUM_B64__";
  var atsPdf = "data:application/pdf;base64,__ATS_B64__";

  document.getElementById('downloadPremium').href = premiumPdf;
  document.getElementById('downloadPremium2').href = premiumPdf;
  document.getElementById('downloadATS').href = atsPdf;