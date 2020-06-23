import React from 'react';
import styles from './Room.module.scss';
import Booking from '../Booking/Booking';
import Button from '@material-ui/core/Button';

let chosenRoom = 0;

class Room extends React.Component{
    state = {
        showBookingComponent: false,
    }

    showBooking(e){
        chosenRoom = e.currentTarget.id;
        this.setState({
            showBookingComponent: true,
        });
    }

    hideBooking = (val) => {
        this.setState({
            showBookingComponent: false,
        });
    }
    
    render (){
        return(
            <div className={styles.room}>
                <img src={this.props.img} alt={`Room ${this.props.id}`}/>
                {this.props.children}
                <Button
                variant="outlined"
                id = {this.props.id}
                className={styles.book__button}
                onClick = {e => this.showBooking(e)}>Rezerwuj</Button>
                {this.state.showBookingComponent ? 
                <Booking 
                    show={this.state.showBookingComponent}
                    handleClose={this.hideBooking}
                    roomSize = {chosenRoom}>
                        <p>Proszę zaznaczyć okres rezerwacji</p>
                </Booking> : null}
            </div>
        );
    }
}

export default Room;