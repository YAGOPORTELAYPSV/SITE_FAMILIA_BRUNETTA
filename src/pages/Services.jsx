import React from 'react'
import { Code, Cloud, Database, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web development with modern frameworks and technologies.",
      features: ["React & Next.js", "Node.js & Express", "TypeScript", "Responsive Design"],
      price: "Starting at $99/month"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Hosting",
      description: "Scalable cloud infrastructure with global CDN and automatic scaling.",
      features: ["99.9% Uptime", "Global CDN", "Auto Scaling", "SSL Certificates"],
      price: "Starting at $29/month"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Managed database solutions with backup, monitoring, and optimization.",
      features: ["PostgreSQL & MongoDB", "Automated Backups", "Performance Monitoring", "Data Analytics"],
      price: "Starting at $49/month"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Services",
      description: "Comprehensive security solutions to protect your applications and data.",
      features: ["SSL/TLS Encryption", "DDoS Protection", "Security Audits", "Compliance Support"],
      price: "Starting at $79/month"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed up your applications with advanced optimization techniques.",
      features: ["Code Optimization", "Image Compression", "Caching Strategies", "Performance Monitoring"],
      price: "Starting at $59/month"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Advanced tools for team collaboration and project management.",
      features: ["Real-time Collaboration", "Version Control", "Project Management", "Team Analytics"],
      price: "Starting at $39/month"
    }
  ]

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small projects and personal websites",
      features: [
        "5 Projects",
        "10GB Storage",
        "Basic Support",
        "SSL Certificate",
        "CDN Included"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "25 Projects",
        "100GB Storage",
        "Priority Support",
        "Advanced Analytics",
        "Team Collaboration",
        "Custom Domains"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited Projects",
        "1TB Storage",
        "24/7 Dedicated Support",
        "Advanced Security",
        "Custom Integrations",
        "SLA Guarantee"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to power your digital transformation. 
            From development to deployment, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-200">
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-primary mb-4">
                  {service.price}
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to fit your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-card p-8 rounded-lg border ${
                plan.popular ? 'border-primary shadow-lg' : 'border-border'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and find the perfect solution for your needs.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200">
            Contact Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services