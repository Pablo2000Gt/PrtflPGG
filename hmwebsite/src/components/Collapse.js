import React, { useState } from 'react';

const Collapse = (props) =>{
    const [open,setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!open);
    };

    return(
        <div>
            <button onClick={toggle}>{props.label}</button>
            {open && (
                <div className={open ? "content-open" : "content-parent"}>
                    <div className='content'>{props.children}</div>
                </div>
            )}
        </div>
    )
}
export default Collapse;