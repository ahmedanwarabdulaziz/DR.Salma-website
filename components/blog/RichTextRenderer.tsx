import React from 'react'

interface RichTextRendererProps {
  content: any
}

export default function RichTextRenderer({ content }: RichTextRendererProps) {
  if (!content) {
    return (
      <div className="text-gray-500 italic">
        Content not available
      </div>
    )
  }

  // If content is a string, render it directly
  if (typeof content === 'string') {
    return (
      <div className="prose prose-lg max-w-none">
        <div 
          className="text-gray-700 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    )
  }

  // If content is an object (rich text), render it
  if (typeof content === 'object' && content.content) {
    return renderRichTextContent(content)
  }

  // Fallback for other content types
  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-gray-700 leading-relaxed space-y-6">
        <p className="text-lg">
          {JSON.stringify(content, null, 2)}
        </p>
      </div>
    </div>
  )
}

function renderRichTextContent(content: any): JSX.Element {
  if (!content.content || !Array.isArray(content.content)) {
    return <div>No content available</div>
  }

  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-gray-700 leading-relaxed space-y-6">
        {content.content.map((node: any, index: number) => {
          return renderNode(node, index)
        })}
      </div>
    </div>
  )
}

function renderNode(node: any, index: number): JSX.Element | null {
  if (!node.content) return null

  const children = node.content.map((child: any, childIndex: number) => {
    return renderInlineNode(child, childIndex)
  })

  switch (node.nodeType) {
    case 'paragraph':
      return (
        <p key={index} className="text-lg leading-relaxed">
          {children}
        </p>
      )
    
    case 'heading-1':
      return (
        <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          {children}
        </h1>
      )
    
    case 'heading-2':
      return (
        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
          {children}
        </h2>
      )
    
    case 'heading-3':
      return (
        <h3 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">
          {children}
        </h3>
      )
    
    case 'heading-4':
      return (
        <h4 key={index} className="text-lg font-bold text-gray-900 mt-3 mb-2">
          {children}
        </h4>
      )
    
    case 'heading-5':
      return (
        <h5 key={index} className="text-base font-bold text-gray-900 mt-2 mb-1">
          {children}
        </h5>
      )
    
    case 'heading-6':
      return (
        <h6 key={index} className="text-sm font-bold text-gray-900 mt-2 mb-1">
          {children}
        </h6>
      )
    
    case 'unordered-list':
      return (
        <ul key={index} className="list-disc list-inside space-y-2 my-4">
          {children}
        </ul>
      )
    
    case 'ordered-list':
      return (
        <ol key={index} className="list-decimal list-inside space-y-2 my-4">
          {children}
        </ol>
      )
    
    case 'list-item':
      return (
        <li key={index} className="text-lg">
          {children}
        </li>
      )
    
    case 'blockquote':
      return (
        <blockquote key={index} className="border-l-4 border-pink-200 pl-4 italic text-gray-600 my-4">
          {children}
        </blockquote>
      )
    
    case 'hr':
      return (
        <hr key={index} className="my-8 border-gray-200" />
      )
    
    default:
      return (
        <div key={index} className="text-lg">
          {children}
        </div>
      )
  }
}

function renderInlineNode(node: any, index: number): JSX.Element | string {
  if (typeof node === 'string') {
    return node
  }

  const children = node.content ? node.content.map((child: any, childIndex: number) => {
    return renderInlineNode(child, childIndex)
  }) : node.value || ''

  switch (node.nodeType) {
    case 'text':
      let text = children
      
      // Apply marks (bold, italic, etc.)
      if (node.marks) {
        node.marks.forEach((mark: any) => {
          switch (mark.type) {
            case 'bold':
              text = <strong key={index}>{text}</strong>
              break
            case 'italic':
              text = <em key={index}>{text}</em>
              break
            case 'underline':
              text = <u key={index}>{text}</u>
              break
            case 'code':
              text = <code key={index} className="bg-gray-100 px-1 rounded">{text}</code>
              break
          }
        })
      }
      
      return text
    
    case 'hyperlink':
      return (
        <a 
          key={index}
          href={node.data?.uri || '#'}
          className="text-pink-600 hover:text-pink-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    
    default:
      return <span key={index}>{children}</span>
  }
}
