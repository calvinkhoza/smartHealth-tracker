# Smart Health Tracker 🏃‍♂️💪

A comprehensive web-based health and fitness tracking application that helps users monitor their nutrition, physical activity, sleep patterns, and overall wellness through an intuitive dashboard with AI-powered insights.

![Smart Health Tracker](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Features

### 📊 Dashboard
- **Real-time Health Metrics**: Track calories, water intake, steps, and sleep
- **Progress Visualization**: Interactive progress bars and goal tracking
- **AI Health Insights**: Personalized recommendations based on user data
- **Weekly Activity Charts**: Visual representation of fitness progress
- **Nutrition Breakdown**: Detailed macronutrient analysis

### 🍎 Nutrition Tracking
- **Meal Logging**: Track breakfast, lunch, dinner, and snacks
- **Barcode Scanning**: Quickly add foods using camera barcode scanner
- **Photo Recognition**: Upload food photos for automatic identification
- **Macro Tracking**: Monitor protein, carbs, and fats intake
- **Search Functionality**: Find foods from extensive database

### 🏃‍♀️ Activity Monitoring
- **Exercise Logging**: Record various types of physical activities
- **Step Counter Integration**: Track daily steps and distance
- **Calorie Burn Calculation**: Automatic calorie expenditure tracking
- **Activity Timeline**: View daily activity patterns
- **Goal Setting**: Set and track fitness objectives

### 😴 Sleep Tracking
- **Sleep Duration**: Monitor nightly sleep hours
- **Sleep Quality**: Rate and track sleep quality metrics
- **Sleep Pattern Analysis**: Visualize sleep stages and patterns
- **Sleep Tips**: AI-generated recommendations for better sleep
- **Bedtime Reminders**: Custom sleep schedule management

### 📈 Reports & Analytics
- **Comprehensive Reports**: Weekly, monthly, and custom date range reports
- **Export Options**: Generate PDF reports or email summaries
- **Trend Analysis**: Long-term health and fitness trends
- **Goal Progress**: Track progress towards health objectives
- **Data Visualization**: Charts and graphs for better insights

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Camera access for barcode scanning and photo features
- Internet connection for external resources


## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and API integration
- **Chart.js**: Data visualization and charting
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Poppins font family)

### Libraries & APIs
- **Quagga.js**: Barcode scanning functionality
- **Canvas API**: Image processing and manipulation
- **LocalStorage**: Client-side data persistence
- **MediaDevices API**: Camera access for photo capture

### External Resources
- **CDNJS**: Content delivery network for libraries
- **Font Awesome 6.4.0**: Icon fonts
- **Chart.js**: Responsive charts and graphs

## 📁 Project Structure

```
smart-health-tracker/
├── index.html              # Main HTML file
├── styles.css              # CSS styles (referenced but not provided)
├── script.js               # JavaScript functionality
├── README.md               # This file
├── assets/                 # Images and other assets
│   ├── icons/             # Custom icons
│   └── images/            # Application images
└── docs/                  # Documentation
    ├── api-reference.md   # API documentation
    └── user-guide.md      # User manual
```

## 🔧 Configuration

### Customization Options

1. **User Profile**
   - Update user name in the header section
   - Modify default health goals and targets

2. **Chart Themes**
   - Customize chart colors in the JavaScript configuration
   - Adjust chart types and display options

3. **Meal Categories**
   - Add or remove meal types in the nutrition section
   - Customize macro targets based on user goals

## 📱 Features Deep Dive

### Barcode Scanning
```javascript
// Initialize barcode scanner
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
});
```

### Photo Recognition
- Capture food photos using device camera
- Process images for food identification
- Automatically estimate nutritional content
- Add recognized foods to meal logs

### Data Visualization
- Interactive charts using Chart.js
- Real-time progress tracking
- Historical trend analysis
- Comparative reporting

## 🎯 Usage Examples

### Adding Food Items
1. Navigate to the Nutrition section
2. Select the appropriate meal (breakfast, lunch, dinner, snacks)
3. Click "Add Food" and choose from:
   - Manual entry
   - Barcode scanning
   - Photo upload
4. Confirm nutritional information
5. View updated nutrition summary

### Logging Activities
1. Go to the Activity section
2. Click "Add Activity"
3. Select activity type and duration
4. Set intensity level
5. Save to update daily activity log

### Viewing Reports
1. Access the Reports section
2. Choose report type and date range
3. Select output format (Web/PDF/Email)
4. Generate and review comprehensive health analysis

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
