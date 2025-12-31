// Configuration
const CONFIG = {
    EXCHANGE_RATE: 1.95583,
    DECIMAL_PLACES: 2,
    ARIA_PRESS_DURATION: 300, // milliseconds
    FAQ_SCROLL_DELAY: 100, // milliseconds
    DEFAULT_LANG: 'bg',
    DEFAULT_THEME: 'light',
    SERVICE_WORKER_PATH: './sw.js'
};

// Internationalization
const translations = {
    en: {
        'app-title': 'Euro Lev Calculator',
        'app-subtitle': 'Change calculator for Bulgaria\'s euro transition',
        'total-amount': 'Total Amount (EUR)',
        'received-bgn': 'Paid (BGN)',
        'received-eur': 'Paid (EUR)',
        'calculate': 'Calculate Change',
        'clear': 'Clear',
        'change-eur': 'Change (EUR)',
        'change-bgn': 'Change (BGN)',
        'calculation-title': 'How this is calculated:',
        'faq-button': 'FAQ',
        'faq-title': 'Frequently Asked Questions',
        'official-faq': 'Official FAQ from Bulgarian National Bank',
        'footer-text': 'Fixed exchange rate: 1 EUR = 1.95583 BGN',
        'footer-note': 'Rounded to 2 decimal places according to EU rules',
        'calc-step-1': '1. Total amount:',
        'calc-step-2': '2. Paid in BGN:',
        'calc-step-3': '3. Paid in EUR:',
        'calc-step-4': '4. Total payment:',
        'calc-step-5': '5. Change:',
        'error-invalid-input': 'Please enter valid numbers',
        'error-insufficient-payment': 'Received amount is less than total amount.',
        'aria-total-amount': 'Enter the total purchase amount in euros',
        'aria-received-bgn': 'Enter amount received in Bulgarian leva',
        'aria-received-eur': 'Enter amount received in euros',
        'aria-calc-btn': 'Calculate the change to be returned in euros',
        'banner-text': 'You can pay in Bulgarian Leva (BGN) until 31 January 2026. After that, only Euros (EUR) will be accepted.',
        'update-available': 'A new version is available!',
        'update-now': 'Update Now',
        faqs: [
            {
                q: 'How long can payments be made in both currencies?',
                a: 'Unlike the unlimited exchange of leva to euro, payments in both currencies, known as the dual circulation period, is limited from 1 to 31 January 2026. During this one-month period, the lev and the euro will be in circulation simultaneously, with both currencies having the status of legal tender. After that, from 1 February 2026, the euro will remain the only currency in our country. People will be able to continue exchanging leva, if they still have any, at the BNB, commercial banks or post offices (in settlements where there are no commercial bank offices).'
            },
            {
                q: 'How will prices of goods and services be recalculated in euros?',
                a: 'The conversion of prices and monetary units from leva to euros will be carried out by applying the full digital size of the fixed conversion rate, expressed in six digits, with all five decimal places. It is not allowed to recalculate prices at a rate different from the fixed exchange rate (1.95583 leva = 1 euro). The resulting amount will be rounded to two decimal places based on the third decimal place in accordance with the following mathematical rounding rule: • when the third decimal place is less than five, the second decimal place remains unchanged; • when the third decimal place is equal to or greater than five, the second decimal place is increased by one. For example, if a loaf of bread currently costs 1.70 BGN, the price in euros, after applying the rounding rule at the current exchange rate of the lev to the euro, will be 87 euro cents.'
            },
            {
                q: 'If I pay in leva, how will I get change back - in leva or euros?',
                a: 'During the dual circulation period, i.e. in January 2026, upon receipt of cash payment in leva or euros, the merchant will return the change entirely in euros. For this purpose, merchants will be supplied with euro banknotes and coins even before the date of introduction of the euro. By exception, when the merchant does not have sufficient immediate availability to return the change entirely in euros, they will return the change entirely in leva.'
            },
            {
                q: 'What are the obligations of merchants from 1 to 31 January 2026 - during the dual circulation period (leva and euros)?',
                a: 'During the dual circulation period, 1-31 January 2026, upon receipt of cash payment in leva or euros, the merchant will return the change entirely in euros. When the merchant does not have sufficient immediate availability to return the change entirely in euros, they will return the change entirely in leva. For this purpose, merchants will be supplied with euro banknotes and euro coins even before the date of introduction of the euro. During this one-month period, 1-31 January 2026, the merchant may refuse to accept more than 50 pieces of coins in leva, including stotinki, in one transaction with the buyer.'
            }
        ]
    },
    bg: {
        'app-title': 'Евро Лев Калкулатор',
        'app-subtitle': 'Калкулатор за ресто за прехода към евро в България',
        'total-amount': 'Обща сметка (EUR)',
        'received-bgn': 'Платено в лева (BGN)',
        'received-eur': 'Платено в евро (EUR)',
        'calculate': 'Изчисли ресто',
        'clear': 'Изчисти',
        'change-eur': 'Ресто в евро (EUR)',
        'change-bgn': 'Ресто в лева (BGN)',
        'calculation-title': 'Как се изчислява това:',
        'faq-button': 'Въпроси',
        'faq-title': 'Често Задавани Въпроси',
        'official-faq': 'Официален списък на често задавани въпроси от Българска Народна Банка',
        'footer-text': 'Фиксиран обменен курс: 1 EUR = 1.95583 BGN',
        'footer-note': 'Закръглено до 2 знака след десетичната запетая съгласно правилата на ЕС',
        'calc-step-1': '1. Обща сметка:',
        'calc-step-2': '2. Получено в лева:',
        'calc-step-3': '3. Получено в евро:',
        'calc-step-4': '4. Общо получено:',
        'calc-step-5': '5. Ресто:',
        'error-invalid-input': 'Моля въведете валидни числа',
        'error-insufficient-payment': 'Получената сума е по-малка от общата сметка.',
        'aria-total-amount': 'Въведете общата сума на покупката в евро',
        'aria-received-bgn': 'Въведете получената сума в български левове',
        'aria-received-eur': 'Въведете получената сума в евро',
        'aria-calc-btn': 'Изчислете рестото, което трябва да бъде върнато в евро',
        'banner-text': 'Можете да плащате в български левове (BGN) до 31 януари 2026 г. След това ще се приемат плащания само в евро (EUR).',
        'update-available': 'Налична е нова версия!',
        'update-now': 'Обнови сега',
        faqs: [
            {
                q: 'Докога ще може да се плаща и в двете валути?',
                a: 'За разлика от неограничената във времето обмяна на левове в евро плащането в двете валути, известно като период на двойното обращение, е ограничено от 1 до 31 януари 2026 г. През този едномесечен период левът и еврото ще бъдат в обращение едновременно, като и двете валути ще бъдат със статут на законно платежно средство. След това, от 1 февруари 2026 г., еврото ще остане единствената валута на страната ни. Хората ще могат да продължат да обменят левове, ако все още разполагат с такива, в БНБ, в търговските банки или в пощенски клонове (в населени места, където няма офиси на търговски банки).'
            },
            {
                q: 'Как ще се преизчисляват цените на стоките и услугите в евро?',
                a: 'Превалутирането на цени и парични единици от левове в евро ще се извърши чрез прилагане на пълния цифров размер на фиксирания курс на преобразуване, изразен в шест цифри, с всичките пет знака след десетичната запетая. Не се разрешава преизчисляване на цени при курс, различен от фиксирания обменен курс (1,95583 лева = 1 евро). Получената сума ще се закръглява до два знака след десетичната запетая на базата на третия знак след десетичната запетая в съответствие със следното математическо правило за закръгляване: • когато третият знак след десетичната запетая е по-малък от пет, вторият знак след десетичната запетая остава непроменен; • когато третият знак след десетичната запетая е равен или по-голям от пет, вторият знак след десетичната запетая се увеличава с едно. Така например, ако един хляб в момента струва 1,70 лв., то цената в евро, след прилагане на правилото за закръгляване при настоящия обменен курс на лева към еврото, ще е 87 евроцента'
            },
            {
                q: 'Ако плащам в левове, как ще ми връщат – в левове или в евро?',
                a: 'В периода на двойно обращение, т.е. през месец януари 2026 г., при получено плащане в брой в левове или в евро търговецът връща остатъка изцяло в евро. За тази цел търговците ще бъдат снабдени с евробанкноти и монети още преди датата на въвеждане на еврото. По изключение, когато търговецът няма достатъчна моментна наличност да върне остатъка изцяло в евро, връща остатъка изцяло в левове.'
            },
            {
                q: 'Какви са задълженията на търговците от 1 до 31 януари 2026 г. – в периода на двойното обращение (левове и евро)?',
                a: 'В периода на двойно обращение, 1–31 януари 2026 г., при получено плащане в брой в левове или в евро търговецът връща остатъка изцяло в евро. Когато търговецът няма достатъчна моментна наличност да върне остатъка изцяло в евро, връща остатъка изцяло в левове. За тази цел търговците ще бъдат снабдени с евробанкноти и евромонети още преди датата на въвеждане на еврото. В този едномесечен период, 1–31 януари 2026 г., търговецът може да откаже да приема повече от 50 броя монети в левове, включително стотинки, при една трансакция с купувача.'
            }
        ]
    }
};

