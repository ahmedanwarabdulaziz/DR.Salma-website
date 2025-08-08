import { NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

export async function GET() {
  try {
    if (!BREVO_API_KEY) {
      return NextResponse.json(
        { error: 'BREVO_API_KEY not configured' },
        { status: 500 }
      )
    }

    // Test email data
    const testEmailData = {
      sender: {
        name: 'Dr. Salma Test',
        email: 'noreply@drsalmawomenontariohub.com'
      },
      to: [
        {
          email: 'info@drsalmawomenontariohub.com',
          name: 'Test Recipient'
        }
      ],
      subject: 'Test Email from Dr. Salma Website',
      textContent: 'This is a test email to verify the Brevo API integration is working correctly.',
      htmlContent: '<h1>Test Email</h1><p>This is a test email to verify the Brevo API integration is working correctly.</p>'
    }

    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(testEmailData),
    })

    if (response.ok) {
      return NextResponse.json(
        { message: 'Test email sent successfully', status: response.status },
        { status: 200 }
      )
    } else {
      const errorData = await response.text()
      return NextResponse.json(
        { error: `Brevo API error: ${response.status}`, details: errorData },
        { status: 500 }
      )
    }

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error', details: error },
      { status: 500 }
    )
  }
} 