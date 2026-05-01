<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social Awareness System | 1-on-1 Coaching</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    
    <style>
        /* === CSS VARIABLES & RESET === */
        :root {
            --bg-color: #060b13; /* Deep Navy / Black */
            --surface-color: #111827; /* Dark Grey for Cards */
            --text-main: #f9fafb;
            --text-muted: #9ca3af;
            --accent-blue: #2563eb;
            --accent-neon: #3b82f6;
            --danger: #ef4444;
            --success: #10b981;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 24px;
        }

        section {
            padding: 80px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        h1, h2, h3 {
            color: #ffffff;
            margin-bottom: 16px;
        }

        h2 {
            font-size: 2rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 40px;
        }

        .highlight {
            color: var(--accent-neon);
        }

        /* === BUTTONS === */
        .btn-group {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 32px;
        }

        .btn {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 16px 24px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s ease;
            cursor: pointer;
            border: none;
        }

        .btn-primary {
            background-color: var(--accent-blue);
            color: #ffffff;
            box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
        }

        .btn-primary:hover {
            background-color: var(--accent-neon);
            box-shadow: 0 6px 25px rgba(59, 130, 246, 0.6);
            transform: translateY(-2px);
        }

        .btn-secondary {
            background-color: transparent;
            color: var(--accent-neon);
            border: 2px solid var(--accent-blue);
        }

        .btn-secondary:hover {
            background-color: rgba(37, 99, 235, 0.1);
        }

        /* === 1. HERO SECTION === */
        .hero {
            text-align: center;
            padding: 100px 0 80px;
            border-bottom: none;
        }

        .hero h1 {
            font-size: 2.5rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 24px;
        }

        .hero p {
            font-size: 1.1rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto;
        }

        /* === 2. PROBLEM SECTION === */
        .problem-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 32px;
        }

        .problem-item {
            background-color: var(--surface-color);
            padding: 16px 24px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-left: 4px solid var(--danger);
        }

        .stuck-text {
            text-align: center;
            font-weight: 600;
            font-size: 1.2rem;
            color: var(--text-main);
            margin-top: 32px;
        }

        /* === 3. SOLUTION & OUTCOME SECTIONS === */
        .check-list {
            list-style: none;
        }

        .check-list li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 16px;
            font-size: 1.1rem;
        }

        .check-icon {
            color: var(--success);
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 1;
        }

        /* === 4. HOW IT WORKS === */
        .steps {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
        }

        .step-card {
            background-color: var(--surface-color);
            padding: 32px;
            border-radius: 8px;
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .step-number {
            color: var(--accent-neon);
            font-weight: 800;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
            display: block;
        }

        /* === 5. WHO IT IS FOR === */
        .audience-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
        }

        .audience-box {
            background-color: var(--surface-color);
            padding: 32px;
            border-radius: 8px;
        }

        .audience-box.not-for {
            border: 1px solid var(--danger);
            background-color: rgba(239, 68, 68, 0.05);
        }

        /* === 7 & 8. COACHING & PRICE SECTION === */
        .price-card {
            background: linear-gradient(145deg, var(--surface-color), #0f1522);
            border: 1px solid var(--accent-blue);
            padding: 48px 32px;
            border-radius: 12px;
            text-align: center;
        }

        .price {
            font-size: 3rem;
            font-weight: 800;
            color: #ffffff;
            margin: 24px 0;
        }

        /* === DESKTOP MEDIA QUERIES === */
        @media (min-width: 768px) {
            .hero h1 { font-size: 3.5rem; }
            .hero p { font-size: 1.25rem; }
            
            .btn-group {
                flex-direction: row;
                justify-content: center;
            }
            .btn { width: auto; min-width: 200px; }

            .steps { grid-template-columns: repeat(2, 1fr); }
            .audience-grid { grid-template-columns: 1fr 1fr; }
        }
    </style>
</head>
<body>

    <section class="hero">
        <div class="container">
            <h1>Stop Overthinking Conversations and Build <span class="highlight">Real Social Confidence</span> in 14 Days</h1>
            <p>A 1-on-1 coaching system for shy guys who freeze in social situations, struggle with texting, and lack confidence in communication.</p>
            <div class="btn-group">
                <a href="#apply" class="btn btn-primary">Start Now</a>
                <a href="#apply" class="btn btn-secondary">Apply for Coaching</a>
            </div>
        </div>
    </section>

    <section id="problem">
        <div class="container">
            <h2>Does this sound like you?</h2>
            <div class="problem-list">
                <div class="problem-item">Overthinking conversations before and after they happen</div>
                <div class="problem-item">Freezing when talking to people</div>
                <div class="problem-item">Replaying conversations in your head</div>
                <div class="problem-item">Struggling to reply in texting</div>
                <div class="problem-item">Feeling socially behind others</div>
                <div class="problem-item">Not knowing what to say in social situations</div>
            </div>
            <p class="stuck-text">Most people stay stuck because they don’t have a system.</p>
        </div>
    </section>

    <section id="solution">
        <div class="container">
            <h2>Social Awareness System <span class="highlight">(14 Days)</span></h2>
            <p style="text-align: center; margin-bottom: 32px; color: var(--text-muted); font-size: 1.1rem;">
                A structured 1-on-1 coaching system that teaches social awareness, response thinking, and communication confidence.
            </p>
            <ul class="check-list" style="max-width: 500px; margin: 0 auto;">
                <li><span class="check-icon">✓</span> Stop freezing in conversations</li>
                <li><span class="check-icon">✓</span> Respond naturally without overthinking</li>
                <li><span class="check-icon">✓</span> Improve texting and communication</li>
                <li><span class="check-icon">✓</span> Understand social behavior in real time</li>
            </ul>
        </div>
    </section>

    <section id="how-it-works">
        <div class="container">
            <h2>How It Works</h2>
            <div class="steps">
                <div class="step-card">
                    <span class="step-number">Step 1</span>
                    <h3>Diagnosis</h3>
                    <p class="text-muted">Analyze your specific social behavior, mental triggers, and root communication problems.</p>
                </div>
                <div class="step-card">
                    <span class="step-number">Step 2</span>
                    <h3>Awareness Training</h3>
                    <p class="text-muted">Learn exactly how conversations flow and how human social behavior actually works.</p>
                </div>
                <div class="step-card">
                    <span class="step-number">Step 3</span>
                    <h3>Response Building</h3>
                    <p class="text-muted">Fix exactly what to say in real-life situations and map out proper texting habits.</p>
                </div>
                <div class="step-card">
                    <span class="step-number">Step 4</span>
                    <h3>Real-Life Practice</h3>
                    <p class="text-muted">Apply the system in real conversations with active feedback and immediate correction.</p>
                </div>
            </div>
            <div style="text-align: center; margin-top: 48px;">
                <a href="#apply" class="btn btn-primary">Apply for Coaching</a>
            </div>
        </div>
    </section>

    <section id="audience">
        <div class="container">
            <h2>Who This Is For</h2>
            <div class="audience-grid">
                <div class="audience-box">
                    <h3 style="color: var(--success); margin-bottom: 20px;">Perfect for:</h3>
                    <ul class="check-list">
                        <li><span class="check-icon">✓</span> Shy guys</li>
                        <li><span class="check-icon">✓</span> Chronic overthinkers</li>
                        <li><span class="check-icon">✓</span> Socially awkward beginners</li>
                        <li><span class="check-icon">✓</span> Low confidence individuals</li>
                        <li><span class="check-icon">✓</span> People struggling with texting</li>
                    </ul>
                </div>
                <div class="audience-box not-for">
                    <h3 style="color: var(--danger); margin-bottom: 20px;">NOT for:</h3>
                    <ul class="check-list">
                        <li><span style="color: var(--danger); font-weight: bold; margin-right: 12px;">✕</span> Advanced dating or "pickup" users looking for tricks. This is about genuine social foundation.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="outcome">
        <div class="container">
            <h2>The Outcome</h2>
            <div style="background-color: var(--surface-color); padding: 40px; border-radius: 8px;">
                <p style="margin-bottom: 24px; font-size: 1.1rem; color: var(--text-muted);">By completing the system, you will achieve:</p>
                <ul class="check-list">
                    <li><span class="check-icon">✓</span> No more freezing in basic conversations</li>
                    <li><span class="check-icon">✓</span> Better confidence in all social interactions</li>
                    <li><span class="check-icon">✓</span> Improved texting responses</li>
                    <li><span class="check-icon">✓</span> Stronger real-time social awareness</li>
                    <li><span class="check-icon">✓</span> A more natural communication style</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="pricing">
        <div class="container">
            <div class="price-card">
                <h3 style="color: var(--accent-neon); text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px;">1-on-1 Coaching System</h3>
                <h2>Personal Guidance & Correction</h2>
                <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto;">
                    This is a private, 1-on-1 coaching system providing personal guidance, tailored feedback, and real conversation correction to ensure you get results.
                </p>
                <div class="price">$300 – $500</div>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 32px;">*Pricing depends on the required support level.</p>
                <a href="#apply" class="btn btn-primary" style="width: 100%; max-width: 300px;">Apply Now</a>
            </div>
        </div>
    </section>

    <section id="apply" style="border-bottom: none; text-align: center; padding-bottom: 120px;">
        <div class="container">
            <h2>Time to fix your social life.</h2>
            <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">
                If you are ready to stop overthinking and permanently improve your social confidence, take action now.
            </p>
            <div class="btn-group" style="justify-content: center; align-items: center;">
                <a href="#" class="btn btn-primary" style="max-width: 400px;">Apply for Coaching</a>
                <a href="#" class="btn btn-secondary" style="max-width: 400px;">DM “SOCIAL” on Instagram</a>
            </div>
        </div>
    </section>

</body>
</html>
