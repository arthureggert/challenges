import React from 'react';
import {TextField, withStyles} from "material-ui";
import PropTypes from 'prop-types'
import styles from "./styles";

const Input = ({id, label, type, fullWidth, value, onChange, classes}) => {
    return (
        <TextField id={id} label={label} margin="normal"
                   InputProps={{classes: {inkbar: classes.inputInkbar}}}
                   InputLabelProps={{classes: {root: classes.inputLabelFocused}}}
                   fullWidth={fullWidth}
                   value={value}
                   onChange={onChange}
                   type={type}/>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['email', 'text', 'password']),
    fullWidth: PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
    fullWidth: false
};

export default withStyles(styles)(Input);