// State
let currentLang = localStorage.getItem('language') || CONFIG.DEFAULT_LANG;
let currentTheme = localStorage.getItem('theme') || CONFIG.DEFAULT_THEME;
let lastState = {
    calculation: null, // Store last calculation for re-rendering on language change
    error: null // Store last error for re-rendering on language change
};

// Helper Functions
/**
 * Updates the text content of a DOM element by ID
 * @param {string} id - Element ID
 * @param {string} value - Text content to set
 */
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLanguage();
    initializeCalculator();
    initializeFAQ();
    initializeFAQToggle();
});

// Theme management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggle();
    
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeToggle();
    
    // Update ARIA pressed state
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.setAttribute('aria-pressed', 'true');
    setTimeout(() => themeBtn.setAttribute('aria-pressed', 'false'), CONFIG.ARIA_PRESS_DURATION);
}

function updateThemeToggle() {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

// Language management
function initializeLanguage() {
    updateLanguage();
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bg' : 'en';
    localStorage.setItem('language', currentLang);
    updateLanguage();
    
    // Update ARIA pressed state and lang attribute
    const langBtn = document.getElementById('lang-toggle');
    langBtn.setAttribute('aria-pressed', 'true');
    setTimeout(() => langBtn.setAttribute('aria-pressed', 'false'), CONFIG.ARIA_PRESS_DURATION);
    document.documentElement.setAttribute('lang', currentLang);
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLang][key];
    });
    
    // Show opposite language in toggle (what it will switch TO)
    const toggleLang = currentLang === 'en' ? 'BG' : 'EN';
    document.querySelector('.lang-text').textContent = toggleLang;
    document.documentElement.setAttribute('lang', currentLang);
    
    // Update ARIA labels for inputs
    updateAriaLabels();
    
    // Update FAQ content
    updateFAQContent();
    
    // Re-render calculation details if they exist
    if (lastState.calculation) {
        showCalculationDetails(lastState.calculation.totalEUR, lastState.calculation.bgn, lastState.calculation.eur, lastState.calculation.changeEUR);
    }
    
    // Re-render error message if it exists
    if (lastState.error) {
        showError(lastState.error.errorKey, lastState.error.shortfallEUR, lastState.error.shortfallBGN);
    }
}

