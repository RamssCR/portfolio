import { type HTMLMotionProps, AnimatePresence, motion } from 'motion/react'
import { Button } from '@components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { classMerger } from '@utils/classMerger'
import { type ReactNode, useEffect } from 'react'
import { useToggle } from '@hooks/useToggle'

/**
 * Sheet component for displaying a sliding panel.
 * It supports animations and can be closed with an escape key.
 * It accepts children to render inside the panel and has customizable styles.
 */
export const Sheet = ({
  className,
  cardClassName,
  children,
  active = false,
  onClose,
}: HTMLMotionProps<'div'> & {
  cardClassName?: string
  children?: ReactNode
  active?: boolean
  onClose: () => void
}) => {
  const { off } = useToggle(active)

  useEffect(() => {
    if (!active) return
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose?.()
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose, active])

  return (
    <AnimatePresence onExitComplete={off} mode="wait">
      {active && (
        <motion.div
          key="sheet-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={classMerger(
            'bg-dark/50 fixed w-full h-svh top-0 left-0 flex items-start justify-start z-100',
            className,
          )}
        >
          <motion.div
            key="sheet-card"
            initial={{ marginLeft: '-40em' }}
            animate={{ marginLeft: '0', transition: { duration: 0.4 } }}
            exit={{ marginLeft: '-40em', transition: { duration: 0.2 } }}
            transition={{ ease: 'easeInOut' }}
            className={classMerger(
              'bg-muted-shadowed relative border border-muted/20 w-full py-4 px-4',
              'rounded-r-md max-w-[21em] sm:max-w-[23em] md:max-w-[40em] h-svh',
              cardClassName,
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={onClose}
              className="absolute top-3.5 right-2 px-2.5"
              variant="outline"
              data-testid="sheet-close-button"
            >
              <FontAwesomeIcon icon={faX} />
            </Button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
