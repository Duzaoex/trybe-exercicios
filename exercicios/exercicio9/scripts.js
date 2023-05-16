const ligarDesligar = (status) => (status === 'desligado') ? 'ligado' : 'desligado';
    
console.log(`O motor está ${'ligado'}`);

ligarDesligar('desligado');