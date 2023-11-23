import React, { useEffect, useRef, ReactElement } from 'react'


interface SmoothProps {
    children: ReactElement
}

export default function Smooth({ children }: SmoothProps): ReactElement {

    const smooth = useRef<HTMLDivElement>(null)
    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
      }, [])

  return React.cloneElement(children, { ref : smooth})
}
