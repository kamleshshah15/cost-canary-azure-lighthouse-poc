// file: src/generateDeployLink.ts
const templateUrl = 'https://kamleshshah15.github.io/cost-canary-azure-lighthouse-poc/arm-template/cost-canary-lighthouse.json'; // replace with your hosted URL
const encodedUrl = encodeURIComponent(templateUrl);

const deployLink = `https://portal.azure.com/#create/Microsoft.Template/uri/${encodedUrl}`;
console.log("👉 Deploy to Azure link:");
console.log(deployLink);
