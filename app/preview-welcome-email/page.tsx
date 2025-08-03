'use client'

import React from 'react'
import WelcomeEmail from '@/components/WelcomeEmail'

const PreviewWelcomeEmail = () => {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f3f4f6',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: '#ec4899',
          marginBottom: '40px'
        }}>
          Welcome Email Preview
        </h1>
        
        <WelcomeEmail firstName="Sarah" />
        
        <div style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ color: '#374151', marginTop: '0' }}>
            Email Features:
          </h3>
          <ul style={{ color: '#6b7280' }}>
            <li>✅ Professional but warm tone</li>
            <li>✅ Uses first name only</li>
            <li>✅ Brand colors and styling</li>
            <li>✅ Heart icon in signature</li>
            <li>✅ Clear timeline (2 working days)</li>
            <li>✅ Dr. Salma's signature</li>
            <li>✅ Contact information in footer</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PreviewWelcomeEmail 