"use client"
import { MouseEventHandler, MouseEvent, useRef, useState } from "react";
import style from "./SkatchPad.module.scss"
import { MouseType } from "@/types/drawing-app/types";
import { getMouse, redraw } from "./StatchPadUtils";

const SkatchPad = () => {

    const canvasRef = useRef<null|HTMLCanvasElement>(null)
    const [path,setPath] = useState<MouseType[]>([])
    const [drawing,setDrawing] = useState<boolean>(false)

    const mouseDown = (e:MouseEvent<HTMLCanvasElement>) => {
        if(!canvasRef.current){ return }
        setDrawing( prevDrawing => true )
        const mouse = getMouse(e,canvasRef.current)
        setPath( prevPath =>[mouse] )
    }

    const mouseMove = (e:MouseEvent<HTMLCanvasElement>) => {
        if(!drawing||!canvasRef.current){ return }
        const mouse = getMouse(e,canvasRef.current)
        setPath( prevPath => [...prevPath, mouse] )
        redraw(canvasRef.current,path)
    }

    const mouseUp = (e:MouseEvent<HTMLCanvasElement>) =>{
        setDrawing( prevDrawing => false )
    }

    return (
    <>

        <canvas
        width={400}
        height={400}
        ref={canvasRef}
        className={style.canvas}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        />
        
    </>
    );
}
 
export default SkatchPad;