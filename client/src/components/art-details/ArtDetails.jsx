import styles from './ArtDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as artService from "../../services/artService"


export default function ArtDetails() {
    const [art, setArt] = useState({});
    const { artID } = useParams();

    useEffect(() => {
        artService.getOne(artID)
            .then(setArt);

    }, [artID]);

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
                            <li>Nice</li>
                            <li>Amazingly drawns bravooo</li>
                            <li>Incredible</li>
                            <li>You are an amazing artist</li>
                        </ul>
                    </div>

                    {/* VISIBLE ONLY FOR THE CREATOR
                    <div className={styles.buttons}>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div> 
                    */}

                    {/* VISIBLE FOR LOGGED-IN USERS
                    <div className={styles.extras}>
                        <button>5 <FontAwesomeIcon icon={faHeart} className={styles.iconStyle}/></button>
                        <button className={styles.comment}>Add a Comment</button>
                        
                    </div> 
                    */}
                    
                    
                    
                </div>
            </div>
        </div>
    );
}
