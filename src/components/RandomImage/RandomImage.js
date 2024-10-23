import React, { useState } from 'react';
import "./RandomImage.css";

function RandomImage() {

    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fetch the image from the API
        fetch('https://picsum.photos/200/300')
            .then(response => {
                // The API directly returns the image URL
                setImageUrl(response.url);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Load Image</button>
            </form>
            {imageUrl && <img src={imageUrl} alt="Random" />}
        </div>
    );

    // const generateRandomImage = (event) => {
    //     event.preventDefault();
    //     alert(`The name you entered was: `)
    // }
    //
    // return (
    //     <div className="randomImage">
    //         <h1>Generate Random Image</h1><br/>
    //         <p>We will use the url of Lorem Picsum to generate the photo.</p>
    //         <form onSubmit={generateRandomImage}>
    //             <label htmlFor="width">Width: </label>
    //             <input type="number" id="width" defaultValue={200}/><br/>
    //             <label htmlFor="heigh">Heigh: </label>
    //             <input type="number" id="heigh" name="heigh" defaultValue={100}/><br/><br/>
    //             <button type="submit">Submit</button>
    //         </form>
    //
    //     </div>
    // );
}


export default RandomImage;