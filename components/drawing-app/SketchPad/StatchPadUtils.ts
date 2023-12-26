import { MouseType } from "@/types/drawing-app/types"
import { MouseEvent, MutableRefObject } from "react"

export const getMouse = (
    e:MouseEvent<HTMLCanvasElement>,
    canvas: HTMLCanvasElement,
) => {

    const rect = canvas.getBoundingClientRect()
    const mouse: MouseType = [
        Math.round(e.clientX - rect.left),
        Math.round(e.clientY - rect.top)
    ]
    return mouse
    
}