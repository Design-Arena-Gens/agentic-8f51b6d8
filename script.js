document.addEventListener('DOMContentLoaded', () => {
    const cakeCards = document.querySelectorAll('.cake-card');

    cakeCards.forEach(card => {
        const price = card.getAttribute('data-price');
        const priceElement = card.querySelector('.price');

        card.addEventListener('mouseenter', () => {
            priceElement.textContent = price;
        });

        card.addEventListener('mouseleave', () => {
            setTimeout(() => {
                priceElement.textContent = '';
            }, 400);
        });
    });

    // Add sparkle effect on hover
    cakeCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            createSparkles(card);
        });
    });

    function createSparkles(card) {
        const sparkleCount = 8;

        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                position: absolute;
                width: 8px;
                height: 8px;
                background: radial-gradient(circle, #fff, #ffd700);
                border-radius: 50%;
                pointer-events: none;
                animation: sparkleFloat 1s ease-out forwards;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: 0;
                z-index: 10;
            `;

            card.style.position = 'relative';
            card.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }

    // Add sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleFloat {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0);
            }
            50% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-40px) scale(0.5);
            }
        }
    `;
    document.head.appendChild(style);
});
