import React from 'react'
import { Heart } from 'lucide-react'

interface WelcomeEmailProps {
  firstName: string
}

const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ firstName }) => {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fdf2f8',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Header with Branding */}
      <div style={{
        background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
        padding: '30px 40px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '8px'
        }}>
          Dr. Salma
        </div>
        <div style={{
          fontSize: '16px',
          opacity: '0.9'
        }}>
          Women's Health & Wellness
        </div>
      </div>

      {/* Email Content */}
      <div style={{
        padding: '40px',
        backgroundColor: 'white',
        lineHeight: '1.6',
        color: '#374151'
      }}>
        <div style={{
          fontSize: '18px',
          marginBottom: '24px',
          color: '#374151'
        }}>
          Dear {firstName},
        </div>

        <div style={{
          fontSize: '16px',
          marginBottom: '20px',
          color: '#4b5563'
        }}>
          I'm so glad you reached out today.
        </div>

        <div style={{
          fontSize: '16px',
          marginBottom: '20px',
          color: '#4b5563'
        }}>
          Taking that first step—reaching out when you've been struggling—takes courage. I want you to know that I see your strength, I honor your journey, and I'm here to help you find the relief and answers you deserve.
        </div>

        <div style={{
          fontSize: '16px',
          marginBottom: '20px',
          color: '#4b5563'
        }}>
          Your body is wise, and together, we'll create the gentle, personalized care you've always deserved.
        </div>

        <div style={{
          fontSize: '16px',
          marginBottom: '32px',
          color: '#4b5563'
        }}>
          I'll contact you within 2 working days to schedule our first conversation. Until then, please know that you're not alone anymore.
        </div>

        {/* Signature Section */}
        <div style={{
          borderTop: '2px solid #f3e8ff',
          paddingTop: '24px',
          marginTop: '32px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px'
          }}>
            <Heart style={{
              width: '20px',
              height: '20px',
              color: '#ec4899'
            }} />
            <span style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#374151'
            }}>
              With warmth and hope,
            </span>
          </div>
          <div style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#ec4899',
            marginLeft: '32px'
          }}>
            Dr. Salma
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#f9fafb',
        padding: '20px 40px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#6b7280',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ marginBottom: '8px' }}>
          Dr. Salma Women's Health & Wellness
        </div>
        <div>
          Ontario, Canada • info@drsalmawomenontariohub.com
        </div>
      </div>
    </div>
  )
}

export default WelcomeEmail 