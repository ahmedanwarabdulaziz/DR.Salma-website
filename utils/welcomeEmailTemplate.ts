export const generateWelcomeEmailHTML = (firstName: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome from Dr. Salma</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #fdf2f8;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #fdf2f8; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <!-- Header with Branding -->
        <div style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%); padding: 30px 40px; text-align: center; color: white;">
          <div style="font-size: 28px; font-weight: bold; margin-bottom: 8px;">
            Dr. Salma
          </div>
          <div style="font-size: 16px; opacity: 0.9;">
            Women's Health & Wellness
          </div>
        </div>

        <!-- Email Content -->
        <div style="padding: 40px; background-color: white; line-height: 1.6; color: #374151;">
          <div style="font-size: 18px; margin-bottom: 24px; color: #374151;">
            Dear ${firstName},
          </div>

          <div style="font-size: 16px; margin-bottom: 20px; color: #4b5563;">
            I'm so glad you reached out today.
          </div>

          <div style="font-size: 16px; margin-bottom: 20px; color: #4b5563;">
            Taking that first step—reaching out when you've been struggling—takes courage. I want you to know that I see your strength, I honor your journey, and I'm here to help you find the relief and answers you deserve.
          </div>

          <div style="font-size: 16px; margin-bottom: 20px; color: #4b5563;">
            Your body is wise, and together, we'll create the gentle, personalized care you've always deserved.
          </div>

          <div style="font-size: 16px; margin-bottom: 32px; color: #4b5563;">
            I'll contact you within 2 working days to schedule our first conversation. Until then, please know that you're not alone anymore.
          </div>

          <!-- Signature Section -->
          <div style="border-top: 2px solid #f3e8ff; padding-top: 24px; margin-top: 32px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <span style="color: #ec4899; font-size: 20px;">❤️</span>
              <span style="font-size: 16px; font-weight: bold; color: #374151;">
                With warmth and hope,
              </span>
            </div>
            <div style="font-size: 18px; font-weight: bold; color: #ec4899; margin-left: 32px;">
              Dr. Salma
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 20px 40px; text-align: center; font-size: 14px; color: #6b7280; border-top: 1px solid #e5e7eb;">
          <div style="margin-bottom: 8px;">
            Dr. Salma Women's Health & Wellness
          </div>
          <div>
            Ontario, Canada • info@drsalmawomenontariohub.com
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export const generateWelcomeEmailText = (firstName: string): string => {
  return `
Dear ${firstName},

I'm so glad you reached out today.

Taking that first step—reaching out when you've been struggling—takes courage. I want you to know that I see your strength, I honor your journey, and I'm here to help you find the relief and answers you deserve.

Your body is wise, and together, we'll create the gentle, personalized care you've always deserved.

I'll contact you within 2 working days to schedule our first conversation. Until then, please know that you're not alone anymore.

With warmth and hope,
Dr. Salma

---
Dr. Salma Women's Health & Wellness
Ontario, Canada
info@drsalmawomenontariohub.com
  `.trim()
} 