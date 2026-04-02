document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const qrcodePreview = document.getElementById('qrcodePreview');
    const canvas = document.getElementById('qrcodeCanvas');
    const ctx = canvas.getContext('2d');

    let currentData = {};

    generateBtn.addEventListener('click', function() {
        const id = document.getElementById('id').value.trim();
        const external_id = document.getElementById('external_id').value.trim();
        const serial_number = document.getElementById('serial_number').value.trim();
        const device_description = document.getElementById('device_description').value.trim();
        const model = document.getElementById('model').value.trim();

        if (!id || !external_id || !serial_number || !device_description || !model) {
            alert('请填写所有必填字段');
            return;
        }

        currentData = { id, external_id, serial_number, device_description, model };

        qrcodePreview.innerHTML = '';

        canvas.width = 400;
        canvas.height = 420;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const qr = qrcode(0, 'M');
        qr.addData(serial_number);
        qr.make();

        const img = new Image();
        const qrDataUrl = qr.createDataURL(80, 0);
        img.onload = function() {
            ctx.drawImage(img, 50, 20, 300, 300);

            ctx.fillStyle = '#000000';
            ctx.textAlign = 'center';

            const text = `${external_id} (${device_description}) (${model})`;
            const maxWidth = 340;
            let fontSize = 16;

            ctx.font = `bold ${fontSize}px Arial`;

            const lines = wrapText(ctx, text, maxWidth, fontSize);
            const lineHeight = 24;
            const totalTextHeight = lines.length * lineHeight;
            const startY = 350 + 20;

            lines.forEach((line, index) => {
                const textY = startY + (index * lineHeight);
                ctx.fillText(line, 200, textY);
            });

            const finalImage = new Image();
            finalImage.src = canvas.toDataURL('image/png');
            finalImage.style.maxWidth = '100%';
            qrcodePreview.appendChild(finalImage);

            downloadBtn.style.display = 'inline-block';
        };
        img.src = qrDataUrl;
    });

    downloadBtn.addEventListener('click', function() {
        if (!currentData.id) return;

        const filename = `${currentData.id}_${currentData.external_id}_${currentData.serial_number}.png`;

        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = filename;
        link.click();
    });

    function wrapText(ctx, text, maxWidth, fontSize) {
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0] || '';

        for (let i = 1; i < words.length; i++) {
            const testLine = currentLine + ' ' + words[i];
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;

            if (testWidth <= maxWidth) {
                currentLine = testLine;
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);
        return lines;
    }
});