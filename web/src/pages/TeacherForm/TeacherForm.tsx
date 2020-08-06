import React, {FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom'
import {Input, PageHeader, Select, Textarea} from "../../components";

import warningIcon from "../../assets/images/icons/warning.svg";

import './styles.css';
import {API} from "../../services";

const TeacherForm = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }]);

    function addNewScheduleItem () {
        setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
    }

    function setScheduleItemsValue (position: number, field: string, value: string) {
        const updatedScheduleArray = scheduleItems.map((scheduleItem, index) => {
           if (index === position) {
               return { ...scheduleItem, [field]: value }
           }

           return scheduleItem
        });

        setScheduleItems(updatedScheduleArray);
    }

    function handleCreateClass (e: FormEvent) {
        e.preventDefault();

        API.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule: scheduleItems
        }).then(() => {
            alert('Class created successfully.')

            history.push('/');
        }).catch(() => {
            alert('An error occurred during the class creation.')
        })

        console.log({name, avatar, whatsapp, bio, subject, cost, scheduleItems})
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="How amazing that you want to teach."
                description="The first step is to fill out the registration form."
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Your data</legend>

                        <Input
                            name="name"
                            label="Full name"
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => {setAvatar(e.target.value)}}
                        />
                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => {setWhatsApp(e.target.value)}}
                        />
                        <Textarea
                            name="bio"
                            label="Biography"
                            value={bio}
                            onChange={(e) => {setBio(e.target.value)}}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>About the class</legend>

                        <Select
                            name="subject"
                            label="Subject"
                            options={[
                                { value: 'Arts', label: 'Arts' },
                                { value: 'Science', label: 'Science' },
                                { value: 'History', label: 'History' },
                                { value: 'Physics', label: 'Physics' },
                                { value: 'Education physics', label: 'Education' },
                                { value: 'Geography', label: 'Geography' },
                                { value: 'French', label: 'French' },
                                { value: 'Spanish', label: 'Spanish' }
                            ]}
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
                        />
                        <Input
                            name="cost"
                            label="Cost of your class per hour"
                            value={cost}
                            onChange={(e) => {setCost(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Time available
                            <button type="button" onClick={addNewScheduleItem}>
                                + New Time
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={index} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Week day"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value )}
                                        options={[
                                            { value: '0', label: 'Sunday' },
                                            { value: '1', label: 'Monday' },
                                            { value: '2', label: 'Tuesday' },
                                            { value: '3', label: 'Wednesday' },
                                            { value: '4', label: 'Thursday' },
                                            { value: '5', label: 'Friday' },
                                            { value: '6', label: 'Saturday' }
                                        ]}
                                    />
                                    <Input
                                        type="time"
                                        name="from"
                                        label="From"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemsValue(index, 'from', e.target.value )}
                                    />
                                    <Input
                                        type="time"
                                        name="to"
                                        label="To"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemsValue(index, 'to', e.target.value )}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Warning"/>
                            Warning! <br/>
                            All fields required.
                        </p>
                        <button type="submit">
                            Save
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
};

export default TeacherForm;
