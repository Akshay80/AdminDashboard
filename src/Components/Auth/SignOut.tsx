import React from 'react'
import { auth } from '../../firebase'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'sticky', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0'}} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut
