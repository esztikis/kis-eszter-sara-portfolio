document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const introduction = `Kis Eszter Sára vagyok 19 éves, első féléves terméktervező hallgató a Budapest Műszaki és Gazdaságtudományi egyetemen. Spanyolul alapfokon, angolból pedig felsőfokon beszélek. Racionális vagyok, de emellett kreatív is, ezért gondolom, hogy az Ipari termék és formatervező mérnöki szak megfelelő választás volt számomra. Érdekel még a színészet és a festészet is, sok művészeti ágban már ki is próbáltam magamat. A sportolás is mindig fontos szerepet töltött be az életemben, 7 évig versenyszerűen táncoltam, emellett több különböző sportot is kipróbáltam.`;
            document.getElementById('introduction').innerText = introduction;
        })
        .catch(error => {
            console.error('Hiba a felhasználói adatok betöltésekor:', error);
            document.getElementById('introduction').innerText = 'Hiba történt a bemutatkozás betöltésekor.';
        });

    
    document.getElementById('contact-toggle').addEventListener('click', (event) => {
        event.preventDefault(); 
        const contactSection = document.getElementById('contact');
        if (contactSection.style.display === 'none') {
            contactSection.style.display = 'block'; 
        } else {
            contactSection.style.display = 'none'; 
        }
    });
});

