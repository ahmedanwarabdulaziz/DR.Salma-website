import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

export async function GET() {
  try {
    // Check if API key is available
    if (!BREVO_API_KEY) {
      return NextResponse.json(
        { error: 'BREVO_API_KEY is not set' },
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
          email: 'ahmedanwarabdulaziz@gmail.com',
          name: 'Test Recipient'
        }
      ],
      subject: 'Test Email from Dr. Salma Website',
      textContent: 'This is a test email to verify the Brevo API integration is working.',
      htmlContent: '<h1>Test Email</h1><p>This is a test email to verify the Brevo API integration is working.</p>'
    }

    console.log('Testing Brevo API...')
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(testEmailData),
    })

    console.log('Test response status:', response.status)
    
    if (!response.ok) {
      const errorData = await response.text()
      console.error('Brevo API test error:', errorData)
      return NextResponse.json(
        { error: `Brevo API test failed: ${response.status}`, details: errorData },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Test email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Test email error:', error)
    return NextResponse.json(
      { error: 'Test email failed', details: error },
      { status: 500 }
    )
  }
} 