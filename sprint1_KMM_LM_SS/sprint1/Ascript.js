document.addEventListener('DOMContentLoaded', () => {
    const photos = [
        { src: './images/singer.png', description: ' Clarke is the charismatic frontman of The Echo Waves. His compelling vocals and captivating stage presence have made him the face of the band. Clarke\'s voice, known for its range and emotional depth, brings the band\'s lyrics to life, resonating with fans across the globe. A storyteller at heart, Clarke\'s songwriting explores themes of love, rebellion, and self-discovery.' },
        { src: './images/drummer.png', description: 'Jamie Smith, the powerhouse behind The Echo Waves, has been setting the rhythm for the band with his dynamic drumming style for over a decade. Known for his energetic performances and technical prowess, Jamie draws inspiration from rock legends and jazz virtuosos alike, blending these influences into the band\'s signature sound. Offstage, he\'s a vinyl collector and a passionate advocate for music education, often hosting workshops for aspiring drummers.' },
        { src: './images/bassist.png', description: 'Chris Johnson, the bassist for The Echo Waves, lays down the groove that is the backbone of the band\'s sound. With a knack for both melody and rhythm, Chris\'s bass lines are both inventive and powerful, providing the perfect foundation for the band\'s rock anthems. Beyond his musical talents, Chris is known for his environmental activism, often using the band\'s platform to advocate for sustainability in the music industry.'},
        { src: './images/Guitarist.png', description: 'Alex Turner is the lead guitarist and a founding member of The Echo Waves. His riffs and solos are integral to the band\'s iconic rock sound. Alex\'s guitar playing, characterized by its emotive force and intricate melodies, has helped define the band\'s musical identity. A gear enthusiast and a songwriter, Alex\'s contributions extend beyond performances to the heart of the band\'s creative process. When not on tour, he\'s likely to be found exploring new guitar tech or recording demos in his home studio.'}
    ];

    let currentIndex = 0;

    const photoElement = document.getElementById('band-photo');
    const descriptionElement = document.getElementById('photo-description');
    const prevButton = document.getElementById('prev-photo');
    const nextButton = document.getElementById('next-photo');

    function updatePhoto() {
        photoElement.src = photos[currentIndex].src;
        photoElement.alt = 'Band photo ' + (currentIndex + 1);
        descriptionElement.textContent = photos[currentIndex].description;
    }

    function showNextPhoto() {
        currentIndex = (currentIndex + 1) % photos.length;
        updatePhoto();
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updatePhoto();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % photos.length;
        updatePhoto();
    });

    photoElement.addEventListener('click', showNextPhoto);

    // Initialize with the first photo
    updatePhoto();
});