/**
 * Updates ARIA labels for form inputs based on current language
 */
function updateAriaLabels() {
    const t = translations[currentLang];
    updateElement('total-amount-desc', t['aria-total-amount']);
    updateElement('received-bgn-desc', t['aria-received-bgn']);
    updateElement('received-eur-desc', t['aria-received-eur']);
    updateElement('calc-btn-desc', t['aria-calc-btn']);
}

// Calculator functionality
/**
 * Initializes calculator event listeners
 */
function initializeCalculator() {
    document.getElementById('calculate-btn').addEventListener('click', calculateChange);
    document.getElementById('clear-btn').addEventListener('click', clearCalculator);
    
    // Add enter key support
    ['total-amount', 'received-bgn', 'received-eur'].forEach(id => {
        document.getElementById(id).addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateChange();
            }
        });
    });
}

/**
 * Main calculation function - orchestrates the change calculation process
 */
function calculateChange() {
    // Clear previous results at the start of each calculation
    clearPreviousResults();
    
    const inputs = getInputValues();
    
    if (!validateInputs(inputs)) {
        return;
    }
    
    const calculation = performCalculation(inputs);
    
    if (!calculation) {
        return;
    }
    
    displayResults(calculation);
    storeCalculation(calculation);
}

/**
 * Retrieves and parses input values from form fields
 * @returns {Object} Input values {totalEUR, receivedBGN, receivedEUR}
 */
