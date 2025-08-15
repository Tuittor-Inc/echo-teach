# Google OAuth Setup Guide

## 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API (if not already enabled)

## 2. Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Choose "External" user type
3. Fill in the required information:
   - App name: "Tuittor" (or your app name)
   - User support email
   - Developer contact information
4. Add scopes: `openid`, `email`, `profile`
5. Add test users if needed

## 3. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized JavaScript origins:
   - `http://localhost:5173` (for development)
   - `http://localhost:3000` (if using different port)
   - Your production domain (when deployed)
5. Add authorized redirect URIs:
   - `http://localhost:5173` (for development)
   - Your production domain (when deployed)

## 4. Get Your Client ID

After creating the credentials, you'll get a Client ID. Copy this value.

## 5. Configure Environment Variables

Create a `.env` file in your project root and add:

```env
VITE_GOOGLE_CLIENT_ID=your_actual_client_id_here
```

Replace `your_actual_client_id_here` with the Client ID you got from step 4.

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Click the "Sign Up with Google" button
3. You should see the Google OAuth popup
4. After successful authentication, you'll see a success toast

## Troubleshooting

- Make sure your domain is added to authorized origins
- Check that the Google+ API is enabled
- Verify your client ID is correct in the `.env` file
- Check browser console for any errors
