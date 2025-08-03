import { NextRequest, NextResponse } from 'next/server'
import { generateWelcomeEmailHTML, generateWelcomeEmailText } from '@/utils/welcomeEmailTemplate'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    const { name, email, phone, ageRange, hasWorkedWithNaturopath, urgencyLevel, contactMethod, message } = formData

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
      New Consultation Request

      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Age Range: ${ageRange || 'Not specified'}
      Previous Naturopath Experience: ${hasWorkedWithNaturopath || 'Not specified'}
      Urgency Level: ${urgencyLevel || 'Not specified'}
      Preferred Contact Method: ${contactMethod}
      
      Health Journey & Goals:
      ${message || 'No additional information provided'}

      ---
      This request was submitted from the Dr. Salma website contact form.
    `

         const emailData = {
       sender: {
         name: 'Dr. Salma',
         email: 'noreply@drsalmawomenontariohub.com'
       },
      to: [
        {
          email: 'info@drsalmawomenontariohub.com',
          name: 'Dr. Salma Team'
        },
        {
          email: 'ahmedanwarabdulaziz@gmail.com',
          name: 'Ahmed Anwar'
        }
      ],
      subject: `New Consultation Request - ${name}`,
      textContent: emailContent,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; margin-bottom: 20px;">New Consultation Request</h2>
          
                     <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
             <p><strong>Age Range:</strong> ${ageRange || 'Not specified'}</p>
             <p><strong>Previous Naturopath Experience:</strong> ${hasWorkedWithNaturopath || 'Not specified'}</p>
             <p><strong>Urgency Level:</strong> ${urgencyLevel || 'Not specified'}</p>
             <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
           </div>
          
                     ${message ? `
             <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
               <h3 style="color: #92400e; margin-top: 0;">Health Journey & Goals:</h3>
               <p style="white-space: pre-wrap;">${message}</p>
             </div>
           ` : ''}
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">This request was submitted from the Dr. Salma website contact form.</p>
          </div>
        </div>
      `
    }

    // Send notification email to Dr. Salma team
    const notificationResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(emailData),
    })

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.text()
      console.error('Brevo API error (notification):', errorData)
      return NextResponse.json(
        { error: 'Failed to send notification email' },
        { status: 500 }
      )
    }

    // Send welcome email to customer
    const firstName = name.split(' ')[0] // Extract first name
    const welcomeEmailData = {
      sender: {
        name: 'Dr. Salma',
        email: 'noreply@drsalmawomenontariohub.com'
      },
      to: [
        {
          email: email,
          name: name
        }
      ],
      subject: 'Welcome from Dr. Salma - Thank you for reaching out',
      textContent: generateWelcomeEmailText(firstName),
      htmlContent: generateWelcomeEmailHTML(firstName)
    }

    const welcomeResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(welcomeEmailData),
    })

    if (!welcomeResponse.ok) {
      const errorData = await welcomeResponse.text()
      console.error('Brevo API error (welcome):', errorData)
      // Don't fail the entire request if welcome email fails
      console.warn('Failed to send welcome email, but notification was sent')
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 