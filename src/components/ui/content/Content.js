import React, { useState } from 'react';
import { dataSkills, dataHobbies, dataAgent } from '../../globalData/DataUser';

import s from './content.module.scss';

import Icon from '../../../assets/svg/toolbox-solid.svg';
import IconHub from '../../../assets/svg/hobbie.svg';
import C from '../../../assets/svg/contact.svg';

const Content = () => {
    const [itemSkill, setItemSkill] = useState(dataSkills);
    const [itemHob, setItemHob] = useState(dataHobbies);
    const [itemAgent, setItemAgent] = useState(dataAgent);
    return (
        <div className={s.container}>
            <div className={s.skill}>
                <div className={s.head}>
                    <img src={Icon} alt="icon" />
                    <h2>SKILL</h2>
                    <hr />
                </div>
                <div className={s.fSkill}>
                    {itemSkill.map((q) => (
                        <p>{q.title}</p>
                    ))}
                </div>
            </div>
            <div>
                <div className={s.head}>
                    <img src={IconHub} alt="icon" />
                    <h2>HOBBIES</h2>
                    <hr />
                </div>
                <div className={s.list}>
                    {itemHob.map((item) => (
                        <div>
                            <img src={item.icon.q} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={s.content}>
                <div className={s.head}>
                    <img src={C} alt="icon" />
                    <h2>CONTACT</h2>
                    <hr />
                </div>
                <div className={s.cont}>
                    {itemAgent.map((item) => (
                        <div>
                            <img src={item.icon.q} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={s.hr}>
                <hr/>
                <hr/>
                <hr />
            </div>
        </div>
    );
};

export default Content;
