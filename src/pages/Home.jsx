import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Zap, Shield, Users, Star, CheckCircle } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Development",
      description: "Built with the latest technologies and best practices for optimal performance."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed with advanced caching and performance techniques."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Built for teams with advanced collaboration and workflow tools."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Base44 transformed our development workflow. The platform is intuitive and incredibly powerful.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Lead Developer, StartupXYZ",
      content: "The best development platform I've used. It's fast, reliable, and the support is outstanding.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateCo",
      content: "Our team productivity increased by 40% after switching to Base44. Highly recommended!",
      rating: 5
    }
  ]

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "50M+", label: "API Calls/Month" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Build the Future with{' '}
              <span className="text-primary">Base44</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The most advanced development platform for modern applications. 
              Create, deploy, and scale with confidence using our cutting-edge tools and infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-accent transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Base44?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the features that make Base44 the preferred choice for developers worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-200">
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied developers who trust Base44 for their projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing applications with Base44.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors duration-200"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home