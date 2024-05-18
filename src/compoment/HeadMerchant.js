import React from 'react'
import '../css/cs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default function HeadMerchant() {
    return (
        <div className='header'>
           <header className="header">
                <div className="header_left">
                   <Link className='link' to={'/'}>
                        <FontAwesomeIcon icon={faCoffee} />
                        <span className="ms-3">Marchant </span>
                    </Link>
                </div>
                <div className="header_right">
                    <FontAwesomeIcon icon={faExclamation} />
                    <span className="me-5"></span>
                </div>
            </header>
        </div>
    )
}
