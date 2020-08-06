import React, {FormEvent, useState} from 'react';

import {Input, PageHeader, Select, TeacherItem} from "../../components";
import {Teacher} from "../../components/TeacherItem/TeacherItem";
import {API} from "../../services";

import './styles.css';

const TeacherList = () => {

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    async function handleSearchTeaches (e: FormEvent) {
        e.preventDefault();

        const response = await API.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data.classes)

        console.log(teachers, response.data.classes)

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available profs.">
                <form id="search-teachers" onSubmit={handleSearchTeaches}>
                    <Select
                        name="subject"
                        label="Subject"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
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
                    />
                    <Select
                        name="week_day"
                        label="Week day"
                        value={week_day}
                        onChange={(e) => {setWeekDay(e.target.value)}}
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
                        name="time"
                        label="Time"
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}}
                    />
                    <button type="submit">Search</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}

            </main>
        </div>
    );
};

export default TeacherList;
