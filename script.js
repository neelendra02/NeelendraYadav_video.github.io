const videos = [
    {
        src: "video1.mp4",
        title: "Travel Montage",
        description: "A vibrant montage capturing the essence of wanderlust and adventure."
    },
    {
        src: "video2.mp4",
        title: "Product Advertisement",
        description: "A sleek promotional video showcasing the features of a cutting-edge gadget."
    },
    {
        src: "video3.mp4",
        title: "Event Highlights",
        description: "Highlights from an unforgettable evening of music, dance, and celebration."
    }
];

const container = document.getElementById("video-container");

videos.forEach(video => {
    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");

    const videoElement = document.createElement("video");
    videoElement.src = video.src;
    videoElement.controls = true;

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = `
        <h3>${video.title}</h3>
        <p>${video.description}</p>
    `;

    videoItem.appendChild(videoElement);
    videoItem.appendChild(description);

    container.appendChild(videoItem);
});