// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up theme toggle...');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    
    if (!themeToggleBtn) {
        console.error('Theme toggle button not found!');
        return;
    }
    
    console.log('Theme toggle button found:', themeToggleBtn);
    
                        // Check for saved theme preference or default to dark theme
                    const currentTheme = localStorage.getItem('theme') || 'dark';
    console.log('Current theme from localStorage:', currentTheme);
    
    body.className = currentTheme === 'dark' ? 'dark-theme' : '';
    
    // Update button icon based on current theme
    updateThemeIcon(currentTheme);
    
    // Theme toggle click handler
    themeToggleBtn.addEventListener('click', function() {
        console.log('Theme toggle clicked!');
        const isDark = body.classList.contains('dark-theme');
        console.log('Is dark theme currently active?', isDark);
        
        if (isDark) {
            // Switch to light theme
            console.log('Switching to light theme...');
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        } else {
            // Switch to dark theme
            console.log('Switching to dark theme...');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        }
    });
    
                        console.log('Theme toggle setup complete!');
                    
                    // Update theme text on window resize
                    window.addEventListener('resize', function() {
                        const currentTheme = localStorage.getItem('theme') || 'dark';
                        updateThemeIcon(currentTheme);
                    });
                });



function updateThemeIcon(theme) {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const icon = themeToggleBtn.querySelector('i');
    const themeLabel = themeToggleBtn.querySelector('.theme-label');
    
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;

    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        themeLabel.textContent = isMobile ? 'Light' : 'Switch to Light Theme';
    } else {
        icon.className = 'fas fa-moon';
        themeLabel.textContent = isMobile ? 'Dark' : 'Switch to Dark Theme';
    }
}

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
    'revenue-analysis': {
        title: "Behavioral Signal Modeling for Cross-Product Insights",
        description: "Discovered untapped revenue potential for an underperforming fraud product by analyzing behavioral overlap and retention patterns across customers using other tools in the suite. Led cross-functional analysis to quantify recoverable revenue and customer segments with monetization potential.",
        technologies: ["Python", "PySpark", "Databricks", "Snowflake", "Pandas", "Matplotlib", "Power BI"],
        features: [
            "<span class='section-header'>Role:</span>",
            "Identified the opportunity and framed the business problem",
            "Led data exploration and designed the analytical framework",
            "Presented findings to executives and influenced sales strategy",
            "",
            "<span class='section-header'>Impact:</span>",
            "Projected $2M+ ARR opportunity by identifying qualified customer segments",
            "Resulted in a 100% increase in the adoption of the targeted product",
            "Strategy influenced sales enablement materials and pitch customizations",
            "Adopted by GTM and customer success teams as part of account expansion playbooks",
            "Executive leadership praised the project as a model for future product growth initiatives",
            "",
            "<span class='section-header'>Approach:</span>",
            "Merged multiple internal datasets from different products into a unified customer graph",
            "Identified overlap patterns and behavior trends of high-LTV customers using the underperforming product",
            "Projected expected revenue uplift by extrapolating observed buying patterns",
            "Created tiered opportunity segments to guide sales and marketing efforts",
            "Visualized insights and segmentation in Power BI dashboards and presented findings to execs"
        ],
        github: "#",
        live: "#"
    },
    'llm-retrieval': {
        title: "Hybrid LLM Retrieval System for Product Intelligence",
        description: "Designed and led the development of a hybrid LLM-based system combining structured data querying and unstructured document search to provide unified, real-time answers to natural language product questions. The system uses a multi-agent architecture with Snowflake SQL generation and semantic retrieval over Confluence pages, enabling teams to access metrics, meeting notes, documentation, and fraud insights in one conversational interface.",
        technologies: ["SQLCoder (LLAMA)", "Python", "Snowflake", "FAISS", "Confluence API", "LangChain", "HuggingFace", "Streamlit"],
        features: [
            "<span class='section-header'>Role:</span>",
            "Designed the entire architecture and multi-agent flow",
            "Led model integration, prompt design, and fusion logic across agents",
            "Built Snowflake Query Agent (NQL → SQLCoder → execution via connector → tabular result)",
            "Built Confluence Search Agent (NQL → embedding search with FAISS → summarization via LLM)",
            "Directed frontend/API structure for surfacing merged answers",
            "Received implementation support from 1–2 engineers, but system design was end-to-end led and owned",
            "",
            "<span class='section-header'>Impact:</span>",
            "5× increase in internal platform usage within 3 weeks of launch",
            "Replaced manual dashboard lookups, Slack pings, and ad-hoc queries",
            "Enabled product managers to track user journeys and platform changes with simple prompts",
            "Allowed sales to surface customer-specific insights without engineering help",
            "Gave clients the ability to retrieve insights without needing to understand the platform",
            "Adopted in onboarding and cross-functional planning sessions",
            "",
            "<span class='section-header'>Approach:</span>",
            "Used LLAMA-based SQLCoder model to generate Snowflake queries from NQL",
            "Executed SQL securely using Python connectors and returned results as tables",
            "Embedded Confluence pages into vector store using FAISS for semantic search",
            "Used LLM to summarize retrieved Confluence snippets",
            "Applied fusion logic: presented best single answer or ranked/merged result depending on confidence",
            "Questions supported included:",
            "  • \"How many fraud cases were caught last year?\"",
            "  • \"What was discussed in the last stakeholder meeting?\"",
            "  • \"Which customers were impacted by billing issues?\"",
            "",
            "<span class='section-header'>System Architecture:</span>",
            "<div class='architecture-diagram'>",
            "  <div class='diagram-row'>",
            "    <div class='diagram-component user'>User NQL Query</div>",
            "    <div class='diagram-arrow'>→</div>",
            "    <div class='diagram-component chatbot'>LLM Chatbot<br><small>Powered by Streamlit</small></div>",
            "  </div>",
            "  <div class='diagram-row parallel-agents'>",
            "    <div class='diagram-component agent sql'>SQL Query Agent<br><small>SQL Coder → Table/JSON</small></div>",
            "    <div class='diagram-component agent confluence'>Confluence Agent<br><small>NQL → Semantic Search → Summary</small></div>",
            "  </div>",
            "  <div class='diagram-row'>",
            "    <div class='diagram-arrow'>↓</div>",
            "  </div>",
            "  <div class='diagram-row'>",
            "    <div class='diagram-component fusion'>Fusion Layer<br><small>Merge & Rank Results</small></div>",
            "  </div>",
            "  <div class='diagram-row'>",
            "    <div class='diagram-arrow'>↓</div>",
            "  </div>",
            "  <div class='diagram-row'>",
            "    <div class='diagram-component output'>Final Output<br><small>Confidence-ranked Results</small></div>",
            "  </div>",
            "</div>"
        ],
        github: "#",
        live: "#"
    },
    'supervised-learning-optimization': {
        title: "Supervised Learning Optimization with Verification and Public Data",
        description: "Designed and led a dual-pronged analytics initiative to improve fraud detection through better labeling and enriched training data. One component focused on integrating user verification workflows (emails, SMS, etc.) to capture labels in real-time, while the other centered on ingesting external public datasets to supplement internal features. The combined effort resulted in major performance gains for supervised fraud detection models.",
        technologies: ["Python", "Pandas", "Snowflake", "Databricks", "Public Datasets", "Redis"],
        features: [
            "<span class='section-header'>Role:</span>",
            "Designed and architected the overall solution to enrich model training data",
            "Initiated the idea to integrate public datasets to supplement internal features",
            "Led integration of real-time user verification service to capture fraud/legit labels",
            "Built pipelines to ingest and join external fraud datasets with internal profiles",
            "Trained fraud detection models using enriched datasets",
            "Measured impact through test group analysis and fraud recall improvement",
            "Delivered visual insights and summaries for stakeholders",
            "",
            "<span class='section-header'>Impact:</span>",
            "Prevented over $1.2M in fraud for top customer segment within the first quarter",
            "Increased training label volume by 3× through automated verification",
            "Improved fraud model performance by 15% (precision and recall)",
            "Enabled earlier detection of fraud by enriching behavioral signals and verification outcomes",
            "Highlighted new fraud patterns and reduced false negatives",
            "Contributed directly to model retraining and data ops roadmap",
            "",
            "<span class='section-header'>Approach:</span>",
            "Integrated verification service with platform to trigger user challenges (email, OTP)",
            "Collected resulting labels (pass/fail) and added to model training sets",
            "Ingested public fraud blacklists and behavioral datasets into Snowflake",
            "Conducted comparative testing before and after data augmentation",
            "Trained new models with updated data and measured performance gains"
        ],
        github: "#",
        live: "#"
    },
    'sampling-architecture': {
        title: "Sampling Architecture for Fair and Accurate Models",
        description: "Identified a critical imbalance in global fraud model training caused by naïve undersampling of unlabeled data, which led to misclassification of legitimate transactions and customer dissatisfaction. In some cases, the class imbalance reached extreme levels (e.g., 1:300 or even 1:300K), severely limiting generalization. The existing process treated a small subset of unlabeled data as non-fraud, skewing the class distribution and model generalizability.",
        technologies: ["Python", "Snowflake", "Pandas", "Jupyter", "Matplotlib"],
        features: [
            "<span class='section-header'>Role:</span>",
            "Audited model training workflows and uncovered key flaws in the negative sampling methodology",
            "Designed and implemented a multistage and mutillevel sampling pipeline combining selective, stratified, and random strategies",
            "Calibrated sampling ratios to align with behavior-level fraud categories",
            "Engineered new features to increase signal strength across heterogeneous datasets",
            "Ran test group comparisons to validate model lift and customer experience improvements",
            "",
            "<span class='section-header'>Impact:</span>",
            "Reduced customer complaints by 60%",
            "Improved model performance by 20% (precision and recall)",
            "Tree-based fraud classifiers showed the most substantial lift and reduced false positives",
            "Balanced fraud recall across different attack patterns and client sizes",
            "Aligned model training with annual model improvement goals",
            "Created a reusable pipeline for future training cycles",
            "",
            "<span class='section-header'>Approach:</span>",
            "Investigated false positives using confusion matrix slices and historical complaint logs",
            "Analyzed imbalance thresholds where performance degradation occurred",
            "Built a pipeline with configurable stages: selective, stratified, random",
            "Tuned for per-client fairness without compromising global accuracy",
            "Validated approach with comparative A/B testing against legacy training pipeline across multiple releases"
        ],
        github: "#",
        live: "#"
    },
    'statistical-model-comparison': {
        title: "Statistical Model Comparison and Testing Framework",
        description: "Built a comprehensive model evaluation framework to compare candidate models (e.g., XGBoost, Logistic Regression, Decision Trees) beyond just ROC AUC. The system uncovered distribution-level insights by statistically analyzing how model scores differ for fraud vs. non-fraud cases — allowing teams to make confident release decisions backed by explainability and statistical rigor.",
        technologies: ["Python", "scikit-learn", "Snowflake", "MLflow", "Airflow", "VertexAI"],
        features: [
            "<span class='section-header'>Role:</span>",
            "Designed and implemented the comparison framework from scratch",
            "Defined evaluation criteria across statistical distribution, separation, and hypothesis testing",
            "Integrated the tool into the release pipeline with dashboard visualization",
            "Socialized the approach with stakeholders to align on adoption across teams",
            "",
            "<span class='section-header'>Impact:</span>",
            "Replaced ROC AUC as the sole decision metric with rich distributional comparisons",
            "Detected potential model rollbacks and avoided degradation in production",
            "Improved model selection and versioning confidence",
            "Standardized model comparison and explainability for future releases",
            "",
            "<span class='section-header'>Approach:</span>",
            "Measured statistical moments for fraud and non-fraud scores: mean, variance, skewness, standard deviation, and kurtosis",
            "Used Kolmogorov–Smirnov (K–S) and Mann–Whitney U tests to assess if score distributions (old vs. new) were statistically different",
            "Visualized separation between fraud vs. non-fraud distributions",
            "Tracked score overlap and signal separation between model versions",
            "Embedded statistical summaries and visual insights into Snowflake dashboards",
            "Integrated the process into release criteria with MLflow and Airflow"
        ],
        github: "#",
        live: "#"
    },
    'sports-player-tracking': {
        title: "AI-Driven Architecture for Sports Player Tracking and Identification",
        description: "Led the design and development of a modular system to improve player detection, tracking, and jersey number recognition in sports videos. Integrated ResNet50-based Faster R-CNN for player bounding boxes, OpenPose for joint/keypoint estimation, and a binary classifier to detect torso regions likely to contain jersey numbers. Followed this with OCR to extract jersey data.",
        technologies: ["Python", "TensorFlow", "CUDA", "ONNX", "OpenCV", "MLflow", "Docker", "Kubernetes", "Bash Scripting", "AWS (S3, Lambda, ECS/EKS, Step Functions)"],
        features: [
            "<span class='section-header'>Role:</span>",
            "Designed architecture and integrated detection, keypoint, and OCR modules",
            "Built FFNN-based binary classifier to identify jersey-bearing regions",
            "Designed storage/output strategy via S3 for each stage",
            "Led deployment using Dockerized containers triggered via AWS Step Functions",
            "Defined final evaluation criteria based on per-frame player coverage",
            "",
            "<span class='section-header'>Impact:</span>",
            "Improved end-to-end tracking accuracy by ~20%",
            "Increased jersey number detection and identification accuracy",
            "Enabled seamless multi-model deployment and logging in production",
            "Created reusable pipeline to scale to additional sports or camera angles",
            "",
            "<span class='section-header'>Approach:</span>",
            "Player Detection: ResNet50-based Faster R-CNN",
            "Joint Estimation: OpenPose",
            "Jersey Classification: FFNN",
            "OCR: Applied on confident torso crops",
            "Tracking: Lucas-Kanade and Farneback Optical Flow",
            "Smoothing: Kalman Filtering",
            "Evaluation Metric: Frame-by-frame player coverage across full game video",
            "",
            "<span class='section-header'>Architecture:</span>",
            "Input: Video frames split and pushed to S3",
            "Detection Stage: Faster R-CNN detects players → bounding boxes stored in S3",
            "Pose Estimation: OpenPose estimates joints → results saved in S3",
            "Torso Detection: FFNN classifier runs on cropped torso images to flag jersey regions",
            "OCR: Triggered only on positive torso flags",
            "Motion Tracking: Sparse/Dense optical flow for player tracking",
            "Smoothing & Prediction: Kalman filter for missed detections or occlusion",
            "Pipeline Coordination: AWS Step Functions + Lambda triggers for each model stage",
            "Model Tracking & Logging: MLflow used to track accuracy and experiments",
            "Deployment: Dockerized modules deployed via ECS/EKS"
        ],
        github: "#",
        live: "#"
    },
    'mlops-platform': {
        title: "MLOps Platform for End-to-End Model Deployment and Monitoring",
        description: "Led the design, build, and optimization of an end-to-end MLOps platform to streamline model deployment, monitoring, and lifecycle management across classification, regression, and clustering use cases. The platform significantly improved model delivery speed and collaboration between data science and engineering teams.",
        technologies: ["AWS (S3, Step Functions)", "Kubernetes", "MLflow", "Cortex", "Neptune.ai", "Python", "Docker", "Airflow"],
        features: [
            "<span class='section-header'>Role:</span>",
            "Spearheaded MLOps architecture to support batch and inference workflows",
            "Integrated CI/CD pipelines for seamless deployment and rollback of models",
            "Set up automated tracking of experiments and model versions using MLflow and Neptune",
            "Used Kubernetes and Cortex to enable containerized, scalable model serving",
            "Coordinated cross-team workflows between data science, product, and DevOps",
            "",
            "<span class='section-header'>Impact:</span>",
            "Improved time-to-deployment and experimentation velocity by ~60%",
            "Enabled consistent tracking of model metrics, versioning, and lineage",
            "Enhanced reliability and transparency for model operations",
            "",
            "<span class='section-header'>Approach:</span>",
            "Architected modular pipelines for data ingestion, model training, and validation",
            "Used AWS Step Functions to orchestrate training, validation, and deployment jobs",
            "Set up observability stack to monitor serving performance and model drift",
            "Supported integration with S3 and containerized build tools",
            "Facilitated reproducibility through containerized pipelines and tracked metadata"
        ],
        github: "#",
        live: "#"
    },
    'video-recognition-system': {
        title: "AI-Driven Video Recognition System with OCR and Deep Visual Detection",
        description: "Designed and implemented a highly efficient computer vision pipeline to process long-form, high-frame-rate video for detection and classification tasks. The system integrated neural networks, dimensionality reduction, clustering, and OCR to improve inference speed and storage efficiency across the full pipeline.",
        technologies: ["Python", "OpenCV", "TensorFlow", "scikit-learn", "Tesseract", "NumPy", "Matplotlib", "ONNX", "MLflow", "Docker", "AWS", "Kubernetes"],
        features: [
            "<span class='section-header'>Role:</span>",
            "Architected the end-to-end ML pipeline to process 100–120 minute raw video files at 60fps",
            "Implemented frame selection logic to downsample to 15–30fps, reducing compute needs",
            "Applied PCA for dimensionality reduction and k-means clustering for grouping key frames",
            "Trained feed-forward neural networks on clustered segments for downstream prediction",
            "Built and compared visual detectors using SSD and YOLOv3 for object recognition",
            "Developed OCR-based modules to extract numeric and graphic information",
            "Managed model optimization and conversion to ONNX format for deployment",
            "",
            "<span class='section-header'>Impact:</span>",
            "Reduced compute and storage usage by over 50% across processing stages",
            "Improved pipeline throughput and reduced deployment time by 30%",
            "Enabled scalable and cost-effective video ML workloads for long-form inputs",
            "Enhanced accuracy and efficiency in visual detection and recognition tasks",
            "",
            "<span class='section-header'>Approach:</span>",
            "Used clustering and FPS reduction to identify representative frames",
            "Combined PCA and FFNN to build lean, high-signal classification models",
            "Applied OCR on filtered bounding boxes to extract key text/numeric data",
            "Compared SSD vs YOLOv3 performance for frame-level object detection",
            "Built modular pipeline compatible with multiple deployment formats",
            "Managed experimentation and performance tracking with MLFlow"
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
            li.innerHTML = feature;
            featuresContainer.appendChild(li);
        });
        
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
