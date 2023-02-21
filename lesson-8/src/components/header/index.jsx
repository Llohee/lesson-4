import React, { useContext } from 'react';
import { themeContext } from '../../App';
import { dictionary } from '../../lang';
import './style.scss';

const Header = () => {
    const crrThemeContext = useContext(themeContext);
    return (
        <div className='header'>
            <ul>
                <li>{dictionary[crrThemeContext.lang]['G_2']} </li>
                <li> {dictionary[crrThemeContext.lang]['G_3']} </li>
                <li> {dictionary[crrThemeContext.lang]['G_4']}</li>
                <button onClick={() => {
                    crrThemeContext.setThemeValue(!crrThemeContext.themeValue);
                }}>Theme mode</button>
                <button onClick={() => {
                    crrThemeContext.setLang(!crrThemeContext.lang === 'VI' ? 'EN' : 'VI');
                }}>Lang</button>
            </ul>
        </div>
    )
}
export default Header;
