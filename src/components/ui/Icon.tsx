import type { SVGProps } from 'react'
import type { IconShape } from '@/data/icons'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  shape: IconShape
  width?: number
  height?: number
}

/** Renders one of the inline brand glyphs stored in `@/data/icons`. */
export function Icon({ shape, width, height, ...rest }: IconProps) {
  return (
    <svg
      width={width ?? shape.width}
      height={height ?? shape.height}
      viewBox={shape.viewBox}
      fill={shape.fill ?? 'currentColor'}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d={shape.path} />
    </svg>
  )
}
