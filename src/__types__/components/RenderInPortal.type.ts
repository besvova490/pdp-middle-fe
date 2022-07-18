import { ReactNode, CSSProperties } from "react"


export default interface RenderInPortalInterface {
  children: ReactNode,
  className?: string,
  style?: CSSProperties,
}
