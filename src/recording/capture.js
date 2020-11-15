// See https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
export { enableScreenCap, disableScreenCap, startScreenCapture, pauseScreenCapture, stopScreenCapture, downloadScreenCapture, getCaptureBlob };

var displayMediaOptions = {
    video: {
        cursor: "always"
    },
    audio: true
};

let chunks = [];
let displayStream = null;
let mediaRecorder = null;

async function enableScreenCap() {
    const videoElem = document.getElementById("video");
    try {
        displayStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        videoElem.srcObject = displayStream;
    } catch (err) {
        console.error("Error: " + err);
    }
}

function disableScreenCap() {
    try {
        const videoElem = document.getElementById("video");
        let tracks = videoElem.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        videoElem.srcObject = null;
    } catch (err) {
        console.error("Error: " + err);
    }
}

function startScreenCapture() {
    console.trace("startCapture()");
    try {
        mediaRecorder = new MediaRecorder(displayStream, { mimeType: "video/webm" });
        mediaRecorder.onstop = (e) => { console.log("recorder stopped"); };
        mediaRecorder.ondataavailable = function (e) { chunks.push(e.data); };
        mediaRecorder.start(1000); // Default behavoiur wasn't working. Slices do.
        console.log(mediaRecorder.state);
        console.log("recorder started");
        dumpOptionsInfo();
    } catch (err) {
        console.error("Error: " + err);
    }
}

function pauseScreenCapture() {
    if (!mediaRecorder)
        return;

    if(mediaRecorder.state === "recording"){
        console.info("Screen recording paused")
        mediaRecorder.pause();
    }
}

function stopScreenCapture() {
    if (mediaRecorder)
        return;

    if(mediaRecorder.state !== "inactive"){
        mediaRecorder.requestData();
        mediaRecorder.stop();
    }
}

function downloadScreenCapture(filename) {
    let data = chunks;
    let screen_capture = new Blob(data, { type: "video/webm" });
    let url = URL.createObjectURL(screen_capture);
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = filename + ".webm";
    a.click();
    window.URL.revokeObjectURL(url);
}

function getCaptureBlob(){
    let screen_capture = new Blob(chunks, {
        type: "video/webm"
    });
    return screen_capture;
}

function dumpOptionsInfo() {
    const videoElem = document.getElementById("video");
    const videoTrack = videoElem.srcObject.getVideoTracks()[0];

    console.info("Track settings:");
    console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    console.info("Track constraints:");
    console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}