import React from 'react';
import {PageHeader, TeacherItem} from "../../components";

import './styles.css';

const TeacherList = () => {

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available profs.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Day od the week</label>
                        <input type="text" id="week_day" name="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time" name="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
};

export default TeacherList;
