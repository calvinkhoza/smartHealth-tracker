document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('href');
            document.querySelector(sectionId).classList.add('active');
        });
    });

    // Meal Tabs
    const mealTabs = document.querySelectorAll('.meal-tabs .tab-btn');
    const mealContents = document.querySelectorAll('.meal-content');
    
    mealTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const mealType = this.getAttribute('data-meal');
            
            // Remove active class from all tabs and contents
            mealTabs.forEach(t => t.classList.remove('active'));
            mealContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(mealType).classList.add('active');
        });
    });

    // Modal Tabs
    const modalTabs = document.querySelectorAll('.modal .tab-btn');
    const modalContents = document.querySelectorAll('.modal .tab-content');
    
    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            modalTabs.forEach(t => t.classList.remove('active'));
            modalContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Water Amount Selector
    const waterButtons = document.querySelectorAll('.water-btn');
    
    waterButtons.forEach(button => {
        button.addEventListener('click', function() {
            waterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Quick Add Button
    const quickAddBtn = document.querySelector('.quick-add-btn');
    const addEntryModal = document.getElementById('addEntryModal');
    const closeModal = document.querySelector('.close-modal');
    
    quickAddBtn.addEventListener('click', function() {
        addEntryModal.classList.add('active');
    });
    
    closeModal.addEventListener('click', function() {
        addEntryModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    addEntryModal.addEventListener('click', function(e) {
        if (e.target === addEntryModal) {
            addEntryModal.classList.remove('active');
        }
    });

    // Initialize Charts
    initializeCharts();

    // Sample data for charts
    function initializeCharts() {
        // Weekly Activity Chart
        const weeklyActivityCtx = document.getElementById('weeklyActivityChart').getContext('2d');
        new Chart(weeklyActivityCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Steps',
                        data: [6500, 5900, 8000, 8100, 5600, 9500, 4000],
                        backgroundColor: '#4CAF50',
                        borderRadius: 4
                    },
                    {
                        label: 'Calories Burned',
                        data: [350, 320, 400, 410, 300, 500, 220],
                        backgroundColor: '#2196F3',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Nutrition Chart
        const nutritionCtx = document.getElementById('nutritionChart').getContext('2d');
        new Chart(nutritionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Protein', 'Carbs', 'Fats', 'Fiber', 'Sugar'],
                datasets: [{
                    data: [113, 210, 65, 25, 45],
                    backgroundColor: [
                        '#4CAF50',
                        '#2196F3',
                        '#FF9800',
                        '#9C27B0',
                        '#F44336'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    }
                }
            }
        });

        // Activity Chart
        const activityCtx = document.getElementById('activityChart').getContext('2d');
        new Chart(activityCtx, {
            type: 'line',
            data: {
                labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
                datasets: [{
                    label: 'Activity Level',
                    data: [20, 40, 80, 30, 60, 10],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Sleep Chart
        const sleepCtx = document.getElementById('sleepChart').getContext('2d');
        new Chart(sleepCtx, {
            type: 'bar',
            data: {
                labels: ['10PM', '11PM', '12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM'],
                datasets: [{
                    label: 'Sleep Stages',
                    data: [0, 1, 2, 3, 3, 2, 1, 2, 1, 0],
                    backgroundColor: '#2196F3',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                const stages = ['Awake', 'Light', 'Deep', 'REM'];
                                return stages[value] || '';
                            }
                        }
                    }
                }
            }
        });

        // Report Chart 1
        const reportCtx1 = document.getElementById('reportChart1').getContext('2d');
        new Chart(reportCtx1, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Sleep Hours',
                        data: [6.5, 7.0, 7.2, 7.5],
                        borderColor: '#2196F3',
                        backgroundColor: 'rgba(33, 150, 243, 0.1)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Water Intake',
                        data: [6, 6.5, 7, 7.5],
                        borderColor: '#4CAF50',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });

        // Report Chart 2
        const reportCtx2 = document.getElementById('reportChart2').getContext('2d');
        new Chart(reportCtx2, {
            type: 'bar',
            data: {
                labels: ['Protein', 'Carbs', 'Fats', 'Fiber'],
                datasets: [
                    {
                        label: 'Week 1',
                        data: [90, 180, 60, 20],
                        backgroundColor: '#4CAF50',
                        borderRadius: 4
                    },
                    {
                        label: 'Week 2',
                        data: [95, 190, 65, 22],
                        backgroundColor: '#2196F3',
                        borderRadius: 4
                    },
                    {
                        label: 'Week 3',
                        data: [100, 200, 70, 25],
                        backgroundColor: '#FF9800',
                        borderRadius: 4
                    },
                    {
                        label: 'Week 4',
                        data: [105, 210, 75, 28],
                        backgroundColor: '#9C27B0',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }

    // Form Submissions (simulated)
    const forms = document.querySelectorAll('.tab-content form, .btn-primary');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (e.preventDefault) e.preventDefault();
            
            // Simulate form submission
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
            }
            
            // Show success message (in a real app, this would be after API response)
            alert('Entry added successfully!');
            return false;
        });
    });

    // Format Options
    const formatOptions = document.querySelectorAll('.format-options .btn-outline');
    formatOptions.forEach(option => {
        option.addEventListener('click', function() {
            formatOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Food Item Deletion
    const deleteButtons = document.querySelectorAll('.food-item .btn-icon');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this item?')) {
                this.closest('.food-item').remove();
            }
        });
    });

    // Activity Item Options
    const activityOptions = document.querySelectorAll('.activity-item .btn-icon');
    activityOptions.forEach(button => {
        button.addEventListener('click', function() {
            alert('Activity options would appear here in a full implementation.');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Previous navigation and UI code remains the same...
    // Keep all the existing code up to the "Initialize Charts" section
    
    // Barcode Scanning Functionality
    const scanBarcodeBtn = document.getElementById('scanBarcodeBtn');
    const barcodeModal = document.getElementById('barcodeModal');
    const startScannerBtn = document.getElementById('startScannerBtn');
    const stopScannerBtn = document.getElementById('stopScannerBtn');
    const barcodeResult = document.getElementById('barcodeResult');
    const barcodeNumber = document.getElementById('barcodeNumber');
    const productInfo = document.getElementById('productInfo');
    
    scanBarcodeBtn.addEventListener('click', function() {
        barcodeModal.classList.add('active');
        barcodeResult.style.display = 'none';
    });
    
    barcodeModal.querySelector('.close-modal').addEventListener('click', function() {
        barcodeModal.classList.remove('active');
        stopScanner();
    });
    
    startScannerBtn.addEventListener('click', startScanner);
    stopScannerBtn.addEventListener('click', stopScanner);
    
    function startScanner() {
        startScannerBtn.style.display = 'none';
        stopScannerBtn.style.display = 'inline-block';
        barcodeResult.style.display = 'none';
        
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#barcodeScanner'),
                constraints: {
                    width: 480,
                    height: 320,
                    facingMode: "environment"
                },
            },
            decoder: {
                readers: ["ean_reader", "ean_8_reader", "code_128_reader", "upc_reader", "upc_e_reader"]
            },
        }, function(err) {
            if (err) {
                console.error(err);
                alert("Error initializing barcode scanner: " + err);
                return;
            }
            Quagga.start();
        });
        
        Quagga.onDetected(function(result) {
            const code = result.codeResult.code;
            barcodeNumber.textContent = code;
            barcodeResult.style.display = 'block';
            stopScanner();
            
            // Simulate fetching product info (in a real app, you'd call an API)
            productInfo.innerHTML = '<p>Searching for product information...</p>';
            setTimeout(() => {
                productInfo.innerHTML = `
                    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                        <img src="https://via.placeholder.com/80" alt="Product" style="border-radius: 4px;">
                        <div>
                            <h5 style="margin-bottom: 0.5rem;">Granola Protein Bar</h5>
                            <p style="font-size: 0.9rem; color: #666;">Nutrition: 200kcal, 10g protein</p>
                            <button class="btn btn-primary" style="margin-top: 0.5rem; padding: 0.3rem 0.6rem; font-size: 0.9rem;" 
                                    onclick="addScannedFood('Granola Protein Bar', '1 bar', '200', '10')">
                                Add to Food Log
                            </button>
                        </div>
                    </div>
                `;
            }, 1500);
        });
    }
    
    function stopScanner() {
        Quagga.stop();
        startScannerBtn.style.display = 'inline-block';
        stopScannerBtn.style.display = 'none';
    }
    
    // Photo Upload Functionality
    const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
    const photoInput = document.getElementById('photoInput');
    const photoModal = document.getElementById('photoModal');
    const photoPreview = document.getElementById('photoPreview');
    const photoCanvas = document.getElementById('photoCanvas');
    const confirmPhotoBtn = document.getElementById('confirmPhotoBtn');
    const foodNameFromPhoto = document.getElementById('foodNameFromPhoto');
    
    uploadPhotoBtn.addEventListener('click', function() {
        photoInput.click();
    });
    
    photoInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                photoPreview.src = event.target.result;
                photoPreview.style.display = 'block';
                photoModal.classList.add('active');
                
                // Reset form
                foodNameFromPhoto.value = '';
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });
    
    photoModal.querySelector('.close-modal').addEventListener('click', function() {
        photoModal.classList.remove('active');
    });
    
    confirmPhotoBtn.addEventListener('click', function() {
        const foodName = foodNameFromPhoto.value.trim();
        if (!foodName) {
            alert('Please enter a food name');
            return;
        }
        
        // In a real app, you would:
        // 1. Send the photo to an image recognition API
        // 2. Get nutritional information back
        // 3. Add to food log
        
        // For demo purposes, we'll simulate this
        const loadingText = confirmPhotoBtn.innerHTML;
        confirmPhotoBtn.innerHTML = 'Processing... <span class="spinner"></span>';
        confirmPhotoBtn.disabled = true;
        
        setTimeout(() => {
            // Simulate API response
            const calories = Math.floor(Math.random() * 300) + 100;
            const protein = Math.floor(Math.random() * 20) + 5;
            
            // Add to food log
            addScannedFood(foodName, '1 serving', calories, protein);
            
            // Reset and close
            confirmPhotoBtn.innerHTML = loadingText;
            confirmPhotoBtn.disabled = false;
            photoModal.classList.remove('active');
            photoInput.value = '';
        }, 2000);
    });
    
    // Keep all the existing chart initialization and other code...
});

// Global function to add scanned/uploaded food
function addScannedFood(name, amount, calories, protein) {
    // Get the currently active meal tab
    const activeMealTab = document.querySelector('.meal-tabs .tab-btn.active');
    if (!activeMealTab) return;
    
    const mealType = activeMealTab.getAttribute('data-meal');
    const mealContent = document.getElementById(mealType);
    
    // Create new food item
    const foodItem = document.createElement('div');
    foodItem.className = 'food-item';
    foodItem.innerHTML = `
        <div class="food-info">
            <h4>${name}</h4>
            <span>${calories} kcal | ${protein}g protein</span>
        </div>
        <button class="btn btn-icon"><i class="fas fa-times"></i></button>
    `;
    
    // Insert before the "Add Food" button
    const addButton = mealContent.querySelector('.btn-outline');
    mealContent.insertBefore(foodItem, addButton);
    
    // Add delete functionality
    foodItem.querySelector('.btn-icon').addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this item?')) {
            foodItem.remove();
            updateNutritionSummary();
        }
    });
    
    // Update nutrition summary
    updateNutritionSummary();
    
    // Close barcode modal if open
    const barcodeModal = document.getElementById('barcodeModal');
    if (barcodeModal.classList.contains('active')) {
        barcodeModal.classList.remove('active');
    }
    
    // Show success message
    alert(`${name} added to your ${mealType} log!`);
}

function updateNutritionSummary() {
    // In a real app, you would calculate totals from all food items
    // For demo, we'll just simulate an update
    document.querySelector('.macro-value').textContent = '113';
}