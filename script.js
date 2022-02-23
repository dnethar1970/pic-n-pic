const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to select media stream, pass to video element then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //log error
        console.log('whoops, something is not right: ', error);
    }
}

button.addEventListener('click', async () => {
    //disable the button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset the button
    button.disabled = false;
});

//on load
selectMediaStream();
