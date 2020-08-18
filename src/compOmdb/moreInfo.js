
import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { doApiGet } from './services/apiService';

function MoreInfo(props) {
    const [Plot, setsPlot] = useState("")
    const [readMore, setsReadMore] = useState(false)
    const [itemMovie, setiIemMovie] = useState([])
    let item=props.item;
    useEffect(() => {
        let Mykey = "2a7a5fec";
        let url=`http://www.omdbapi.com/?apikey=${Mykey}&i=${item.imdbID}`
        doApiGet(url+"&plot=full")
        .then(data=>{
            console.log(data);
            setiIemMovie(data)
            getTheShortPlot(url)

        })

    }, [])

    const getTheShortPlot=(url)=>{
        doApiGet(url)
        .then(data=>{
            setsPlot(data.Plot);
        })
    }


    const toggle = () => {
         props.modelInfoClose();
    }
    const readMoreSwitch=()=>{
        setsReadMore(!readMore)

    }
    return (
        <div className="modalMsg-page">
            <Modal style={{height:"350px", marginTop: "20px" }} isOpen={props.seeInfo} toggle={toggle} >
                <ModalHeader style={{ display: "block" }}>{itemMovie.Title} <small style={{   float: "right" }}>{itemMovie.Released}</small></ModalHeader>
                <ModalBody>
                    <img src={itemMovie.Poster} className="card-img-top" alt="..." />
                    <br />
                   {readMore?  <p className="PlotText">{itemMovie.Plot }  <span className="readMore" onClick={readMoreSwitch}>  read less!</span> </p>
                   :  <p className="PlotText">{Plot }  <span className="readMore" onClick={readMoreSwitch}> read more...  </span> </p>}
                </ModalBody>
                <ModalFooter style={{ display: "block" }}>

                    <Button className="btnModalMsg" color="secondary" onClick={toggle}>close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default MoreInfo