
function downloadResume() {
    const resumeUrl = 'manan_cv.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'manan-resume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  const downloadButton = document.getElementById('btn');
  downloadButton.addEventListener('click', downloadResume);
  