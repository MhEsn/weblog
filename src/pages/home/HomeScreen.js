import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Time from './Time'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'Mohamadhosein'
            , lastName: 'Esmailiun'
        };

        this.showUser = this.showUser.bind(this);
    }

    componentDidMount() {
    }

    showUser() {
        if (this.state.firstName && this.state.lastName)
            return 'Welcome,' + this.state.firstName + ' ' + this.state.lastName + '!';
        else
            return 'Welcome, Stranger!';
    }

    render() {
        const styles = {
            container: {
                backgroundColor: '#ccccff',
                minHeight: 70,
                paddingTop: 20
            },
            userContainer: {
                textAlign: 'center'
                , flex: 1
            },
            menu: {
                display: 'inline-block',
                marginLeft: 50,
            }
        };
        return (
            <Container fluid style={styles.container} >
                <Row>
                    <Col xs={12} md={9}>
                        <ul>
                            <li style={styles.menu}>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    Home
                                </a>
                            </li>
                            <li style={styles.menu}>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    Resume
                                </a>
                            </li>
                            <li style={styles.menu}>
                                <a href='#' style={{ textDecoration: 'none' }}>
                                    About Me
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3}>
                        <span className={styles.userContainer}>
                            {this.showUser()}
                        </span>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomeScreen;