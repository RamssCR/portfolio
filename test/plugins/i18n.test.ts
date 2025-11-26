import { describe, expect, test } from 'vitest'
import i18n from '@plugins/i18n'

describe('i18n', () => {
  test('se inicializa correctamente con los valores esperados', () => {
    expect(i18n.options.load).toEqual('languageOnly')
    expect(i18n.options.fallbackLng).toEqual(['en'])
    expect(i18n.options.debug).toEqual(true)
    expect(i18n.options.preload).toEqual(['es', 'en'])
  })

  test('configura debug a true cuando DEV es true', () => {
    expect(i18n.options.debug).toEqual(true)
  })
})
