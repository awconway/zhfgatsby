import React from 'react'
import classNames from 'classnames'

import IconCheck from '../../static/icon_check.svg'
import classes from '../styles/button.module.sass'

export const Button = ({ Component = 'button', children, onClick, variant, small, className }) => {
    const buttonClassNames = classNames(classes.root, className, {
        [classes.primary]: variant === 'primary',
        [classes.secondary]: variant === 'secondary',
        [classes.small]: !!small,
    })
    return (
        <Component className={buttonClassNames} onClick={onClick}>
            {children}
        </Component>
    )
}


