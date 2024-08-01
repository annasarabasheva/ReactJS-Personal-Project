import styles from './ArtDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as artService from "../../services/artService";
import * as commentService from "../../services/commentService";
import CommentModal from './comment-modal/CommentModal';

export default function ArtDetails() {
    const [art, setArt] = useState({});
    const [comments, setComments] = useState([]);
    const { artID } = useParams();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        // Fetch the art details
        artService.getOne(artID)
            .then(artData => {
                setArt(artData);
            });

        // Fetch all comments and filter by artID
        commentService.getAll(artID)
            .then(filteredComments => {
                setComments(filteredComments);
                console.log("Fetched Comments:", filteredComments);
            });
    }, [artID]);

    const handleAddCommentClick = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleCommentSubmit = async (commentText) => {
        const newComment = { text: commentText, artID };
        
        try {
            const createdComment = await commentService.create(artID, newComment);
            setComments(prevComments => [...prevComments, createdComment]);
        } catch (err) {
            console.log(err);
        }

        setIsModalVisible(false);
    };

    return (
        <div className={styles.detailsContainer}>
            <h1>Details</h1>
            <div className={styles.artBox}>
                <img src={art.imageUrl} alt={art.title} />
                <div className={styles.info}>
                    <div className={styles.text}>
                        <p>Title: <span> {art.title}</span></p>
                        <p>Created By: <span> annabanana</span></p>
                        <p>Category: <span> {art.category}</span></p>
                        <p>Description: <span> {art.description}</span></p>
                    </div>
                    <div className={styles.commentSection}>
                        <h3>Comment Section</h3>
                        <ul className={styles.comments}>
                            {comments.length > 0 ? (
                                comments.map((comment) => (
                                    <li key={comment._id}>{comment.text}</li>
                                ))
                            ) : (
                                <p>No comments yet...</p>
                            )}
                        </ul>
                    </div>

                    {/* VISIBLE ONLY FOR THE CREATOR */}
                    {/* <div className={styles.buttons}>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div> */}
                    
                    {/* VISIBLE FOR LOGGED-IN USERS */}
                    <div className={styles.extras}>
                        <button>5 <FontAwesomeIcon icon={faHeart} className={styles.iconStyle}/></button>
                        <button onClick={handleAddCommentClick} className={styles.comment}>Add a Comment</button>
                    </div>
                </div>
            </div>
            <CommentModal 
                isVisible={isModalVisible} 
                onClose={handleModalClose} 
                onSubmit={handleCommentSubmit} 
            />
        </div>
    );
}
