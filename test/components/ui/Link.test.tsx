import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Link } from '@components/ui/Link'

describe('Link component', () => {
  test('renders with default styles', () => {
    render(<Link href="https://example.com">Example Link</Link>)
    const linkElement = screen.getByText('Example Link')
    expect(linkElement).toBeDefined()
    expect(linkElement.getAttribute('class')).toContain('text-muted')
  })

  test('applies additional class names', () => {
    render(
      <Link href="https://example.com" className="custom-class">
        Custom Link
      </Link>,
    )
    const linkElement = screen.getByText('Custom Link')
    expect(linkElement).toBeDefined()
    expect(linkElement.getAttribute('class')).toContain('custom-class')
  })

  test('passes through other anchor attributes', () => {
    render(
      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        External Link
      </Link>,
    )

    const linkElement = screen.getByText('External Link')
    expect(linkElement).toBeDefined()
    expect(linkElement.getAttribute('href')).toBe('https://example.com')
    expect(linkElement.getAttribute('target')).toBe('_blank')
    expect(linkElement.getAttribute('rel')).toBe('noopener noreferrer')
  })
})
