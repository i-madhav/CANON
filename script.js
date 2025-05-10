// Mobile form elements
const mobileForm = document.getElementById('digitizationFormMobile');
const emailInputMobile = document.getElementById('emailMobile');
const emailErrorMobile = document.getElementById('emailErrorMobile');
const mobileInputMobile = document.getElementById('mobileMobile');
const mobileErrorMobile = document.getElementById('mobileErrorMobile');
const stateSelectMobile = document.getElementById('stateMobile');
const citySelectMobile = document.getElementById('cityMobile');
const consentCheckboxMobile = document.getElementById('consentCheckboxMobile');
const submitBtnMobile = document.getElementById('submitBtnMobile');

// Desktop form elements
const desktopForm = document.getElementById('digitizationFormDesktop');
const emailInputDesktop = document.getElementById('emailDesktop');
const emailErrorDesktop = document.getElementById('emailErrorDesktop');
const mobileInputDesktop = document.getElementById('mobileDesktop');
const mobileErrorDesktop = document.getElementById('mobileErrorDesktop');
const stateSelectDesktop = document.getElementById('stateDesktop');
const citySelectDesktop = document.getElementById('cityDesktop');
const consentCheckboxDesktop = document.getElementById('consentCheckboxDesktop');
const submitBtnDesktop = document.getElementById('submitBtnDesktop');

// Debug logs
console.log('Mobile State Select:', stateSelectMobile);
console.log('Desktop State Select:', stateSelectDesktop);

const selectState = {
    "Andaman and Nicobar Islands": ["Port Blair", "Bombuflat"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
    "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
    "Chandigarh": ["Chandigarh"],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg"],
    "Dadra and Nagar Haveli": ["Silvassa"],
    "Daman and Diu": ["Daman", "Diu"],
    "Delhi": ["New Delhi", "Dwarka", "Saket", "Rohini"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Leh"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubli"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    "Lakshadweep": ["Kavaratti"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Manipur": ["Imphal"],
    "Meghalaya": ["Shillong"],
    "Mizoram": ["Aizawl"],
    "Nagaland": ["Kohima", "Dimapur"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
    "Pondicherry": ["Puducherry", "Karaikal", "Mahe"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
    "Sikkim": ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
    "Tripura": ["Agartala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Nainital"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"]
};

function populateStates(selectElement) {
    console.log('Populating states for:', selectElement.id);
    // Clear existing options except the first one
    selectElement.innerHTML = '<option>Select State</option>';
    
    // Add all states
    Object.keys(selectState).forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        selectElement.appendChild(option);
    });
    console.log('States populated:', selectElement.options.length);
}

function setupStateCityHandlers(stateSelect, citySelect) {
    stateSelect.addEventListener('click', () => {
        console.log('State select clicked:', stateSelect.id);
        if (stateSelect.options.length <= 1) {
            populateStates(stateSelect);
        }
    });

    stateSelect.addEventListener('change', () => {
        console.log('State changed to:', stateSelect.value);
        const selectedState = stateSelect.value;
        citySelect.innerHTML = '<option>Select City</option>';
        if (selectState[selectedState]) {
            selectState[selectedState].forEach(city => {
                const option = document.createElement('option');
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    });
}

// Setup handlers for both forms
setupStateCityHandlers(stateSelectMobile, citySelectMobile);
setupStateCityHandlers(stateSelectDesktop, citySelectDesktop);

// Email validation for both forms
[emailInputMobile, emailInputDesktop].forEach((input, index) => {
    const errorElement = index === 0 ? emailErrorMobile : emailErrorDesktop;
    input.addEventListener('input', () => {
        const email = input.value;
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorElement.textContent = 'Please enter a valid email.';
            errorElement.style.display = 'block';
        } else {
            errorElement.style.display = 'none';
        }
    });
});

// Mobile validation for both forms
[mobileInputMobile, mobileInputDesktop].forEach((input, index) => {
    const errorElement = index === 0 ? mobileErrorMobile : mobileErrorDesktop;
    input.addEventListener('input', () => {
        const mobile = input.value;
        if (!/^\d{10}$/.test(mobile)) {
            errorElement.textContent = 'Enter a valid 10-digit mobile number.';
            errorElement.style.display = 'block';
        } else {
            errorElement.style.display = 'none';
        }
    });
});

// Handle checkbox events for both mobile and desktop forms
function handleCheckboxChange(checkbox, submitBtn) {
    if (checkbox.checked) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
        submitBtn.classList.add('bg-red-600', 'hover:bg-red-700', 'cursor-pointer');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('bg-red-600', 'hover:bg-red-700', 'cursor-pointer');
        submitBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
    }
}

consentCheckboxMobile.addEventListener('change', () => handleCheckboxChange(consentCheckboxMobile, submitBtnMobile));
consentCheckboxDesktop.addEventListener('change', () => handleCheckboxChange(consentCheckboxDesktop, submitBtnDesktop));

// Form submission for both forms
[mobileForm, desktopForm].forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'thankyou.html';
    });
});

// Initialize state dropdowns when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    populateStates(stateSelectMobile);
    populateStates(stateSelectDesktop);
});
