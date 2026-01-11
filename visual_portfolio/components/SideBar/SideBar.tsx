
import React, { useState } from 'react'
import { Resizable } from 're-resizable';
import { useI18n } from "@/hooks/useI18n";
import { usePortfolioData } from "@/hooks/usePortfolioData";

import SubMenu from './SubMenu';
import ScreenTrigger from './ScreenTrigger';
import Folder from './Folder';
import { FolderTree } from './FolderTree';
import InitialScreen from '@/components/screens/InitialScreen';
import AboutScreen from '@/components/screens/AboutScreen';
import SkillScreen from '@/components/screens/SkillScreen';
import ProjectScreen from '@/components/screens/ProjectScreen';
import ServiceScreen from '@/components/screens/ServiceScreen';
import ContactScreen from '@/components/screens/ContactScreen';
import WorkExperienceScreen from '@/components/screens/WorkExperienceScreen';
import EducationScreen from '@/components/screens/EducationScreen';
import CodeSnippetScreen from '@/components/screens/CodeSnippetScreen';
import ResumeScreen from '@/components/screens/ResumeScreen';

function SideBar() {
  const [isResizing, setIsResizing] = useState(false);
  const { t, language } = useI18n();
  const { portfolioData } = usePortfolioData();

  if (!portfolioData) return null;

  const { basics, projects, services, work, education, codeSnippets, certifications } = portfolioData;

  return (
    <Resizable
      className={`bg-background-secondary overflow-hidden transition-colors duration-200 ${isResizing ? 'border-r-primary border-r-2' : ''
        }`}
      style={!isResizing ? { boxShadow: 'inset -1px 0 0 0 var(--border)' } : {}}
      defaultSize={{
        width: 320,
      }}
      minHeight='100%'
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      handleStyles={{
        right: {
          width: '4px',
          right: '-2px',
          backgroundColor: 'transparent',
          zIndex: 5,
        }
      }}
      handleClasses={{
        right: ` overflow-hidden transition-colors duration-200 ${isResizing ? 'border-r-primary border-r-2' : 'border-r-border border-r-[1px]'}`
      }}
      onResizeStart={() => setIsResizing(true)}
      onResizeStop={() => setIsResizing(false)}
    >
      <SubMenu />
      <FolderTree>
        <div>
          {/* Initial Screen */}

          {/* Work Experience Folder */}
          {work && work.length > 0 && (
            <Folder name="Experience" defaultOpen={false}>
              {work.map((job) => (
                <ScreenTrigger
                  key={job.id}
                  id={`work-${job.id}`}
                  name={`${job.company}.md`}
                  screen={<WorkExperienceScreen workId={job.id} />}
                />
              ))}
            </Folder>
          )}

          {/* Education Folder 
          {education && education.length > 0 && (
            <Folder name="🎓 Education" defaultOpen={false}>
              {education.map((edu) => (
                <ScreenTrigger
                  key={edu.id}
                  id={`education-${edu.id}`}
                  name={`${edu.institution.split(' ').slice(0, 2).join(' ')}.md`}
                  icon="📚"
                  screen={<EducationScreen educationId={edu.id} />}
                />
              ))}
            </Folder>
          )}*/}


          {/* Skills Folder */}
          <Folder name={t('sidebar.skills')}>
            <ScreenTrigger
              id="skills-frontend"
              name={t('screens.skills.frontend')}
              icon="⚛️"
              screen={<SkillScreen category="Frontend" />}
            />
            <ScreenTrigger
              id="skills-backend"
              name={t('screens.skills.backend')}
              icon="⚙️"
              screen={<SkillScreen category="Backend" />}
            />
            <ScreenTrigger
              id="skills-tools"
              name={t('screens.skills.tools')}
              icon="🔧"
              screen={<SkillScreen category="Tools" />}
            />
            <ScreenTrigger
              id="skills-cloud"
              name={t('screens.skills.cloud')}
              icon="☁️"
              screen={<SkillScreen category="Cloud & DevOps" />}
            />
          </Folder>

          {/* Code Snippets Folder 
          {codeSnippets && codeSnippets.length > 0 && (
            <Folder name="💻 Code Snippets" defaultOpen={false}>
              {codeSnippets.map((snippet) => (
                <ScreenTrigger
                  key={snippet.id}
                  id={`snippet-${snippet.id}`}
                  name={snippet.fileName || `${snippet.title.en.substring(0, 20)}.${snippet.language}`}
                  icon={snippet.featured ? "⭐" : "�"}
                  screen={<CodeSnippetScreen snippetId={snippet.id} />}
                />
              ))}
            </Folder>
          )}*/}

          {/* Projects Folder 
          {projects && projects.length > 0 && (
            <Folder name={t('sidebar.projects')}>
              {projects.map((project) => (
                <ScreenTrigger
                  key={project.id}
                  id={`project-${project.id}`}
                  name={`${project.name[language]}.md`}
                  icon={project.featured ? "⭐" : "📄"}
                  screen={<ProjectScreen projectId={project.id} />}
                />
              ))}
            </Folder>
          )}*/}

          {/* Services Folder */}
          {services && services.length > 0 && (
            <Folder name={t('sidebar.services')}>
              {services.map((service) => (
                <ScreenTrigger
                  key={service.id}
                  id={`service-${service.id}`}
                  name={`${service.title[language]}.md`}
                  icon={service.icon}
                  screen={<ServiceScreen serviceId={service.id} />}
                />
              ))}
            </Folder>
          )}
          <ScreenTrigger
            id="initial"
            name={t('screens.initial')}
            icon="📄"
            screen={<InitialScreen />}
          />

          {/* Resume/CV */}
          <ScreenTrigger
            id="resume"
            name="Resume.md"
            icon="📋"
            screen={<ResumeScreen />}
          />

          {/* Contact Screen */}
          <ScreenTrigger
            id="contact"
            name={t('screens.contact')}
            icon="📧"
            screen={<ContactScreen />}
          />
        </div>
      </FolderTree>
    </Resizable>
  )
}

export default SideBar