import { Code, Database, Layout, Server, Terminal, Monitor, Mail, Github, Phone, Instagram, Trophy, Linkedin, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { ActionButtons } from '@/components/ActionButtons'
import { getDictionary } from '@/utils/dictionary'
import { getLangFromParams } from '@/utils/helpers';
import { SectionTitle } from '@/components/SectionTitle'

type Props = {
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function Page({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const lang = await getLangFromParams(resolvedParams);
  const dict = await getDictionary(lang);
  
  return (
    <div className={`mx-auto max-w-7xl px-4 py-12 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <div className="inline-flex flex-col items-center">
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">
            <span className="inline-block transform transition-all duration-300 hover:text-blue-500 hover:-translate-y-1 hover:scale-105">
              {dict.hero.title}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            {dict.hero.role}
          </p>
        </div>
      </section>

      {/* Call to Action Buttons - Moved before Skills section */}
      <section className="mb-20">
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-start">
          <ActionButtons lang={lang} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="py-16">
        <SectionTitle 
          title={dict.sections.skills} 
          lang={lang} 
          className="mb-8"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: dict.skills.frontend.title,
              icon: <Layout className="h-6 w-6 text-blue-500" />,
              skills: dict.skills.frontend.skills,
            },
            {
              title: dict.skills.backend.title,
              icon: <Server className="h-6 w-6 text-green-500" />,
              skills: dict.skills.backend.skills,
            },
            {
              title: dict.skills.database.title,
              icon: <Database className="h-6 w-6 text-purple-500" />,
              skills: dict.skills.database.skills,
            },
            {
              title: dict.skills.devops.title,
              icon: <Code className="h-6 w-6 text-red-500" />,
              skills: dict.skills.devops.skills,
            },
            {
              title: dict.skills.mobile.title,
              icon: <Smartphone className="h-6 w-6 text-yellow-500" />,
              skills: dict.skills.mobile.skills,
            },
            {
              title: dict.skills.os.title,
              icon: <Terminal className="h-6 w-6 text-indigo-500" />,
              skills: dict.skills.os.skills,
            },
          ].map((category, index) => (
            <div
              key={index}
              className="group rounded-lg border-2 border-gray-200/30 bg-white/10 p-6 
              shadow-lg backdrop-blur-sm transition-all duration-300
              dark:border-gray-800/30 dark:bg-gray-900/10
              hover:-translate-y-2 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-xl 
              dark:hover:border-blue-400/50 dark:hover:bg-blue-400/10"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="transform transition-transform duration-300 group-hover:rotate-12">
                  {category.icon}
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="transform text-gray-600 transition-all duration-300 group-hover:translate-x-2 dark:text-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* What I Can Do Section */}
      <section id="what-i-can-do" className="py-16">
        <SectionTitle 
          title={dict.sections.whatIDo} 
          lang={lang} 
          className="mb-8"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: dict.services.web.title,
              icon: <Layout className="h-6 w-6 text-blue-500" />,
              description: dict.services.web.description
            },
            {
              title: dict.services.mobile.title,
              icon: <Smartphone className="h-6 w-6 text-green-500" />,
              description: dict.services.mobile.description
            },
            {
              title: dict.services.database.title,
              icon: <Database className="h-6 w-6 text-purple-500" />,
              description: dict.services.database.description
            },
            {
              title: dict.services.system.title,
              icon: <Server className="h-6 w-6 text-orange-500" />,
              description: dict.services.system.description
            },
            {
              title: dict.services.python.title,
              icon: <Code className="h-6 w-6 text-red-500" />,
              description: dict.services.python.description
            },
            {
              title: dict.services.support.title,
              icon: <Monitor className="h-6 w-6 text-indigo-500" />,
              description: dict.services.support.description
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group rounded-lg border-2 border-gray-200/30 bg-white/10 p-6 
              shadow-lg backdrop-blur-sm transition-all duration-300
              dark:border-gray-800/30 dark:bg-gray-900/10
              hover:-translate-y-2 hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-xl 
              dark:hover:border-purple-400/50 dark:hover:bg-purple-400/10"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements-section" className="py-16">
        <SectionTitle 
          title={dict.sections.achievements} 
          lang={lang} 
          className="mb-8"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Trophy className="h-8 w-8 text-yellow-500" />,
              title: dict.achievements.projects.title,
              value: dict.achievements.projects.value
            },
            {
              icon: <Trophy className="h-8 w-8 text-blue-500" />,
              title: dict.achievements.clients.title,
              value: dict.achievements.clients.value
            },
            {
              icon: <Trophy className="h-8 w-8 text-green-500" />,
              title: dict.achievements.experience.title,
              value: dict.achievements.experience.value
            }
          ].map((achievement, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-lg border-2 border-gray-200/30 
              bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm
              transition-all duration-300 dark:border-gray-800/30 dark:bg-gray-900/10
              hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-xl 
              dark:hover:border-indigo-400/50 dark:hover:bg-indigo-400/10"
            >
              <div className="transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                {achievement.icon}
              </div>
              <h3 className="mt-4 text-2xl font-bold transition-all duration-300 group-hover:text-blue-500">{achievement.value}</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:translate-y-1">{achievement.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16">
        <SectionTitle 
          title={dict.sections.contact} 
          lang={lang} 
          className="mb-8"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[
            {
              icon: <Mail className="h-6 w-6" />,
              title: "Email",
              value: "bara.naser002@gmail.com",
              href: "mailto:bara.naser002@gmail.com"
            },
            {
              icon: <Github className="h-6 w-6" />,
              title: "GitHub",
              value: "@baranazal",
              href: "https://github.com/baranazal"
            },
            {
              icon: <Linkedin className="h-6 w-6" />,
              title: "LinkedIn",
              value: "@baranazal",
              href: "https://www.linkedin.com/in/baranazal/"
            },
            {
              icon: <Phone className="h-6 w-6" />,
              title: "WhatsApp",
              value: "+962 791 466 699",
              href: "http://wa.me/962791466699"
            },
            {
              icon: <Instagram className="h-6 w-6" />,
              title: "Instagram",
              value: "@bara_nazal",
              href: "https://www.instagram.com/bara_nazal/"
            }
          ].map((contact, index) => (
            <Link
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border-2 border-gray-200/30 
                bg-white/10 p-6 shadow-lg backdrop-blur-sm
                transition-all duration-300 dark:border-gray-800/30 dark:bg-gray-900/10
                hover:-translate-y-2 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-xl 
                dark:hover:border-blue-400/50 dark:hover:bg-blue-400/10"
              dir="ltr"
            >
              <div className="shrink-0 transform transition-all duration-300 
                text-gray-600 dark:text-gray-400
                group-hover:scale-125 group-hover:rotate-12 group-hover:text-blue-500">
                {contact.icon}
              </div>
              <div className="min-w-0 text-left">
                <h3 className="font-semibold transition-all duration-300 group-hover:text-blue-500">
                  {contact.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {contact.value}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}