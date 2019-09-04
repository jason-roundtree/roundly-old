import React from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function rand() {
    return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
    const top = 50 + rand()
    const left = 50 + rand()
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}
  
const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
    },
}))

export default function PointSettingModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    console.log(props)
    return (
        <Modal
            open={props.status}
            onClose={props.onClose}
            aria-labelledby="modal-title"
        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="modal-title">Modal Active</h2>
            </div>
        </Modal>
    )
}
