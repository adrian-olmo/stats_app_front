import "./Gallery.scss"

//Images
import Photo01 from "../../utils/01.png"
import Photo02 from "../../utils/02.png"
import Photo03 from "../../utils/03.jpg"
import Photo04 from "../../utils/04.png"
import Photo05 from "../../utils/05.png"
import Photo06 from "../../utils/06.png"
import Photo07 from "../../utils/07.png"
import Photo08 from "../../utils/08.png"
import Photo09 from "../../utils/09.png"



export function Gallery() {

    return (
        <>
            <div className="container-all">
                <div className="slide">

                    <div className="item-slide">
                        <img src={Photo01} />
                    </div>
                    <div className="item-slide">
                        <img src={Photo02} />
                    </div>
                    <div className="item-slide">
                        <img src={Photo03} />
                    </div>
                    <div className="item-slide">
                        <img src={Photo04} />
                    </div>
                    <div className="item-slide">
                        <img src={Photo05} />
                    </div>
                    <div className="item-slide">
                        <img src={Photo06} />
                    </div>
                    <div className="item-slide">
                        <img src={Photo07} />
                    </div>
                    <div className="item-slide">
                        <img src={Photo08} />
                    </div>
                    <div className  ="item-slide">
                        <img src={Photo09} />
                    </div>
                </div>
            </div>
        </>

    )

}