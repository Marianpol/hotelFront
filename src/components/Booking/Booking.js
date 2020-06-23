import React, { useState } from 'react';
import styles from './Booking.module.scss';
import Calendar from 'react-calendar';
import Confirm from '../Confirm/Confirm';
import Button from '@material-ui/core/Button';

let preReservation = [];

const Booking = ({handleClose, show, roomSize, children}) => {
    const showHideClassName = show ? styles.show_modal : styles.hide_modal;

    let [empty, setEmpty] = useState(false);
    let [confirm, setConfirm] = useState(false);
    let [label, setLabel] = useState(false);
    

    const checkAvailability = (e) => {
        let datePlusUTC = new Date(e[0].getTime() - e[0].getTimezoneOffset() * 60000);
        let dateFrom = datePlusUTC.toISOString().substr(0,10);
        let dateTo = (e[1]).toISOString().substr(0,10);
        console.log(dateFrom, dateTo);

        fetch('http://localhost:8080/findEmptyRooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({roomSize,dateFrom,dateTo}),
            })
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
                return res.json();
        })
        .then((data) => {
            if(Array.isArray(data) && data.length){
                setEmpty(true);
                setLabel(false);
                preReservation = [data[0].roomId, dateFrom, dateTo, roomSize];
            }
            else{
                setEmpty(false);
                setLabel(true);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const openConfirm = () => {
        setConfirm(true);
        // handleClose();
        // console.log(confirm);
    }

    const closeConfirm = () => {
        setConfirm(false);
        handleClose();
    }

    return (
        <div className={showHideClassName}>
            <section className={styles.modal_main}>
                {children}
                <Calendar
                    minDate={new Date()}
                    selectRange = {true}
                    onChange = {e => checkAvailability(e)}/>
                <button className={styles.closeButton} onClick={handleClose}></button>
                {label ? 
                    <p className={styles.emptyLabel}>Niestety, w wybranym terminie pokoje nie są dostępne.</p>:null}
                <div className={styles.reservationButton}>
                    {empty ?  <Button
                            variant="outlined"
                            onClick={openConfirm}>Rezerwuj</Button>:null}
                </div>
                {confirm ? <Confirm 
                    show={confirm}
                    handleConfirmClose={closeConfirm}
                    reservationData={preReservation}>
                </Confirm> : null}
            </section>
        </div>
    )
}

export default Booking;
