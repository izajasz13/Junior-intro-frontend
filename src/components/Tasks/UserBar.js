import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, logout, fetchKnowledgeBaseList } from '../../actions';
import { Modal } from 'semantic-ui-react'

import './UserBar.css';

class UserBar extends React.Component {
    state = {
        isModalOpen: false,
    }

    componentDidMount() {
        if (!this.props.user.name) this.props.fetchUser(localStorage.getItem('userId'));

        this.props.fetchKnowledgeBaseList()
    }

    clickLogout = event => {
        this.props.logout();
    };

    handleToggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    render() {
        const { user } = this.props;
        console.log(this.props.knowledgeList)

        return (
            <>
            <div className="user-bar-container">
                <div>{user.name}</div>
                <div>
                    <div className="ui indicating progress active" data-percent="50">
                        <div className="bar"></div>
                        <div className="label">Postęp</div>
                    </div>
                </div>
                <div>
                    {user.coins}
                    <img src="dollar.png" alt="dollar" />
                </div>
                <div>
                    {user.experience} <img src="goal.png" alt="goal" />
                </div>
                <div className="right-buttons">
                    <div className="spellbook" onClick={this.handleToggleModal}>
                        <img src="open-book.png" alt="open book" />
                        <div>Księga zaklęć</div>
                    </div>
                    <div>
                        <button className="ui button" onClick={this.clickLogout}>
                            <img src="logout.png" alt="logout" />
                        </button>
                    </div>
                </div>
            </div>
            <Modal open={this.state.isModalOpen} style={{background: 'black'}}>
            <Modal.Header>
                <div onClick={this.handleToggleModal} className="modal-header">
                    <span>
                        X
                    </span>
                </div>
            </Modal.Header>
                <Modal.Content>
                <div className="content-inner">
                    <div className="left-list">
                        {this.props.knowledgeList.map(el => {
                            return (
                                <div className="left-list-element">
                                    {el.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className="right-content">
                        asdasdasdasdasd
                    </div>
                </div>
                </Modal.Content>
            </Modal>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, section: state.section, knowledgeList: state.knowledgeList };
};

export default connect(
    mapStateToProps,
    { fetchUser, logout, fetchKnowledgeBaseList }
)(UserBar);
