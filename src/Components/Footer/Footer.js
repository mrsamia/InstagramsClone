import React from 'react';
import FooterItems from './FooterItems';
import FooterData from './FooterData';

function Footer(props) {
    return (
        <div className='container'>
            <div className='footerWraper'>
                {
                    FooterData.slice(0, props.limit-1).map((e) => {
                        return (
                            <div className='as ItemsPad'>
                                <FooterItems
                                    name={e.name}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Footer;