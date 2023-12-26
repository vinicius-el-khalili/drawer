import SkatchPad from "@/components/drawing-app/SketchPad/SkatchPad";
import style from "@/sass/app/drawing-app/drawing-app.module.scss"

const DrawingAppPage = () => {

    

    return (
    <div className={style.DrawingPage}>
        <h1>Data Creation</h1>
        <SkatchPad/>
    </div>
    );
}
 
export default DrawingAppPage;

