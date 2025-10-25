"use client";

import { ArrowRight, Brain, Layers, MessageSquare, Network, Sparkles, Workflow, LineChart, Shield, Database, Cpu, Zap, Target, Bot, TrendingUp, BarChart3, Users, DollarSign, AlertTriangle, CheckCircle, Lightbulb, Play, X, ChevronRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Section = ({ id, title, kicker, children }:{
  id?: string; title: string; kicker?: string; children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id || '');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [id]);

  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32 section-fade-in ${isVisible ? 'visible' : ''}`}>
      {kicker && <p className="text-pulse-cyan/80 text-sm tracking-widest uppercase mb-3">{kicker}</p>}
      <h2 className="text-3xl md:text-5xl font-semibold mb-8">{title}</h2>
      <div className="text-slate-300 text-lg leading-relaxed">{children}</div>
    </section>
  );
};

const SDKProcessAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('sdk-process');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const processSteps = [
    {
      title: "Data Ingestion",
      description: "Raw data flows into the system",
      icon: <Database className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Vector Embedding",
      description: "Data transforms into semantic vectors",
      icon: <Network className="h-8 w-8" />,
      color: "from-cyan-500 to-purple-500"
    },
    {
      title: "RAG Processing",
      description: "Hybrid retrieval with business rules",
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "LoRA Adaptation",
      description: "Lightweight model fine-tuning",
      icon: <Cpu className="h-8 w-8" />,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Continuous Learning",
      description: "DPO feedback loop optimization",
      icon: <Zap className="h-8 w-8" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="sdk-process" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32">
      <div className="text-center mb-16">
        <p className="text-pulse-cyan/80 text-sm tracking-widest uppercase mb-3">Live Demo</p>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          How <span className="grad">PixelPulse SDK</span> Works
        </h2>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
          See in real-time how our algorithms process data and learn continuously
        </p>
      </div>

      <div className="sdk-process-container">
        {/* Neural Network Visualization */}
        <div className="neural-network mb-12">
          <div className="neuron"></div>
          <div className="neuron"></div>
          <div className="neuron"></div>
          <div className="neuron"></div>
          <div className="neuron"></div>
          <div className="neuron"></div>
          <div className="connection-line"></div>
          <div className="connection-line"></div>
          <div className="connection-line"></div>
          <div className="connection-line"></div>
          <div className="connection-line"></div>
        </div>

        {/* Process Timeline */}
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`timeline-item ${currentStep === index ? 'active' : ''}`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`p-3 bg-gradient-to-r ${step.color} rounded-xl`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-slate-300">{step.description}</p>
            </div>
          ))}
          
          {/* Timeline Connectors */}
          <div className="timeline-connector" style={{ top: '100px' }}></div>
          <div className="timeline-connector" style={{ top: '250px' }}></div>
        </div>

        {/* Learning Loop */}
        <div className="learning-loop">
          <div className="central-hub"></div>
          <div className="loop-step">Data</div>
          <div className="loop-step">Process</div>
          <div className="loop-step">Learn</div>
          <div className="loop-step">Adapt</div>
        </div>

        {/* Data Flow Particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="data-flow"
            style={{
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Controls */}
      <div className="mt-16 text-center">
        <div className="flex justify-center gap-4 mb-8">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentStep === index 
                  ? 'bg-pulse-cyan scale-125' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
        <p className="text-slate-400 text-sm">
          Click the dots to navigate through the process • Auto-animation active
        </p>
      </div>
    </section>
  );
};

const StrategicIntelligenceExperience = () => {
  const [activeConversation, setActiveConversation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('strategic-intelligence');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const conversations = [
    {
      user: "What's driving our customer churn this quarter?",
      ai: {
        reasoning: "Analyzing customer behavior patterns, payment history, and engagement metrics across 47,000 active users...",
        insight: "Primary churn drivers: 1) Payment failures increased 23% after pricing change, 2) Feature usage dropped 31% for users on legacy plans, 3) Support ticket volume spiked 45% in last 30 days",
        recommendation: "Immediate action: Implement payment retry logic, offer migration incentives for legacy users, and deploy proactive support for high-risk segments",
        confidence: 94,
        impact: "High - Could reduce churn by 15-20%"
      }
    },
    {
      user: "Should we expand to the European market next quarter?",
      ai: {
        reasoning: "Evaluating market readiness, regulatory compliance, competitive landscape, and resource allocation...",
        insight: "Market analysis shows: 1) GDPR compliance costs estimated at €180K, 2) Local competitors have 40% market share, 3) Customer acquisition cost 2.3x higher than US, 4) Revenue potential €2.1M annually",
        recommendation: "Defer expansion by 6 months. Focus on optimizing current markets first. Consider partnership model instead of direct entry.",
        confidence: 87,
        impact: "Strategic - Avoids €500K+ potential losses"
      }
    },
    {
      user: "Our conversion rate dropped 12% this month. What's happening?",
      ai: {
        reasoning: "Cross-referencing funnel analytics, A/B test results, and external factors...",
        insight: "Root cause identified: 1) Checkout page load time increased 2.3s due to payment processor changes, 2) Mobile conversion specifically down 18%, 3) New competitor launched with 20% lower pricing",
        recommendation: "Priority fixes: Optimize payment flow, implement mobile-first checkout, and launch competitive pricing strategy within 2 weeks",
        confidence: 91,
        impact: "Critical - Revenue impact of €340K monthly"
      }
    }
  ];

  const strategicFeatures = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Conversational Reasoning",
      description: "Ask complex questions in natural language. Get strategic insights with full reasoning chains.",
      example: "Why did our Q3 revenue miss targets by 8%?"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Predictive Intelligence",
      description: "Anticipate market shifts, customer behavior, and business risks before they impact you.",
      example: "Customer churn probability: 67% for segment A"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Strategic Recommendations",
      description: "Get actionable insights with confidence scores and impact assessments.",
      example: "Launch product X in Q2 for €2.1M revenue (89% confidence)"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Context-Aware Analytics",
      description: "Understand not just what happened, but why it happened and what to do about it.",
      example: "Revenue drop caused by competitor pricing, not product issues"
    }
  ];

  return (
    <section id="strategic-intelligence" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32">
      <div className="text-center mb-16">
        <p className="text-pulse-cyan/80 text-sm tracking-widest uppercase mb-3">Strategic Intelligence</p>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Beyond <span className="grad">Dashboards</span> — Strategic Reasoning
        </h2>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
          Experience AI that thinks strategically, not just visualizes data. Get insights that drive decisions, not just reports.
        </p>
      </div>

      {/* Interactive Conversation Demo */}
      <div className="mb-16">
        <div className="demo-container max-w-4xl mx-auto">
          {/* Floating Elements */}
          <div className="floating-elements">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="floating-element-small"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Demo Header */}
          <div className="demo-header p-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-pulse-cyan to-pulse-purple rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Live Strategic Intelligence</h3>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>AI Reasoning Active</span>
                  <div className="typing-indicator ml-2">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario Selector */}
          <div className="p-6 border-b border-white/10">
            <div className="flex gap-3">
              {conversations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveConversation(index)}
                  className={`scenario-button px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeConversation === index
                      ? 'active text-white'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  Scenario {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Conversation Display */}
          <div className="p-6 space-y-6">
            {/* User Message */}
            <div className="message-bubble flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
                U
              </div>
              <div className="bg-white/5 rounded-2xl p-4 flex-1 border border-white/10">
                <p className="text-slate-200">{conversations[activeConversation].user}</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="message-bubble flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pulse-purple to-pulse-cyan rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div className="ai-response rounded-2xl p-6 flex-1">
                <div className="space-y-4">
                  <div className="reasoning-step">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-pulse-cyan rounded-full animate-pulse"></div>
                      <span className="text-pulse-cyan text-sm font-medium">Reasoning Process</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{conversations[activeConversation].ai.reasoning}</p>
                  </div>
                  
                  <div className="reasoning-step">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-pulse-purple rounded-full animate-pulse"></div>
                      <span className="text-pulse-purple text-sm font-medium">Strategic Insight</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">{conversations[activeConversation].ai.insight}</p>
                  </div>
                  
                  <div className="reasoning-step">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Recommendation</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">{conversations[activeConversation].ai.recommendation}</p>
                  </div>
                  
                  <div className="reasoning-step flex gap-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <div>
                        <div className="text-xs text-slate-400 mb-1">Confidence</div>
                        <div className="confidence-bar w-20">
                          <div 
                            className="confidence-fill" 
                            style={{'--confidence-width': `${conversations[activeConversation].ai.confidence}%`} as React.CSSProperties}
                          ></div>
                        </div>
                        <div className="text-xs text-slate-300 mt-1">{conversations[activeConversation].ai.confidence}%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-4 w-4 text-pulse-cyan" />
                      <div>
                        <div className="text-xs text-slate-400 mb-1">Impact</div>
                        <div className="impact-badge px-3 py-1 bg-pulse-cyan/10 rounded-full">
                          <span className="text-xs text-pulse-cyan font-medium">
                            {conversations[activeConversation].ai.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {strategicFeatures.map((feature, index) => (
          <div key={index} className="card p-6 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pulse-cyan/10 rounded-xl group-hover:bg-pulse-cyan/20 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-300 mb-3">{feature.description}</p>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-pulse-cyan text-sm font-mono">"{feature.example}"</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison with Traditional Tools */}
      <div className="card p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Strategic Intelligence vs Traditional BI</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium text-slate-400 mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Traditional BI Tools
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                Show what happened (reactive)
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                Require manual analysis
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                Static dashboards
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                No strategic context
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-pulse-cyan mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              PixelPulse Strategic Intelligence
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Predict what will happen (proactive)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Automated strategic reasoning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Conversational interface
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Actionable recommendations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const WebSummitDemoAnimation = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'horizontal' | 'vertical'>('horizontal');
  const [selectedDataType, setSelectedDataType] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationInterval, setAnimationInterval] = useState<NodeJS.Timeout | null>(null);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const phases = [
    {
      id: 'data-ingestion',
      title: 'Data Ingestion',
      subtitle: 'Multi-source data collection',
      icon: <Database className="h-12 w-12" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Collecting raw data from multiple sources and formats',
      dataTypes: [
        { 
          name: 'APIs', 
          description: 'REST, GraphQL, Webhooks', 
          examples: ['Salesforce', 'HubSpot', 'Stripe'],
          details: {
            title: 'API Data Integration',
            description: 'Seamless integration with external services and platforms',
            process: [
              'Authentication and secure connection establishment',
              'Rate limiting and error handling implementation',
              'Data transformation and normalization',
              'Real-time synchronization and monitoring'
            ],
            technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth 2.0', 'JWT'],
            benefits: ['Real-time data access', 'Automated synchronization', 'Scalable integration', 'Error resilience']
          }
        },
        { 
          name: 'Databases', 
          description: 'SQL, NoSQL, Data Warehouses', 
          examples: ['PostgreSQL', 'MongoDB', 'Snowflake'],
          details: {
            title: 'Database Connectivity',
            description: 'Direct connection to structured and unstructured data sources',
            process: [
              'Connection pooling and optimization',
              'Query optimization and indexing',
              'Data extraction and transformation',
              'Incremental data loading strategies'
            ],
            technologies: ['SQL', 'NoSQL', 'Data Warehouses', 'ETL Pipelines', 'CDC'],
            benefits: ['High performance queries', 'Data consistency', 'Scalable storage', 'ACID compliance']
          }
        },
        { 
          name: 'Files', 
          description: 'CSV, JSON, PDF, Excel', 
          examples: ['Reports', 'Exports', 'Documents'],
          details: {
            title: 'File Processing Engine',
            description: 'Intelligent processing of various file formats and structures',
            process: [
              'Format detection and validation',
              'Content extraction and parsing',
              'Schema mapping and transformation',
              'Metadata extraction and indexing'
            ],
            technologies: ['CSV Parsers', 'PDF Extractors', 'Excel Processors', 'JSON Parsers', 'OCR'],
            benefits: ['Multi-format support', 'Automated parsing', 'Metadata extraction', 'Content validation']
          }
        },
        { 
          name: 'Streams', 
          description: 'Real-time data flows', 
          examples: ['Kafka', 'Kinesis', 'Pub/Sub'],
          details: {
            title: 'Real-time Data Streaming',
            description: 'Continuous processing of high-velocity data streams',
            process: [
              'Stream ingestion and buffering',
              'Event processing and filtering',
              'Real-time transformation and enrichment',
              'Stream monitoring and alerting'
            ],
            technologies: ['Apache Kafka', 'AWS Kinesis', 'Google Pub/Sub', 'Apache Flink', 'Apache Storm'],
            benefits: ['Real-time processing', 'High throughput', 'Low latency', 'Event-driven architecture']
          }
        },
        { 
          name: 'IoT', 
          description: 'Sensor data, devices', 
          examples: ['Temperature', 'GPS', 'Sensors'],
          details: {
            title: 'IoT Data Collection',
            description: 'Integration with Internet of Things devices and sensors',
            process: [
              'Device registration and authentication',
              'Sensor data collection and validation',
              'Data preprocessing and filtering',
              'Edge computing and local processing'
            ],
            technologies: ['MQTT', 'CoAP', 'LoRaWAN', 'Edge Computing', 'Time Series DB'],
            benefits: ['Device connectivity', 'Real-time monitoring', 'Edge processing', 'Scalable device management']
          }
        },
        { 
          name: 'Social', 
          description: 'Social media, reviews', 
          examples: ['Twitter', 'Reviews', 'Comments'],
          details: {
            title: 'Social Media Integration',
            description: 'Collection and processing of social media and review data',
            process: [
              'Social API authentication and rate limiting',
              'Content extraction and sentiment analysis',
              'User engagement metrics calculation',
              'Trend analysis and monitoring'
            ],
            technologies: ['Social APIs', 'Sentiment Analysis', 'NLP', 'Graph Databases', 'Social Analytics'],
            benefits: ['Social insights', 'Sentiment tracking', 'Engagement metrics', 'Trend analysis']
          }
        }
      ],
      visual: 'data-flow',
      processSteps: [
        'Data connectors establish secure connections',
        'Raw data streams in real-time from sources',
        'Data validation and quality checks',
        'Initial data normalization begins'
      ]
    },
    {
      id: 'vector-embedding',
      title: 'Vector Embedding',
      subtitle: 'Semantic transformation',
      icon: <Network className="h-12 w-12" />,
      color: 'from-cyan-500 to-purple-500',
      description: 'Converting diverse data types into semantic vector representations',
      dataTypes: [
        { 
          name: 'Text', 
          description: 'NLP processing', 
          examples: ['Documents', 'Emails', 'Chats'],
          details: {
            title: 'Natural Language Processing',
            description: 'Advanced text analysis and semantic understanding',
            process: [
              'Text tokenization and preprocessing',
              'Semantic embedding generation using transformer models',
              'Context-aware vector representation',
              'Similarity indexing and retrieval optimization'
            ],
            technologies: ['BERT', 'GPT', 'Sentence Transformers', 'Hugging Face', 'spaCy'],
            benefits: ['Semantic understanding', 'Context awareness', 'Language agnostic', 'High accuracy']
          }
        },
        { 
          name: 'Images', 
          description: 'Computer vision', 
          examples: ['Photos', 'Screenshots', 'Diagrams'],
          details: {
            title: 'Computer Vision Processing',
            description: 'Visual content analysis and feature extraction',
            process: [
              'Image preprocessing and normalization',
              'Feature extraction using CNN models',
              'Visual embedding generation',
              'Multi-modal similarity matching'
            ],
            technologies: ['ResNet', 'EfficientNet', 'CLIP', 'OpenCV', 'PIL'],
            benefits: ['Visual understanding', 'Object detection', 'Image similarity', 'Multi-modal search']
          }
        },
        { 
          name: 'Audio', 
          description: 'Speech recognition', 
          examples: ['Calls', 'Meetings', 'Voice notes'],
          details: {
            title: 'Audio Processing & Speech Recognition',
            description: 'Speech-to-text and audio content analysis',
            process: [
              'Audio preprocessing and noise reduction',
              'Speech recognition and transcription',
              'Audio feature extraction and embedding',
              'Speaker identification and diarization'
            ],
            technologies: ['Whisper', 'Wav2Vec', 'Librosa', 'SpeechRecognition', 'PyAudio'],
            benefits: ['Speech recognition', 'Audio search', 'Speaker identification', 'Real-time processing']
          }
        },
        { 
          name: 'Structured', 
          description: 'Tabular data', 
          examples: ['Tables', 'Spreadsheets', 'Records'],
          details: {
            title: 'Structured Data Processing',
            description: 'Tabular data analysis and feature engineering',
            process: [
              'Schema validation and data type inference',
              'Feature engineering and transformation',
              'Statistical analysis and pattern detection',
              'Structured embedding generation'
            ],
            technologies: ['Pandas', 'NumPy', 'Scikit-learn', 'Feature Engineering', 'Data Validation'],
            benefits: ['Data quality', 'Feature engineering', 'Pattern detection', 'Statistical analysis']
          }
        },
        { 
          name: 'Time-series', 
          description: 'Temporal patterns', 
          examples: ['Metrics', 'Logs', 'Events'],
          details: {
            title: 'Time Series Analysis',
            description: 'Temporal data processing and pattern recognition',
            process: [
              'Time series preprocessing and normalization',
              'Temporal pattern extraction and analysis',
              'Anomaly detection and forecasting',
              'Time-aware embedding generation'
            ],
            technologies: ['Prophet', 'ARIMA', 'LSTM', 'InfluxDB', 'Time Series ML'],
            benefits: ['Temporal patterns', 'Anomaly detection', 'Forecasting', 'Real-time analysis']
          }
        },
        { 
          name: 'Multimodal', 
          description: 'Combined formats', 
          examples: ['Videos', 'Presentations', 'Web pages'],
          details: {
            title: 'Multimodal Data Fusion',
            description: 'Integration of multiple data types and formats',
            process: [
              'Multi-modal data alignment and synchronization',
              'Cross-modal feature extraction and fusion',
              'Unified embedding space creation',
              'Multi-modal similarity and retrieval'
            ],
            technologies: ['CLIP', 'DALL-E', 'Multimodal Transformers', 'Fusion Networks', 'Cross-modal Learning'],
            benefits: ['Multi-modal understanding', 'Cross-modal search', 'Unified representation', 'Rich context']
          }
        }
      ],
      visual: 'neural-network',
      processSteps: [
        'Text tokenization and preprocessing',
        'Feature extraction using transformer models',
        'Vector embedding generation (768 dimensions)',
        'Semantic similarity indexing in Pinecone'
      ]
    },
    {
      id: 'adaptive-layer',
      title: 'Adaptive Layer',
      subtitle: 'Hybrid RAG + LoRA + DPO',
      icon: <Brain className="h-12 w-12" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Intelligent processing with continuous learning capabilities',
      dataTypes: [
        { 
          name: 'RAG', 
          description: 'Retrieval Augmented Generation', 
          examples: ['Context retrieval', 'Knowledge base', 'Semantic search'],
          details: {
            title: 'Retrieval Augmented Generation',
            description: 'Enhanced AI responses using retrieved context and knowledge',
            process: [
              'Query understanding and intent analysis',
              'Semantic search in vector database',
              'Context ranking and relevance scoring',
              'Response generation with retrieved context'
            ],
            technologies: ['LangChain', 'LlamaIndex', 'Pinecone', 'Vector Search', 'Context Ranking'],
            benefits: ['Accurate responses', 'Domain knowledge', 'Reduced hallucinations', 'Context awareness']
          }
        },
        { 
          name: 'LoRA', 
          description: 'Low-Rank Adaptation', 
          examples: ['Model fine-tuning', 'Domain adaptation', 'Efficient training'],
          details: {
            title: 'Low-Rank Adaptation',
            description: 'Efficient model fine-tuning with minimal parameters',
            process: [
              'Low-rank matrix decomposition',
              'Domain-specific weight adaptation',
              'Parameter-efficient training',
              'Model performance optimization'
            ],
            technologies: ['PEFT', 'LoRA', 'AdaLoRA', 'QLoRA', 'Parameter Efficiency'],
            benefits: ['Efficient training', 'Domain adaptation', 'Reduced resources', 'Fast deployment']
          }
        },
        { 
          name: 'DPO', 
          description: 'Direct Preference Optimization', 
          examples: ['Feedback learning', 'Preference modeling', 'Quality improvement'],
          details: {
            title: 'Direct Preference Optimization',
            description: 'Model optimization based on human preferences and feedback',
            process: [
              'Preference data collection and annotation',
              'Reward model training and validation',
              'Direct preference optimization',
              'Model alignment and quality improvement'
            ],
            technologies: ['TRL', 'DPO', 'RLHF', 'Preference Learning', 'Model Alignment'],
            benefits: ['Better alignment', 'Quality improvement', 'Human preferences', 'Reduced bias']
          }
        },
        { 
          name: 'Feedback', 
          description: 'Continuous improvement', 
          examples: ['User ratings', 'Corrections', 'Performance metrics'],
          details: {
            title: 'Continuous Feedback Loop',
            description: 'Ongoing model improvement through user feedback and metrics',
            process: [
              'User interaction tracking and logging',
              'Feedback collection and analysis',
              'Performance metrics calculation',
              'Model updates and retraining'
            ],
            technologies: ['Feedback Systems', 'A/B Testing', 'Metrics Tracking', 'Model Monitoring', 'Continuous Learning'],
            benefits: ['Continuous improvement', 'User satisfaction', 'Performance tracking', 'Adaptive learning']
          }
        },
        { 
          name: 'Learning', 
          description: 'Adaptive algorithms', 
          examples: ['Pattern recognition', 'Behavior analysis', 'Prediction models'],
          details: {
            title: 'Adaptive Learning Algorithms',
            description: 'Self-improving algorithms that learn from data patterns',
            process: [
              'Pattern recognition and analysis',
              'Behavior modeling and prediction',
              'Algorithm parameter optimization',
              'Adaptive model updates'
            ],
            technologies: ['Machine Learning', 'Pattern Recognition', 'Behavioral Analytics', 'Predictive Modeling', 'Adaptive Systems'],
            benefits: ['Pattern recognition', 'Predictive accuracy', 'Adaptive behavior', 'Self-improvement']
          }
        },
        { 
          name: 'Reasoning', 
          description: 'Explainable AI', 
          examples: ['Decision trees', 'Logic chains', 'Causal analysis'],
          details: {
            title: 'Explainable AI Reasoning',
            description: 'Transparent AI decision-making with clear reasoning chains',
            process: [
              'Decision tree construction and analysis',
              'Logic chain generation and validation',
              'Causal relationship identification',
              'Explanation generation and presentation'
            ],
            technologies: ['Explainable AI', 'Decision Trees', 'Logic Programming', 'Causal Inference', 'Interpretability'],
            benefits: ['Transparency', 'Trust building', 'Debugging capability', 'Regulatory compliance']
          }
        }
      ],
      visual: 'adaptive-processing',
      processSteps: [
        'Hybrid RAG retrieves relevant context',
        'LoRA adapts model to domain-specific patterns',
        'DPO optimizes responses based on feedback',
        'Continuous learning updates model weights'
      ]
    },
    {
      id: 'strategic-intelligence',
      title: 'Strategic Intelligence',
      subtitle: 'Conversational insights',
      icon: <MessageSquare className="h-12 w-12" />,
      color: 'from-pink-500 to-red-500',
      description: 'Transforming processed data into actionable strategic insights',
      dataTypes: [
        { 
          name: 'Questions', 
          description: 'Natural language queries', 
          examples: ['What drove churn?', 'Market trends?', 'Risk factors?'],
          details: {
            title: 'Natural Language Query Processing',
            description: 'Understanding and processing complex business questions',
            process: [
              'Query parsing and intent recognition',
              'Context extraction and analysis',
              'Multi-step reasoning and planning',
              'Response generation and validation'
            ],
            technologies: ['NLP', 'Intent Recognition', 'Query Understanding', 'Reasoning Engines', 'Natural Language Processing'],
            benefits: ['Natural interaction', 'Complex queries', 'Intent understanding', 'User-friendly interface']
          }
        },
        { 
          name: 'Insights', 
          description: 'Data-driven discoveries', 
          examples: ['Patterns', 'Anomalies', 'Correlations'],
          details: {
            title: 'Data-Driven Insight Generation',
            description: 'Automatic discovery of patterns and anomalies in data',
            process: [
              'Data pattern analysis and detection',
              'Anomaly identification and classification',
              'Correlation analysis and validation',
              'Insight ranking and presentation'
            ],
            technologies: ['Pattern Recognition', 'Anomaly Detection', 'Statistical Analysis', 'Data Mining', 'Correlation Analysis'],
            benefits: ['Automatic discovery', 'Pattern recognition', 'Anomaly detection', 'Data-driven insights']
          }
        },
        { 
          name: 'Recommendations', 
          description: 'Actionable suggestions', 
          examples: ['Next steps', 'Optimizations', 'Strategies'],
          details: {
            title: 'Strategic Recommendation Engine',
            description: 'AI-powered strategic recommendations and action plans',
            process: [
              'Strategic analysis and planning',
              'Recommendation generation and ranking',
              'Impact assessment and validation',
              'Action plan creation and presentation'
            ],
            technologies: ['Strategic Planning', 'Recommendation Systems', 'Impact Analysis', 'Decision Support', 'Action Planning'],
            benefits: ['Strategic guidance', 'Actionable insights', 'Impact assessment', 'Decision support']
          }
        },
        { 
          name: 'Predictions', 
          description: 'Future forecasting', 
          examples: ['Trends', 'Outcomes', 'Scenarios'],
          details: {
            title: 'Predictive Analytics & Forecasting',
            description: 'Advanced forecasting and scenario modeling',
            process: [
              'Historical data analysis and modeling',
              'Trend identification and extrapolation',
              'Scenario modeling and simulation',
              'Prediction confidence and validation'
            ],
            technologies: ['Predictive Modeling', 'Time Series Analysis', 'Scenario Planning', 'Forecasting', 'Simulation'],
            benefits: ['Future planning', 'Risk mitigation', 'Trend prediction', 'Scenario analysis']
          }
        },
        { 
          name: 'Analytics', 
          description: 'Business intelligence', 
          examples: ['KPIs', 'Dashboards', 'Reports'],
          details: {
            title: 'Business Intelligence & Analytics',
            description: 'Comprehensive business analytics and reporting',
            process: [
              'KPI calculation and monitoring',
              'Dashboard creation and customization',
              'Report generation and distribution',
              'Analytics visualization and presentation'
            ],
            technologies: ['Business Intelligence', 'KPI Tracking', 'Dashboard Tools', 'Reporting Systems', 'Data Visualization'],
            benefits: ['Business insights', 'Performance tracking', 'Visual analytics', 'Automated reporting']
          }
        },
        { 
          name: 'Automation', 
          description: 'Intelligent workflows', 
          examples: ['Alerts', 'Triggers', 'Actions'],
          details: {
            title: 'Intelligent Workflow Automation',
            description: 'AI-powered automation and intelligent workflows',
            process: [
              'Workflow design and optimization',
              'Trigger detection and activation',
              'Action execution and monitoring',
              'Performance tracking and improvement'
            ],
            technologies: ['Workflow Automation', 'Event Processing', 'Action Triggers', 'Process Automation', 'Intelligent Systems'],
            benefits: ['Process automation', 'Efficiency gains', 'Intelligent triggers', 'Workflow optimization']
          }
        }
      ],
      visual: 'intelligence-output',
      processSteps: [
        'Natural language understanding of queries',
        'Context-aware response generation',
        'Strategic reasoning and analysis',
        'Confidence scoring and impact assessment'
      ]
    }
  ];

  const startAnimation = () => {
    setIsFullscreen(true);
    setIsAnimating(true);
    setCurrentPhase(0);
    setIsAnimationPaused(false);
    
    const interval = setInterval(() => {
      setCurrentPhase((prev) => {
        if (prev >= phases.length - 1) {
          clearInterval(interval);
          setIsAnimating(false);
          setAnimationInterval(null);
          return prev;
        }
        return prev + 1;
      });
    }, 6000); // Aumentado de 3s para 6s para melhor compreensão
    
    setAnimationInterval(interval);
  };

  const closeAnimation = () => {
    setIsFullscreen(false);
    setIsAnimating(false);
    setCurrentPhase(0);
    setIsAnimationPaused(false);
    
    if (animationInterval) {
      clearInterval(animationInterval);
      setAnimationInterval(null);
    }
  };

  const openModal = (dataType: any) => {
    setSelectedDataType(dataType);
    setIsModalOpen(true);
    
    // Pausar a animação
    if (animationInterval && isAnimating && !isAnimationPaused) {
      clearInterval(animationInterval);
      setAnimationInterval(null);
      setIsAnimationPaused(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDataType(null);
    
    // Retomar a animação se estava pausada
    if (isAnimationPaused && isAnimating && !animationInterval) {
      const interval = setInterval(() => {
        setCurrentPhase((prev) => {
          if (prev >= phases.length - 1) {
            clearInterval(interval);
            setIsAnimating(false);
            setAnimationInterval(null);
            setIsAnimationPaused(false);
            return prev;
          }
          return prev + 1;
        });
      }, 6000);
      
      setAnimationInterval(interval);
      setIsAnimationPaused(false);
    }
  };

  // Cleanup effect para limpar interval quando componente for desmontado
  useEffect(() => {
    return () => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    };
  }, [animationInterval]);

  if (!isFullscreen) {
    return (
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <p className="text-pulse-cyan/80 text-sm tracking-widest uppercase mb-3">Web Summit Demo</p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Experience the <span className="grad">Complete Journey</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-8">
            Experience the complete data journey: from multi-source ingestion through semantic transformation to strategic intelligence. 
            See how diverse data types become actionable insights with detailed process visualization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => {
                setAnimationDirection('horizontal');
                startAnimation();
              }}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 bg-gradient-to-r from-pulse-cyan to-pulse-purple text-black font-semibold hover:shadow-lg hover:shadow-pulse-cyan/25 transition-all duration-300"
            >
              <Play className="h-5 w-5" />
              Horizontal Demo
            </button>
            <button
              onClick={() => {
                setAnimationDirection('vertical');
                startAnimation();
              }}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border border-white/15 hover:bg-white/5 hover:border-white/25 transition-all duration-300"
            >
              <Play className="h-5 w-5" />
              Vertical Demo
            </button>
          </div>
          
          <p className="text-slate-400 text-sm">
            Detailed process visualization • Educational experience • Perfect for WebSummit presentations
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Close Button */}
      <button
        onClick={closeAnimation}
        className="absolute top-6 right-6 z-60 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
      >
        <X className="h-6 w-6 text-white" />
      </button>

      {/* Animation Direction Toggle */}
      <div className="absolute top-6 left-6 z-60">
        <div className="flex bg-white/10 rounded-lg p-1">
          <button
            onClick={() => setAnimationDirection('horizontal')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              animationDirection === 'horizontal' 
                ? 'bg-pulse-cyan text-black' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Horizontal
          </button>
          <button
            onClick={() => setAnimationDirection('vertical')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              animationDirection === 'vertical' 
                ? 'bg-pulse-cyan text-black' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Vertical
          </button>
        </div>
      </div>

      {/* Main Animation Container */}
      <div className={`h-full flex items-center justify-center ${
        animationDirection === 'horizontal' ? 'flex-row' : 'flex-col'
      }`}>
        
        {/* Phase Indicators */}
        <div className={`absolute ${
          animationDirection === 'horizontal' 
            ? 'top-8 left-1/2 transform -translate-x-1/2 flex flex-row gap-4' 
            : 'left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4'
        }`}>
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                currentPhase >= index 
                  ? 'bg-pulse-cyan scale-125' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Current Phase Display */}
        <div className="text-center max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${phases[currentPhase].color} rounded-full mb-6 animate-pulse`}>
              {phases[currentPhase].icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              {phases[currentPhase].title}
            </h1>
            <p className="text-xl text-pulse-cyan mb-2">
              {phases[currentPhase].subtitle}
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {phases[currentPhase].description}
            </p>
          </div>

          {/* Data Types Visualization */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {phases[currentPhase].dataTypes.map((type, index) => (
              <button
                key={type.name}
                onClick={() => openModal(type)}
                className="bg-white/5 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-pulse-cyan/50"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: isAnimating ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className="text-lg font-semibold text-white mb-2 group-hover:text-pulse-cyan transition-colors">
                  {type.name}
                </div>
                <div className="text-sm text-slate-300 mb-3">
                  {type.description}
                </div>
                <div className="space-y-1">
                  {type.examples.map((example, exIndex) => (
                    <div 
                      key={exIndex}
                      className="text-xs text-pulse-cyan/80 bg-pulse-cyan/10 rounded px-2 py-1"
                      style={{
                        animationDelay: `${(index * 0.2) + (exIndex * 0.1)}s`,
                        animation: isAnimating ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      {example}
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-pulse-cyan/60 group-hover:text-pulse-cyan transition-colors">
                  Click for details →
                </div>
              </button>
            ))}
          </div>

          {/* Process Steps */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Process Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phases[currentPhase].processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    animation: isAnimating ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                  }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-pulse-cyan to-pulse-purple rounded-full flex items-center justify-center text-sm font-bold text-black">
                    {index + 1}
                  </div>
                  <div className="text-slate-300">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-2 mb-8">
            <div 
              className="bg-gradient-to-r from-pulse-cyan to-pulse-purple h-2 rounded-full transition-all duration-1000"
              style={{ width: `${((currentPhase + 1) / phases.length) * 100}%` }}
            />
          </div>

          {/* Real-time Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-pulse-cyan mb-1">
                {phases[currentPhase].id === 'data-ingestion' ? '47K' : 
                 phases[currentPhase].id === 'vector-embedding' ? '2.3M' :
                 phases[currentPhase].id === 'adaptive-layer' ? '156K' : '89%'}
              </div>
              <div className="text-xs text-slate-400">
                {phases[currentPhase].id === 'data-ingestion' ? 'Data Sources' : 
                 phases[currentPhase].id === 'vector-embedding' ? 'Vectors Generated' :
                 phases[currentPhase].id === 'adaptive-layer' ? 'Model Updates' : 'Accuracy Score'}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-pulse-purple mb-1">
                {phases[currentPhase].id === 'data-ingestion' ? '12TB' : 
                 phases[currentPhase].id === 'vector-embedding' ? '768D' :
                 phases[currentPhase].id === 'adaptive-layer' ? '0.1%' : '2.1s'}
              </div>
              <div className="text-xs text-slate-400">
                {phases[currentPhase].id === 'data-ingestion' ? 'Data Volume' : 
                 phases[currentPhase].id === 'vector-embedding' ? 'Vector Dimensions' :
                 phases[currentPhase].id === 'adaptive-layer' ? 'LoRA Parameters' : 'Response Time'}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {phases[currentPhase].id === 'data-ingestion' ? '99.9%' : 
                 phases[currentPhase].id === 'vector-embedding' ? '94%' :
                 phases[currentPhase].id === 'adaptive-layer' ? '87%' : '€2.1M'}
              </div>
              <div className="text-xs text-slate-400">
                {phases[currentPhase].id === 'data-ingestion' ? 'Uptime' : 
                 phases[currentPhase].id === 'vector-embedding' ? 'Similarity Score' :
                 phases[currentPhase].id === 'adaptive-layer' ? 'Confidence' : 'Revenue Impact'}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">
                {phases[currentPhase].id === 'data-ingestion' ? '24/7' : 
                 phases[currentPhase].id === 'vector-embedding' ? 'Real-time' :
                 phases[currentPhase].id === 'adaptive-layer' ? 'Continuous' : 'Strategic'}
              </div>
              <div className="text-xs text-slate-400">
                {phases[currentPhase].id === 'data-ingestion' ? 'Processing' : 
                 phases[currentPhase].id === 'vector-embedding' ? 'Indexing' :
                 phases[currentPhase].id === 'adaptive-layer' ? 'Learning' : 'Intelligence'}
              </div>
            </div>
          </div>

          {/* Phase Counter */}
          <div className="text-slate-400 text-sm">
            Phase {currentPhase + 1} of {phases.length}
          </div>
        </div>

        {/* Background Visual Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Particles */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-pulse-cyan/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}

          {/* Neural Network Lines */}
          {phases[currentPhase].visual === 'neural-network' && (
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-20 bg-gradient-to-b from-pulse-cyan/50 to-transparent"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animation: 'neuralPulse 2s ease-in-out infinite',
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          )}

          {/* Data Flow Lines */}
          {phases[currentPhase].visual === 'data-flow' && (
            <div className="absolute inset-0">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-32 bg-gradient-to-r from-transparent via-pulse-cyan to-transparent"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: 'dataFlow 3s linear infinite',
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          )}

          {/* Adaptive Processing Circles */}
          {phases[currentPhase].visual === 'adaptive-processing' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-pulse-purple rounded-full"
                    style={{
                      transform: `rotate(${i * 45}deg) translateX(100px)`,
                      animation: 'adaptiveRotate 4s linear infinite',
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
                <div className="w-8 h-8 bg-pulse-cyan rounded-full animate-pulse" />
              </div>
            </div>
          )}

          {/* Intelligence Output Waves */}
          {phases[currentPhase].visual === 'intelligence-output' && (
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-64 h-64 border border-pulse-cyan/30 rounded-full"
                  style={{
                    animation: 'intelligenceWave 3s ease-out infinite',
                    animationDelay: `${i * 0.6}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Completion Message */}
        {currentPhase === phases.length - 1 && !isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-center max-w-2xl mx-auto px-8">
              <div className="w-32 h-32 bg-gradient-to-r from-pulse-cyan to-pulse-purple rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <CheckCircle className="h-16 w-16 text-black" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Journey Complete!
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Complete data transformation: Multi-source ingestion → Vector embedding → Adaptive processing → Strategic intelligence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={startAnimation}
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 bg-gradient-to-r from-pulse-cyan to-pulse-purple text-black font-semibold hover:shadow-lg hover:shadow-pulse-cyan/25 transition-all duration-300"
                >
                  <Play className="h-5 w-5" />
                  Replay Demo
                </button>
                <button
                  onClick={closeAnimation}
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border border-white/15 hover:bg-white/5 hover:border-white/25 transition-all duration-300"
                >
                  <X className="h-5 w-5" />
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Detalhes */}
      {isModalOpen && selectedDataType && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl">
            {/* Header do Modal */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedDataType.details.title}
                  </h2>
                  {isAnimationPaused && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-orange-400/10 text-orange-400 rounded-full text-sm border border-orange-400/20">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      Animation Paused
                    </div>
                  )}
                </div>
                <p className="text-slate-300">
                  {selectedDataType.details.description}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Process Steps */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Workflow className="h-5 w-5 text-pulse-cyan" />
                Process Steps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedDataType.details.process.map((step: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/5 rounded-lg p-4"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-pulse-cyan to-pulse-purple rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="text-slate-300 text-sm">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-pulse-purple" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedDataType.details.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-pulse-purple/10 text-pulse-purple rounded-full text-sm border border-pulse-purple/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                Key Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedDataType.details.benefits.map((benefit: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-green-400/10 rounded-lg p-3 border border-green-400/20"
                  >
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <div className="text-slate-300 text-sm">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-orange-400" />
                Real-world Examples
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedDataType.examples.map((example: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-orange-400/10 text-orange-400 rounded-full text-sm border border-orange-400/20"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-gradient-to-r from-pulse-cyan to-pulse-purple text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-pulse-cyan/25 transition-all duration-300"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Parallax Background Elements */}
      <div className="parallax-bg">
        <div className="floating-element" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
        <div className="floating-element" style={{ transform: `translateY(${scrollY * -0.15}px)` }} />
        <div className="floating-element" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
        <div className="floating-element" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-tr from-pulse-cyan to-pulse-purple" />
            <span className="font-semibold tracking-wide">PixelPulse<span className="text-slate-400">Lab.dev</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#architecture" className="hover:text-white">Architecture</a>
            <a href="#use-cases" className="hover:text-white">Use cases</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        
        {/* Parallax Hero Elements */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pulse-cyan/20 to-pulse-purple/20 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pulse-purple/20 to-pulse-cyan/20 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 relative z-10">
          <p className="text-pulse-cyan/80 text-sm tracking-widest uppercase mb-4">Web Summit Lisbon • 2025</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1]">
            The <span className="grad">Adaptive Layer</span> of Generative AI
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl">
            Adaptive cognition, delivered as code. A cognitive layer that learns your domain’s logic and evolves continuously — without manual retraining.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-pulse-cyan to-pulse-purple text-black font-medium">
              Get Early Access <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#blueprint" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/15 hover:bg-white/5 transition">
              Technical Blueprint
            </a>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Layers className="h-6 w-6"/>, title: "Hybrid RAG", desc: "Semantic retrieval + business rules for grounded answers." },
              { icon: <Workflow className="h-6 w-6"/>, title: "LoRA + DPO", desc: "Lightweight adaptation using synthetic preference feedback." },
              { icon: <Brain className="h-6 w-6"/>, title: "Continuous Loop", desc: "Self-improving cognition with traceable reasoning." }
            ].map((c, i) => (
              <div key={i} className="card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 text-pulse-cyan mb-3">
                  <div className="p-2 bg-pulse-cyan/10 rounded-lg">{c.icon}</div>
                  <span className="font-semibold text-lg">{c.title}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <Section id="about" title="About the SDK" kicker="What it is">
        <p>
          The PixelPulse Adaptive Layer SDK is a <b>generative cognitive layer</b> designed to transform enterprise data into <b>explainable, contextual reasoning</b>.
          Unlike static models or agent chains, it <b>learns each domain’s logic</b> and <b>adjusts continuously via synthetic feedback</b>, with no manual retraining.
        </p>
      </Section>

      {/* ARCHITECTURE */}
      <Section id="architecture" title="Architecture — Three Layers" kicker="How it works">
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { icon: <Network className="h-6 w-6"/>, title: "Dataset Layer", desc: "Data ingestion, normalization and semantic embeddings with vector indexing. Your data becomes meaning." },
            { icon: <Brain className="h-6 w-6"/>, title: "Adaptive Layer", desc: "Hybrid RAG + LoRA + DPO for lightweight, incremental learning and explainable reasoning." },
            { icon: <MessageSquare className="h-6 w-6"/>, title: "Application Layer", desc: "Conversational APIs and Insight Engine deliver decisions in natural language and dashboards." }
          ].map((layer, i) => (
            <div key={i} className="card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-3 text-pulse-cyan mb-4">
                <div className="p-3 bg-pulse-cyan/10 rounded-xl group-hover:bg-pulse-cyan/20 transition-colors">
                  {layer.icon}
                </div>
                <h3 className="text-xl font-semibold">{layer.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">{layer.desc}</p>
            </div>
          ))}
        </div>

        {/* Feedback loop line */}
        <div className="mt-12 card p-8 hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 text-pulse-purple mb-4">
            <div className="p-3 bg-pulse-purple/10 rounded-xl">
              <Sparkles className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold">Intelligent Feedback Loop</h4>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Every interaction is evaluated programmatically (precision, utility, grounding).
            The model adjusts via LoRA/DPO and vectors are refreshed, enabling continuous improvement without heavy retraining.
          </p>
        </div>
      </Section>

      {/* SDK PROCESS ANIMATION */}
      <SDKProcessAnimation />

      {/* TECHNOLOGY PARTNERS */}
      <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <p className="text-pulse-cyan/80 text-sm tracking-widest uppercase mb-3">Technology Stack</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Powered by <span className="grad">Industry Leaders</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built on proven enterprise-grade technologies and AI infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Vector Database */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#4A90E2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold text-slate-200">Pinecone</h3>
                <p className="text-xs text-slate-400">Vector Database</p>
              </div>
            </div>

            {/* Cloud Platform */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold text-slate-200">Google Cloud</h3>
                <p className="text-xs text-slate-400">GPU Infrastructure</p>
              </div>
            </div>

            {/* Database */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#3ECF8E" d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold text-slate-200">Supabase</h3>
                <p className="text-xs text-slate-400">Database & Auth</p>
              </div>
            </div>

            {/* AI Models */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold text-slate-200">Meta AI</h3>
                <p className="text-xs text-slate-400">Llama Models</p>
              </div>
            </div>

            {/* Deployment */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="white" d="M24 22.525H0l12-21.05 12 21.05z"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold text-slate-200">Vercel</h3>
                <p className="text-xs text-slate-400">Edge Deployment</p>
              </div>
            </div>

            {/* ML Platform */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#FFBE00" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <circle fill="#FF6B6B" cx="12" cy="7" r="2"/>
                  <circle fill="#4ECDC4" cx="12" cy="12" r="2"/>
                  <circle fill="#45B7D1" cx="12" cy="17" r="2"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold text-slate-200">Weights & Biases</h3>
                <p className="text-xs text-slate-400">ML Observability</p>
              </div>
            </div>
          </div>

          {/* Additional Partners Row */}
          <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-60">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-2 shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="white" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <path fill="white" d="M8 6h8v1H8V6zm0 2h8v1H8V8zm0 2h8v1H8v-1zm0 2h8v1H8v-1z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-400">LangChain</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-2 shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="white" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <circle fill="#FF6B6B" cx="12" cy="7" r="1.5"/>
                  <circle fill="#4ECDC4" cx="12" cy="12" r="1.5"/>
                  <circle fill="#45B7D1" cx="12" cy="17" r="1.5"/>
                  <path fill="white" d="M10 9h4v2h-4V9zm0 4h4v2h-4v-2z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-400">LlamaIndex</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-2 shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <circle fill="white" cx="12" cy="12" r="3"/>
                  <circle fill="#FF6B35" cx="12" cy="12" r="1"/>
                </svg>
              </div>
              <p className="text-xs text-slate-400">Hugging Face</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-2 shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="white" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <path fill="white" d="M6 8h12v1H6V8zm0 2h12v1H6v-1zm0 2h12v1H6v-1zm0 2h12v1H6v-1z"/>
                  <circle fill="#FF6B6B" cx="12" cy="7" r="0.8"/>
                  <circle fill="#4ECDC4" cx="12" cy="12" r="0.8"/>
                  <circle fill="#45B7D1" cx="12" cy="17" r="0.8"/>
                </svg>
              </div>
              <p className="text-xs text-slate-400">MLflow</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-lg flex items-center justify-center mb-2 shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <path fill="white" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-400">Evidently</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-2 shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="white" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <circle fill="#F59E0B" cx="12" cy="7" r="1"/>
                  <circle fill="#EF4444" cx="12" cy="12" r="1"/>
                  <circle fill="#8B5CF6" cx="12" cy="17" r="1"/>
                  <path fill="white" d="M8 6h8v1H8V6zm0 2h8v1H8V8zm0 2h8v1H8v-1zm0 2h8v1H8v-1zm0 2h8v1H8v-1z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-400">TRL</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW (TECH DNA) */}
      <Section id="blueprint" title="Technical Blueprint" kicker="Serverless by design">
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {[
            { category: "Core", tech: "Python + FastAPI (async)" },
            { category: "Deploy", tech: "Vercel Edge (frontend/APIs leves) + GCP Cloud Run (GPU on-demand)" },
            { category: "Vector DB", tech: "Pinecone (HNSW, 768-d)" },
            { category: "Data & Auth", tech: "Supabase (Postgres + JWT)" },
            { category: "RAG", tech: "LangChain + LlamaIndex" },
            { category: "Models", tech: "Llama 3.1 8B / Mistral 7B; Embeddings mpnet-base-v2" },
            { category: "Tuning", tech: "LoRA (PEFT) + DPO (TRL)" },
            { category: "Observability", tech: "MLflow + Weights & Biases + Evidently" }
          ].map((item, i) => (
            <div key={i} className="card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="px-3 py-1 bg-pulse-cyan/10 rounded-lg text-pulse-cyan text-sm font-medium">
                  {item.category}
                </div>
              </div>
              <p className="mt-3 text-slate-300">{item.tech}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* USE CASES */}
      <Section id="use-cases" title="Multi-Vertical, One Adaptive Core" kicker="Use cases">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { icon: <Shield className="h-6 w-6"/>, title:"Fintech & Payments", desc:"Credit propensity, adaptive risk, cashback intelligence."},
            { icon: <LineChart className="h-6 w-6"/>, title:"Healthcare & Clinics", desc:"Operational insights, occupancy forecasts, explainable recommendations."},
            { icon: <Network className="h-6 w-6"/>, title:"Logistics & Mobility", desc:"Route optimization, delay prediction, cost anomalies."},
            { icon: <Sparkles className="h-6 w-6"/>, title:"Retail & E-commerce", desc:"Personalization, dynamic pricing, churn signals."},
            { icon: <Workflow className="h-6 w-6"/>, title:"Fiscal & Compliance", desc:"Fiscal audit, anomaly detection, structured evidence."},
            { icon: <MessageSquare className="h-6 w-6"/>, title:"Education & Energy", desc:"Adaptive tutoring; demand & maintenance predictions."}
          ].map((useCase, i)=>(
            <div key={i} className="card p-6 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-3 text-pulse-cyan mb-3">
                <div className="p-2 bg-pulse-cyan/10 rounded-lg group-hover:bg-pulse-cyan/20 transition-colors">
                  {useCase.icon}
                </div>
                <h3 className="font-semibold text-lg">{useCase.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* STRATEGIC INTELLIGENCE EXPERIENCE */}
      <StrategicIntelligenceExperience />

      {/* WEB SUMMIT DEMO ANIMATION */}
      <WebSummitDemoAnimation />

      {/* COMPARISON */}
      <section id="comparison" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">Agents vs Adaptive Layer</h2>
        <div className="overflow-x-auto mt-8">
          <div className="card p-8">
            <table className="w-full text-left">
              <thead className="text-slate-400 text-sm">
                <tr>
                  <th className="px-6 py-4 font-semibold">Dimension</th>
                  <th className="px-6 py-4 font-semibold">Agents / Automation</th>
                  <th className="px-6 py-4 font-semibold">PixelPulse Adaptive Layer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Purpose","Execute tasks","Learn patterns and decide"],
                  ["Input","Prompts + APIs","Data + context (embeddings)"],
                  ["Logic","Deterministic flows","Adaptive reasoning (RAG/LoRA/DPO)"],
                  ["Output","Task execution","Explainable insights & recommendations"],
                  ["Horizon","Short-term","Long-term intelligence"],
                  ["Success","Time saved","Accuracy, margin, risk reduction"]
                ].map((row, i)=>(
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-pulse-cyan">{row[0]}</td>
                    <td className="px-6 py-4 text-slate-300">{row[1]}</td>
                    <td className="px-6 py-4 text-slate-100 font-medium">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <Section id="roadmap" title="Roadmap 2025" kicker="Build path">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {phase:"v0.1", title:"Core SDK", desc:"RAG + Embeddings + LoRA (foundation)", color:"from-pulse-cyan to-blue-500"},
            {phase:"v0.2", title:"Feedback Loop", desc:"DPO + synthetic evaluation", color:"from-blue-500 to-purple-500"},
            {phase:"v0.3", title:"Insight Engine", desc:"Narrative dashboards + APIs", color:"from-purple-500 to-pulse-purple"},
            {phase:"v1.0", title:"SaaS SDK", desc:"Multitenant + billing + packs", color:"from-pulse-purple to-pink-500"}
          ].map((r,i)=>(
            <div key={i} className="card p-6 hover:scale-105 transition-all duration-300 group">
              <div className={`inline-block px-3 py-1 bg-gradient-to-r ${r.color} rounded-lg text-white text-sm font-mono mb-4`}>
                {r.phase}
              </div>
              <h4 className="text-xl font-semibold mb-3">{r.title}</h4>
              <p className="text-slate-300 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" title="Meet us @ Web Summit Lisbon">
        <div className="card p-12 text-center hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-6">Ready to build adaptive intelligence into your data?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:ze@pixelpulselab.dev" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 bg-gradient-to-r from-pulse-cyan to-pulse-purple text-black font-semibold hover:shadow-lg hover:shadow-pulse-cyan/25 transition-all duration-300">
              Request Access <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#blueprint" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border border-white/15 hover:bg-white/5 hover:border-white/25 transition-all duration-300">
              Download Technical Blueprint
            </a>
          </div>
          <p className="mt-8 text-slate-400 text-sm">© 2025 PixelPulseLab.dev — Adaptive cognition, delivered as code.</p>
        </div>
      </Section>
    </main>
  );
}