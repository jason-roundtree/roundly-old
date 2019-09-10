import React, { useState } from 'react'
import { 
    InputLabel, 
    Input,
    FormControl, 
    MenuItem,
    Modal, 
    Select
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

function getModalStyle() {
    const top = 50
    const left = 50
    // TODO: Move this to function call site if you leave coordinates non-random
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 375,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid rgb(191, 192, 196)',
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

const Button = styled.button`
    margin-top: 20px;
    margin-right: 10px;
`
const PointSettingDescription = styled.p`
    font-style: italic;
    font-size: .85em;
`
const PointType = styled.span`
    font-weight: 500;
`

export default function PointSettingModal(props) {
    // const [ pointWeightInput, setpointWeightInput ] = useState('0')
    const [ values, setValues ] = React.useState({
        'pointType': props.pointType,
        'pointValue': '',
        'defaultPoint': '',
        'pointFrequency': '',
    })

    const classes = useStyles()
    const [ modalStyle ] = React.useState(getModalStyle)

    function handleChange(event) {
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value,
        }))
    }

    console.log('PointSettingModal state: ', values)
    console.log('PointSettingModal props', props)

    return (
        <Modal
            open={props.status}
            onClose={props.onClose}
            aria-labelledby="modal-title"
        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="modal-title">
                    Point Settings: <br /><PointType>{props.pointType}</PointType>
                </h2>
                <form className={classes.root}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="pointValue">
                            Point Value
                        </InputLabel>
                        <Input 
                            type="number"
                            value={values.pointValue}
                            onChange={handleChange}
                            // className={classes.}
                            name="pointValue"
                            id="pointValue"
                        />

                        <PointSettingDescription>Point Value is the amount of points a player earns for performing the corresponding action. These values can be changed from round-to-round but generally you'll probably want to keep them consistent during a league.</PointSettingDescription>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="defaultPoint">
                            Default Point for Rounds
                        </InputLabel>
                        <Select 
                            value={values.defaultPoint}
                            onChange={handleChange}
                            inputProps={{
                                name: 'defaultPoint',
                                id: 'defaultPoint'
                            }}
                        >
                            <MenuItem value={true}>True</MenuItem>
                            <MenuItem value={false}>False</MenuItem>
                        </Select>
                        <PointSettingDescription>Points set as a Default Point will automatically be set when you create a new league round. You can always edit round-level points later.</PointSettingDescription>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="pointFrequency">
                            Point Earned Frequency
                        </InputLabel>
                        <Select 
                            value={values.pointFrequency}
                            onChange={handleChange}
                            inputProps={{
                                name: 'pointFrequency',
                                id: 'pointFrequency'
                            }}
                        >
                            <MenuItem value="Once per Round">Once Per Round</MenuItem>
                            <MenuItem value="Once per Hole">Once Per Hole</MenuItem>
                            <MenuItem value="Multiple Times per Hole">Multiple Times Per Hole</MenuItem>
                        </Select>
                        <PointSettingDescription>Point Earned Frequency determines how many times a particular point can be scored for a player during a hole or round. For some examples: 'Once Per Hole' will typically be used for a player's score on a hole, such as Birdie, Par, Bogey and so on; 'Multiple Times Per Hole' could include things like Swearing, Throwing Clubs, or Finding Another Player's Ball; 'Once Per Round' could include Lowest Net Round of the Day.</PointSettingDescription>
                        <br />
                    </FormControl> 

                    <Button>Save</Button>
                    <Button 
                        type="button"
                        onClick={props.onClose}
                    >
                        Cancel
                    </Button>
                </form>
            </div>
        </Modal>
    )
}
