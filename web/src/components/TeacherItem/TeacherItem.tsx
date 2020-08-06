import React, { FunctionComponent } from 'react';
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import {API} from "../../services";

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: FunctionComponent<TeacherItemProps> = (props) => {
    const { bio, name, avatar, cost, subject, whatsapp } = props.teacher;
    
    function createNewConnection () {
        API.post('connections', {
            user_id: props.teacher.id
        })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={avatar} alt={name} />
                <div>
                    <strong>{name}</strong>
                    <span>{subject}</span>
                </div>
            </header>

            <p>
                {bio}
            </p>
            <footer>
                <p>
                    Price / hour
                    <strong>${cost}</strong>
                </p>
                <a
                    target="_blank"
                    onClick={createNewConnection}
                    href={`https://wa.me/${whatsapp}`}
                    type="button"
                >
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Get in touch
                </a>
            </footer>
        </article>
    );
};

export default TeacherItem;
