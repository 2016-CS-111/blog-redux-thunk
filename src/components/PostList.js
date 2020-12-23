import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndAuthor } from "../redux/actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndAuthor();
    };

    PostListMapping() {
        return this.props.posts.map((post) =>  {
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user'></i>
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <h3><UserHeader userId={post.userId}/></h3>
                        </div>
                    </div>
                </div>
            );
        })
    }
    
    render() {
        return (
            <div className='ui relaxed divided list' style={{ backgroundColor: 'lightseagreen' }}>
                {this.PostListMapping()}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        posts: state.posts,
        authors: state.authors
    };
};

export default connect(mapStateToProps, { fetchPostsAndAuthor })(PostList);