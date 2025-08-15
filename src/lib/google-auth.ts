declare global {
  interface Window {
    google: any;
  }
}

export interface GoogleUser {
  id: string;
  name: string;
  email: string;
  picture: string;
  firstName?: string;
  lastName?: string;
}

class GoogleAuthService {
  private clientId: string;
  private isInitialized: boolean = false;

  constructor() {
    // You'll need to replace this with your actual Google OAuth client ID
    this.clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    return new Promise((resolve, reject) => {
      // Load Google Identity Services script
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.isInitialized = true;
        resolve();
      };
      script.onerror = () => {
        reject(new Error('Failed to load Google Identity Services'));
      };
      document.head.appendChild(script);
    });
  }

  async signIn(): Promise<GoogleUser> {
    // Check if client ID is configured
    if (!this.clientId) {
      throw new Error('Google Client ID not configured. Please add VITE_GOOGLE_CLIENT_ID to your .env file');
    }

    if (!this.isInitialized) {
      await this.initialize();
    }

    return new Promise((resolve, reject) => {
      if (!window.google) {
        reject(new Error('Google Identity Services not loaded'));
        return;
      }

      console.log('Initializing Google OAuth client with client ID:', this.clientId);

      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: this.clientId,
        scope: 'openid email profile',
        callback: async (response: any) => {
          console.log('Google OAuth callback received:', response);
          
          if (response.error) {
            console.error('Google OAuth error:', response.error);
            reject(new Error(`Google OAuth error: ${response.error}`));
            return;
          }

          try {
            // Get user info using the access token
            const userInfo = await this.getUserInfo(response.access_token);
            resolve(userInfo);
          } catch (error) {
            console.error('Error getting user info:', error);
            reject(error);
          }
        },
      });

      console.log('Requesting access token...');
      client.requestAccessToken();
    });
  }

  private async getUserInfo(accessToken: string): Promise<GoogleUser> {
    const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get user info');
    }

    const userData = await response.json();
    
    // Extract first and last name
    const nameParts = userData.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    return {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      picture: userData.picture,
      firstName,
      lastName,
    };
  }

  signOut(): void {
    // Google Identity Services handles sign out automatically
    // You can add any cleanup logic here
  }
}

export const googleAuth = new GoogleAuthService();
