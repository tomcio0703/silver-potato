document.getElementById('cv-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const certifications = document.getElementById('certifications').value;
    const languages = document.getElementById('languages').value;
    const uploadedCV = document.getElementById('upload-cv').files[0];
    
    const cvOutput = document.getElementById('cv-output');

    cvOutput.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        
        <div class="cv-section">
            <h3>Education:</h3>
            <p>${education}</p>
        </div>
        
        <div class="cv-section">
            <h3>Experience:</h3>
            <p>${experience}</p>
        </div>

        <div class="cv-section">
            <h3>Skills:</h3>
            <p>${skills}</p>
        </div>

        <div class="cv-section">
            <h3>Certifications:</h3>
            <p>${certifications}</p>
        </div>

        <div class="cv-section">
            <h3>Languages:</h3>
            <p>${languages}</p>
        </div>

        <div class="cv-section">
            <h3>Uploaded CV:</h3>
            <p>${uploadedCV ? uploadedCV.name : 'No file uploaded'}</p>
        </div>
    `;
});
