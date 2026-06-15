const card = document.getElementById('creditCard');
const cardNumberInput = document.getElementById('cardNumber');
const cardNameInput = document.getElementById('cardName');
const cardExpiryInput = document.getElementById('cardExpiry');
const cardCVVInput = document.getElementById('cardCVV');

const cardNumberDisplay = document.getElementById('cardNumberDisplay');
const cardNameDisplay = document.getElementById('cardNameDisplay');
const cardExpiryDisplay = document.getElementById('cardExpiryDisplay');
const cvvDisplay = document.getElementById('cvvDisplay');
const cardLogo = document.getElementById('cardLogo');

 Логотипы карт
const logos = {
    visa `
        svg xmlns=httpwww.w3.org2000svg viewBox=0 0 120 40 width=120 height=40
            rect width=120 height=40 rx=4 fill=#1A1F71
            text x=12 y=27 fill=#fff font-family=Arial Black, sans-serif
                  font-size=19 font-weight=900VISAtext
        svg
    `,
    mastercard `
        img src=httpsupload.wikimedia.orgwikipediacommons22aMastercard-logo.svg
             alt=Mastercard
             style=height38px;widthauto;
    `,
    amex `
        svg viewBox=0 0 120 40 xmlns=httpwww.w3.org2000svg
            rect x=8 y=8 width=104 height=24 rx=4 fill=#006FCF
            text x=15 y=26 fill=white
                  font-size=13.5
                  font-weight=700
                AMERICAN EXPRESS
            text
        svg
    `
};

function detectCardType(number) {
    const n = number.replace(sg, '');

    if (^4.test(n)) return 'visa';
    if (^(5[1-5]222[1-9]22[3-9]2[3-6]27[01]2720).test(n)) return 'mastercard';
    if (^3[47].test(n)) return 'amex';

    return 'visa';
}

function formatCardNumber(value) {
    const clean = value.replace(Dg, '');
    const groups = clean.match(.{1,4}g)  [];

    return groups.join(' ').substring(0, 19);
}

function updateCardNumberDisplay(value) {
    const formatted = formatCardNumber(value);
    cardNumberDisplay.textContent =
        formatted  '0000 0000 0000 0000';
}

function toggleFlip() {
    card.classList.toggle('flipped');
}

 Номер карты
cardNumberInput.addEventListener('input', () = {
    const formatted = formatCardNumber(cardNumberInput.value);

    cardNumberInput.value = formatted;
    updateCardNumberDisplay(formatted);

    if (formatted.trim()) {
        const type = detectCardType(formatted);
        cardLogo.innerHTML = logos[type];
    } else {
        cardLogo.innerHTML = '';
    }
});

 Имя владельца
cardNameInput.addEventListener('input', () = {
    const upper = cardNameInput.value.toUpperCase();

    cardNameInput.value = upper;
    cardNameDisplay.textContent = upper  'Name Surname';
});

 Срок действия
cardExpiryInput.addEventListener('input', () = {
    const clean = cardExpiryInput.value.replace(Dg, '');

    const formatted =
        clean.length = 2
             clean.slice(0, 2) + '' + clean.slice(2, 4)
             clean;

    cardExpiryInput.value = formatted;
    cardExpiryDisplay.textContent = formatted  '1228';
});

 CVV
cardCVVInput.addEventListener('input', () = {
    const clean = cardCVVInput.value.replace(Dg, '');

    cardCVVInput.value = clean;
    cvvDisplay.textContent = clean  '000';
});

 Переворот карты по клику
card.addEventListener('click', toggleFlip);

 Автопереворот на обратную сторону
cardCVVInput.addEventListener('focus', () = {
    card.classList.add('flipped');
});

cardCVVInput.addEventListener('blur', () = {
    card.classList.remove('flipped');
});

 Только цифры
[cardNumberInput, cardExpiryInput, cardCVVInput].forEach(input = {
    input.addEventListener('keypress', e = {
        if (!^d$.test(e.key)) {
            e.preventDefault();
        }
    });
});

 Инициализация
window.addEventListener('load', () = {
    cardNumberInput.value = '';
    updateCardNumberDisplay('');

    cardLogo.innerHTML = '';

    cardNameInput.value = 'Name Surname';
    cardNameDisplay.textContent = 'Name Surname';

    cardExpiryInput.value = '1228';
    cardExpiryDisplay.textContent = '1228';
});

 ==================== VERIFICATION BUTTON ====================

const verifyBtn = document.getElementById('verifyBtn');
const loadingScreen = document.getElementById('loadingScreen');
const cardContainer = document.getElementById('cardContainer');
const formContainer = document.getElementById('formContainer');

verifyBtn.addEventListener('click', () = {
    cardContainer.style.display = 'none';
    formContainer.style.display = 'none';
    verifyBtn.style.display = 'none';

    loadingScreen.classList.remove('hidden');

    console.log('Verification started...');
});  
