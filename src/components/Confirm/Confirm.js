import React, { useState } from 'react';
import styles from './Confirm.module.scss';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const Confirm = ({handleConfirmClose, show, reservationData, children}) =>{
    const showHideClassName = show ? styles.show_modal : styles.hide_modal;

    let inputName = React.createRef();
    let inputSurname = React.createRef();
    let inputEmail = React.createRef();
    let [succesLabel, setLabel] = useState(false);
    let [emailLabel, setEmailLabel] = useState(false);
    let [personalLabel, setPersonalLabel] = useState(false);
    let [progress, showProgress] = useState(false);
    
    const validateEmail = (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const sendReservation = (e) => {
        e.preventDefault();
        if(!inputName.current.value || !inputSurname.current.value){
            setPersonalLabel(true);
            return;
        }
        else {
            setPersonalLabel(false);
        }
        if (!validateEmail(inputEmail.current.value)){
            setEmailLabel(true);
            return;
        }
        else {
            setEmailLabel(false);
        }
        showProgress(true);
        fetch('http://localhost:8080/addNewReservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({roomId: reservationData[0],
            reservationDateStart: reservationData[1],
            reservationDateEnd: reservationData[2],
            customerName: inputName.current.value,
            customerSurname: inputSurname.current.value,
            customerEmail: inputEmail.current.value}),
            })
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            else {
                showProgress(false);
                setLabel(true);
                setTimeout(function(){ handleConfirmClose(); }, 2000);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className={showHideClassName}>
        <section className={styles.modal_main}>
            <form onSubmit={e => sendReservation(e)}>
                <p>Finalizacja Rezerwacji</p>
                <div className={styles.formContainer}>
                    <label className={styles.formItems}>Wybrany pokój: {reservationData[3]} - Osobowy</label>
                    <label className={styles.formItems}>Data przyjazdu: {reservationData[1]}</label>
                    <label className={styles.formItems}>Data wyjazdu: {reservationData[2]}</label>
                    <label className={styles.formItems}>Imię:</label>
                    <input className={styles.formItems} type="text" ref={inputName}></input>
                    <label className={styles.formItems}>Nazwisko:</label>
                    <input className={styles.formItems} type="text" ref={inputSurname}></input>
                    <label className={styles.formItems}>Email:</label>
                    <input className={styles.formItems} type="text" ref={inputEmail}></input>
                    {personalLabel ? <p className={styles.formItems}>Proszę podać swoje dane.</p> : null}
                    {emailLabel ? <p className={styles.formItems}>Podany adres email jest nieprawidłowy.</p>: null}
                    {succesLabel ? <p className={styles.formItems}>Pokój został zarezerwowany.</p> : null}
                    <div className={styles.reservationButton}>
                        {progress ? <CircularProgress/>:null}
                        {!succesLabel && !progress ? <Button
                            variant="outlined"
                            type="submit">
                                Zarezerwuj
                            </Button>:null}
                    </div>
                </div>
            </form>
        <button
            className={styles.closeButton}
            onClick={handleConfirmClose}/>
        </section>
    </div>
    )
}

export default Confirm;