import styles from './CreateArt.module.css'

export default function CreateArt() {
    return (
        <div className={styles.createContainer}>
              <div className={styles.container}>
                <form>

                    <h1>Share your own Art</h1>

                    <div className={styles.formGroup}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" placeholder="Title of your work.." />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="category">Category:</label>
                        <select id="category" name="category">
                            <option value="landscape">Landscape</option>
                            <option value="portrait">Portrait</option>
                            <option value="abstract">Abstract</option>
                            <option value="still-life">Still Life</option>
                            <option value="digital-art">Digital Art</option>
                            <option value="traditional-art">Traditional Art</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="imageUrl">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload Artwork.." />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" name="description" placeholder="Write something about you art here.." />
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                    
                </form>
            </div>
        </div>
    )
}