import { MouseType } from "@/types/drawing-app/types"
import { MouseEvent, MutableRefObject } from "react"

//

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

//

const draw = {
    path: (
        canvasContext:CanvasRenderingContext2D,
        path: MouseType[],
        color: string = "black"
    ) => {
        canvasContext.strokeStyle = color
        canvasContext.lineWidth = 1
        canvasContext.beginPath()
        canvasContext.moveTo(...path[0])
        for (let i=1;i<path.length;i++){
            canvasContext.lineTo(...path[i])
        }
        canvasContext.lineCap="round"
        canvasContext.lineJoin="round"
        canvasContext.stroke()
    }
}

//

export const redraw = (
    canvas: HTMLCanvasElement,
    path: MouseType[]
) => {
    
    const canvasContext = canvas.getContext("2d")
    if(!canvasContext){ return }
    canvasContext?.clearRect(0,0,canvas.width,canvas.height)
    draw.path(canvasContext,path)
   
}

//
