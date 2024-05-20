import React from 'react'
import '../css/cs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default function HeadMerchant() {
    return (
        <div className='header'>

           <header class="header">
                <div class="header_left">
                   <Link className='link' to={'/'}>
                        <FontAwesomeIcon icon={faCoffee} />
                        <span class="ms-3">Marchant </span>
                    </Link>
                </div>
            </header>
        </div>
    )
}
