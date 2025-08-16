# Production Setup Guide

## Environment Variables

Add these to your `.env` file for production:

```env
# Production API Configuration
VITE_USE_PRODUCTION_API=true
VITE_API_URL=https://api.tuittor.com
VITE_GOOGLE_API_KEY=your_google_api_key_here

# Google OAuth (already configured)
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

## Google Cloud Setup

### 1. Enable Google APIs

In Google Cloud Console, enable these APIs:
- **People API** - for user data
- **Google Analytics API** - for tracking
- **Cloud Functions API** - for backend functions

### 2. Create API Key

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **API Key**
3. Restrict the key to:
   - People API
   - Google Analytics API
   - Your domain

### 3. Backend API Endpoints

Your backend should provide these endpoints:

#### POST `/api/waitlist/submit`
```json
{
  "email": "user@example.com",
  "fullName": "John Doe",
  "source": "hero",
  "googleUserId": "optional_google_user_id"
}
```

Response:
```json
{
  "success": true,
  "message": "Successfully joined the waitlist!",
  "waitlistPosition": 123,
  "totalSubscribers": 1234
}
```

#### GET `/api/waitlist/stats`
Response:
```json
{
  "totalSubscribers": 1234,
  "recentSignups": 56,
  "conversionRate": 0.15
}
```

#### GET `/api/waitlist/check?email=user@example.com`
Response:
```json
{
  "exists": true
}
```

## Google Analytics Integration

### 1. Set up Google Analytics 4

1. Create a GA4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to your HTML:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Track Events

The system automatically tracks:
- `waitlist_signup` events
- Source attribution (hero vs early-access-section)
- Email domain analytics

## Production Deployment

### 1. Build for Production
```bash
npm run build
```

### 2. Deploy to Vercel/Netlify
- Set environment variables in your hosting platform
- Deploy the built files

### 3. Verify Integration
- Test Google Sign-In
- Test waitlist signup
- Check Google Analytics events
- Verify real-time stats

## Database Schema (Example)

```sql
CREATE TABLE waitlist_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  source VARCHAR(50),
  google_user_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_waitlist_email ON waitlist_subscribers(email);
CREATE INDEX idx_waitlist_created_at ON waitlist_subscribers(created_at);
```

## Security Considerations

1. **API Key Security**: Never expose API keys in client-side code
2. **CORS**: Configure your backend to allow requests from your domain
3. **Rate Limiting**: Implement rate limiting on your API endpoints
4. **Data Validation**: Validate all input data on the backend
5. **HTTPS**: Always use HTTPS in production

## Monitoring

1. **Google Analytics**: Monitor signup conversions
2. **Error Tracking**: Set up error monitoring (Sentry, etc.)
3. **API Monitoring**: Monitor your backend API performance
4. **User Feedback**: Track user experience and feedback

## Testing Production

1. **Test Google Sign-In** with real accounts
2. **Verify waitlist stats** are accurate
3. **Check analytics events** are firing
4. **Test error handling** with invalid data
5. **Verify email validation** works correctly
