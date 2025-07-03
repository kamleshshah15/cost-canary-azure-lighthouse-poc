// file: src/generateDeployLink.ts
const templateUrl = 'https://yourdomain.com/arm-template/cost-canary-lighthouse.json'; // replace with your hosted URL
const encodedUrl = encodeURIComponent(templateUrl);

const deployLink = `https://portal.azure.com/#create/Microsoft.Template/uri/${encodedUrl}`;
console.log("👉 Deploy to Azure link:");
console.log(deployLink);
