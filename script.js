const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const mobileInput = document.getElementById('mobile');
const mobileError = document.getElementById('mobileError');
const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');
const checkbox = document.getElementById('consentCheckbox');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('digitizationForm');

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

function populateStates() {
    Object.keys(selectState).forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

stateSelect.addEventListener('change', () => {
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

emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email.';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

mobileInput.addEventListener('input', () => {
    const mobile = mobileInput.value;
    if (!/^\d{10}$/.test(mobile)) {
        mobileError.textContent = 'Enter a valid 10-digit mobile number.';
        mobileError.style.display = 'block';
    } else {
        mobileError.style.display = 'none';
    }
});

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
        submitBtn.classList.add('bg-[#BF0C10]', 'hover:bg-[#a10a0d]');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('bg-[#BF0C10]', 'hover:bg-[#a10a0d]');
        submitBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});

populateStates();
