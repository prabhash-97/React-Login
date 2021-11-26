import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import styles from './home.css';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password:''
        }
    }

    componentWillMount() {
        this.setState ({email: cookie.load('userEmail')});
        this.setState ({password: cookie.load('userPassword')});

        const email = cookie.load('userEmail');
        const password = cookie.load('userPassword');
        if(email === undefined || password === undefined) {
            window.location = '/';
        }
    }

    componentDidMount() {
        axios.get('http://localhost/php-api/user.php?email='+this.state.email+'&password='+this.state.password)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    email: response.data.email
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className={styles.detailsContainer}>
                <h1>Username: <span>{this.state.username}</span></h1>
                <h1>Email: <span>{this.state.email}</span></h1>
            </div>
        )
    }
}