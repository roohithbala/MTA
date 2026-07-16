window.onload = function() {
  const canvas = document.getElementById('demoCanvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // Clear background
    ctx.fillStyle = '#0f111a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw synthwave retro grid lines
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let y = 80; y < canvas.height; y += 10) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    // Perspective vertical lines
    const vanishingPointX = canvas.width / 2;
    const vanishingPointY = 60;
    for (let x = -50; x <= canvas.width + 50; x += 30) {
      ctx.beginPath();
      ctx.moveTo(vanishingPointX, vanishingPointY);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // Draw a glowing sun
    let gradient = ctx.createRadialGradient(canvas.width/2, 50, 5, canvas.width/2, 50, 35);
    gradient.addColorStop(0, '#ec4899');
    gradient.addColorStop(0.5, '#a855f7');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(canvas.width/2, 50, 35, 0, Math.PI * 2);
    ctx.fill();
  }
};
