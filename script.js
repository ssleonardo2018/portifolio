/* Currículos embutidos como data URI (base64) — funciona offline, sem depender de arquivos externos
  var premiumPdf = "data:application/pdf;base64,__PREMIUM_B64__";
  var atsPdf = "data:application/pdf;base64,__ATS_B64__";

  document.getElementById('downloadPremium').href = premiumPdf;
  document.getElementById('downloadPremium2').href = premiumPdf;
  document.getElementById('downloadATS').href = atsPdf;

*/
// 1. Função para converter a string Base64 em uma URL binária (Blob) aceita pelo navegador
function criarUrlSeguraPDF(base64String) {
  // Remove o prefixo do data URI se ele já existir na string
  const base64Limpo = base64String.replace(/^data:application\/pdf;base64,/, "");
  
  // Decodifica a string base64 em caracteres binários
  const caracteresBinarios = atob(base64Limpo);
  const numerosBinarios = new Array(caracteresBinarios.length);
  
  for (let i = 0; i < caracteresBinarios.length; i++) {
    numerosBinarios[i] = caracteresBinarios.charCodeAt(i);
  }
  
  const arrayBytes = new Uint8Array(numerosBinarios);
  
  // Cria o arquivo Blob (objeto binário puro) do PDF
  const blob = new Blob([arrayBytes], { type: 'application/pdf' });
  
  // Retorna uma URL interna do próprio navegador (ex: blob:https://...)
  return URL.createObjectURL(blob);
}

// 2. Seus currículos embutidos (Mantenha suas variáveis geradas pela página)
var premiumPdf = "data:application/pdf;base64,__PREMIUM_B64__";
var atsPdf = "data:application/pdf;base64,__ATS_B64__";

// 3. Aplique a conversão segura gerando o Blob antes de injetar no HTML
document.getElementById('downloadPremium').href = criarUrlSeguraPDF(premiumPdf);
document.getElementById('downloadPremium2').href = criarUrlSeguraPDF(premiumPdf);
document.getElementById('downloadATS').href = criarUrlSeguraPDF(atsPdf);
