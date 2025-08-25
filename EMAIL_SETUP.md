# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form messages to your email and phone number.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code

Replace the placeholder values in `script.js`:

```javascript
// Line 35: Replace 'YOUR_PUBLIC_KEY'
emailjs.init('your_actual_public_key_here');

// Line 75: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID'
emailjs.send('your_service_id_here', 'your_template_id_here', templateParams)
```

## Step 6: Test the Form

1. Open your website
2. Fill out the contact form
3. Submit and check if you receive the email

## Optional: SMS Notifications

To also receive SMS notifications, you can:

### Option A: Use Twilio (Paid Service)
1. Sign up for [Twilio](https://www.twilio.com/)
2. Get your phone number and credentials
3. Create a separate EmailJS template for SMS
4. Use Twilio's API to send SMS

### Option B: Use Email-to-SMS Gateway
Most carriers provide email-to-SMS gateways. For example:
- AT&T: `number@txt.att.net`
- Verizon: `number@vtext.com`
- T-Mobile: `number@tmomail.net`

Add your SMS email address as a CC in your EmailJS template.

## Troubleshooting

1. **Check Console**: Open browser dev tools and check for JavaScript errors
2. **Verify Keys**: Make sure all IDs and keys are correct
3. **Test Service**: Use EmailJS dashboard to test your service
4. **Check Spam**: Messages might go to spam folder initially

## Security Notes

- Never expose your private keys in client-side code
- Consider rate limiting to prevent spam
- Monitor your EmailJS usage (free tier has limits)

## Alternative Services

If EmailJS doesn't work for you, consider:
- **Formspree**: Simple form handling
- **Netlify Forms**: If hosting on Netlify
- **Google Forms**: Free but less customizable
- **Backend API**: Custom server solution
