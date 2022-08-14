import React from 'react';

function FooterItems(props) {
    return (
        <ul>
            <li>
                <a href="" class="footerItems">{props.name}</a>
            </li>
        </ul>
    );
}

export default FooterItems;