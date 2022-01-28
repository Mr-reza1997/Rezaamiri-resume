import React from 'react';
import s from './footer.module.scss';
import Icon from '../../../assets/svg/aducat.gif';
import IconLan from '../../../assets/svg/langu.gif';
const Footer = () => {
    return (
        <>
            <div className={s.container}>
                <div>
                    <div className={s.head}>
                        <img src={Icon} alt="icon" />
                        <h2>EDUCATION</h2>
                    </div>
                    <hr />
                    <h5>
                        Payam Noor UNIVERSITY
                        <small>
                        <br /> 'Bachelor's degree'
                        <br /> Accounting Course <br />
                        2017- 2020
                        </small>
                    </h5>
                </div>
                <div>
                    <div className={s.head}>
                        <img src={IconLan} alt="icon" />
                        <h2>LANGUAGE</h2>
                    </div>

                    <hr />
                    <h5>
                        Persian <br /> English
                        <br /> Turkish 
                    </h5>
                </div>
            </div>
           
        </>
    );
};

export default Footer;
