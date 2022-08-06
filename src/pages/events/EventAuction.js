import { useEffect } from "react";
import EventsNavbar from "../../components/EventsNavbar";
import "../../style/events/event-auction.css"

const events = [
    {
        title: "PAPUGA #1"
    },
    {
        title: "PAPUGA #2"
    },
    {
        title: "PAPUGA #3"
    },
    {
        title: "PAPUGA #4"
    },
    {
        title: "PAPUGA #5"
    },
    {
        title: "PAPUGA #6"
    },
    {
        title: "PAPUGA #7"
    },
    {
        title: "PAPUGA #8"
    },
    {
        title: "PAPUGA #9"
    },
    {
        title: "PAPUGA #10"
    },
    {
        title: "PAPUGA #11"
    },
    {
        title: "PAPUGA #12"
    },
    {
        title: "PAPUGA #13"
    },
    {
        title: "PAPUGA #14"
    },
    {
        title: "PAPUGA #15"
    },
    {
        title: "PAPUGA #16"
    },
    {
        title: "PAPUGA #17"
    },
    {
        title: "PAPUGA #18"
    },
    {
        title: "PAPUGA #19"
    },
    {
        title: "PAPUGA #20"
    }
]


const EventAuction = (props) => {

    const renderEvents = () => {
        const eventsList = events.map((event) => {
            return(
                <button className="NFT-container">
                    <img src="http://drive.google.com/uc?export=view&id=1kMgOWJYIf6Dd-EWz9nJR0k9d3DNiYMCh"  className="NFT-preview"></img>
                    <h2 className="NFT-title">{event.title}</h2>
                    <div className="NFT-price-container">
                        <img alt="Ehtereum" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png" className="cryptocurrency-icon"></img>
                        <div className="NFT-price">0.1</div>
                    </div>
                </button>
            )
        })
        return (
            <div className="events-container-event">
                {eventsList}
            </div>
        )
    }

    return(
        <div className="event-page">
            <EventsNavbar openPage="events"/>
            <div className="event-background-image"></div>
            <div className="background-image-dim"></div>
            <div className="auction-about-container">
                <div className="auction-about">
                    <h1 className="auction-header desktop">MATA X VICTOR GALLERY “PAPUGA”</h1>
                    <p className="auction-about-text desktop">Unforgetable event by one of the most well known young stars in Poland. Collect the entire chorus of his most popular song “Papuga” and <b>meet him on the backstage!</b></p>
                </div>
                <div className="auction-info">
                    <div className="auction-info-headers">
                        <p className="auction-info-header desktop">SUPPLY: </p>
                        <p className="auction-info-header desktop">ENDS IN: </p>
                    </div>
                    <div className="auction-info-values">
                        <p className="auction-info-value desktop">20</p>
                        <p className="auction-info-value timer">01d 12h 23m 32s</p>
                    </div>
                </div>
            </div>
            {renderEvents()}
        </div>
    )
}

export default EventAuction;