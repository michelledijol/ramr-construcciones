// Script para optimizar imágenes de RAMR
const fs = require('fs');
const path = require('path');

console.log('🔧 Optimizando imágenes de RAMR...');

const imagesDir = path.join(__dirname, 'public', 'images');
const files = fs.readdirSync(imagesDir);

console.log('📸 Imágenes encontradas:');
files.forEach(file => {
  const filePath = path.join(imagesDir, file);
  const stats = fs.statSync(filePath);
  console.log(`- ${file}: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
});

console.log('\n✅ Para mejorar la calidad:');
console.log('1. Usa las fotos originales en alta resolución');
console.log('2. Guarda como JPG con calidad 90-95%');
console.log('3. Tamaño recomendado: 1920x1080px o mayor');
console.log('4. Evita comprimir demasiado');
