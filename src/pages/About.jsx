import React from 'react'
import { Users, Target, Award, Globe } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in web development."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and community-driven development."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every line of code and every user interaction."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Accessibility",
      description: "We make powerful development tools accessible to developers worldwide."
    }
  ]

  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech, passionate about democratizing development."
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "Technical architect behind Base44's innovative platform and infrastructure."
    },
    {
      name: "Marcus Johnson",
      role: "Head of Product",
      bio: "Product strategist focused on creating intuitive developer experiences."
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Designer",
      bio: "Design expert crafting beautiful and functional user interfaces."
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Base44
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize web development by providing developers 
            with the most advanced, intuitive, and powerful tools to bring their ideas to life.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, Base44 emerged from a simple observation: developers were 
                spending too much time on infrastructure and not enough time on innovation. 
                We set out to change that.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small team of passionate developers has grown into a 
                global platform trusted by thousands of developers worldwide. We've built 
                Base44 to be the foundation upon which the next generation of web applications 
                will be created.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to push the boundaries of what's possible in web development, 
                always with our users at the center of everything we do.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2020</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Base44.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind Base44's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <div className="text-primary font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About