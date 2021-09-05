import React from 'react'

export const Record = (props) => {
    const a = {
        background : props.mode === 'dark' ? 'black' : 'black',
        color: props.mode === 'dark' ? 'white' : 'white',
        height : "60px",
        borderTopLeftRadius : "8px",
        borderTopRightRadius : "8px"
    }
    return (
        <div>
            <div className="mb-5 card" style={{width: "15rem",margin: "17px 17px 17px 0",borderRadius : "10px", border : props.mode === 'light' ? '2px solid black' : '2px solid white'}}>
                <div style={a} className="card-body p-0">
                    <h4 className="card-title text-center pt-3">{props.title}</h4><hr/>
                </div>
                <p className={`card-text text-center pb-3 pt-3 text-${props.mode === 'dark' ? 'black' : 'black'}`}>{props.length}</p>
            </div>
        </div>
    )
}
