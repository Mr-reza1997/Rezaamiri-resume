import React from 'react';
import Typical from 'react-typical'
import './programer.scss';
import Button from '../button';
import s from './header.module.scss';
import Img from '../../../assets/images/photo-reza.jpg';
import Icon from '../../../assets/svg/developer.gif';

export const Header = () => {
    return (
        <>

            <Typical className={s.typical}
                steps={['Hello :)', 2000, 'Welcome !', 2000]}
                loop={Infinity}
                wrapper="p"
            />

            <div className={s.head}>
                <div className={s.left}>
                    <img src={Img} alt="photo" />
                    <h2>Reza Amiri
                    </h2>
                    {/* <img className={s.iconDev} src={IconDev} alt="2" /> */}
                </div>
                <div className={s.right}>
                    <div>
                        <img className={s.gif1} src={Icon} alt="2" />
                        <h3>PROFILE</h3>
                        <hr />
                    </div>
                    <p>
                    Experienced Frontend Developer with a demonstrated<br />
                    history of working in the computer software industry.<br />
                    Skilled in HTML, Front-end Development, Bootstrap, <br />
                    Cascading Style Sheets (CSS) <br />
                    Proficient in JavaScript,  React js; plus few other related libraries. <br />
                    </p>
                </div>
                <Button />
            </div>
            <h1>

                <span>FrontEnd Developer</span>
            </h1>
        </>
    );
};