function getInputValues() {
    return {
        totalEUR: parseFloat(document.getElementById('total-amount').value) || 0,
        receivedBGN: parseFloat(document.getElementById('received-bgn').value) || 0,
        receivedEUR: parseFloat(document.getElementById('received-eur').value) || 0
    };
}

/**
 * Validates user inputs
 * @param {Object} inputs - Input values to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateInputs(inputs) {
    if (inputs.totalEUR <= 0) {
        showError('error-invalid-input');
        return false;
    }
    return true;
}

/**
 * Performs the change calculation
 * @param {Object} inputs - Input values {totalEUR, receivedBGN, receivedEUR}
 * @returns {Object|null} Calculation results or null if insufficient payment
 */
function performCalculation(inputs) {
    // Convert total amount from EUR to BGN
    const totalBGN = inputs.totalEUR * CONFIG.EXCHANGE_RATE;
    
    // Convert received EUR to BGN and calculate total received
    const receivedEURInBGN = inputs.receivedEUR * CONFIG.EXCHANGE_RATE;
    const totalReceivedBGN = inputs.receivedBGN + receivedEURInBGN;
    
    // Check if payment is sufficient
    if (totalReceivedBGN < totalBGN) {
        const shortfallBGN = totalBGN - totalReceivedBGN;
        const shortfallEUR = roundToTwoDecimals(shortfallBGN / CONFIG.EXCHANGE_RATE);
        showError('error-insufficient-payment', shortfallEUR, shortfallBGN);
        return null;
    }
    
    // Calculate change in BGN and convert to EUR
    const changeBGN = totalReceivedBGN - totalBGN;
    const changeEUR = changeBGN / CONFIG.EXCHANGE_RATE;
    
    return {
        totalEUR: inputs.totalEUR,
        receivedBGN: inputs.receivedBGN,
        receivedEUR: inputs.receivedEUR,
        changeBGN: changeBGN,
        changeEUR: roundToTwoDecimals(changeEUR)
    };
}

/**
 * Displays calculation results in the UI
 * @param {Object} calc - Calculation results
 */
function displayResults(calc) {
    updateElement('change-eur', calc.changeEUR.toFixed(CONFIG.DECIMAL_PLACES));
    updateElement('change-eur-formula', calc.changeEUR.toFixed(CONFIG.DECIMAL_PLACES));
    updateElement('change-bgn', calc.changeBGN.toFixed(CONFIG.DECIMAL_PLACES));
    
    // Clear any error messages
    document.getElementById('error-message').textContent = '';
    
    // Show BGN formula section
    document.getElementById('bgn-formula').style.display = 'block';
    
    // Show calculation explanation section
    document.querySelector('.calculation-explanation').style.display = 'block';
    
    // Show calculation details
    showCalculationDetails(calc.totalEUR, calc.receivedBGN, calc.receivedEUR, calc.changeEUR);
}

