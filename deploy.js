#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Tuittor Deployment Script');
console.log('============================\n');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.error('❌ .env file not found!');
  console.log('Please create a .env file with your Google Client ID:');
  console.log('VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here\n');
  process.exit(1);
}

// Check if Google Client ID is configured
const envContent = fs.readFileSync(envPath, 'utf8');
if (!envContent.includes('VITE_GOOGLE_CLIENT_ID=') || envContent.includes('your_google_oauth_client_id_here')) {
  console.error('❌ Google Client ID not configured!');
  console.log('Please update your .env file with your actual Google Client ID.\n');
  process.exit(1);
}

console.log('✅ Environment variables configured');

// Build the app
console.log('\n📦 Building the app...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

console.log('\n🎯 Ready to deploy!');
console.log('\nNext steps:');
console.log('1. Run: vercel');
console.log('2. Follow the prompts');
console.log('3. Add your Google Client ID to Vercel environment variables');
console.log('4. Update Google Cloud Console with your production URL');
console.log('5. Publish your OAuth consent screen');
console.log('\nSee DEPLOYMENT_GUIDE.md for detailed instructions.');
