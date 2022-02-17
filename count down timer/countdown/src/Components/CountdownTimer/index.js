import { Component } from "react";
import "./index.css";


class CountdownTimer extends Component{

    state = {
        days:0,
        hours:0,
        min:0,
        sec:0,
        eventStarted:false,
    }



    componentDidMount() {
        setInterval(() => {
           let eventDate = +new Date(this.props.date);
           let difference = eventDate - +new Date();
     if (difference < 1) {
              this.setState({ eventStarted: true });
           } else {
              let days = Math.floor(difference / (1000 * 60 * 60 * 24));
              let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
              let minutes = Math.floor((difference / (1000 * 60)) % 60);
              let seconds = Math.floor((difference / (1000)) % 60);
              this.setState({
                 hours: hours > 9 ? hours : `0${hours}`,
                 min: minutes > 9 ? minutes : `0${minutes}`,
                 sec: seconds > 9 ? seconds : `0${seconds}`,
                 days
              });
           }
        }, 1000)
     }


    eventCountDown = ()=>{
        const {hours,days,min,sec} = this.state;
        const {date} = this.props;
        console.log(date)
        return(
        <div className="countdown_block_container">
                    <div className="heading_container">
                        <h1 className="event_heading">Event is going to start in ....</h1>
                    </div>

                    <div className="time_block_container">
                        <div className="each_block_main">
                            <h1 className="d_h_m_s_text">{days}</h1>
                            <p className="d_h_m_s_info">Days</p>
                        </div>

                        <div className="each_block_main">
                            <h1 className="d_h_m_s_text">{hours}</h1>
                            <p className="d_h_m_s_info">Hours</p>
                        </div>

                        <div className="each_block_main">
                            <h1 className="d_h_m_s_text">{min}</h1>
                            <p className="d_h_m_s_info">Min</p>
                        </div>

                        <div className="each_block_main">
                            <h1 className="d_h_m_s_text">{sec}</h1>
                            <p className="d_h_m_s_info">Sec</p>
                        </div>
                    </div>
                </div>
        )
    }



    countdownEventStarted = ()=>{

        return(
            <div className="event_started_container">
                <h1> Event has been started and currently in progress</h1>
            </div>
        )
    }



    render(){
        const {date} = this.props;
        const {eventStarted} = this.state;
        return(
            <div className="countdown_timer_main_container">
                {eventStarted ? this.countdownEventStarted() : this.eventCountDown()}
                <h1>The event Start date is on : {date}</h1>
            </div>
        )
    }
}



export default CountdownTimer