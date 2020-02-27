import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from './../../Action/userAction';
import './index.css';

const MapStateToProps = store => {
    return {
        userData: store.login.loginData
    };
};
class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: { email: '', password: '' },
            showValidateError: false
        };
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        if (this.props.userData !== nextProps.userData) {
            console.log('nextProps', nextProps);
            if (nextProps.userData) {
                window.localStorage.setItem('user', JSON.stringify(nextProps.userData));
                this.props.history.push({
                    pathname: '/dashboard'
                });
            } else {
                this.props.history.push({
                    pathname: '/'
                });
            }
        }
    }
    handelLoginData = event => {
        const value = event.target.value;
        const id = event.target.id;
        if (value.length) {
            var data = Object.assign({}, this.state.userData);
            data[ id ] = value;
            this.setState({
                userData: data
            });
        }
    };

    gotoDashboard = event => {
        if (this.state.userData) {
            var regex = new RegExp(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (regex.test(this.state.userData.email)) {
                this.props.dispatch(loginUserAction(this.state.userData));
            } else {
                this.setState({
                    showValidateError: true
                });
            }
        }
        event.preventDefault();
    };

    render() {
        return (
            <div className='form-wrapper'>
                <div className='form-container'>
                    <form className='form'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-fields'
                            type='email'
                            placeholder='email'
                            id='email'
                            onChange={e => this.handelLoginData(e)}
                            autoComplete='off'
                        />
                        {this.state.showValidateError ? <div>This email is not valid </div> : null}
                        <label className='form-label'>Password</label>
                        <input
                            className='form-fields'
                            type='password'
                            placeholder='password'
                            id='password'
                            onChange={e => this.handelLoginData(e)}
                            autoComplete='off'
                        />
                        <button className='login-btn' type='submit' onClick={e => this.gotoDashboard(e)}>
                            Login
						</button>
                        <div>SignUp</div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(MapStateToProps)(index);
