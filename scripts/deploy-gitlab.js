// GitLab Pages deployment script
// This script is used for manual deployment to GitLab Pages

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting GitLab Pages deployment...');

try {
  // Clean and build the project
  console.log('📦 Building the project...');
  execSync('pnpm run clean && pnpm run build', { stdio: 'inherit' });

  // Create public directory if it doesn't exist
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Copy build files to public directory
  console.log('📁 Copying build files to public directory...');
  execSync('cp -r build/* public/', { stdio: 'inherit' });

  console.log('✅ GitLab Pages deployment preparation complete!');
  console.log('📝 Next steps:');
  console.log('   1. Commit and push your changes to GitLab');
  console.log('   2. The GitLab CI/CD pipeline will automatically deploy to GitLab Pages');
  console.log('   3. Your site will be available at: https://yourusername.gitlab.io/yourprojectname');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
