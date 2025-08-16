export interface EarlyAccessData {
  email: string;
  fullName?: string;
  source?: 'hero' | 'early-access-section';
  googleUserId?: string;
}

export interface EarlyAccessResponse {
  success: boolean;
  message: string;
  waitlistPosition?: number;
  totalSubscribers?: number;
}

export interface WaitlistStats {
  totalSubscribers: number;
  recentSignups: number;
  conversionRate?: number;
}

class ProductionAPI {
  private baseURL: string;
  private googleAPIKey: string;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'https://api.tuittor.com';
    this.googleAPIKey = import.meta.env.VITE_GOOGLE_API_KEY || '';
  }

  async submitEarlyAccess(data: EarlyAccessData): Promise<EarlyAccessResponse> {
    try {
      // Production API call to your backend
      const response = await fetch(`${this.baseURL}/api/waitlist/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.googleAPIKey}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error: any) {
      console.error('Production API error:', error);
      throw new Error(error.message || 'Failed to join waitlist. Please try again.');
    }
  }

  async getWaitlistStats(): Promise<WaitlistStats> {
    try {
      // Production API call to get real stats
      const response = await fetch(`${this.baseURL}/api/waitlist/stats`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.googleAPIKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error: any) {
      console.error('Failed to fetch waitlist stats:', error);
      return { totalSubscribers: 0, recentSignups: 0 };
    }
  }

  async getUserFromGoogle(userId: string): Promise<any> {
    try {
      // Get user data from Google People API
      const response = await fetch(
        `https://people.googleapis.com/v1/people/${userId}?personFields=names,emailAddresses,photos`,
        {
          headers: {
            'Authorization': `Bearer ${this.googleAPIKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Google API error! status: ${response.status}`);
      }

      const userData = await response.json();
      return userData;
    } catch (error: any) {
      console.error('Google API error:', error);
      throw new Error('Failed to fetch user data from Google');
    }
  }

  async checkUserExists(email: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}/api/waitlist/check?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.googleAPIKey}`,
        },
      });

      if (!response.ok) {
        return false;
      }

      const result = await response.json();
      return result.exists || false;
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  }

  // Google Analytics integration for tracking signups
  async trackSignupEvent(data: EarlyAccessData): Promise<void> {
    try {
      // Send to Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', 'waitlist_signup', {
          event_category: 'engagement',
          event_label: data.source,
          value: 1,
          custom_parameters: {
            email_domain: data.email.split('@')[1],
            source: data.source,
          },
        });
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }
}

export const productionAPI = new ProductionAPI();
