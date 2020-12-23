import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {

    render() {
        const { author } = this.props;
        if (!author) {
            return null;
        }
        return (
            <div className='header' key={author.id}>{author.name}</div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        author: state.authors.find( author => author.id === ownProps.userId)
    }
};

export default connect(mapStateToProps)(UserHeader);