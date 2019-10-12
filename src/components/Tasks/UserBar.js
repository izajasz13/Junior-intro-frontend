import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser, logout, fetchKnowledgeBaseList, fetchKnowledgeBaseElement } from '../../actions';
import { Modal } from 'semantic-ui-react';

import './UserBar.css';

class UserBar extends React.Component {
    state = {
        isModalOpen: false
    };

    async componentDidMount() {
        if (!this.props.user.name) this.props.fetchUser(localStorage.getItem('userId'));
        await this.props.fetchKnowledgeBaseList();

        this.props.fetchKnowledgeBaseElement(this.props.knowledgeList[0].knowledgeId);
        this.setState({
            selectedId: this.props.knowledgeList[0].knowledgeId
        });
    }

    clickLogout = event => {
        this.props.logout();
    };

    handleToggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    };

    handleSelectKnowledge = id => {
        this.props.fetchKnowledgeBaseElement(id);
        this.setState({
            selectedId: id
        });
    };

    render() {
        const { user } = this.props;

        return (
            <>
                <div className="user-bar-container">
                    <Link to="/">
                        <button className="ui button">
                            <i className="reply icon"></i>
                        </button>
                    </Link>
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
                <Modal open={this.state.isModalOpen} style={{ background: 'black' }}>
                    <Modal.Header>
                        <div onClick={this.handleToggleModal} className="modal-header">
                            <span>X</span>
                        </div>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="content-inner">
                            <div className="left-list">
                                {this.props.knowledgeList.map(el => {
                                    return (
                                        <div
                                            key={el.knowledgeId}
                                            className={`left-list-element ${
                                                this.state.selectedId === el.knowledgeId ? 'selected' : ''
                                            }`}
                                            onClick={() => this.handleSelectKnowledge(el.knowledgeId)}
                                        >
                                            {el.title}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="right-content">
                                {this.props.knowledgeElement && (
                                    <>
                                        <div className="right-header">{this.props.knowledgeElement.title}</div>
                                        <div className="right-description">
                                            {this.props.knowledgeElement.description}
                                        </div>
                                        <div className="right-content">
                                            {this.props.knowledgeElement.content
                                                ? this.props.knowledgeElement.content.split(';').map(el => {
                                                      return <div key={el}>{el}</div>;
                                                  })
                                                : null}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </Modal.Content>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        section: state.section,
        knowledgeList: state.knowledge.knowledgeList,
        knowledgeElement: state.knowledge.knowledgeElement
    };
};

export default connect(
    mapStateToProps,
    { fetchUser, logout, fetchKnowledgeBaseList, fetchKnowledgeBaseElement }
)(UserBar);
