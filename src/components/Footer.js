import React from 'react'

export const Footer = (props) => {
    return (
        <>
            <footer style={{background : props.mode === 'light' ? "#ff8c00ad" : "#212529"}} className={`foot page-footer font-small blue mt-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="footer-copyright text-center py-3">© 2021 Copyright by Adil Khan
                </div>
            </footer>
        </>
    )
}
