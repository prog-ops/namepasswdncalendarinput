import React, {useState} from "react";
import {Box, Paper, TextField} from "@mui/material";
import ValidationComponent from "./ValidationComponent";
import {StyledPasswordTextField} from "./StyledPasswordTextField";

interface PasswordProps {
    lowerLetterFlag: boolean
    capsLetterFlag: boolean
    numberingFlag: boolean
    pwdLengthFlag: boolean
    specialCharFlag: boolean
}

export const PasswordValidation = (
    {
        lowerLetterFlag,
        capsLetterFlag,
        numberingFlag,
        pwdLengthFlag,
        specialCharFlag
    }: PasswordProps) => {
    return (
        <Box>
            <Box
                sx={{
                    alignItems: 'flex-start',
                    bgcolor: '#242424',
                    p: '10px 8px',
                    m: '18px 0 0 0',
                    borderRadius: '8px',
                    borderColor: 'warning',
                    borderWidth: '2px',
                    position: 'relative',
                    width: '318px',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.3)',
                }}>
                <ValidationComponent flag={lowerLetterFlag}
                                     text='Have at least one uppercase letter'/>
                <ValidationComponent flag={capsLetterFlag}
                                     text='Have at least one lowercase letter'/>
                <ValidationComponent flag={numberingFlag}
                                     text='Have at least one number'/>
                <ValidationComponent flag={specialCharFlag}
                                     text='Have at least one special character (!@#$...etc)'/>
                <ValidationComponent flag={pwdLengthFlag}
                                     text='Longer than 8 characters'/>
            </Box>
        </Box>
    )
}

export default function ThePasswordInput() {
    const [password, setPassword] = useState<string>('')
    const [pwdreq, setPwdreq] = useState<boolean>(false)
    const [checks, setChecks] = useState({
        lowerLetterCheck: false,
        capsLetterCheck: false,
        numberingCheck: false,
        pwdLengthCheck: false,
        specialCharCheck: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleFocus = () => {
        setPwdreq(true)
    }
    const handleBlur = () => {
        setPwdreq(false)
    }
    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const {value} = e.target as HTMLInputElement
        const lowerLetterCheck = /[a-z]/.test(value)
        const capsLetterCheck = /[A-Z]/.test(value)
        const numberingCheck = /[0-9]/.test(value)
        const pwdLengthCheck = value.length > 8
        const specialCharCheck = /[!@#$%^&*]/.test(value)
        setChecks({
            lowerLetterCheck,
            capsLetterCheck,
            numberingCheck,
            pwdLengthCheck,
            specialCharCheck
        })
    }

    return (<Box sx={{backgroundColor: '#181818', p: 4, m: 4}}>
        <Box>
            <StyledPasswordTextField
                inputProps={{
                    sx: {
                        "&::placeholder": {
                            color: "rgba(250, 250, 250)"
                        }
                    }
                }}
                InputLabelProps={{shrink: true}}
                sx={{width: '335px', borderColor: 'white'}}
                label='Password'
                placeholder='Password'
                id='password'
                type='password'
                value={password}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyUp={handleKeyUp}/>
        </Box>
        {
            pwdreq ? (
                <PasswordValidation
                    lowerLetterFlag={checks.lowerLetterCheck}
                    capsLetterFlag={checks.capsLetterCheck}
                    numberingFlag={checks.numberingCheck}
                    pwdLengthFlag={checks.pwdLengthCheck}
                    specialCharFlag={checks.specialCharCheck}
                />
            ) : null
        }
    </Box>)
}
