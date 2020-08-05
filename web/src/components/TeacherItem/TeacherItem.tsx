import React, { FunctionComponent } from 'react';
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

interface TeacherItemProps {}

const TeacherItem: FunctionComponent<TeacherItemProps> = (props) => {

    return (
        <article className="teacher-item">
            <header>
                <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Rafiou Sitou"/>
                <div>
                    <strong>Rafiou Sitou</strong>
                    <span>Mathematics</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
                <br/><br/>
                Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
            <footer>
                <p>
                    Price / hour
                    <strong>$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Get in touch
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;