/**
 * Stores calculation for language switching
 * @param {Object} calc - Calculation results
 */
function storeCalculation(calc) {
    lastState.calculation = {
        totalEUR: calc.totalEUR,
        bgn: calc.receivedBGN,
        eur: calc.receivedEUR,
        changeEUR: calc.changeEUR
    };
}

/**
 * Rounds a number to two decimal places using standard mathematical rounding
 * @param {number} number - Number to round
 * @returns {number} Rounded number
 */
function roundToTwoDecimals(number) {
    return Math.round(number * 100) / 100;
}

/**
 * Displays step-by-step calculation details
 * @param {number} totalEUR - Total amount in EUR
 * @param {number} bgn - Amount received in BGN
 * @param {number} eur - Amount received in EUR
 * @param {number} changeEUR - Change amount in EUR
 */
function showCalculationDetails(totalEUR, bgn, eur, changeEUR) {
    const details = document.getElementById('calculation-details');
    const t = translations[currentLang];
    
    // Convert BGN received to EUR
    const bgnReceivedInEUR = bgn / CONFIG.EXCHANGE_RATE;
    const totalReceivedEUR = bgnReceivedInEUR + eur;
    
    details.innerHTML = `
        <div>${t['calc-step-1']} <strong>${totalEUR.toFixed(CONFIG.DECIMAL_PLACES)} EUR</strong></div>
        <div>${t['calc-step-3']} <strong>${eur.toFixed(CONFIG.DECIMAL_PLACES)} EUR</strong></div>
        <div>${t['calc-step-2']} <strong>${bgn.toFixed(CONFIG.DECIMAL_PLACES)} BGN ÷ ${CONFIG.EXCHANGE_RATE} = ${bgnReceivedInEUR.toFixed(CONFIG.DECIMAL_PLACES)} EUR</strong></div>
        <div>${t['calc-step-4']} <strong>${totalReceivedEUR.toFixed(CONFIG.DECIMAL_PLACES)} EUR</strong></div>
        <div>${t['calc-step-5']} <strong>${totalReceivedEUR.toFixed(CONFIG.DECIMAL_PLACES)} EUR - ${totalEUR.toFixed(CONFIG.DECIMAL_PLACES)} EUR = ${changeEUR.toFixed(CONFIG.DECIMAL_PLACES)} EUR</strong></div>
    `;
}

/**
 * Clears previous calculation results from the display
 */
function clearPreviousResults() {
    // Reset result displays
    updateElement('change-eur', '0.00');
    updateElement('change-eur-formula', '0.00');
    updateElement('change-bgn', '0.00');
    
    // Hide BGN formula and calculation explanation
    document.getElementById('bgn-formula').style.display = 'none';
    document.querySelector('.calculation-explanation').style.display = 'none';
    
    // Clear calculation details
    document.getElementById('calculation-details').innerHTML = '';
    
    // Clear error messages and state
    document.getElementById('error-message').textContent = '';
    lastState.error = null;
}

/**
 * Displays an error message below the calculate button
 * @param {string} errorKey - Translation key for the error message
 * @param {number} shortfallEUR - Optional shortage amount in EUR
 * @param {number} shortfallBGN - Optional shortage amount in BGN
 */
function showError(errorKey, shortfallEUR = null, shortfallBGN = null) {
    const errorContainer = document.getElementById('error-message');
    let errorMessage = translations[currentLang][errorKey];
    
    // Add shortage details if provided
    if (shortfallEUR !== null && shortfallBGN !== null) {
        const shortageText = currentLang === 'en' 
            ? ` Need ${shortfallEUR.toFixed(CONFIG.DECIMAL_PLACES)} EUR more (${shortfallBGN.toFixed(CONFIG.DECIMAL_PLACES)} BGN)`
            : ` Необходими още ${shortfallEUR.toFixed(CONFIG.DECIMAL_PLACES)} EUR (${shortfallBGN.toFixed(CONFIG.DECIMAL_PLACES)} BGN)`;
        errorMessage += shortageText;
    }
    
    errorContainer.textContent = errorMessage;
    
    // Store error state for language switching
    lastState.error = {
        errorKey: errorKey,
        shortfallEUR: shortfallEUR,
        shortfallBGN: shortfallBGN
    };
}

