import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '@components/ui/Badge'

describe('Badge Component', () => {
  test('renders with default styles', () => {
    render(<Badge>New</Badge>)
    const badgeElement = screen.getByText('New')
    expect(badgeElement).toBeDefined()
  })

  test('applies custom className', () => {
    render(<Badge className="custom-class">Sale</Badge>)
    const badgeElement = screen.getByText('Sale')
    expect(badgeElement.getAttribute('class')).toContain('custom-class')
  })

  test('passes additional props to the span element', () => {
    render(<Badge id="test-badge">Info</Badge>)
    const badgeElement = screen.getByText('Info')
    expect(badgeElement.getAttribute('id')).toBe('test-badge')
  })
})
