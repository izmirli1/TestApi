const express = require('express');
const app = express();
const port = 3000;

// json formatında gelen body'leri parse etmek için
app.use(express.json());

// GET isteği için geri döndürülecek basit bir JSON verisi.
let data = [
    { id: 1, name: "Örnek 1" },
    { id: 2, name: "Örnek 2" },
];

app.get('/api/data', (req, res) => {
    res.status(200).json(data);
});

app.get('/api/data/:id', (req, res) => {
    // req.params.id ile id parametresi okunabilir.
    const id = parseInt(req.params.id);
    const item = data.find(d => d.id === id);
    
    if (!item) {
        return res.status(404).json({ message: "Böyle bir veri bulunamadı." });
    }

    res.status(200).json(item);
});

app.post('/api/data', (req, res) => {
    // req.body.name ile request 'in body sindeki json nesneye erişilir.
    const newItem = {
        id: data.length + 1,
        name: req.body.name,
    };
    
    data.push(newItem);
    res.status(201).json(newItem);
});

app.listen(port, () => {
    console.log(`API http://localhost:${port} üzerinde çalışıyor.`);
});