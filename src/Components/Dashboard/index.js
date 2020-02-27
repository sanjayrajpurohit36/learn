import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from './../NavBar/index';
import { getAllStudentData } from './../../Action/studentAction';
import "./index.css"

const Index = props => {
    useEffect(() => {
        console.log("coming in useEffect");
        getAllStudentData()
            .then(res => {
                console.log('getting data api called res of api called', res);
            })
            .catch(err => {
                console.log('err in calling api in use effect', err);
            });
    }, []);
    console.log('consoling props if data is there or nor', props);
    return (
        <>
            <div>
                <NavBar>
                    <input placeholder='Search' className='student-search'></input>
                    <div className='btn-wrapper'>
                        <button className="actn-btns" onClick={() => { }}>Name</button>
                        <button className="actn-btns" onClick={() => { }}> Marks</button>
                    </div>
                </NavBar>
            </div>
        </>
    );
};

function mapStateToProps(store) {
    return {
        studentData: store.student.studentData
    };
}

export default connect(mapStateToProps)(Index);
