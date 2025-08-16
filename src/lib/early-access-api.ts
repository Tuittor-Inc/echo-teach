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

class EarlyAccessAPI {
  private baseURL: string;
  private isProduction: boolean;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'https://api.tuittor.com';
    this.isProduction = import.meta.env.PROD || import.meta.env.VITE_USE_PRODUCTION_API === 'true';
  }

  async submitEarlyAccess(data: EarlyAccessData): Promise<EarlyAccessResponse> {
    try {
      // Validate email
      if (!this.isValidEmail(data.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Validate name if provided
      if (data.fullName && data.fullName.trim().length < 2) {
        throw new Error('Please enter your full name');
      }

      if (this.isProduction) {
        // Use production API
        const { productionAPI } = await import('./production-api');
        
        // Check if user already exists in production
        const userExists = await productionAPI.checkUserExists(data.email);
        if (userExists) {
          throw new Error("You've already joined the waitlist with this email!");
        }

        // Submit to production API
        const response = await productionAPI.submitEarlyAccess(data);
        
        // Track analytics event
        await productionAPI.trackSignupEvent(data);
        
        return response;
      } else {
        // Development mode - use localStorage
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Check for duplicates in development
        if (this.hasUserSignedUp(data.email)) {
          throw new Error("You've already joined the waitlist with this email!");
        }

        // Get current waitlist data for accurate positioning
        const storedData = this.getStoredEarlyAccessData();
        const currentPosition = storedData.length + 1;

        // Simulate API response
        const response: EarlyAccessResponse = {
          success: true,
          message: 'Successfully joined the waitlist! We\'ll notify you when early access is available.',
          waitlistPosition: currentPosition,
          totalSubscribers: currentPosition
        };

        // Store in localStorage for demo purposes
        this.storeEarlyAccessData(data);

        return response;
      }

    } catch (error: any) {
      throw new Error(error.message || 'Failed to join waitlist. Please try again.');
    }
  }

  async getWaitlistStats(): Promise<{ totalSubscribers: number }> {
    try {
      if (this.isProduction) {
        // Use production API
        const { productionAPI } = await import('./production-api');
        const stats = await productionAPI.getWaitlistStats();
        return { totalSubscribers: stats.totalSubscribers };
      } else {
        // Development mode - use localStorage
        await new Promise(resolve => setTimeout(resolve, 500));

        // Get stored data for demo - this is the real count
        const storedData = this.getStoredEarlyAccessData();
        const totalSubscribers = storedData.length;

        return { totalSubscribers };
      }
    } catch (error) {
      return { totalSubscribers: 0 };
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private storeEarlyAccessData(data: EarlyAccessData): void {
    try {
      const existingData = this.getStoredEarlyAccessData();
      const newEntry = {
        ...data,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };
      
      const updatedData = [...existingData, newEntry];
      localStorage.setItem('tuittor_early_access', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Failed to store early access data:', error);
    }
  }

  private getStoredEarlyAccessData(): any[] {
    try {
      const data = localStorage.getItem('tuittor_early_access');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to retrieve early access data:', error);
      return [];
    }
  }

  // Method to check if user has already signed up
  async hasUserSignedUp(email: string): Promise<boolean> {
    try {
      if (this.isProduction) {
        // Use production API
        const { productionAPI } = await import('./production-api');
        return await productionAPI.checkUserExists(email);
      } else {
        // Development mode - use localStorage
        const storedData = this.getStoredEarlyAccessData();
        return storedData.some(entry => entry.email.toLowerCase() === email.toLowerCase());
      }
    } catch (error) {
      return false;
    }
  }
}

export const earlyAccessAPI = new EarlyAccessAPI();