/**
 * Clears all calculator inputs, results, errors, and calculation state
 */
function clearCalculator() {
    // Clear all input fields
    document.getElementById('total-amount').value = '';
    document.getElementById('received-bgn').value = '';
    document.getElementById('received-eur').value = '';
    
    // Clear error messages and state
    document.getElementById('error-message').textContent = '';
    
    // Reset result displays
    updateElement('change-eur', '0.00');
    updateElement('change-eur-formula', '0.00');
    updateElement('change-bgn', '0.00');
    
    // Hide BGN formula and calculation explanation
    document.getElementById('bgn-formula').style.display = 'none';
    document.querySelector('.calculation-explanation').style.display = 'none';
    
    // Clear calculation details
    document.getElementById('calculation-details').innerHTML = '';
    
    // Reset last state
    lastState.calculation = null;
    lastState.error = null;
}

// FAQ functionality
/**
 * Initializes FAQ section
 */
function initializeFAQ() {
    updateFAQContent();
}

/**
 * Updates FAQ content based on current language
 */
function updateFAQContent() {
    const faqContainer = document.getElementById('faq-items');
    const faqs = translations[currentLang].faqs;
    
    faqContainer.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" data-index="${index}" role="listitem">
            <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}" id="faq-question-${index}">${faq.q}</button>
            <div class="faq-answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}">${faq.a}</div>
        </div>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            faqItem.classList.toggle('active');
            this.setAttribute('aria-expanded', !isActive);
        });
    });
}

/**
 * Initializes FAQ section toggle functionality
 */
function initializeFAQToggle() {
    const faqToggle = document.getElementById('faq-toggle');
    const faqSection = document.getElementById('faq');
    const faqClose = document.getElementById('faq-close');
    
    faqToggle.addEventListener('click', function() {
        const isVisible = faqSection.style.display !== 'none';
        
        if (isVisible) {
            closeFAQ();
        } else {
            openFAQ();
        }
    });
    
    faqClose.addEventListener('click', function() {
        closeFAQ();
    });
}

/**
 * Opens the FAQ section
 */
function openFAQ() {
    const faqToggle = document.getElementById('faq-toggle');
    const faqSection = document.getElementById('faq');
    const faqHeading = document.getElementById('faq-heading');
    
    faqSection.style.display = 'block';
    faqToggle.classList.add('active');
    faqToggle.setAttribute('aria-expanded', 'true');
    faqSection.setAttribute('aria-hidden', 'false');
    // Smooth scroll to FAQ heading
    setTimeout(() => {
        faqHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, CONFIG.FAQ_SCROLL_DELAY);
}

/**
 * Closes the FAQ section
 */
function closeFAQ() {
    const faqToggle = document.getElementById('faq-toggle');
    const faqSection = document.getElementById('faq');
    
    faqSection.style.display = 'none';
    faqToggle.classList.remove('active');
    faqToggle.setAttribute('aria-expanded', 'false');
    faqSection.setAttribute('aria-hidden', 'true');
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Service Worker registration with update detection
let newWorker;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register(CONFIG.SERVICE_WORKER_PATH)
            .then(function(registration) {
                console.log('SW registered: ', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    newWorker = registration.installing;
                    
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New service worker available
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
    
    // Reload when new service worker takes control
    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
    });
}

/**
 * Shows the update notification banner
 */
function showUpdateNotification() {
    const notification = document.getElementById('update-notification');
    notification.style.display = 'block';
    
    // Update Now button
    document.getElementById('update-btn').addEventListener('click', () => {
        if (newWorker) {
            newWorker.postMessage({ type: 'SKIP_WAITING' });
        }
    });
    
    // Dismiss button
    document.getElementById('dismiss-update').addEventListener('click', () => {
        notification.style.display = 'none';
    });
}
