// Project data for modals (must be defined before modal functions)
const projectData = {
    // All Projects (projects.html)
    'fraud-detection': {
        title: "Fraud Detection System",
        description: "Advanced machine learning system for real-time fraud detection using ensemble methods and deep learning. This project achieved 99.5% accuracy and reduced false positives by 40% through innovative feature engineering and model optimization techniques.",
        technologies: ["Python", "TensorFlow", "Scikit-learn", "PostgreSQL", "Docker", "AWS"],
        features: [
            "Real-time transaction scoring with <100ms latency",
            "Ensemble learning with XGBoost and Random Forest",
            "Advanced feature engineering and selection",
            "Automated model retraining pipeline",
            "Comprehensive monitoring and alerting system",
            "A/B testing framework for model validation"
        ],
        github: "#",
        live: "#"
    },
    'computer-vision': {
        title: "Computer Vision Pipeline",
        description: "End-to-end computer vision system for object detection and tracking. Implemented YOLO and custom CNN architectures for real-time video processing with applications in surveillance, retail analytics, and autonomous systems.",
        technologies: ["OpenCV", "PyTorch", "YOLO", "Docker", "CUDA", "FFmpeg"],
        features: [
            "Real-time object detection with YOLO v5/v8",
            "Multi-object tracking with Kalman filters",
            "Custom CNN architectures for specific use cases",
            "Video processing pipeline with GPU acceleration",
            "RESTful API for integration with other systems",
            "Comprehensive model evaluation and testing suite"
        ],
        github: "#",
        live: "#"
    },
    'autonomous-navigation': {
        title: "Autonomous Navigation System",
        description: "Robotic navigation system using SLAM algorithms and reinforcement learning. Successfully deployed on unmanned vehicles for path planning and obstacle avoidance in dynamic environments.",
        technologies: ["ROS", "Python", "RL", "Gazebo", "C++", "OpenCV"],
        features: [
            "SLAM-based mapping and localization",
            "Reinforcement learning for path planning",
            "Dynamic obstacle avoidance algorithms",
            "Multi-sensor fusion (LiDAR, Camera, IMU)",
            "Real-time control system with PID tuning",
            "Simulation environment for testing and validation"
        ],
        github: "#",
        live: "#"
    },
    'predictive-analytics': {
        title: "Predictive Analytics Platform",
        description: "Comprehensive analytics platform for business intelligence and predictive modeling. Features real-time dashboards, automated reporting, and advanced statistical analysis capabilities.",
        technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Scikit-learn", "PostgreSQL"],
        features: [
            "Interactive dashboards with real-time data",
            "Automated report generation and scheduling",
            "Advanced statistical modeling and forecasting",
            "Data visualization with interactive charts",
            "User authentication and role-based access",
            "API integration for external data sources"
        ],
        github: "#",
        live: "#"
    },
    'nlp-analysis': {
        title: "NLP Text Analysis Tool",
        description: "Natural language processing system for text analysis, sentiment analysis, and document classification. Built with state-of-the-art transformer models and custom preprocessing pipelines.",
        technologies: ["Python", "Transformers", "HuggingFace", "NLTK", "FastAPI", "Redis"],
        features: [
            "Sentiment analysis with BERT and RoBERTa",
            "Document classification and topic modeling",
            "Named entity recognition (NER)",
            "Text summarization and keyword extraction",
            "Real-time text processing API",
            "Custom model fine-tuning pipeline"
        ],
        github: "#",
        live: "#"
    },
    'ml-pipeline': {
        title: "ML Pipeline Orchestration",
        description: "End-to-end machine learning pipeline orchestration system with automated training, evaluation, and deployment capabilities. Supports multiple ML frameworks and cloud platforms.",
        technologies: ["Python", "MLflow", "Airflow", "Docker", "Kubernetes", "AWS"],
        features: [
            "Automated model training and evaluation",
            "Version control for models and data",
            "Scalable training on Kubernetes clusters",
            "Automated model deployment and rollback",
            "Monitoring and alerting for model performance",
            "Multi-cloud deployment support"
        ],
        github: "#",
        live: "#"
    },
    'mobile-app': {
        title: "AI-Powered Mobile App",
        description: "Cross-platform mobile application with integrated AI features including image recognition, voice processing, and personalized recommendations.",
        technologies: ["React Native", "TensorFlow Lite", "Firebase", "Node.js", "Python", "AWS"],
        features: [
            "Real-time image recognition with TensorFlow Lite",
            "Voice processing and speech-to-text",
            "Personalized recommendation engine",
            "Offline-first architecture",
            "Push notifications and user engagement",
            "Analytics and user behavior tracking"
        ],
        github: "#",
        live: "#"
    },
    'cloud-infrastructure': {
        title: "Cloud ML Infrastructure",
        description: "Enterprise-grade cloud infrastructure for machine learning workloads. Includes auto-scaling, monitoring, and cost optimization features for production ML systems.",
        technologies: ["AWS", "Terraform", "Docker", "Prometheus", "Kubernetes", "Python"],
        features: [
            "Infrastructure as Code with Terraform",
            "Auto-scaling ML training clusters",
            "Cost optimization and resource management",
            "Comprehensive monitoring and alerting",
            "Security and compliance features",
            "Multi-region deployment support"
        ],
        github: "#",
        live: "#"
    }
};

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// EmailJS Configuration
(function() {
    // Initialize EmailJS with your public key
    emailjs.init('_lOksHmbl2V5X_s-4');
})();

// Form submission handling with EmailJS
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('user_name').value;
        const email = document.getElementById('user_email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = document.getElementById('submit-btn');
        const submitText = document.getElementById('submit-text');
        const submitLoading = document.getElementById('submit-loading');
        
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        submitLoading.style.display = 'inline';
        
        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: 'Sandeep Chahal',
            to_email: 'chahal.sdp@gmail.com'
        };
        
        // Send email using EmailJS
        emailjs.send('service_ywpbrdo', 'template_su3jz6c', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showNotification('Thank you for your message! I will get back to you soon.', 'success');
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
            })
            .finally(function() {
                // Reset button state
                submitBtn.disabled = false;
                submitText.style.display = 'inline';
                submitLoading.style.display = 'none';
            });
    });
}

// Notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.backgroundColor = '#10b981';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#ef4444';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Only apply typing effect to the name part
        const nameSpan = heroTitle.querySelector('.highlight');
        if (nameSpan) {
            const nameText = nameSpan.textContent;
            nameSpan.textContent = '';
            
            setTimeout(() => {
                typeWriter(nameSpan, nameText, 150);
            }, 1000);
        }
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});



// Modal functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    if (project) {
        // Update modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        
        // Update technologies
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techContainer.appendChild(techTag);
        });
        
        // Update features
        const featuresContainer = document.getElementById('modalFeatures');
        featuresContainer.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresContainer.appendChild(li);
        });
        
        // Update links
        document.getElementById('modalGithub').href = project.github;
        document.getElementById('modalLive').href = project.live;
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});
