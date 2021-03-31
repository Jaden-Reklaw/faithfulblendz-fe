import React, { Component } from 'react';
import './Profile.css';

//Import Boostrap Components
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <Container className="profile-info mt-2">
                    <div className="profile-avatar">
                        { 
                            this.props.currentUser.imageUrl ? (
                                <Image 
                                    src={this.props.currentUser.imageUrl} 
                                    alt={this.props.currentUser.name}
                                    roundedCircle 
                                />
                            ) : (
                                <div className="text-avatar">
                                    <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <h2>{this.props.currentUser.name}</h2>
                        <p>{this.props.currentUser.email}</p>
                    </div>
            </Container>
        );
    }
}

export default Profile;